# Necesidades actuales de comunidad - Dota 2

- Fecha de consulta: 2026-06-16
- Objetivo: detectar que necesita mas la comunidad para orientar el MVP sin
  entrar en cheats, overlays invasivos, boosting ni automatizacion.

## Hallazgo: el parche vigente exige frescura real

- Fecha: 2026-06-16
- Fuente: Dota 2 News/Updates y patch oficial 7.41d.
- URL:
  - https://www.dota2.com/news/updates?l=spanish
  - https://www.dota2.com/patches/7.41d
- Usuario afectado: jugadores, coaches y creadores.
- Problema: las recomendaciones de picks, builds y mapa se vuelven fragiles si
  la base local no se actualiza con el parche vigente.
- Evidencia: la pagina oficial muestra el parche 7.41d publicado el 2026-06-04.
- Inferencia: el Patch Coach actual no puede venderse como verdad si sigue con
  notas mock escritas a mano.
- Oportunidad: construir un "patch diff aplicado a mi hero pool": que cambio,
  que build/timing revisar y que practicar esta semana.
- Riesgos: parsear patch notes automaticamente puede equivocarse; requiere
  revision humana o confianza baja.
- Siguiente prueba: ingerir 7.41d, marcar cada cambio como hecho/inferencia y
  generar 10 recomendaciones para heroes populares.

## Hallazgo: hay demanda clara por meta grids y picks por rol

- Fecha: 2026-06-16
- Fuente: Dota2ProTracker Meta Hero Grids.
- URL: https://dota2protracker.com/meta-hero-grids
- Usuario afectado: jugadores ranked que necesitan decidir rapido durante draft.
- Problema: muchos usuarios no quieren una tabla gigante; quieren saber que
  heroes de su pool son razonables ahora y por que.
- Evidencia: D2PT publica grids actualizados diariamente; el 2026-06-16 figuran
  para patch 7.41d. Entre ejemplos visibles: carry Drow Ranger, Faceless Void,
  Shadow Fiend, Phantom Lancer, Juggernaut, Lifestealer, Slark; mid Invoker,
  Snapfire, Ember Spirit, Lina, Keeper of the Light, Tinker, Outworld Destroyer;
  offlane Axe, Dawnbreaker, Night Stalker, Legion Commander, Doom, Necrophos,
  Pudge; supports Pudge, Zeus, Spirit Breaker, Techies, Bounty Hunter, Nyx
  Assassin, Invoker; hard support Pudge, Disruptor, Shadow Shaman, Rubick,
  Silencer, Treant Protector, Snapfire.
- Inferencia: la app puede diferenciarse si cruza meta por rol con comfort pool,
  bracket y draft, no copiando una tier list.
- Oportunidad: "mi grid semanal": 3 heroes principales, 2 backups, 2 a pausar,
  con razon por parche y plan de partida.
- Riesgos: D2PT es fuente de alto MMR/pro; no siempre aplica a Herald-Archon.
- Siguiente prueba: generar recomendaciones separadas para bajo MMR vs alto MMR.

## Hallazgo: warding situacional esta vivo como dolor de aprendizaje

- Fecha: 2026-06-16
- Fuente: Reddit r/DotA2, hilo sobre warding en 7.41.
- URL: https://www.reddit.com/r/DotA2/comments/1se406y/any_video_guides_on_good_741_warding_spots_i_keep/
- Usuario afectado: supports, mids y jugadores que pierden vision/deward.
- Problema: los usuarios no solo piden "spots"; piden donde wardear segun runas,
  high ground, Slark/deward y zonas de trafico.
- Evidencia: un usuario pide recurso actualizado de wards; respuestas mencionan
  wards cerca de runas, highgrounds menos transitados, sentries detras de arboles
  y vision en bocas de rio/tuneles de safe lane.
- Inferencia: un modulo de vision puede ser valioso si recomienda por objetivo
  y estado de partida, no como mapa estatico.
- Oportunidad: "Vision Coach": objetivos de vision por minuto/rol y mini
  biblioteca de ward plans seguros, agresivos y defensivos.
- Riesgos: si se presenta como overlay en vivo o lee el mapa, sube el riesgo.
  Debe ser guia externa/manual y post-game/pre-game.
- Siguiente prueba: crear 12 planes de vision por escenario: mid runes, safe
  lane defensiva, smoke a triangulo, Roshan, high ground, jugar contra Slark.

## Hallazgo: r/learndota2 muestra dolores repetidos y accionables

- Fecha: 2026-06-16
- Fuente: Reddit r/learndota2 hot.
- URL: https://www.reddit.com/r/learndota2/hot/
- Usuario afectado: nuevos, intermedios y jugadores que vuelven al juego.
- Problema: aparecen preguntas sobre midlane/jungla, itemizacion, draft, heroes
  por parche, hero pool, lane perdida, que pickear y como jugar support mid/late.
- Evidencia: la portada muestra hilos sobre T1 neutral items durante lane,
  Void Stone/Phylactery en Bane, "bad at draft", opinion del patch 7.41d,
  itemizacion contra drafts agresivos, hero pool mid, posiciones/meta y warding
  de supports.
- Inferencia: la demanda no es solo replay review; hay un paquete de decisiones
  practicas por rol antes de entrar a ranked.
- Oportunidad: convertir el producto en ciclo semanal:
  1. patch coach para tu pool;
  2. draft manual;
  3. plan minuto 0-20;
  4. replay report;
  5. tarea de practica.
- Riesgos: el subreddit prohibe publicidad de coaching/AI coaching; usarlo como
  investigacion y feedback, no como canal de spam.
- Siguiente prueba: comentar valor educativo en hilos sin vender y reclutar
  testers por DM solo si las reglas lo permiten.

## Hallazgo: las APIs publicas sirven para MVP, pero no para depender a ciegas

- Fecha: 2026-06-16
- Fuente: OpenDota API keys/docs y STRATZ API/knowledge base.
- URL:
  - https://www.opendota.com/api-keys
  - https://docs.opendota.com/
  - https://stratz.com/api
  - https://stratz.com/knowledge-base/API/Is%20the%20STRATZ%20API%20free%3F
- Usuario afectado: producto tecnico.
- Problema: reportes y tendencias necesitan datos, pero limites/licencias pueden
  cambiar y los datos no siempre estan parseados.
- Evidencia: OpenDota publica limites de llamadas y key opcional; STRATZ ofrece
  API GraphQL gratuita con condiciones de atribucion para token default.
- Inferencia: el MVP puede usar OpenDota para match ID y evaluar STRATZ para
  tendencias, pero debe cachear, atribuir y degradar confianza si falta dato.
- Oportunidad: fuente dual OpenDota + STRATZ para reportes premium, sin pedir
  credenciales de Steam.
- Riesgos: costos, limites, disponibilidad y terminos comerciales.
- Siguiente prueba: documentar terminos exactos antes de usar STRATZ en un plan
  pago.
