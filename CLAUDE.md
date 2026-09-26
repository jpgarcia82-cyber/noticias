# noticias — análisis de sentimiento de YouTube (Cloudflare Worker)

## Estructura y comandos
- Todo el código (backend + HTML del frontend) vive en `src/worker.js`. Config en `wrangler.toml`.
- Local: `wrangler dev` (http://localhost:8787). Validar sintaxis: `node --check src/worker.js`.
- Publicar: `wrangler deploy`. **Publica en internet: pregunta antes de ejecutarlo.**
- No hay tests ni linter; verifica cambios con `wrangler dev` o importando el módulo en Node con un `env` simulado.

## Secretos
- La API key de YouTube se lee de `env.YOUTUBE_API_KEY`. Nunca escribas una key real en el código ni en git.
- Producción: `wrangler secret put YOUTUBE_API_KEY`. Local: archivo `.dev.vars` (ignorado por git).

## Skills relevantes para este proyecto
- `deploy-cloudflare-workers`, `cloudflare-plataforma-completa`: despliegue, KV, secrets, Workers.
- `social-listening-politica-latam`: metodología de sentimiento político en LatAm (el dominio de esta app).
- `frontend-design`, `ui-ux-pro-max`: solo al cambiar la interfaz.
- Los skills de finanzas, compliance, marketing y documentos Office no aplican aquí.
