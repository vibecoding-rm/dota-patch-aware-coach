# Evidencia: servidor comunitario de Discord para Dota 2

- Fecha de consulta: 2026-07-13
- Alcance: competencia, dolores, capacidades de Discord, acceso seguro,
  monetización y límites de Valve/OpenDota.
- Método: revisión pública y no exhaustiva. Los conteos de Discord cambian y no
  equivalen a usuarios activos diarios, retención ni ingresos.

## Hallazgo: 7.41d sigue siendo el parche de jugabilidad vigente

- Fecha: 2026-07-13.
- Fuente: notas oficiales de Dota 2 y cronología de versiones de Liquipedia.
- URLs:
  - https://www.dota2.com/patches/7.41d
  - https://liquipedia.net/dota2/Game_Versions
- Usuario afectado: jugadores, coaches y publicaciones de `#estado-del-parche`.
- Problema: un canal patch-aware pierde credibilidad si no muestra versión y
  fecha de comprobación.
- Evidencia: 7.41d fue publicado el 2026-06-04 y seguía listado como la versión
  de jugabilidad más reciente al consultar.
- Inferencia: el bot puede mostrar 7.41d con confianza alta para la versión,
  pero cada consejo específico necesita su propia fuente y fecha.
- Oportunidad: estado de frescura visible y aviso automático al cambiar parche.
- Riesgos: un hotfix puede aparecer después de la consulta.
- Siguiente prueba: comprobar la fuente oficial antes de cada digest o reporte.

## Hallazgo: una comunidad Dota hispana general ya tiene escala

- Fecha: 2026-07-13.
- Fuente: Discord Discovery, DOTA 2 LATAM.
- URL: https://discord.com/servers/dota-2-latam-758765323444027434
- Usuario afectado: jugadores hispanos que buscan voz, party, team y eventos.
- Problema: «Discord en español para jugar Dota» no basta como propuesta única.
- Evidencia: la página pública mostraba aproximadamente 30.000 miembros y miles
  online. Promociona party, voz, búsqueda de equipo, torneos y tres niveles VIP.
- Inferencia: competir por cantidad de miembros, canales o roles decorativos
  sería una mala entrada.
- Oportunidad: servir mejor a grupos pequeños con compatibilidad, seguimiento y
  confianza operativa.
- Riesgos: miembros y online son cifras variables; no prueban retención ni
  satisfacción.
- Siguiente prueba: entrevistar usuarios que están en servidores grandes pero
  siguen buscando una party estable.

## Hallazgo: educación, coaching, replays e inhouses ya conviven en Discord

- Fecha: 2026-07-13.
- Fuente: Discord Discovery y publicación de Dota University.
- URLs:
  - https://discord.com/servers/dota-university-731171810757967973
  - https://www.reddit.com/r/learndota2/comments/1tz6rf0/introducing_dota_university_a_chill_community_of/
- Usuario afectado: nuevos y jugadores de rangos bajos.
- Problema: agregar un canal de preguntas o una clínica semanal tampoco crea una
  novedad por sí solo.
- Evidencia: Dota University declara unos 5.900 miembros, coaching voluntario,
  workshops, replay reviews, pub stacks, torneos e inhouses.
- Inferencia: la diferenciación debe cerrar un flujo que hoy suele quedar
  fragmentado: encontrar grupo, jugar, revisar y volver con una tarea.
- Oportunidad: construir el «Ciclo de Escuadra» y medir su repetición.
- Riesgos: las cifras de impacto educativo son declaraciones del operador.
- Siguiente prueba: comparar el tiempo desde ingreso hasta primera party útil y
  primera revisión cerrada.

## Hallazgo: encontrar compañeros compatibles es un dolor repetido

- Fecha: publicaciones entre 2025-09-20 y 2026-06-10; consulta 2026-07-13.
- Fuentes: Reddit r/DotA2 y grupo Steam Dota 2 Argentina.
- URLs:
  - https://www.reddit.com/r/DotA2/comments/1t1n721/is_there_a_subreddit_for_people_who_want_to_party/
  - https://www.reddit.com/r/DotA2/comments/1u228rx/looking_for_a_chilled_dota_2_discord/
  - https://steamcommunity.com/groups/Dotarg2?l=spanish
