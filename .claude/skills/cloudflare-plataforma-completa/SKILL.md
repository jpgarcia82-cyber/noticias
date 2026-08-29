---
name: cloudflare-plataforma-completa
description: Experto en el ecosistema completo de Cloudflare — desde fundamentos de red/seguridad (CDN, DNS, DDoS, SSL/TLS, Zero Trust) hasta cada producto de developers.cloudflare.com: Workers, Pages, R2, D1, KV, Durable Objects, Queues, Workers AI, Vectorize, Hyperdrive, Workflows, Cron Triggers, Email Routing, Zero Trust/Access, WAF, rate limiting, Turnstile, y wrangler — límites, precios y sintaxis verificados contra fuente oficial, no memoria. Complemento de deploy-cloudflare-workers (operativo de despliegue de este repo). Úsalo cuando pidan "qué producto de Cloudflare uso para esto", límites/precios de Workers/R2/D1/KV/Durable Objects, "cómo configuro Zero Trust/Access/WAF/Turnstile", "Pages vs Workers", "Workers AI/Vectorize para RAG", "qué es un CDN/DNS/DDoS/SSL/Zero Trust", o quieran diseñar con cualquier producto o concepto de la plataforma Cloudflare.
---

# Cloudflare — Plataforma Completa

Cobertura de todo el ecosistema Cloudflare relevante para construir productos reales — no solo "cómo despliego un Worker" (eso ya lo cubre `deploy-cloudflare-workers` para este repo), sino **qué producto usar para cada problema** y con qué límites/costos reales, verificados contra documentación oficial y fuentes actuales, no supuestos de memoria de entrenamiento.

**Disciplina de este skill**: los límites, precios y nombres de producto de Cloudflare cambian con frecuencia (varias veces al año). Cada cifra abajo está marcada como verificada en una fecha — antes de un entregable formal con impacto de costo/arquitectura real, confírmala de nuevo contra `developers.cloudflare.com` o el dashboard del usuario, no la des por vigente indefinidamente.

## 0. Fundamentos de red y seguridad (Cloudflare Learning Center)

Antes de decidir producto, estos son los conceptos base que Cloudflare enseña en su propio Learning Center (`cloudflare.com/learning`) — necesarios para justificar *por qué* un producto resuelve el problema, no solo *cómo* configurarlo:

- **CDN (Content Delivery Network)** — red distribuida geográficamente de servidores que cachean contenido cerca del usuario para acelerar la entrega. Coloca servidores en los Internet Exchange Points (IXPs) donde distintas redes/proveedores se conectan. Un CDN bien configurado también ayuda a mitigar ataques DDoS, no solo acelera — es la base conceptual de por qué Cloudflare Workers corre en el edge en vez de en una sola región.
- **DNS (Domain Name System)** — traduce nombres de dominio a direcciones IP. Una consulta DNS típica sin caché involucra 4 tipos de servidor en cadena: **resolver recursivo** (primer punto de contacto, responde desde caché o reenvía la consulta) → **nameserver raíz** → **nameserver TLD** → **nameserver autoritativo** (el que realmente tiene y responde con el registro DNS solicitado, el último eslabón de la cadena).
- **DDoS (Distributed Denial of Service)** — 3 categorías de ataque, cada una con mitigación distinta:
  - **Volumétricos** (capa 3/4) — saturan el ancho de banda disponible con volumen masivo de tráfico; el tipo más común.
  - **De protocolo / agotamiento de estado** (capa 3/4) — abusan de protocolos (ej. ICMP, SYN floods) para agotar recursos de infraestructura de red, no ancho de banda.
  - **De capa de aplicación** (capa 7) — solicitudes HTTP que parecen legítimas pero agotan recursos del servidor/aplicación; son los más difíciles de detectar porque no se ven anómalas a nivel de red. Ataques modernos combinan las 3 capas a la vez (multi-vector) para saturar defensas diseñadas para manejar cada capa por separado.
