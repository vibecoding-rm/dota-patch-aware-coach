# Plan: Courier, el bot de La Orden del Aegis sobre Cloudflare

- Fecha: 2026-07-14
- Estado: Fase 0 en producción; Fase 1 lista para construir.
- Costo objetivo de todo el plan: **USD 0** (plan free de Cloudflare Workers).
- Fuentes de límites (consultadas 2026-07-14):
  - https://developers.cloudflare.com/workers/platform/limits/
  - https://developers.cloudflare.com/workers/configuration/cron-triggers/
  - https://developers.cloudflare.com/d1/platform/limits/

## Contexto

La comunidad de Discord **La Orden del Aegis** es un proyecto propio, separado
de la web (la web solo se enlaza como herramienta de debrief). El bot
**Courier** corre como Cloudflare Worker independiente en `courier-bot/`:

- URL: `https://courier-bot.maikelreyesmorales95.workers.dev`
- Cuenta Cloudflare: `b92a8605921bb00513a34e90f89f4a02`
- Comandos registrados (guild-scoped): `/ayuda`, `/parche`, `/party`,
  `/replay`, `/reto` — registro en `scripts/discord/register-commands.mjs`.
- Estructura del servidor: `scripts/discord/manifest.mjs` (plan/apply
  idempotente con `provision.mjs`).

Presupuesto free relevante: 100k requests/día por Worker, 5 cron triggers,
KV 1 GB (100k lecturas y 1k escrituras/día), D1 5 GB. Un servidor de amigos
consume una fracción despreciable de todo esto.

## Fase 0 — Hecho (2026-07-13/14)

- [x] Servidor aprovisionado: 24 roles, 19 canales, onboarding, AutoMod,
      mensajes semilla. Verificado idempotente («sin cambios»).
- [x] App/bot con branding (icono, descripción, tags) y 5 criterios de
      verificación completados (Team incluido).
- [x] Worker de interacciones desplegado con firma Ed25519 verificada
      (tests locales con par de llaves real; en vivo: sin firma → 401).
- [x] `interactions_endpoint_url` validado por Discord.

## Fase 1 — El servidor se siente vivo (HECHA 2026-07-14)

Usa 2 de los 5 crons gratis + KV (`COURIER_KV`,
id `e0187f35a11f4dc3924c1f97e6b517be`). Todo dentro del Worker actual.
Probado con `wrangler dev --test-scheduled` (la primera misión semanal quedó
publicada en el canal como evidencia) y desplegado con ambos schedules activos.

### 1a. Vigía del parche

- Cron cada 30 min: consulta `https://www.dota2.com/datafeed/patchnoteslist`.
- Compara con la última versión anunciada, guardada en KV (`patch:last`).
- Si hay versión nueva: publica en `#estado-del-parche` (canal de anuncios)
  versión, fecha, fuente y hora de comprobación, y actualiza KV.
- Cumple la promesa documentada: «aviso automático al cambiar parche».
- Presupuesto: ~48 lecturas KV/día y ~1 escritura por parche. Nada.

### 1b. Misión semanal automática

- Cron `0 12 * * 1` (lunes mediodía UTC ≈ mañana en LATAM): publica el reto
  de la semana en `#misión-semanal` mencionando al rol `Aprendizaje`.
- Contenido: rota entre las misiones por posición definidas en el Worker,
  citando el parche vigente (del KV o del datafeed).
- Regla del manifiesto: `allowed_mentions` solo con ese rol; nada de @everyone.

### 1c. Errores del bot a #staff

- En el handler de interacciones y en los crons: si algo lanza excepción,
  además del log, POST del resumen a `#staff` (canal privado del equipo).
- Complementa `npx wrangler tail` (logs en vivo, ya disponible).

## Fase 1.5 — UI profesional y voz para jugar (HECHA 2026-07-14)

- Todas las respuestas y publicaciones del bot usan **embeds** con sistema de
  diseño: color de marca `#e53e3e`, colores semánticos (verde=fresco,
  ámbar=aviso, naranja=parche nuevo), iconos, footer con avatar y timestamp,
  y **botones de enlace** (notas oficiales, abrir debrief, ver tarjeta,
  entrar a la voz). Se evaluó Components V2 y se descartó documentadamente
  (prohíbe content/embeds → sin pings ni footers).