- Usuario afectado: jugadores solo queue, supports, retornantes y grupos
  semicompletos.
- Problema: los posts LFG se pierden y no filtran bien región, horario, rol,
  rango, modo y actitud.
- Evidencia: jugadores piden grupos «chill», coordinación por Discord, equipos
  por rol y rango, y un entorno más estratégico que ranked público.
- Inferencia: el valor no es el canal de voz; es reducir el coste de encontrar
  gente compatible y volver a jugar con ella.
- Oportunidad: tarjetas LFG con vencimiento, tags y creación de sala de escuadra.
- Riesgos: la evidencia confirma búsqueda, no disposición de pago.
- Siguiente prueba: medir fill rate, tiempo hasta completar party, no-shows y
  repetición con la misma escuadra.

## Hallazgo: el salto de principiante a partidas humanas sigue siendo hostil

- Fecha: publicaciones de 2026-03-06, 2026-04-24 y 2026-05-20; consulta
  2026-07-13.
- Fuente: Reddit r/DotA2 y r/learndota2.
- URLs:
  - https://www.reddit.com/r/DotA2/comments/1rmjl9e/new_players/
  - https://www.reddit.com/r/learndota2/comments/1su64zg/how_do_you_even_begin_as_a_complete_newcomer_to/
  - https://www.reddit.com/r/learndota2/comments/1tipswu/brand_new_player_right_steps_to_begin/
- Usuario afectado: jugadores nuevos, incluidos usuarios de servidores SA.
- Problema: el modo beginner puede sentirse demasiado fácil, pero normal/turbo
  enfrenta al nuevo a miles de horas de experiencia y agresión por errores.
- Evidencia: los autores describen bots que no preparan para partidas orgánicas,
  gritos y hostilidad por decisiones o ítems incorrectos.
- Inferencia: una cohorte pequeña con mentor e inhouses protegidas puede ser más
  útil que otra biblioteca de guías.
- Oportunidad: «Academia 30 días» con dos sesiones semanales y una ruta por rol.
- Riesgos: son testimonios individuales; falta medir prevalencia y abandono.
- Siguiente prueba: cohorte de 10 nuevos y retención a 7 y 30 días.

## Hallazgo: los bots ya cubren estadísticas, meta, counters e IA

- Fecha: 2026-07-13.
- Fuentes: repositorios y sitios públicos de MangoByte, Dota Sentry, Observer
  Ward, Dota2Bot y VEGA.
- URLs:
  - https://github.com/mdiller/MangoByte
  - https://dotasentry.net/
  - https://observerward.solutions/
  - https://www.reddit.com/r/learndota2/comments/1uhq91g/i_made_a_discord_bot_that_suggests_counterpicks/
  - https://vegabot.org/
- Usuario afectado: administradores y jugadores que quieren datos dentro de
  Discord.
- Problema: otro comando `/stats`, `/build`, `/counter` o resumen IA es fácil de
  copiar y ya tiene sustitutos.
- Evidencia: MangoByte declara decenas de comandos; Dota2Bot ofrece counters por
  rol; VEGA promociona builds, parche, recap, rankings, clanes y setup asistido.
- Inferencia: el bot propio debe coordinar una experiencia social y reutilizar
  la profundidad patch-aware de la web, no competir por cantidad de comandos.
- Oportunidad: integrar `party -> sala -> partida -> replay -> siguiente tarea`.
- Riesgos: no se verificó la adopción ni la calidad de todos los productos.
- Siguiente prueba: prototipo con cuatro comandos esenciales y tiempo a valor
  inferior a dos minutos.

## Hallazgo: no se encontró públicamente el ciclo completo en español

- Fecha: 2026-07-13.
- Fuente: síntesis de la revisión competitiva pública.
- Usuario afectado: jugadores hispanos que quieren comunidad y mejora continua.
- Problema: las herramientas existentes fragmentan LFG, comunicación, parche,
  análisis y seguimiento.