- **SSL/TLS** — SSL (1995, Netscape) es el protocolo predecesor; **TLS es el estándar actual** aunque "SSL" se sigue usando coloquialmente para referirse a TLS. El cifrado funciona por par de llaves pública/privada: el certificado SSL/TLS del servidor entrega la llave pública al cliente; solo la llave privada del servidor puede descifrar lo cifrado con la pública. El certificado es la "credencial de identidad" del sitio, no solo el mecanismo de cifrado.
- **Zero Trust (concepto, más allá del producto Access)** — modelo de seguridad donde ningún usuario/dispositivo se confía por defecto, dentro o fuera del perímetro de red — todo se autentica, autoriza, y valida continuamente. Principios centrales: **never trust, always verify**; **privilegio mínimo** (acceso justo al mínimo necesario, ej. un desarrollador frontend no necesita credenciales de la base de datos de producción); **asumir brecha** (diseñar como si el atacante ya estuviera dentro); **microsegmentación** (limitar movimiento lateral). El producto Zero Trust/Access de la sección 6 es la implementación concreta de Cloudflare de este modelo, no el modelo en sí.

Estos fundamentos son la base conceptual que justifica cada decisión de producto de las secciones siguientes — cita el fundamento, no solo el nombre del producto, cuando el entregable necesite explicar el *por qué*.

## 1. Cómputo — Workers (y la unificación con Pages)

**Workers** es la plataforma de cómputo serverless en el edge de Cloudflare — el núcleo de todo lo demás.

- **Límites verificados (2026)**: Plan Free — 100,000 solicitudes/día, 10ms de CPU time por invocación, 50 subrequests, 3MB de tamaño de script. Plan Paid ($5/mes) — incluye 10 millones de solicitudes y 30 millones de CPU-milliseconds, CPU time configurable hasta 5 minutos por invocación (default 30 segundos).
- **Unificación con Pages** (verificado, cambio de plataforma reciente): desde septiembre 2024 Workers soporta hosting de assets estáticos de forma gratuita (antes exclusivo de Pages); a marzo de 2026 Workers alcanzó paridad de features completa con Pages para assets estáticos, SSR y dominios personalizados. **Cloudflare recomienda Workers (con static assets) para proyectos full-stack nuevos** — Pages sigue soportado sin migración forzosa para proyectos existentes, pero todo el desarrollo nuevo de features va a Workers. Secrets Store, Workflows, Containers, Dynamic Workers y Durable Objects son exclusivos de Workers, no están disponibles en Pages.

**Implicación práctica**: para un proyecto nuevo, empieza en Workers directamente, no en Pages — evita una migración futura.

## 2. Almacenamiento — elige por el patrón de acceso, no por familiaridad

| Producto | Modelo de consistencia | Cuándo usarlo | Límites clave verificados |
|---|---|---|---|
| **Workers KV** | Eventualmente consistente — escritura se propaga globalmente en ~60s, lectura en el mismo datacenter donde se escribió es inmediata | Config, caché, sesiones, datos leídos con mucha más frecuencia de la que se escriben | Valor máx. 25MB. Free: ~3M lecturas, ~30K escrituras, 1GB almacenamiento/mes. Paid: 10M lecturas + 1M escrituras incluidas, luego $0.50/millón lecturas, $5.00/millón escrituras/list/delete, $0.50/GB almacenado. |
| **D1** | Fuertemente consistente dentro de una base, SQLite en el edge | Datos relacionales, queries SQL, transacciones — diseñado para escalar horizontalmente con muchas bases pequeñas (una por tenant/usuario), no una base gigante | Tamaño máx. por base: 10GB (Paid) / 500MB (Free). Fila/BLOB máx. 2MB. SQL statement máx. 100KB. Hasta 50,000 bases por cuenta (Paid) / 10 (Free), 1TB total (Paid) / 5GB (Free). |
| **R2** | Consistencia de objeto (S3-compatible) | Archivos, imágenes, exports grandes, backups — cualquier cosa con volumen de egreso alto | **Sin costo de egreso** (la diferencia clave vs. S3). Free: 10GB almacenamiento, 1M operaciones Clase A, 10M Clase B/mes. Paid: ~$0.015/GB-mes almacenamiento estándar, $4.50/millón Clase A (escritura/listar), $0.36/millón Clase B (lectura). |
| **Durable Objects** | Fuertemente consistente, un solo hilo por objeto — coordinación exacta | Contadores exactos, locks, estado de agentes/chat en tiempo real, colaboración — cualquier caso donde una race condition es inaceptable | Backend recomendado hoy: SQLite embebido por objeto (con Point-in-Time Recovery a 30 días). Es la opción más compleja de las cuatro — resérvala para cuando KV/D1 no dan consistencia suficiente. |

