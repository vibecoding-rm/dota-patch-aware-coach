# Análisis Courier + La Orden del Aegis — 2026-07-14 (v2, verificado por código)

- Método: skill `discord-community-analyst`. Revisión del código real del bot
  (`vibecoding-rm/courier-bot`, clonado hoy en `..\courier-bot`, commit
  `3e04202`) + verificación en vivo del Worker sin credenciales.
- Reemplaza a la v1 de esta mañana, que era solo documental (el código aún no
  estaba recuperado).

## Veredicto en una línea

El bot es real, está desplegado en su versión más reciente (Hono + D1) y el
código es de calidad; los huecos son que el refactor eliminó los tests, la
capa de métricas D1 solo inserta y nunca cierra el ciclo (fill rate aún no es
medible), y siguen abiertas las cuatro rotaciones de seguridad.

## Estado del bot (hechos verificados)

En vivo (2026-07-14):

- GET al Worker → 200 con el texto exacto del fallback de Hono
  («Courier 📦 — bot de La Orden del Aegis»): **lo desplegado es la versión
  refactorizada**, no una vieja.
- POST sin firma Ed25519 → 401. La verificación de firma funciona
  (`src/middleware/signature.mjs`: WebCrypto, timestamp+body, correcta).
- Widget del guild `1526281903534244071` → 403 (deshabilitado): no hay
  métrica pública de presencia. Coherente con no usar conteos como métrica.

En código (leído, no ejecutado):

- 5 comandos modulares (`/ayuda`, `/parche`, `/party`, `/replay`, `/reto`) y
  registro idempotente guild-scoped (`scripts/register-commands.mjs`).
- 3 crons (`wrangler.toml`): vigía del parche cada 30 min con pin de frescura
  editado en cada pasada, misión semanal de lunes con ping solo al rol opt-in
  `Aprendizaje`, y limpieza de salas «🎮 Party ·» con aviso y ventana de
  renovación (`decidePartyChannel`, función pura).
- Disciplina de `allowed_mentions` en todos los envíos (jamás @everyone),
  razones de auditoría en llamadas destructivas, fallback de parche si el
  datafeed de Valve no responde, errores a `#staff` con respaldo en logs.
- Manifiesto: 24 roles y ~19 canales; `/replay` apunta al foro
  `pregunta-y-replays` que sí existe en el manifiesto (falsa alarma de la v1
  documental: el lanzamiento compacto fusionó los foros).
- D1 (`migrations/schema.sql`): `lfg_parties`, `no_shows`, `match_debriefs`
  con índices y constraints correctos.

## Problemas encontrados en el código

1. **El refactor a Hono eliminó los tests.** `producto/plan_courier_bot.md`
   declara «6 casos de prueba unitarios» para `decidePartyChannel`; el repo
   actual no tiene ni un test ni script `test`. Es la lógica que **borra
   canales**: la pieza que más merece cobertura.
2. **Las métricas de Fase 2 aún no son computables.** D1 solo recibe INSERTs:
   `lfg_parties.status` nunca pasa a `completed`/`expired` (nada actualiza el
   estado ni al archivarse la tarjeta), `no_shows` no tiene escritor, y
   `match_debriefs` se llena con placeholders `"TBD"` en hero/role/task. El
   fill rate y los no-shows — la razón de ser de la base — no se pueden medir.
3. **Escrituras D1 en `ctx.waitUntil` sin `.catch`**: si un INSERT falla, el
   error no llega a `#staff` (queda solo en el log del Worker como rechazo no
   manejado).
4. Menor: `/party` crea la sala de voz antes del thread del foro; si el thread
   falla, queda una sala huérfana (el cron la limpia en ~4 h).
5. Deuda declarada e incumplida: `/borrar-mis-datos` (compromiso de privacidad
   del plan) no existe todavía, y D1 ya almacena IDs de usuario.

## Salud de la comunidad

Sin cambios respecto a la v1: pre-lanzamiento, ninguna métrica del semáforo
tiene datos (onboarding, fill rate ≥60%, no-shows <20%, 10 Match IDs / 6
debriefs, regreso semana 2, 3 reportes cobrados). El widget deshabilitado
impide incluso presencia pública. El gate de construcción de más fases sigue
sin activarse: **lo siguiente es reclutar y operar la prueba de 14 días**.

## Seguridad y cumplimiento

- [x] Firma Ed25519 correcta y verificada en vivo.
- [x] Sin secretos en el repo del bot (solo `.env.example`; public key y IDs
      en `wrangler.toml` no son secretos).
- [x] Perímetro de cumplimiento limpio en código: entrada manual, Match ID
      voluntario, sin GSI/memoria/input; `/ayuda` declara qué no pide jamás.
- [ ] **Rotar bot token de Discord** (expuesto 2026-07-13, sigue pendiente).
- [ ] **Rotar/borrar los 5 tokens de `git .txt`** (el PAT nuevo se usó hoy
      para la recuperación y sigue activo con acceso a repos privados).
- [ ] Quitar Administrator al rol Courier.
- [ ] Revocar token Cloudflare «factory»; rotar «Edit Workers».
- [ ] Implementar `/borrar-mis-datos` antes de promover el uso de `/replay`.

## Riesgos priorizados

1. Tokens sin rotar (Discord + `git .txt`) — crítico, 15 minutos de trabajo.
2. Cron de borrado de canales sin tests — alto (un fallo en
   `decidePartyChannel`/snowflakes borra salas activas).
3. Métricas D1 no computables — alto para el producto: la prueba de 14 días
   no podrá medirse con datos si nada cierra el ciclo.
4. Promesa de privacidad incumplida (`/borrar-mis-datos`) — medio-alto.
5. Comunidad sin lanzar — el bot madura más rápido que su demanda; congelar
   features hasta tener actividad real (regla del propio plan).

## Próximas pruebas

1. Rotar los tokens y verificar `/parche` en el servidor real. Éxito: el bot
   responde con token nuevo y `git .txt` ya no existe.
2. Añadir vitest al bot: `decidePartyChannel` (los 6 casos del plan),
   `snowflakeAgeMs` y el middleware de firma con par de llaves de prueba.
   Éxito: `npm test` en verde y en CI.
3. Cerrar el ciclo de datos: marcar `expired` al archivarse la tarjeta (cron
   de limpieza), tag «Completa» → `completed`, y `/borrar-mis-datos`. Éxito:
   una consulta SQL devuelve fill rate real.
4. Lanzar la prueba de 14 días con 20 fundadores y registrar el semáforo.