- Evidencia: se encontraron las piezas por separado y algunas combinaciones,
  pero no una oferta hispana pública que conecte perfil, escuadra, sala, plan por
  parche, Match ID, debrief y próximo objetivo con supervisión humana.
- Inferencia: existe un hueco potencial para una comunidad patch-aware con
  memoria longitudinal.
- Oportunidad: «El Taller del Parche», nombre de trabajo, con Ciclo de Escuadra.
- Riesgos: esto no demuestra inexistencia mundial; servidores privados y nuevos
  productos pueden no estar indexados.
- Siguiente prueba: auditar al menos 30 alternativas y evitar la palabra «único»
  hasta validar.

## Hallazgo: Discord permite automatizar casi toda la estructura, no crear el servidor

- Fecha: 2026-07-13.
- Fuente: documentación oficial de Discord.
- URLs:
  - https://docs.discord.com/developers/change-log#deprecating-guild-creation-by-apps
  - https://docs.discord.com/developers/platform/server-and-channel-management
  - https://docs.discord.com/developers/resources/guild
  - https://docs.discord.com/developers/resources/auto-moderation
- Usuario afectado: Maikel como propietario y operador.
- Problema: Codex no puede crear ni poseer el servidor desde una app.
- Evidencia: Discord retiró `POST /guilds` en 2025. Un bot instalado sí puede
  crear y ordenar roles, categorías, texto, voz, foros, overwrites, AutoMod,
  onboarding, eventos, webhooks, mensajes y comandos con permisos adecuados.
- Inferencia: Maikel debe hacer un bootstrap manual corto; el resto puede quedar
  declarado en código y aplicarse de forma repetible.
- Oportunidad: provisionador idempotente con plan, diff, auditoría y rollback
  compensatorio.
- Riesgos: activar Community por API exigiría Administrator; Rules Screening y
  partes de Server Guide no tienen endpoint público documentado.
- Siguiente prueba: crear un servidor sandbox, aplicar la configuración dos
  veces y exigir que la segunda no produzca cambios.

## Hallazgo: el acceso correcto es mediante un bot, nunca mediante una cuenta humana

- Fecha: 2026-07-13.
- Fuente: documentación oficial de OAuth2, bots y seguridad de Discord.
- URLs:
  - https://docs.discord.com/developers/platform/oauth2-and-permissions
  - https://docs.discord.com/developers/quick-start/getting-started
  - https://support.discord.com/hc/en-us/articles/115002192352-Automated-User-Accounts-Self-Bots
- Usuario afectado: propietario, administradores y miembros.
- Problema: compartir contraseña, cookie, QR, 2FA o token de usuario pone en
  riesgo la cuenta y convertiría la automatización en un self-bot prohibido.
- Evidencia: Discord trata el bot token como una contraseña, exige scopes y
  permisos explícitos y prohíbe automatizar cuentas normales.
- Inferencia: conviene separar un bot provisionador temporal de un bot runtime
  con permisos mínimos.
- Oportunidad: Maikel conserva propiedad y control; el token nunca entra al chat
  ni al repositorio y se rota después del bootstrap.
- Riesgos: una filtración del token permite actuar con todos los permisos
  concedidos al bot.
- Siguiente prueba: revisión de permisos, plan dry-run, aplicación, retirada de
  permisos de gestión y rotación.

## Hallazgo: la monetización nativa de Discord no sirve como base desde Uruguay

- Fecha: 2026-07-13.
- Fuente: soporte oficial de monetización de Discord.
- URLs:
  - https://creator-support.discord.com/hc/en-us/articles/10424143128343-Creator-Revenue-FAQ
  - https://docs.discord.com/developers/monetization/overview
- Usuario afectado: Maikel y futuros miembros de pago.
- Problema: Server Subscriptions exige identidad y banca de Estados Unidos; la
  monetización de apps tampoco incluye Uruguay entre regiones habilitadas.