**Regla de decisión rápida**: ¿necesitas consistencia fuerte inmediata? → Durable Objects (coordinación) o D1 (relacional). ¿Solo necesitas que la mayoría de lecturas sean rápidas y una demora de segundos en propagar una escritura es aceptable? → KV. ¿Es un archivo grande, no un dato estructurado? → R2.

## 3. Procesamiento asíncrono — Queues

Modelo productor/consumidor verificado:
- **Producer**: `sendBatch` permite hasta 100 mensajes, 128KB por mensaje, 256KB por batch. Soporta `delaySeconds` por mensaje o batch.
- **Consumer**: `max_batch_size` default 10 mensajes, `max_batch_timeout` default 5 segundos — el consumidor recibe el batch cuando se cumple el primero de los dos límites.
- **Reintentos**: `max_retries` default 3. Si un mensaje del batch falla y no se reconoce explícitamente, se reintenta el batch completo, no solo el mensaje fallido — diseña el handler para reconocer mensajes individualmente si eso importa.
- **Dead Letter Queue (DLQ)**: mensajes que agotan `max_retries` van a la DLQ configurada (retención 4 días) — sin DLQ configurada, se eliminan permanentemente. Siempre configura una DLQ si el mensaje representa una transacción/evento que no se puede perder silenciosamente.
- **Delay máximo de reintento**: 12 horas (43200 segundos).

## 4. IA en el edge — Workers AI + Vectorize

- **Workers AI**: catálogo curado de modelos open-source para inferencia en el edge (clasificación de imágenes, generación de texto, detección de objetos, embeddings, etc.) — sin gestionar infraestructura de GPU propia.
- **Vectorize**: base de datos vectorial distribuida globalmente, integrada nativamente con Workers — para RAG (Retrieval Augmented Generation), búsqueda semántica, recomendaciones, detección de anomalías. Modelo de embedding verificado de ejemplo: `@cf/baai/bge-base-en-v1.5` (768 dimensiones).
- **Patrón típico RAG**: genera embeddings de tus documentos con un modelo de Workers AI → guárdalos en Vectorize → en cada consulta, genera el embedding de la pregunta, busca los vectores más cercanos en Vectorize, pásalos como contexto al modelo generativo de Workers AI (o a Claude vía API).

## 5. Bases de datos externas y orquestación — Hyperdrive, Workflows, Cron Triggers

- **Hyperdrive** — conecta Workers a bases de datos PostgreSQL/MySQL externas (no nativas de Cloudflare) con pooling y caching de conexión, evitando el problema de "demasiadas conexiones" típico de serverless contra bases tradicionales.
- **Workflows** — para jobs multi-paso de larga duración con estado persistente entre pasos (a diferencia de un Worker normal, que debe terminar rápido); soporta triggers programados directamente vía el binding de Workflow.
- **Cron Triggers** — ejecución programada de un Worker (maneja el evento con un handler `scheduled`), en hora UTC — para tareas periódicas simples que no necesitan el estado multi-paso de Workflows.
- **Email Routing** — recibir/enviar correo a través de Workers (reenvío, filtrado, procesamiento con `email` handler).

