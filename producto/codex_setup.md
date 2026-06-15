# Setup Codex, skills y MCP

Fecha: 2026-06-15

## Estado actual aplicado

### Skills globales instaladas

Instaladas en `~/.codex/skills`:

- `playwright`: validar frontend e interacciones reales.
- `screenshot`: inspeccion visual y evidencia de UI.
- `security-threat-model`: revisar riesgos de datos, ToS, IA y abuso.
- `security-best-practices`: endurecer manejo de datos, auth y secretos.
- `pdf`: preparar/exportar reportes cuando el MVP genere entregables.

### MCP globales activos

Confirmados con `codex mcp list`:

- `openaiDeveloperDocs`: documentacion actual de OpenAI/Codex.
- `context7`: documentacion actual de librerias/frameworks.
- `playwright`: automatizacion/inspeccion de navegador para el MVP web.
- `hexstrike_ai`: ya existia; mantenerlo para seguridad autorizada, no para el
  producto Dota salvo tareas defensivas o auditoria controlada.

### Skill local del proyecto

Creada en:

```text
.agents/skills/dota-patch-aware-coach/
```

Uso:

- diseno del asistente de draft;
- coach de parches;
- replay analysis por match ID;
- scoring de heroes/items/composicion;
- validacion de producto y monetizacion.

## Investigacion y fuentes usadas

### Codex

El manual actual de Codex indica:

- usar `AGENTS.md` para instrucciones persistentes por proyecto;
- usar skills para workflows repetibles;
- usar MCP para conectar Codex con documentacion, navegadores, Figma, Sentry,
  GitHub y otras herramientas;
- usar plugins si el workflow se va a distribuir o empaquetar con skills/MCP.

Fuente local actualizada: Codex manual descargado con `openai-docs`.

### MCP

Fuentes:

- MCP oficial: https://modelcontextprotocol.io/examples
- Organizacion MCP: https://github.com/modelcontextprotocol
- Playwright MCP: https://playwright.dev/docs/getting-started-mcp
- GitHub MCP: https://github.com/github/github-mcp-server
- OpenDota API: https://docs.opendota.com/

Lectura:

- MCP sirve para conectar herramientas/datos externos a Codex.
- Los servidores de referencia oficiales incluyen fetch, filesystem, git,
  memory y sequential thinking.
- Playwright MCP es util para que el agente interactue con paginas usando
  snapshots de accesibilidad, clicks, formularios y screenshots.
- GitHub MCP es util cuando haya repo remoto, issues, PRs o Actions.
- OpenDota no necesita MCP propio al inicio: basta con API HTTP y cache.

## Que NO instalar todavia

### GitHub MCP

No instalar ahora porque el proyecto acaba de pasar a git local y no hay repo
remoto, issues ni PRs. Instalar cuando:

- se cree repo en GitHub;
- usemos issues/PRs;
- queramos CI/CD o GitHub Actions.

### SQLite MCP

No instalar ahora. Codex ya puede trabajar con archivos y ejecutar scripts
locales. Para el MVP, SQLite se maneja mejor desde la app y tests.

### Filesystem/Git MCP

No aporta en este entorno: Codex ya tiene acceso local al filesystem y git por
terminal.

### OpenDota MCP de terceros

No instalar ahora. Mejor crear cliente propio o, si hace falta, un MCP propio
mas adelante. Evita depender de servicios no oficiales o con terminos dudosos.

### Figma/Canva

No instalar para este MVP inicial. Solo usar si despues hay diseno visual formal
o material de marca.

## Mejor implementacion para este proyecto

### Fase inicial

Usar Codex asi:

```text
AGENTS.md del proyecto
  -> skill local dota-patch-aware-coach
  -> context7 para docs de framework
  -> openaiDeveloperDocs para OpenAI/Codex/API
  -> playwright skill + MCP para validar UI
  -> shell/API directa para OpenDota
```

### Stack sugerido

Para arrancar rapido:

- frontend: React/Vite o Next.js si se quiere fullstack;
- backend: FastAPI si priorizamos Python/data, o Next API si priorizamos una
  sola app;
- datos: SQLite al inicio;
- cache: archivo/SQLite; Redis despues;
- IA: API con prompts estrictos y contexto estructurado;
- tests UI: Playwright;
- reportes: Markdown primero, PDF despues.

### Regla de arquitectura

No crear MCP por cada API desde el dia 1. Crear MCP propio solo cuando:

- varias herramientas/agentes necesiten usar el mismo dominio Dota;
- haya flujos repetidos de consulta/normalizacion;
- queramos exponer recursos como `patch://current`, `hero://name`,
  `match://id` o herramientas como `analyze_draft`.

## Proximo paso tecnico

1. Elegir stack inicial.
2. Crear app web MVP.
3. Crear base minima de heroes/items/parche.
4. Crear endpoint o funcion `analyzeDraft`.
5. Conectar OpenDota para `match_id`.
6. Usar IA solo para explicar resultados del motor de reglas.
7. Validar UI con Playwright.

## Comando git

El proyecto ya es repo local:

```bash
git status
git log --oneline --max-count=5
```
