# Evidencia: configuración de la app de Discord «Courier»

- Fecha: 2026-07-13
- Alcance: branding por API, límites de `PATCH /applications/@me`, requisitos
  reales de verificación de apps y rediseño a lanzamiento compacto.
- Método: llamadas directas a la API v10 de Discord con el bot token y revisión
  de documentación/soporte oficial y guías públicas.

## Hallazgo: el branding de la app sí es automatizable por API

- Fecha: 2026-07-13.
- Fuente: respuesta real de `PATCH /applications/@me` y `PATCH /users/@me`.
- Usuario afectado: Maikel como operador.
- Evidencia: se aplicaron por API el icono (512×512 generado con Playwright),
  la descripción, los tags (`dota 2, comunidad, lfg, coaching, español`) y el
  rename+avatar del bot user (`Canel` → `Courier#1959`). Verificado con GET.
- Inferencia: el branding es reproducible con `scripts/discord/apply-branding.mjs`.
- Riesgos: el rename de bot user tiene rate limit agresivo; no re-ejecutar en bucle.

## Hallazgo: Términos, Privacidad, Team y Public Bot son solo del portal

- Fecha: 2026-07-13.
- Fuente: pruebas directas contra `PATCH /applications/@me`.
- Problema: el panel de verificación pide enlaces de ToS/privacidad y un Team.
- Evidencia: el PATCH con `terms_of_service_url` y `privacy_policy_url`
  respondió 200 pero dejó ambos campos en `null` (la API los ignora). El PATCH
  con `install_params` fue rechazado con
  `APPLICATION_INSTALL_NEEDS_PUBLIC_INTEGRATION`: «Private application cannot
  have a default authorization link… Verified apps must be public».
- Inferencia: esos cuatro criterios solo se completan a mano en el portal y
  exigen hacer el bot público.
- Siguiente prueba: ninguna; documentado como límite de plataforma.

## Hallazgo: la verificación de la app no aplica a Courier

- Fecha: 2026-07-13.
- Fuentes: soporte oficial de desarrolladores de Discord.
- URLs:
  - https://support-dev.discord.com/hc/en-us/articles/23926564536471-How-Do-I-Get-My-App-Verified
- Problema: el portal muestra «no cumple 5 criterios y no se puede verificar»,
  lo que parece un bloqueo.
- Evidencia: la verificación existe para escalar una app más allá de ~100
  servidores o listar en el App Directory. Exige app pública, pertenencia a un
  Team, enlaces legales, y verificación de identidad del dueño vía Stripe.
- Inferencia: para un bot privado de un único servidor comunitario, el panel es
  informativo y no bloquea ninguna función usada. Mantener el bot privado es
  más seguro (nadie más puede instalarlo).
- Riesgos: si el producto algún día se ofrece como bot público multi-servidor,
  habrá que completar el checklist entero (Team, Stripe, app pública).
- Siguiente prueba: revisitar solo si se decide distribuir el bot.

## Hallazgo: para un servidor de amigos conviene lanzar compacto

- Fecha: 2026-07-13.
- Fuentes: guía oficial de setup de Discord y guías comunitarias de 2025-2026.
- URLs:
  - https://support.discord.com/hc/en-us/articles/33023827550359-Discord-Server-Setup-Guide
  - https://gist.github.com/jagrosh/342324d7084c9ebdac2fa3d0cd759d10
  - https://buildmydiscord.com/en/blog/discord-server-onboarding-create-perfect-new-member-experiences-in-2026
- Problema: el diseño original tenía ~28 canales; para un grupo de amigos la
  mayoría nacerían muertos.
- Evidencia: la práctica recomendada es lanzar con 6-12 canales visibles, un
  onboarding corto y añadir canales solo con demanda sostenida y un responsable
  claro de moderación.
- Inferencia: se rediseñó el manifiesto a ~16 canales (info, comunidad, 5 de
  voz incluida «🎮 Actividades», mejora opcional y staff), con onboarding
  nativo de 4 preguntas que asigna roles opt-in, canal media para clips y la
  expansión completa documentada al final de `scripts/discord/manifest.mjs`.
- Riesgos: si la comunidad crece rápido, habrá que promover la expansión antes
  de que el LFG desborde `#busca-party`.
- Siguiente prueba: aplicar en el servidor real y medir qué canales piden los
  primeros 20 miembros.

## Estado al cierre

- Hecho por API: icono, descripción, tags, rename+avatar del bot.
- En código listo para aplicar: roles, canales, permisos, onboarding, AutoMod
  y mensajes semilla (`npm run discord:plan` / `discord:apply`).
- Pendiente de Maikel (manual, ~5 min): crear servidor «Courier», activar
  Comunidad, instalar el bot con el enlace OAuth y subir su rol.
- Pendiente post-bootstrap: retirar permisos de gestión del bot y **rotar el
  token** (quedó expuesto en un chat durante el bootstrap).