## 6. Seguridad y red — Zero Trust/Access, WAF, Turnstile

- **Zero Trust / Access** — control de acceso a aplicaciones internas (self-hosted, SaaS, no-web) sin VPN tradicional. Se integra con proveedores de identidad externos (Azure AD, Okta, Google Workspace vía SCIM) o puede usar **Cloudflare mismo como proveedor de identidad** (default para cuentas Zero Trust nuevas, reemplazando el One-time PIN). Las políticas de Access combinan identidad + postura del dispositivo + contexto de la aplicación.
- **WAF (Web Application Firewall)** — orden de evaluación verificado: mitigación HTTP DDoS → Custom Rules → Rate Limiting Rules → Managed Rules → Super Bot Fight Mode. Una acción terminal en una fase temprana evita que se ejecuten las fases siguientes — importante al depurar por qué una regla "no se aplicó" (otra regla anterior ya terminó la evaluación).
  - **Managed Rules** — mantenidas por Cloudflare (basadas en OWASP Core Ruleset), protección amplia sin configuración manual.
  - **Custom Rules** — lógica propia basada en rutas/comportamiento/reglas de negocio específicas del sitio.
  - **Rate Limiting Rules** — límite de solicitudes por cliente en una ventana de tiempo; los rulesets de rate limiting a nivel cuenta son función Enterprise.
- **Turnstile** — alternativa a CAPTCHA sin fricción de interacción, privacy-first. Arquitectura de dos mitades obligatorias: el widget genera un token en el navegador → el backend valida ese token contra el endpoint `siteverify` de Cloudflare con la secret key (el token expira a los 300 segundos y solo es válido una vez). Tres modos de widget: **Managed** (ajusta dificultad automáticamente, recomendado para la mayoría), **Non-Interactive** (badge visible, sin input manual), **Invisible** (sin widget visible, para checkout/login de fricción cero).

## 7. Configuración — wrangler.toml / wrangler.jsonc

Wrangler soporta ambos formatos; si existen los dos en el proyecto, **JSON/JSONC tiene precedencia** — elige uno solo para evitar que ediciones al TOML se ignoren silenciosamente.

```jsonc
{
  "name": "mi-worker",
  "main": "src/index.ts",
  "compatibility_date": "2026-08-29",
  "vars": { "ENVIRONMENT": "production" },
  "kv_namespaces": [{ "binding": "MY_KV", "id": "..." }],
  "d1_databases": [{ "binding": "DB", "database_name": "mi-db", "database_id": "..." }],
  "r2_buckets": [{ "binding": "MY_BUCKET", "bucket_name": "..." }]
}
```

Reglas verificadas: `secrets` **nunca** van en este archivo (siempre `wrangler secret put NOMBRE`, cifrado del lado de Cloudflare). `compatibility_date` fija el comportamiento del runtime a esa fecha — actualízalo deliberadamente, no automáticamente, para no romper comportamiento en producción sin probarlo.

## Cruce con otros skills de este repo

- `deploy-cloudflare-workers` — el playbook operativo de despliegue/CI-CD/rollback para **este** proyecto específico (worker.js) — usa este skill para decidir arquitectura/producto, y `deploy-cloudflare-workers` para llevarlo a producción.
- `arquitecto-apis-integraciones` — cuando el Worker expone/consume APIs externas (webhooks, PSPs) — ese skill cubre el contrato de la integración; este skill cubre en qué producto de Cloudflare vive esa lógica.
- `seguridad-fintech` — si el proyecto es financiero, cruza para asegurar que el uso de Zero Trust/WAF/Turnstile cumple con el nivel de seguridad esperado del sector.

## Entregable de este skill

