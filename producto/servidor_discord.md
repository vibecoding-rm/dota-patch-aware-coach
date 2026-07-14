# Servidor comunitario completo de Discord

- Fecha de diseño: 2026-07-13
- Nombre de trabajo: **El Taller del Parche**
- Subtítulo: **Comunidad independiente para jugar y mejorar en Dota 2**
- Estado: listo para validar y aprovisionar en un servidor sandbox.

> **Actualización 2026-07-13:** el nombre definitivo es **Courier** y el
> proyecto es una comunidad propia para amigos y quien se sume, no una
> extensión de la web (la web queda como herramienta opcional de debrief).
> El lanzamiento se recortó a ~16 canales siguiendo la práctica de arrancar
> compacto y crecer con demanda; la arquitectura completa de este documento
> pasa a ser el plan de expansión. La fuente de verdad ejecutable es
> `scripts/discord/manifest.mjs` (ver `scripts/discord/README.md` y
> `evidencia/2026-07-13-courier-app-discord.md`).

## Decisión

Construir una comunidad completa para amigos y jugadores hispanos/LATAM, no un
simple bot de coaching.

La base incluye:

- chats sociales;
- salas de voz para party;
- búsqueda por rol, rango, región, horario y actitud;
- equipos, scrims, inhouses y eventos;
- ayuda, clips, parche y replay reviews;
- onboarding, AutoMod, reportes y espacios de staff.

La función propia será el **Ciclo de Escuadra**:

```text
encuentra compañeros compatibles
  -> crea una sala
  -> juega y comunícate normalmente
  -> comparte Match ID si quieres
  -> recibe un debrief y una tarea
  -> forma una party mejor informada la próxima vez
```

El bot no escucha la partida, no lee el cliente y no da asistencia automática
en vivo. Discord se usa para comunicación humana normal; la capa de coach actúa
antes o después.

## Posicionamiento

> Entra para jugar acompañado. Quédate porque tu escuadra recuerda lo aprendido.

No se debe anunciar «nadie lo tiene» o «el único». La afirmación respaldable es:

> En nuestra revisión pública no encontramos otra comunidad hispana que conecte
> búsqueda de escuadra, sala de juego, plan por parche, debrief por Match ID y
> siguiente objetivo en un mismo ciclo medible.

## Qué será estándar y qué será diferencial

| Capa | Función | Motivo |
| --- | --- | --- |
| Estándar | Chat general, presentaciones, clips y memes | Comunidad cotidiana |
| Estándar | Salas de voz casual, ranked, turbo y equipos | Comunicación mientras juegan |
| Estándar | LFG, equipos, scrims, eventos e inhouses | Conseguir partidas |
| Estándar | Reglas, AutoMod, reportes y apelaciones | Confianza y seguridad |
| Diferencial | Matching por intención, horario, rol y fiabilidad | Mejor party, no solo más usuarios |
| Diferencial | Sala de escuadra con ciclo de vida | Menos ruido y grupos más estables |
| Diferencial | Debrief post-partida opcional | Convertir juego en aprendizaje |
| Diferencial | Misión por parche con fuente y confianza | Evitar consejos genéricos o viejos |
| Diferencial | Reputación de buen compañero, no de MMR | Premiar conducta y contribución |
| Diferencial | Historial para coaches y grupos | Crear valor longitudinal |

## Arquitectura visible del servidor

«Completo» no significa abrir cincuenta canales vacíos. El lanzamiento usa
foros, tags y onboarding para ofrecer todas las funciones con una navegación
compacta.

### 00 · EMPIEZA AQUÍ

| Canal | Tipo | Uso |
| --- | --- | --- |
| `#bienvenida` | Texto, solo lectura | Promesa, cómo empezar y estado del bot |
| `#reglas-y-juego-limpio` | Texto, solo lectura | Normas, privacidad y límites |
| `#elige-tu-ruta` | Texto/onboarding | Objetivo, rol, rango, región y estilo |
| `#anuncios` | Anuncios | Cambios importantes y agenda semanal |

### 01 · COMUNIDAD

| Canal | Tipo | Uso |
| --- | --- | --- |
| `#general` | Texto | Conversación principal |
| `#presentaciones` | Texto | Quién eres, rol, región y objetivo |
| `#clips-y-memes` | Media/foro | Jugadas, clips y humor con tags |
| `#creadores-y-streams` | Foro | Promoción con reglas y frecuencia limitada |

