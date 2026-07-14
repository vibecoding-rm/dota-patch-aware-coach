# Análisis Courier + La Orden del Aegis — 2026-07-14

- Método: revisión documental del repo + verificación en vivo del Worker.
- Limitación: `courier-bot/` y `scripts/discord/` NO están en esta copia de
  trabajo, así que todo lo relativo al código del bot es «declarado en docs,
  no verificado». Sin `DISCORD_BOT_TOKEN` en el entorno tampoco se auditó la
  estructura del servidor por API.

## Veredicto en una línea

El bot existe, está desplegado y rechaza tráfico sin firma; la comunidad está
en fase pre-lanzamiento sin una sola métrica del semáforo medida, y hay cuatro
pendientes de seguridad abiertos (uno crítico: token de Discord expuesto el
2026-07-13 y aún sin rotación confirmada).

## Estado del bot

Hechos verificados hoy (2026-07-14):

- `https://courier-bot.maikelreyesmorales95.workers.dev` responde: GET → 200,
  POST sin firma Ed25519 → 401. El endpoint de interacciones está vivo y la
  verificación de firma funciona como declara `producto/plan_courier_bot.md`.

Declarado en docs, no verificado (código ausente de esta copia):

- 5 comandos guild-scoped (`/ayuda`, `/parche`, `/party`, `/replay`, `/reto`).
- 3 crons: vigía del parche (30 min), misión semanal (lunes 12 UTC), ciclo de
  vida de salas de party (hora en punto +15).
- Provisionado idempotente: 24 roles, 19 canales, onboarding, AutoMod.
- Embeds con sistema de diseño y salas de voz por party.

Hallazgo estructural: `producto/plan_courier_bot.md` y
`producto/servidor_discord.md` citan `courier-bot/` y `scripts/discord/*` como
parte del repo, pero no existen en esta carpeta y esta carpeta ni siquiera es
un repositorio git. El código del bot vive en otro checkout (o solo en la
sesión donde se construyó). Riesgo: deriva docs↔código y pérdida del código si
ese otro entorno desaparece.

## Salud de la comunidad

Ninguna métrica del semáforo tiene datos aún; la prueba de 14 días
(`investigacion/02_servidor_discord.md`) no ha empezado:

| Métrica | Umbral | Estado |
| --- | --- | --- |
| Onboarding completado | 12 de 20 fundadores | sin datos |
| Fill rate LFG | ≥ 60% | sin datos |
| No-shows | < 20% | sin datos |
| Match IDs / debriefs | 10 / 6 | sin datos |
| Regreso semana 2 | ≥ 5 usuarios | sin datos |
| Pago validado | 3 reportes × USD 3 | sin datos |

Conclusión: el gate de Fase 2 (2 semanas de parties reales, ≥10 tarjetas LFG)
está lejos. Lo correcto ahora es reclutar y operar, no programar más fases.

## Seguridad y cumplimiento

- [ ] **CRÍTICO — token de Discord expuesto sin rotación confirmada.**
      `evidencia/2026-07-13-courier-app-discord.md` registra que el bot token
      «quedó expuesto en un chat durante el bootstrap». El plan lo lista como
      pendiente. Rotar hoy y re-subir con `wrangler secret put`.
- [ ] **CRÍTICO — `git .txt` en la raíz del proyecto contiene tokens reales en
      texto plano**: Vercel, dos PAT de GitHub, OpenRouter y Stitch. Aunque la
      carpeta no es repo git, es un archivo de texto en el escritorio.
      Rotar los cinco y borrar el archivo (y revisar `git .rar`).
- [ ] Quitar Administrator al rol Courier (pendiente declarado del plan).
- [ ] Revocar token Cloudflare «factory» y rotar «Edit Cloudflare Workers».
- [x] Bot privado mono-servidor (verificación de app no aplica; documentado).
- [x] Perímetro de cumplimiento correcto en diseño: solo entrada manual y
      Match ID voluntario; sin GSI, memoria, input ni colas.

## Riesgos priorizados

1. Tokens expuestos (Discord + los cinco de `git .txt`) — severidad crítica,
   mitigación inmediata: rotar todo, borrar el archivo.
2. Código del bot fuera de control de versiones y ausente de esta copia —
   severidad alta: recuperarlo y versionarlo junto al repo.
3. Comunidad sin lanzamiento: el bot puede quedarse sin usuarios que lo
   justifiquen — severidad alta para el producto: ejecutar la prueba de 14 días.
4. Bot con Administrator mientras tanto — severidad media-alta.
5. Dependencia del datafeed de parches y de OpenDota sin licencia comercial
   clara — severidad media, ya documentada; mantener caché y atribución.

## Próximas pruebas

1. Rotar los 6 tokens y verificar que el bot sigue respondiendo (POST firmado
   de un `/parche` de prueba). Criterio: comandos funcionan con token nuevo.
2. Clonar/recuperar `courier-bot/` y `scripts/discord/` a esta copia, hacer
   `git init` + push, y correr `discord:plan` esperando «sin cambios».
3. Arrancar la prueba de 14 días con 20 fundadores y registrar el semáforo a
   mano en `evidencia/`. Criterio de éxito: los umbrales de la tabla.
