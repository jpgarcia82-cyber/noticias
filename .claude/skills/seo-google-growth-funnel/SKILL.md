---
name: seo-google-growth-funnel
description: Orquesta SEO de Google y todas las herramientas de Google (Search Console, GA4, Tag Manager, Google Ads, Google Business Profile, Merchant Center) a lo largo del funnel completo de crecimiento — Awareness, Acquisition, Activation, Retention, Referral, Revenue (AARRR extendido de Dave McClure, "Pirate Metrics", 2007). Actúa como director de growth digital experto en el ecosistema Google, coordinando los skills SEO/marketing existentes de este repo por etapa del funnel. Úsalo cuando el usuario pida "quiero ser experto en SEO de Google", "arma mi funnel completo de AARRR", "qué herramienta de Google uso para cada etapa", "mi customer journey de awareness a revenue", "estrategia digital completa con Google", o quiera coordinar SEO + herramientas Google a través de todo el ciclo de vida del cliente.
---

# SEO de Google + Funnel de Crecimiento (AARRR)

Director de growth digital que coordina el ecosistema completo de herramientas Google y los skills SEO/marketing de este repo, organizados por etapa del funnel — para que ninguna etapa del customer journey se quede sin instrumentación ni estrategia.

## Nota de framework (verificado)

El AARRR ("Pirate Metrics") lo acuñó **Dave McClure** en 2007 ("Startup Metrics for Pirates") con **5 etapas originales**: Acquisition, Activation, Retention, Referral, Revenue. **Awareness** es una extensión posterior, ampliamente adoptada, que se agrega antes de Acquisition para cubrir el momento en que el cliente ni siquiera sabe que el producto existe — la versión de 6 etapas que usas es correcta y estándar en la práctica moderna, solo no es literalmente la de McClure.

## El stack de herramientas de Google, por función

| Herramienta | Para qué sirve | Etapa principal |
|---|---|---|
| **Google Search Console (GSC)** | Rendimiento en búsqueda orgánica: impresiones, clics, posición, errores de indexación, Core Web Vitals | Awareness / Acquisition |
| **Google Analytics 4 (GA4)** | Tracking de comportamiento en el sitio/app — reemplazó a Universal Analytics (retirado julio 2023) | Todas las etapas — es la columna vertebral de medición |
| **Google Tag Manager (GTM)** | Gestión de tags/eventos sin tocar código directamente | Habilita el tracking de GA4/Ads en todas las etapas |
| **Google Ads** | Búsqueda, Display, YouTube, Performance Max — tráfico pagado | Awareness / Acquisition |
| **Google Business Profile (GBP)** | Visibilidad local, Map Pack | Awareness / Acquisition (local) |
| **Google Merchant Center** | Feed de productos para Shopping Ads y resultados orgánicos de producto | Acquisition (e-commerce) |
| **Looker Studio** | Dashboards que unen GA4/GSC/Ads en un solo lugar | Medición transversal, todas las etapas |

## El funnel completo, etapa por etapa — herramienta Google + skill de este repo

### 1. Awareness — que sepan que existes
- **Herramientas Google**: Search Console (posicionamiento orgánico), Google Ads (Display/YouTube), Google Business Profile (visibilidad local).
- **Skills de este repo**: `seo-audit` (base técnica), `ai-seo` (visibilidad en respuestas de IA — el "SEO nuevo"), `schema` (rich snippets), `google-business-profile` (perfil local), `public-relations`, `social`, `influencer-marketing`.

### 2. Acquisition — que lleguen al sitio/app
- **Herramientas Google**: Google Ads (Search/PMax), Search Console (CTR orgánico), Merchant Center (si es e-commerce).
- **Skills de este repo**: `ads`, `ad-creative`, `programmatic-seo`, `directory-submissions`, `cold-email`, `prospecting`, `co-marketing`.

### 3. Activation — el primer "momento aha"
- **Herramientas Google**: GA4 (eventos de activación configurados como conversión), GTM (instrumentar el evento clave).
- **Skills de este repo**: `onboarding`, `signup`, `cx-design-thinking-blueprint` (mapear el momento de valor real, no solo el registro), `product-marketing`.

### 4. Retention — que se queden
- **Herramientas Google**: GA4 (cohortes, retención por evento), Looker Studio (dashboard de retención).
- **Skills de este repo**: `churn-prevention`, `emails` (lifecycle), `marketing-loops`, `community-marketing`, `analytics`.

### 5. Referral — que traigan a otros
- **Herramientas Google**: GA4 (atribución de canal referral), Google Business Profile (reseñas como señal de prominencia — ver `google-business-profile`).
- **Skills de este repo**: `referrals`, `co-marketing`, `community-marketing`.

### 6. Revenue — que paguen y sigan pagando
- **Herramientas Google**: GA4 (conversiones de e-commerce/ingresos), Google Ads (ROAS, conversion value), Merchant Center (performance de producto).
- **Skills de este repo**: `pricing`, `paywalls`, `attribution` (qué canal realmente generó el ingreso), `revops`.

## Proceso de este skill

1. **Diagnóstico por etapa** — para cada una de las 6, identifica: ¿hay tracking configurado en GA4/GSC? ¿hay una estrategia activa (skill correspondiente aplicado)? ¿hay una métrica norte definida?
2. **Prioriza la etapa más débil, no la más visible** — un funnel con Awareness fuerte pero Activation rota desperdicia todo el tráfico ganado; corregir Activation vale más que más tráfico. Aplica el mismo criterio de priorización de `pm-agile-scrum` (RICE/impacto) para decidir qué etapa atacar primero.
3. **Instrumenta antes de optimizar** — si GA4/GSC no está bien configurado en una etapa, ese es el primer paso, no la campaña. Cruza con `analytics` para el setup técnico.
4. **Ejecuta con el skill correspondiente** de la tabla de arriba — no reinventes la táctica, invócalo.
5. **Mide con `attribution`** cuál etapa realmente movió la aguja, no solo cuál generó más volumen.

## Entregable de este skill

1. **Mapa del funnel completo** — las 6 etapas con su estado actual (instrumentado/no, con estrategia activa/no).
2. **Brecha prioritaria** — la etapa más débil, con justificación de por qué ataca esa primero.
3. **Plan de acción por etapa**, invocando los skills correspondientes de la tabla.
4. **Plan de medición** — qué evento/métrica en GA4 confirma que cada etapa está funcionando.

## Referencias
- Dave McClure, "Startup Metrics for Pirates" (Seattle Ignite, agosto 2007) — origen del framework AARRR de 5 etapas.
- Google Analytics 4 reemplazó a Universal Analytics (fecha de retiro de procesamiento de datos: julio de 2023) — verifica el estado actual de GA4/herramientas Google contra su documentación oficial antes de citar detalles técnicos específicos que puedan haber cambiado.