### 02 · JUGAR JUNTOS

| Canal | Tipo | Uso |
| --- | --- | --- |
| `#busca-party` | Foro | LFG por región, rol, rango, modo y actitud |
| `#busca-equipo-o-suplente` | Foro | Rosters estables y jugadores libres |
| `#busca-scrim` | Foro | Ventana, MMR medio, formato y check-in |
| `#resultados-y-gg` | Texto | Resultados, agradecimientos y próximos juegos |
| `➕ Crear sala` | Voz | Crea una sala temporal cuando exista el bot de voz |
| `Lobby casual` | Voz | Conversar o jugar sin objetivo competitivo |
| `Ranked 1` / `Ranked 2` | Voz | Parties ranked |
| `Turbo y arcade` | Voz | Modos alternativos |
| `AFK` | Voz | Canal de inactividad |

### 03 · APRENDER Y MEJORAR

| Canal | Tipo | Uso |
| --- | --- | --- |
| `#estado-del-parche` | Anuncios | Versión, fecha, fuentes y frescura |
| `#pregunta-al-equipo` | Foro | Dudas con tags por rol y nivel |
| `#clínica-de-replays` | Foro | Match ID, pregunta y revisión consentida |
| `#misión-semanal` | Texto, solo lectura | Una tarea medible por rol/parche |
| `#victorias-de-proceso` | Foro | Hábitos corregidos, no solo wins/MMR |
| `Aula del parche` | Stage/voz | Talleres, clínicas y preguntas públicas |

### 04 · EVENTOS E INHOUSES

| Canal | Tipo | Uso |
| --- | --- | --- |
| `#calendario` | Eventos/anuncios | Próxima actividad visible |
| `#registro-inhouse` | Foro | Check-in, rol y suplentes |
| `#reglas-de-inhouse` | Texto, solo lectura | Balance, pausas, conducta y disputas |
| `Radiant` / `Dire` | Voz | Salas separadas de equipo |
| `Coach o caster` | Voz | Solo cuando el evento lo permita |

### 05 · EQUIPOS PRIVADOS

Esta categoría aparece solo a capitanes/equipos activos. El bot puede crear un
espacio temporal por roster:

- `#equipo-chat`;
- `#agenda-y-scrims`;
- `#draft-y-playbook`;
- una sala de voz privada.

En el MVP se crean manualmente para un máximo de tres equipos. No se generan
decenas de categorías vacías.

### 90 · STAFF

| Canal | Acceso | Uso |
| --- | --- | --- |
| `#mod-alertas` | Moderación | Alertas de AutoMod y raids |
| `#reportes` | Moderación | Casos privados y estado |
| `#apelaciones` | Moderación | Revisión separada del moderador original |
| `#auditoría` | Admin | Cambios estructurales del bot |
| `#bot-salud` | Admin/técnico | Errores, rate limits y frescura |
| `Sala staff` | Staff | Coordinación interna |

## Tags de los foros

### `#busca-party`

- Región: Perú, Chile, Argentina/Uruguay, Brasil, US East, otra.
- Modo: ranked, unranked, turbo, inhouse, aprendizaje.
- Roles buscados: posición 1 a 5.
- Bracket: Herald/Guardian, Crusader/Archon, Legend/Ancient,
  Divine/Immortal, mixto.
- Actitud: chill, competitivo, aprendizaje.
- Micrófono: requerido u opcional.
- Estado: buscando, completa, vencida.

Cada publicación debe vencer en 60-90 minutos para no llenar el foro de grupos
muertos.

### `#clínica-de-replays`

- Posición 1 a 5.
- Parche actual o anterior.
- Pendiente, en revisión, revisado.
- Público, anónimo o solo coach.

El formulario pide Match ID, héroe, rol, bracket aproximado, pregunta principal
y permiso explícito para compartir el resultado.

### `#busca-scrim`

- Servidor/región.
- MMR medio.
- Captain's Mode u otro formato.
- BO1/BO2/BO3.
- Fecha y hora mostrada por Discord en zona local.
- Buscando, confirmado, terminado, no-show/disputa.

## Roles

### Gobierno y operación

