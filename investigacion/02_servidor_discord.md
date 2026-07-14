# Investigación: servidor comunitario de Discord para Dota 2

- Fecha de corte: 2026-07-13
- Alcance: servidor hispano/LATAM completo para amigos y comunidad, con chat,
  voz, búsqueda de party, aprendizaje, equipos, eventos y moderación.
- Estado: concepto y arquitectura definidos; falta validación con usuarios y
  acceso a un servidor real para aprovisionarlo.

## Pregunta central

¿Cómo crear un servidor útil para comunicarse y jugar Dota 2 que no sea otro
Discord genérico de canales vacíos, y que pueda diferenciarse sin cheats,
boosting, apuestas ni ventajas en vivo?

## Aclaración del encargo

El producto principal debe ser una comunidad completa para usar antes, durante
y después de jugar:

- conversar por texto y voz;
- encontrar compañeros compatibles;
- crear parties, equipos, scrims e inhouses;
- resolver dudas y compartir clips;
- revisar partidas y aprender por parche;
- organizar eventos con moderación clara.

La capa patch-aware es un diferenciador dentro de esa comunidad. No sustituye
la experiencia social.

## Método

1. Revisar la visión, evidencia y funciones ya construidas en la web.
2. Mapear comunidades Dota públicas globales, hispanas y educativas.
3. Mapear bots de LFG, estadísticas, counters, IA, replays y torneos.
4. Buscar dolores recientes de jugadores en Reddit y Steam.
5. Verificar en documentación oficial qué puede automatizar Discord.
6. Revisar límites de Valve, Steam, OpenDota, marca y torneos.
7. Diseñar una propuesta que combine utilidad social inmediata y un loop de
   mejora verificable.

La revisión competitiva es pública y no exhaustiva. No permite demostrar que
ningún servidor privado del mundo tenga una función determinada.

## Lo que ya existe

| Oferta | Señal pública al consultar | Capacidades visibles |
| --- | ---: | --- |
| DOTA 2 LATAM | ~30.000 miembros | Voz, party, team finder, torneos y planes VIP |
| /r/Dota2 | ~103.000 miembros | LFG, esports, ayuda a nuevos y torneo mensual |
| Dota University | ~5.900 miembros | Coaching, workshops, replays e inhouses |
| Midas Club | ~9.000 miembros | Matchmaking, rankings, scrims y torneos |
| MangoByte | >11.000 servidores declarados | Stats, héroes, meta, partidas y gráficos |
| Dota2Bot | Lanzamiento reciente | Counters por rol usando OpenDota |
| VEGA | Producto nuevo de pago | IA, builds, parche, recap, ranking y setup |

Conclusión factual: español, LFG, voz, torneos, coaching, estadísticas, IA o
replays por separado no son una novedad.

## Dolores con evidencia repetida

### 1. Encontrar una party compatible

Los jugadores no buscan solo cinco personas. Preguntan por región, horario,
rango, roles, micrófono y actitud. También valoran grupos pequeños y recurrentes
frente a servidores masivos caóticos.

### 2. Jugar sin agresión ni abandono

Hay testimonios recientes de jugadores que quieren coordinar, aceptar errores y
evitar insultos. Esto valida el dolor, no una promesa de eliminar toxicidad o
smurfs.

### 3. Pasar de bots a partidas humanas

Nuevos jugadores reportan que el modo de principiantes es demasiado fácil y que
el salto a partidas normales los expone a veteranos y hostilidad. Una cohorte de
aprendizaje e inhouses protegidas puede cubrir ese hueco.

### 4. Saber qué mejorar

Existe demanda explícita de replay reviews. Discord ya se usa como cola donde el
jugador publica Match ID, héroe y pregunta, y un coach reclama o revisa el caso.

### 5. Retener una comunidad

La evidencia favorece rituales recurrentes —noche de party, inhouse, clínica y
taller— y relaciones estables. Crear más canales no produce retención.

## Hipótesis diferencial

### Servidor completo + Ciclo de Escuadra

El servidor cubre las funciones esperadas de cualquier comunidad Dota y agrega
un flujo propio:

```text
perfil de juego
  -> búsqueda por rol/región/horario/actitud
  -> sala de escuadra
  -> partida
  -> Match ID y debrief opcional
  -> una tarea concreta
  -> próxima party más compatible
```

La versión semanal añade parche, fuente, frescura y confianza:

```text
parche -> plan -> 2-3 partidas -> replay -> patrón -> siguiente hábito
```

No se premia MMR ni winrate. Se reconoce puntualidad, buen trato, completar el
ciclo y ayudar con feedback útil.

### Formulación honesta de la novedad

> En la revisión pública realizada no encontramos una comunidad hispana que
> conecte búsqueda de escuadra, sala de juego, plan por parche, Match ID,
> debrief y siguiente objetivo en un mismo ciclo medible.

Esto sigue siendo una hipótesis. No se usará «el único» hasta auditar más
competidores y validarlo con usuarios.

## Alternativas evaluadas

| Concepto | Dolor | Pago | Frecuencia | Acceso | Diferenciación | Riesgo | MVP |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Comunidad completa + Ciclo de Escuadra | 5 | 3 | 5 | 5 | 5 | 2 | 4 |
| Liga de mejora semanal individual | 4 | 4 | 4 | 5 | 5 | 1 | 4 |
| Sistema operativo para five-stacks | 4 | 4 | 4 | 3 | 4 | 2 | 3 |

En `Riesgo`, 5 significa riesgo alto. Las puntuaciones son hipótesis, no demanda
validada.

## Prueba inicial de 14 días

- Reclutar 20 jugadores fundadores y 2 moderadores.
- Conseguir que 12 completen onboarding.
- Formar al menos tres escuadras y realizar dos ventanas de juego.
- Lograr un fill rate de publicaciones LFG de al menos 60%.
- Mantener no-shows por debajo de 20%.
- Recibir 10 Match IDs voluntarios y cerrar 6 debriefs.
- Conseguir que 5 usuarios pidan participar otra semana.
- Probar 10 reportes: primero gratis y después USD 3.

Se detiene o rediseña si hay menos de seis usuarios activos en la primera
semana, nadie completa el ciclo o la moderación manual consume más valor del que
la comunidad genera.

## Dependencias antes de construir en Discord

Maikel debe crear el servidor y conservar su propiedad. Discord eliminó la
creación de servidores por apps en 2025. Después se instala un bot oficial y se
aprovisiona la estructura con permisos temporales y granulares. Nunca se entrega
una contraseña, cookie, 2FA ni token de una cuenta humana.

El diseño completo y el procedimiento están en
[servidor comunitario completo](../producto/servidor_discord.md).
