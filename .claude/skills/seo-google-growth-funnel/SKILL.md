---
name: seo-google-growth-funnel
description: Orquesta SEO de Google, todas las herramientas de Google (Search Console, GA4, Tag Manager, Google Ads, Google Business Profile, Merchant Center), los Moments of Truth (Stimulus, ZMOT, FMOT, SMOT, TMOT) y el catálogo completo de KPIs medibles en cada etapa del funnel AARRR extendido (Awareness, Acquisition, Activation, Retention, Referral, Revenue). Si no se mide la experiencia, no existe. Úsalo cuando el usuario pida "quiero ser experto en SEO de Google", "arma mi funnel completo de AARRR", "qué KPIs mido en cada etapa", "moments of truth", "zero moment of truth", "qué herramienta de Google uso para cada etapa", "mi customer journey de awareness a revenue", "estrategia digital completa con Google", o quiera coordinar SEO + herramientas Google + medición a través de todo el ciclo de vida del cliente.
---

# SEO de Google + Funnel de Crecimiento (AARRR) + Moments of Truth + KPIs

Director de growth digital: coordina el ecosistema completo de herramientas Google, los skills SEO/marketing de este repo, el framework de Moments of Truth, y el catálogo de KPIs — organizados por etapa, para que ninguna etapa del customer journey se quede sin instrumentación, estrategia, ni métrica.

**Principio rector**: si una etapa no tiene un KPI medible activo, no está gestionada — está en piloto automático.

## Dos frameworks, verificados y mapeados juntos

### AARRR ("Pirate Metrics", Dave McClure, 2007)
5 etapas originales: Acquisition, Activation, Retention, Referral, Revenue. **Awareness** es una extensión posterior ampliamente adoptada, no parte del original — la incluimos porque es estándar en la práctica moderna.

### Moments of Truth (P&G 2005 + Google ZMOT 2011)
Secuencia verificada: **Stimulus → Zero Moment of Truth (ZMOT) → First Moment of Truth (FMOT) → Second Moment of Truth (SMOT) → Third Moment of Truth (TMOT)**.
- **Stimulus** — el disparador (un anuncio, una necesidad percibida) que hace que el consumidor empiece a considerar una compra.
- **ZMOT** (Google, Jim Lecinski, 2011, *Winning the Zero Moment of Truth*) — el momento de investigación online *antes* de decidir: búsquedas, comparación de opciones, reseñas. Google lo definió explícitamente como tan importante como FMOT/SMOT.
- **FMOT** (P&G, 2005) — el momento de decisión en el punto de compra/conversión (el "anaquel", físico o digital).
- **SMOT** (P&G, 2005) — la experiencia real de uso del producto/servicio después de comprarlo.
- **TMOT** — cuando el cliente comparte su experiencia (reseña, recomendación, publicación) convirtiéndose en fuente de estímulo para el siguiente ciclo — cierra el loop hacia un nuevo Stimulus de otra persona.

### Cómo se mapean entre sí
| AARRR | Moment of Truth dominante |
|---|---|
| Awareness | Stimulus |
| Acquisition | ZMOT (investigación/comparación previa al clic/decisión) |
| Activation | FMOT (decisión de "comprar"/registrarse) + inicio de SMOT |
| Retention | SMOT (experiencia continua de uso) |
| Referral | TMOT |
| Revenue | Resultado transaccional de FMOT, medido de forma recurrente en SMOT |

## KPIs por etapa — catálogo exhaustivo, por herramienta

Terminología GA4 verificada: desde el **21 de marzo de 2024**, GA4 renombró "conversiones" a **"eventos clave" (key events)** de forma permanente en toda la plataforma — "conversión" ahora es exclusivo de un evento clave importado a Google Ads. Se usa la terminología correcta abajo.

### 1. Awareness (Stimulus)
| Herramienta | KPIs |
|---|---|
| **Search Console** | Impresiones totales, impresiones por consulta de marca vs. no-marca, posición promedio |
| **GA4** | Usuarios nuevos, sesiones por canal/fuente, alcance (reach) |
| **Google Ads** | Impresiones, alcance, frecuencia, cuota de impresiones (Impression Share), tasa de visualización de video (YouTube) |
| **Google Business Profile** | Vistas del perfil (búsqueda directa vs. descubrimiento), impresiones en Maps |
| Social/PR (cruza con `social-listening-politica-latam`, `public-relations`) | Volumen de menciones de marca, share of voice, crecimiento de seguidores |

### 2. Acquisition (ZMOT)
| Herramienta | KPIs |
|---|---|
| **Search Console** | Clics, CTR orgánico, clics por página de aterrizaje |
| **GA4** | Sesiones, usuarios por canal/fuente/medio, sesiones por página de aterrizaje, costo por adquisición (vía integración con Ads) |
| **Google Ads** | CPC, CTR, tasa de conversión, CPA, Quality Score, cuota de impresiones perdida por presupuesto/rango |
| **Google Business Profile** | Clics al sitio web, llamadas iniciadas, solicitudes de indicaciones |
| **Merchant Center** (e-commerce) | Clics por producto, CTR de Shopping Ads |