1. `Propietario` — solo Maikel.
2. `Administrador` — muy pocas personas con 2FA.
3. `Moderación` — sin Administrator.
4. `Organizador` — eventos e inhouses.
5. `Coach verificado` — acceso a colas de revisión, sin poder disciplinario.
6. `Mentor` — ayuda comunitaria.
7. `Creador` — promoción bajo reglas.
8. `Miembro` — acceso normal tras aceptar reglas.
9. `Nuevo` — acceso de onboarding.

### Roles opt-in de juego

- `Posición 1 · Carry`
- `Posición 2 · Mid`
- `Posición 3 · Offlane`
- `Posición 4 · Support`
- `Posición 5 · Hard Support`
- roles amplios de bracket;
- región/servidor preferido;
- `Ranked`, `Turbo`, `Inhouse`, `Aprendizaje`;
- `Busco equipo`, `Capitán`, `Suplente`.

Los rangos sirven para matching, no como jerarquía social. Un Immortal no gana
permisos sobre un Herald.

### Reconocimiento

- `Buen compañero`: puntualidad y buen trato repetidos.
- `Revisor par`: feedback útil aceptado por otros.
- `Ciclo completo`: terminó una semana de práctica.

No se venden estos roles ni se basan en winrate. Las valoraciones negativas no
se muestran como una puntuación pública para evitar acoso o brigading.

## Onboarding

Discord debe preguntar al entrar:

1. **¿Qué buscas?** Jugar, aprender, formar equipo, competir, seguir el parche.
2. **¿Qué posiciones juegas?** Selección múltiple de 1 a 5.
3. **¿Cuál es tu bracket aproximado?** Opcional y autodeclarado.
4. **¿Dónde y cuándo juegas?** Región/servidor y franja horaria.
5. **¿Qué ambiente prefieres?** Chill, competitivo o aprendizaje guiado.

Después de aceptar reglas, las primeras acciones del Server Guide serán:

- presentarse;
- publicar o responder una tarjeta de party;
- apuntarse al próximo evento;
- elegir si quiere una misión semanal.

No se pide contraseña, Steam Guard, cookie ni token. Vincular Steam queda fuera
del MVP; un Match ID voluntario es suficiente.

## Reglas de la comunidad

1. Respeto: no acoso, amenazas, discriminación, doxxing ni humillación por MMR.
2. Juego limpio: no cheats, macros, boosting, smurf services, account sharing,
   compra/venta de cuentas, apuestas ni manipulación de matchmaking.
3. Seguridad: nadie del staff pide credenciales, cookies, QR, 2FA o tokens.
4. LFG honesto: indicar modo, rango aproximado e intención; avisar si no puedes
   asistir.
5. Privacidad: comparte solo tus partidas o casos con permiso; el reporte no se
   usa para culpar públicamente a compañeros.
6. Nada de spam, estafas, phishing, venta de ítems o publicidad no autorizada.
7. Contenido apto para la comunidad y en los canales correctos.
8. Moderación independiente del pago: ningún VIP compra inmunidad, votos sobre
   sanciones ni trato preferente.
9. Sanciones progresivas, registro interno y derecho a apelación.
10. Comunidad independiente, no oficial ni respaldada por Valve.

## AutoMod y seguridad

Usar primero herramientas nativas de Discord:

- Rules Screening y verificación del servidor Community;
- filtro de spam;
- límite de menciones masivas;
- presets de insultos/slurs revisados para español y portugués;
- bloqueo de invitaciones y enlaces sospechosos para miembros nuevos;
- alertas de raid;
- `@everyone` y `@here` reservados a staff;
- filtro de medios explícitos para todos;
- slowmode temporal durante incidentes.

AutoMod puede bloquear y alertar. Una sanción larga por lenguaje ambiguo debe
tener revisión humana. El bot no analiza DMs ni mensajes fuera del servidor.

## Bot propio: comandos esenciales

### Lanzamiento

- `/ayuda`: explica canales y seguridad.
- `/party`: crea una tarjeta LFG estructurada.
- `/parche`: versión, fecha, frescura, fuente y confianza.
- `/replay <match_id>`: valida y devuelve el enlace al reporte web.
- `/reto`: misión semanal opt-in por rol.
- `/evento`: registro/check-in para eventos autorizados.

### Segunda fase

