---
name: deploy-cloudflare-workers
description: Arquitecta y despliega apps en Cloudflare Workers sin depender de un equipo de desarrollo — configuración de wrangler.toml, manejo de secretos, bindings (KV/D1/R2), ambientes (dev/staging/prod), rollback, y CI/CD con GitHub Actions. Úsalo cuando el usuario pida "cómo despliego esto", "cómo agrego una base de datos a mi Worker", "cómo manejo secretos en Cloudflare", "cómo hago rollback", "configura CI para mi Worker", o trabaje con wrangler/Cloudflare Workers/Pages.
---

# Deploy y Arquitectura en Cloudflare Workers

Guía operativa para llevar una app en Cloudflare Workers de "funciona en mi máquina" a producción real, con capacidad de iterar sin depender de nadie más.

## Diagnóstico rápido: dónde está el proyecto hoy

Antes de proponer cambios, lee `wrangler.toml` y `package.json` del proyecto y ubica en qué nivel está:

- **Nivel 0 (típico de un prototipo)**: un solo `main` en `wrangler.toml`, sin `[vars]`/secrets declarados, sin bindings (KV/D1/R2), sin `[env.staging]`, deploy manual con `wrangler deploy`. API keys hardcodeadas en el código fuente — riesgo de seguridad real (cruza con `seguridad-fintech`).
- **Nivel 1**: secretos movidos a `wrangler secret put`, ambientes separados (`[env.staging]`, `[env.production]`).
- **Nivel 2**: estado persistente vía KV/D1/R2 según el caso de uso, en vez de todo en memoria o hardcodeado.
- **Nivel 3**: CI/CD (GitHub Actions) que corre `wrangler deploy` automáticamente al hacer push a la rama correcta, con revisión antes de producción.

## 1. Secretos — nunca en el código ni en `wrangler.toml`

```bash
# Nunca esto en el código: const API_KEY = 'AIzaSy...'
wrangler secret put YOUTUBE_API_KEY
# Pide el valor interactivamente, lo guarda cifrado del lado de Cloudflare
```
En el Worker, se accede vía el binding `env`, no como constante:
```js
export default {
  async fetch(request, env) {
    const apiKey = env.YOUTUBE_API_KEY; // no una constante hardcodeada
  }
}
```
Si el proyecto tiene una API key hardcodeada en el código (revisa `src/worker.js` u otro entrypoint), es lo primero que corregir — y como quedó en el historial de git, hay que **rotar la key**, no solo moverla a secret.

## 2. Ambientes — dev, staging, producción

`wrangler.toml` soporta `[env.<nombre>]` para separar configuración:
```toml
name = "mi-worker"
main = "src/worker.js"
compatibility_date = "2024-01-01"

[env.staging]
name = "mi-worker-staging"

[env.production]
name = "mi-worker-prod"
```
Deploy dirigido: `wrangler deploy --env staging` / `wrangler deploy --env production`. Cada ambiente puede tener sus propios secrets (`wrangler secret put X --env production`) y bindings — nunca compartas la misma base de datos/KV entre staging y producción.

## 3. Estado persistente — elegir el binding correcto

| Necesitas | Usa | Cuándo NO usarlo |
|---|---|---|
| Datos clave-valor simples, lecturas frecuentes, escrituras poco frecuentes (config, caché, sesiones) | **KV** | Si necesitas consistencia fuerte inmediata — KV es eventualmente consistente entre regiones. |
| Datos relacionales, transacciones, queries SQL | **D1** (SQLite en el edge) | Volumen muy alto de escrituras concurrentes desde múltiples regiones simultáneamente. |
| Archivos, imágenes, exports grandes | **R2** (S3-compatible, sin costo de egreso) | Datos pequeños y frecuentes — usa KV. |
| Estado con coordinación fuerte (contador exacto, lock) | **Durable Objects** | Casos simples — es la opción más compleja, resérvala para cuando realmente necesitas un solo punto de verdad. |

Agregar un binding en `wrangler.toml`:
```toml
[[kv_namespaces]]
binding = "SESSIONS"
id = "<id que da wrangler kv namespace create>"

[[d1_databases]]
binding = "DB"
database_name = "mi-db"
database_id = "<id que da wrangler d1 create>"
```

## 4. Rollback — deshacer un deploy malo rápido

```bash
wrangler deployments list          # ver historial de deploys
wrangler rollback [deployment-id]  # regresar a uno anterior
```
Ten esto memorizado antes de necesitarlo — un rollback en Workers toma segundos si sabes el comando, minutos si lo estás buscando en pánico.

## 5. CI/CD — deploy automático sin depender de nadie

GitHub Actions mínimo viable (`.github/workflows/deploy.yml`):
```yaml
name: Deploy Worker
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          environment: production
```
El `CLOUDFLARE_API_TOKEN` se genera en el dashboard de Cloudflare (permisos mínimos: Edit Workers) y se guarda como secret del repo en GitHub, nunca en el código.

## 6. Observabilidad básica

- `wrangler tail` — logs en vivo del Worker en producción, indispensable para depurar sin agregar `console.log` y redeployar cada vez.
- Cloudflare Analytics (incluido, sin configurar nada) para tráfico, errores 5xx, latencia — revísalo antes de asumir que "no llega tráfico" cuando puede ser que el Worker esté fallando.

## Entregable de este skill

Al revisar/mejorar el deploy de un Worker, entrega:
1. **Diagnóstico de nivel actual** (0-3, ver arriba) contra el `wrangler.toml`/código real del proyecto.
2. **Cambios concretos** para subir de nivel, en orden de riesgo (secretos hardcodeados primero, siempre).
3. **Comandos exactos** a correr, no solo la teoría — este skill es para que operes tú mismo sin depender de un dev.