1. **Producto(s) de Cloudflare recomendado(s)** para el caso de uso, con la razón basada en el modelo de consistencia/patrón de acceso — nunca "usa D1" sin explicar por qué no KV o R2.
2. **Límites y costos relevantes** para la escala real del proyecto, marcados con su fecha de verificación — señala explícitamente si conviene reconfirmar contra el dashboard/documentación antes de comprometer una decisión de arquitectura cara de revertir.
3. **Configuración concreta** (`wrangler.jsonc`/`wrangler.toml`) para los bindings necesarios.
4. Si el caso de uso toca seguridad de acceso (apps internas, formularios públicos, APIs), señala explícitamente si aplica Zero Trust/WAF/Turnstile, no lo dejes implícito.

## Referencias
- Cloudflare Learning Center — fundamentos verificados vía búsqueda web, 29 de agosto de 2026: [¿Qué es un CDN?](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/), [¿Qué es DNS?](https://www.cloudflare.com/learning/dns/what-is-dns/), [DNS recursivo](https://www.cloudflare.com/learning/dns/what-is-recursive-dns/), [¿Qué es un ataque DDoS?](https://www.cloudflare.com/learning/ddos/how-to-prevent-ddos-attacks/), [¿Qué es SSL?](https://www.cloudflare.com/learning/ssl/what-is-ssl/), [¿Qué es un certificado SSL?](https://www.cloudflare.com/learning/ssl/what-is-an-ssl-certificate/), [¿Qué es Zero Trust?](https://www.cloudflare.com/learning/zero-trust/what-is-zero-trust/).
- Cloudflare Workers — límites y pricing: [developers.cloudflare.com/workers/platform/limits](https://developers.cloudflare.com/workers/platform/limits/), [developers.cloudflare.com/workers/platform/pricing](https://developers.cloudflare.com/workers/platform/pricing/) — verificado vía búsqueda web, 29 de agosto de 2026.
- Migración Pages → Workers: [developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages](https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/).
- R2 pricing: [developers.cloudflare.com/r2/pricing](https://developers.cloudflare.com/r2/pricing/).
- D1 límites: [developers.cloudflare.com/d1/platform/limits](https://developers.cloudflare.com/d1/platform/limits/).
- Durable Objects (SQLite storage): [developers.cloudflare.com/durable-objects/api/sqlite-storage-api](https://developers.cloudflare.com/durable-objects/api/sqlite-storage-api/), blog "Zero-latency SQLite storage in every Durable Object".
- Queues — batching/retries/DLQ: [developers.cloudflare.com/queues/configuration/batching-retries](https://developers.cloudflare.com/queues/configuration/batching-retries/), [.../dead-letter-queues](https://developers.cloudflare.com/queues/configuration/dead-letter-queues/).
- Vectorize + Workers AI: [developers.cloudflare.com/vectorize/get-started/embeddings](https://developers.cloudflare.com/vectorize/get-started/embeddings/).
- WAF — orden de evaluación: [developers.cloudflare.com/waf](https://developers.cloudflare.com/waf/).
- Turnstile: [developers.cloudflare.com/cloudflare-challenges/challenge-types/turnstile](https://developers.cloudflare.com/cloudflare-challenges/challenge-types/turnstile/).
- Zero Trust / Access como IdP: [developers.cloudflare.com/cloudflare-one/integrations/identity-providers](https://developers.cloudflare.com/cloudflare-one/integrations/identity-providers/).
- Wrangler configuration: [developers.cloudflare.com/workers/wrangler/configuration](https://developers.cloudflare.com/workers/wrangler/configuration/).
- Todas las cifras de límites/precios verificadas vía búsqueda web (WebFetch a developers.cloudflare.com estaba bloqueado por el proxy de red de este entorno) — reconfirmar contra la documentación oficial o el dashboard antes de un entregable con impacto de costo real, estas cifras cambian con frecuencia.