- `/sala`: crea voz/texto temporal para una escuadra.
- `/cerrar-partida <match_id>`: pide debrief y archiva la sala.
- `/equipo`: workspace temporal para roster.
- `/scrim`: publicación, confirmación, recordatorio y no-show.
- `/borrar-mis-datos`: elimina el perfil propio almacenado por el producto.

Las respuestas personales son ephemeral por defecto. `allowed_mentions` se
mantiene vacío salvo mención explícita y segura. No se necesita leer todo el
contenido de mensajes ni pedir intents privilegiados para la primera versión.

## Programación semanal

| Día | Ritual | Objetivo |
| --- | --- | --- |
| Lunes | Estado del parche + misión | Preparación y frescura |
| Martes | Noche de nuevos | Onboarding humano |
| Jueves | Clínica de replay | Convertir partidas en una tarea |
| Viernes | Parties por bracket/intención | Actividad social principal |
| Sábado | Inhouse comunitaria | Juego organizado y relaciones |
| Domingo | Cierre de ciclo | Aprendizaje y próxima agenda |

No hace falta ejecutar todos los rituales la primera semana. Se comienza con dos
ventanas fijas y se añade actividad cuando haya demanda.

## Monetización honesta

La comunicación, LFG, voz y eventos base permanecen gratis.

Pruebas iniciales:

- reporte individual: USD 3;
- tres reportes: USD 8;
- clínica grupal: USD 10-15 por sesión, según coach y tamaño;
- seguimiento jugador: USD 5-9/mes después de validar repetición;
- workspace coach/equipo: USD 19-29/mes después de un piloto.

No vender:

- inmunidad de moderación;
- rango o falsa verificación de habilidad;
- promesas de MMR;
- acceso a cheats, scouting o consejos en vivo;
- ruletas, apuestas, Arcana lotteries o trading automatizado.

Discord Server Subscriptions exige propietario e información bancaria de EE.
UU. y la monetización nativa de apps no incluye Uruguay. El MVP cobra
manualmente; el proveedor externo se elige solo después de validar pago y
revisar impuestos, términos y reembolsos.

## Métricas

### Activación

- porcentaje que completa onboarding;
- tiempo hasta primera conversación o party útil;
- porcentaje que entra a voz en 48 horas.

### Utilidad social

- fill rate de LFG;
- tiempo medio para completar party;
- no-shows;
- miembros que vuelven a jugar juntos;
- usuarios activos en voz por semana.

### Aprendizaje

- Match IDs voluntarios;
- debriefs cerrados;
- misiones completadas;
- usuarios que identifican una acción concreta;
- repetición de un segundo ciclo.

### Salud

- incidentes por 100 miembros activos;
- tiempo de respuesta de moderación;
- apelaciones revertidas;
- carga semanal por moderador;
- porcentaje de recomendaciones con parche y fuente frescos.

No usar número bruto de miembros como métrica principal.

## Perímetro Valve, datos y marca

- Entrada de draft manual y fuera de partida.
- Comunicación de voz humana normal durante el juego.
- Match ID solicitado por el jugador después de jugar.
- Sin memoria, proceso, logs, red, pantalla, GSI, macros ni automatización.
- Sin scouting de rivales ni targeted bans.
- Sin Steam login en el MVP.
- OpenDota con caché, rate limits, estado de datos y atribución.
- Pedir confirmación comercial escrita a OpenDota antes de escalar pagos.
- Identidad visual original; no usar el logo de Dota como logo del servidor.
- Descargo: «Comunidad independiente; no afiliada ni respaldada por Valve».
- Antes de un torneo público, solicitar la licencia gratuita de Valve.
- No poner la transmisión de un torneo detrás de un paywall.

## Cómo dar acceso a Codex de forma segura

Codex no tiene una cuenta personal de Discord a la que puedas transferir el
servidor. Tampoco debe iniciar sesión con tu cuenta. El acceso correcto es una
app/bot oficial que tú controlas.

### Lo que hace Maikel una sola vez

1. Crear el servidor desde Discord y conservar la propiedad.
2. Activar `Community`, 2FA para moderación, Rules Screening y los canales de
   reglas/actualizaciones.
3. Crear una app privada en
   https://discord.com/developers/applications.