- Evidencia: la documentación oficial mantiene esas limitaciones geográficas.
- Inferencia: el MVP debe validar cobros manualmente y elegir después un
  proveedor externo compatible, sin vender privilegios de moderación.
- Oportunidad: reportes, clínicas y espacios para coaches; la comunicación base
  permanece gratis.
- Riesgos: impuestos, reembolsos y términos del proveedor elegido deben
  revisarse antes de automatizar pagos.
- Siguiente prueba: cobrar tres reportes reales de USD 3 antes de integrar pagos.

## Hallazgo: el perímetro seguro es Discord, preparación manual y post-partida

- Fecha: 2026-07-13.
- Fuente: Valve/Steam, términos y anuncios oficiales.
- URLs:
  - https://steamcommunity.com/dev/apiterms
  - https://store.steampowered.com/subscriber_agreement/
  - https://store.steampowered.com/news/app/570/view/3677788723152833273
  - https://store.steampowered.com/news/app/570/view/6127782523022178336
- Usuario afectado: todos los jugadores y el producto.
- Problema: una comunidad legítima no debe transformarse en scouting invasivo,
  overlay, automatización o ventaja injusta.
- Evidencia: Steam prohíbe almacenar contraseñas, aparentar afiliación y crear
  tecnología que otorgue ventaja competitiva injusta. Valve ha actuado contra
  herramientas que leen datos internos y ayudan con targeted bans.
- Inferencia: el bot solo debe usar entrada manual antes de la partida y Match
  ID voluntario después. Nada de memoria, proceso, red, cliente, GSI, macros,
  colas, input o cuentas automatizadas.
- Oportunidad: comunicación, LFG, brief de parche, replays, coaches y tareas
  semanales tienen riesgo bajo.
- Riesgos: la existencia técnica de una interfaz no equivale a autorización de
  Valve.
- Siguiente prueba: mantener un checklist de seguridad para cada comando nuevo.

## Hallazgo: marca y torneos necesitan tratamiento propio

- Fecha: 2026-07-13.
- Fuente: Valve Legal y licencia de torneos.
- URLs:
  - https://store.steampowered.com/legal/
  - https://store.steampowered.com/tourney/
  - https://store.steampowered.com/tourney/limited_license
- Usuario afectado: comunidad, organizadores y creadores.
- Problema: usar logo/arte oficial como identidad o presentar eventos como
  oficiales aumenta el riesgo.
- Evidencia: Dota y su logo son marcas de Valve. Valve indica que todos sus
  torneos requieren licencia gratuita y que una transmisión de torneo no puede
  quedar tras paywall.
- Inferencia: se necesita marca visual original, descargo independiente y
  licencia antes de torneos públicos.
- Oportunidad: empezar con noches de party e inhouses sin premios; licenciar los
  torneos cuando se formalicen.
- Riesgos: esta síntesis conservadora no sustituye asesoría jurídica.
- Siguiente prueba: diseñar identidad original y completar checklist de licencia
  antes del primer torneo anunciado.

## Hallazgo: OpenDota sirve para el MVP, pero su licencia de datos no está clara

- Fecha: 2026-07-13.
- Fuentes: OpenDota y repositorio oficial.
- URLs:
  - https://docs.opendota.com/
  - https://github.com/odota/core/blob/master/LICENSE
  - https://blog.opendota.com/2014/08/01/faq/
- Usuario afectado: usuarios de replay y negocio futuro.
- Problema: la licencia MIT cubre el código, no demuestra un derecho comercial
  inequívoco sobre respuestas, replays o datos de Valve.
- Evidencia: OpenDota publica API, límites gratuitos y código MIT, pero no se
  encontró una licencia de datos comercial ni SLA claro.
- Inferencia: se puede validar con pocos Match IDs, caché y atribución, pero no
  basar una oferta comercial de escala sin confirmación escrita.
- Oportunidad: reporte original de coaching sobre datos solicitados por el
  propio usuario.
- Riesgos: 429, retrasos, datos incompletos, privacidad y cambios de límites.
- Siguiente prueba: consultar a `api@opendota.com` sobre uso comercial,
  atribución, retención y borrado antes de escalar.