### 3. Activation (FMOT)
| Herramienta | KPIs |
|---|---|
| **GA4** | Tasa de finalización del evento clave de activación (ej. registro completado, primera acción de valor), tiempo hasta la primera acción de valor, tasa de engagement, sesiones con engagement |
| Producto (cruza con `onboarding`, `signup`, `cx-design-thinking-blueprint`) | Tasa de activación (% que completa la acción "aha"), tasa de abandono en el flujo de onboarding paso a paso (funnel drop-off) |

### 4. Retention (SMOT)
| Herramienta | KPIs |
|---|---|
| **GA4** | Retención por cohorte (Explorations → Cohort exploration), usuarios recurrentes, relación DAU/MAU, frecuencia de sesión, tasa de engagement a lo largo del tiempo |
| Producto (cruza con `churn-prevention`, `analytics`) | Tasa de abandono (churn rate), frecuencia de uso de features clave, stickiness |
| CX (fuera de Google, estándar de la industria) | NPS (Net Promoter Score), CSAT (Customer Satisfaction Score) — no son métricas nativas de Google, requieren encuesta propia |

### 5. Referral (TMOT)
| Herramienta | KPIs |
|---|---|
| **GA4** | Sesiones/usuarios por canal "Referral", atribución de conversiones a tráfico referido |
| **Google Business Profile** | Volumen de reseñas, calificación promedio, tasa de respuesta a reseñas (cruza con `google-business-profile`) |
| Producto | Coeficiente viral / K-factor, tasa de conversión de invitación a registro, % de usuarios que refieren activamente |

### 6. Revenue (resultado de FMOT, sostenido en SMOT)
| Herramienta | KPIs |
|---|---|
| **GA4** | Ingresos por compra (evento `purchase`), valor promedio de pedido (AOV), ingreso por usuario, LTV predictivo (GA4 Predictive Metrics) |
| **Google Ads** | ROAS, valor de conversión, costo por valor de conversión |
| **Merchant Center** | Rendimiento por producto (impresiones/clics/conversiones a nivel SKU) |

## Proceso de este skill (sin cambios respecto a la versión anterior)

1. **Diagnóstico por etapa** — para cada una de las 6, ¿hay tracking configurado (evento clave en GA4)? ¿hay estrategia activa? ¿hay KPI con meta numérica, no solo "medido"?
2. **Prioriza la etapa más débil**, no la más visible — igual criterio que `pm-agile-scrum` (impacto sobre esfuerzo).
3. **Instrumenta antes de optimizar** — si el KPI de la tabla no está configurado en GA4/GSC, ese es el paso uno.
4. **Ejecuta con el skill correspondiente** (ver tabla original de skills por etapa — sigue vigente, ver más abajo).
5. **Mide con `attribution`** cuál etapa realmente movió la aguja.

## Skills de este repo por etapa (referencia rápida)

- **Awareness**: `seo-audit`, `ai-seo`, `schema`, `google-business-profile`, `public-relations`, `social`, `influencer-marketing`
- **Acquisition**: `ads`, `ad-creative`, `programmatic-seo`, `directory-submissions`, `cold-email`, `prospecting`, `co-marketing`
- **Activation**: `onboarding`, `signup`, `cx-design-thinking-blueprint`, `product-marketing`
- **Retention**: `churn-prevention`, `emails`, `marketing-loops`, `community-marketing`, `analytics`
- **Referral**: `referrals`, `co-marketing`, `community-marketing`
- **Revenue**: `pricing`, `paywalls`, `attribution`, `revops`

## Entregable de este skill

1. **Mapa del funnel completo** — las 6 etapas, su Moment of Truth correspondiente, estado de instrumentación (KPI configurado sí/no), y meta numérica (si existe).
2. **Brecha prioritaria** — la etapa más débil, justificada.
3. **Plan de acción** por etapa, con el skill correspondiente invocado.
4. **Tablero de KPIs** — lista concreta de qué medir en GA4/GSC/Ads/GBP para esa etapa, con el nombre exacto del evento/métrica a configurar.

## Referencias
- Dave McClure, "Startup Metrics for Pirates" (2007) — AARRR original de 5 etapas.
- Jim Lecinski / Google, *Winning the Zero Moment of Truth* (2011) — origen de ZMOT.
- P&G (A.G. Lafley, 2005) — origen de First/Second Moment of Truth.
- Google Analytics, cambio oficial de "conversiones" a "eventos clave", 21 de marzo de 2024.
- Verifica vigencia de nombres de reportes/funciones específicas de GA4/Ads (cambian con frecuencia) contra la documentación oficial de Google antes de un entregable formal.