- `/party` ahora crea también una **sala de voz propia** del grupo
  (`🎮 Party · <usuario>`, límite 5) enlazada en la tarjeta — la pieza de
  "hablar mientras juegan" sin tocar el cliente del juego.
- Tercer cron (`15 * * * *`): ciclo de vida de las salas de party. REST no
  expone ocupación de voz, así que el criterio es actividad del chat de la
  sala: a las 3 h de vida con +90 min de silencio publica un aviso («se borra
  en 1 h; escriban aquí para renovarla»); cualquier mensaje la renueva; solo
  se borra si nadie responde en 1 h. Estado del aviso en KV con TTL. Lógica
  pura `decidePartyChannel` con 6 casos de prueba unitarios.
- Errores a #staff también como embed.
- Probado end-to-end con requests firmados (los 5 comandos + validación de
  Match ID inválido + los 3 crons) y artefactos de prueba eliminados.

## Fase 2 — Ciclo de Escuadra medible (esperar actividad real)

**Criterio de activación:** al menos 2 semanas con parties reales y ≥10
tarjetas LFG publicadas. Antes de eso, medir a mano; no construir.

- D1 (SQLite, 5 GB gratis) como almacenamiento longitudinal:
  - tarjetas LFG: creada → completa/vencida → tiempo hasta llenar (fill rate);
  - no-shows reportados;
  - debriefs cerrados y repetición de ciclo.
- Comandos nuevos: `/sala` (voz/texto temporal de escuadra) y
  `/cerrar-partida <match_id>` (pide debrief y archiva la sala).
- `/borrar-mis-datos`: borra las filas del usuario en D1 (compromiso de
  privacidad del manifiesto).

## Fase 3 — Expansión del servidor (cuando la demanda apriete)

Ya documentada al final de `scripts/discord/manifest.mjs`; se activa moviendo
bloques a `CATEGORIES` y corriendo `discord:plan`/`discord:apply`:

- Foros `#busca-equipo-o-suplente` y `#busca-scrim`; voz `Ranked 2`.
- Categoría de eventos e inhouses (Radiant/Dire, registro, reglas).
- Stage «Aula del parche», foro `#victorias-de-proceso`.
- Roles de reconocimiento (Buen compañero, Revisor par, Ciclo completo).
- Perks manuales: soundboard, Server Tag (4 letras, requiere boosts),
  stickers/emojis propios.

## Descartado a propósito (y por qué)

| Pieza | Motivo |
| --- | --- |
| Dominio propio para el Worker | La URL workers.dev funciona; costo sin beneficio |
| Durable Objects | Para estado en vivo (salas sincronizadas); muy pronto |
| Workers AI | La web ya tiene su capa de IA (OpenRouter); no duplicar |
| Gateway/WebSocket del bot | Solo haría falta para voz dinámica; HTTP alcanza |
| Base de datos antes de tener usuarios | Sobre-ingeniería; el plan exige validar primero |

## Operación y seguridad

- Secretos SOLO en `.env.local` (gitignoreado) y en secretos del Worker.
  Nunca en git, chat, issues ni capturas.
- Deploy: `cd courier-bot && npx wrangler deploy` (token con plantilla
  «Edit Cloudflare Workers» en `CLOUDFLARE_API_TOKEN`).
- Si se rota el token de Discord: re-subir con
  `npx wrangler secret put DISCORD_BOT_TOKEN`.
- Pendientes de Maikel al cierre del bootstrap:
  - [ ] Quitar **Administrator** al rol Courier en el servidor.
  - [ ] Rotar el bot token de Discord (y re-subir el secreto al Worker).
  - [ ] Revocar el token Cloudflare «Create Additional Tokens»
        (`CLOUDFLARE_TOKEN_FACTORY`): puede crear otros tokens, alto riesgo.
  - [ ] Rotar el token «Edit Cloudflare Workers» cuando no haya deploys
        previstos.

## Criterio de éxito (heredado del plan de la comunidad)

No usar número de miembros. Medir: onboarding completado, tiempo hasta la
primera party útil, fill rate de LFG, no-shows, regreso en la segunda semana
y debriefs cerrados. Si no hay actividad social recurrente, no se construyen
las fases 2-3.