4. Configurar Guild Install con scopes `bot` y `applications.commands`.
5. Instalar el bot en el servidor usando el enlace oficial.
6. Colocar el rol del bot por debajo de Propietario/Admin y por encima de los
   roles que deba crear o modificar.
7. Compartir con Codex solo:
   - Guild ID;
   - Application ID;
   - nombre final y preferencias no secretas.
8. Inyectar `DISCORD_BOT_TOKEN` como secreto del entorno o variable temporal.
   Nunca pegarlo en el chat, un issue, un commit o una captura.

### Permisos temporales del provisionador

- Manage Server;
- Manage Channels;
- Manage Roles;
- View Channels;
- Send Messages, Embed Links y Read Message History;
- Manage Threads para foros;
- Create Events;
- Moderate Members solo si AutoMod aplicará timeout.

No conceder Administrator. Activar Community se hace manualmente porque la API
exigiría ese permiso.

### Después de crear todo

1. Verificar roles, canales, permisos, mensajes, AutoMod y onboarding.
2. Retirar Manage Server, Manage Channels y Manage Roles del bot runtime.
3. Rotar el token del provisionador o retirar ese bot.
4. Mantener el bot permanente solo con comandos, envío de mensajes, threads y
   eventos que realmente use.

### Nunca entregar

- usuario o contraseña de Discord;
- código 2FA;
- cookies o token de sesión;
- token de una cuenta humana;
- QR de inicio de sesión;
- acceso remoto a un navegador autenticado.

Automatizar una cuenta humana sería un self-bot prohibido por Discord.

## Qué se automatiza

| Acción | Estado |
| --- | --- |
| Roles, categorías, texto, voz y permisos | Automatizable |
| Foros, tags, mensajes iniciales y pins | Automatizable |
| AutoMod, onboarding y eventos | Automatizable después de Community |
| Slash commands | Automatizable |
| Crear el servidor y conservar propiedad | Manual, Maikel |
| Crear app, aprobar instalación y token | Manual, Maikel |
| Activar Community y Rules Screening | Manual recomendado |
| Server Guide avanzado | Manual |
| Discovery, Partner, Verified y pagos | Manual y sujeto a elegibilidad |

## Arquitectura técnica recomendada

```text
manifiesto versionado
  -> descubrir estado real
  -> plan/diff de solo lectura
  -> aprobación
  -> aplicar con razón de auditoría
  -> verificar
  -> retirar permisos del provisionador
```

Separar:

- `Dota Community Builder`: bot temporal con permisos estructurales.
- `Dota Coach`: app permanente con permisos mínimos.

El runtime puede usar interacciones HTTP dentro de Next.js, sin conexión Gateway
al principio. Un Gateway se añade solo para salas de voz dinámicas o eventos que
realmente lo requieran.

## Fases de construcción

### Fase 1 — Sandbox

- Maikel crea servidor/app de prueba.
- Definir manifiesto de roles, canales, foros y permisos.
- Ejecutar `validate` y `plan` sin mutaciones.
- Aplicar y comprobar idempotencia.

### Fase 2 — Comunidad funcional

- Sembrar mensajes, reglas y onboarding.
- Configurar AutoMod y alertas.
- Registrar `/ayuda`, `/party`, `/parche`, `/replay` y `/reto`.
- Probar desktop y móvil con dos cuentas normales.

### Fase 3 — Piloto de 14 días

- 20 fundadores;
- dos ventanas de juego semanales;
- clínica de replay;
- medir fill rate, no-shows, D7 y ciclos cerrados.

### Fase 4 — Producción

- Ajustar estructura con evidencia del piloto.
- Aplicar en servidor real.
- Retirar permisos de provisión.
- Publicar identidad y calendario.

### Fase 5 — Diferenciador

- Salas temporales;
- cierre de partida;
- reputación privada de fiabilidad;
- equipos privados;
- historial y panel para coaches.

## Criterio de éxito inicial

- 12 de 20 invitados completan onboarding.
- Tres escuadras juegan al menos una vez.
- 60% de LFG encuentra grupo.
- Menos de 20% de no-shows.
- Ocho usuarios regresan la segunda semana.
- Seis completan debrief y cinco piden otro ciclo.
- Tres pagos reales por reporte o un piloto de coach/equipo.

Si no se logra actividad social recurrente, no se construyen pagos, rankings ni
un bot más complejo.
