---
name: cx-design-thinking-blueprint
description: Diseña experiencias digitales de cliente combinando Design Thinking (metodología Stanford d.school), Customer Journey Mapping, Service Blueprint (Shostack 1984, extendido por Bitner/Ostrom/Morgan 2008), y el catálogo completo de KPIs/métricas de CX (NPS, CSAT, CES, CLV, churn, FCR) por etapa del journey y capa del blueprint — de la empatía con el usuario al mapa operativo, medido. Úsalo cuando el usuario pida "diseña la experiencia de cliente para esto", "haz un customer journey map", "necesito un service blueprint", "aplica design thinking a este problema", "qué KPIs de CX debo medir", "NPS o CSAT o CES", "cómo mejoro la experiencia digital de mis usuarios", "mapea el proceso de principio a fin, front y back", o quiera pasar de un problema de negocio a una experiencia de cliente diseñada, operativamente viable, y medida.
---

# CX — Design Thinking + Service Blueprint

Diseña experiencias de cliente en dos capas que casi siempre se hacen por separado y no deberían: **qué vive el cliente** (Design Thinking + Journey Map) y **qué tiene que pasar por dentro para que eso sea posible** (Service Blueprint). Sin la segunda capa, un diseño de experiencia bonito no sobrevive el primer día de operación real.

## Capa 1 — Design Thinking (Stanford d.school, 5 fases)

Proceso iterativo y no lineal — se salta entre fases constantemente, no es un checklist secuencial de una sola pasada.

1. **Empathize (Empatizar)** — entender al usuario real mediante observación e investigación directa, no suposiciones. Entrevistas, shadowing, revisión de quejas/soporte reales.
2. **Define (Definir)** — sintetizar los hallazgos en un enunciado de problema claro y accionable, centrado en el usuario ("[usuario] necesita [necesidad] porque [insight]"), no en la solución.
3. **Ideate (Idear)** — generar múltiples soluciones posibles antes de comprometerse con una. Divergir primero, converger después — la primera idea casi nunca es la mejor.
4. **Prototype (Prototipar)** — construir versiones tangibles y baratas de probar (wireframes, flujos clicables, incluso papel) — el objetivo es aprender rápido y barato, no construir bien a la primera.
5. **Test (Probar)** — obtener retroalimentación real de usuarios y refinar. Un test que no cambia nada del diseño no sirvió — si todo se confirma, probablemente no se probó lo suficientemente crítico.

Cruza con `pm-agile-scrum`: las salidas de Ideate/Prototype se convierten en historias de usuario del backlog; los aprendizajes de Test alimentan el siguiente Sprint Goal.

## Capa 2 — Customer Journey Map

Antes del blueprint, mapea el viaje del cliente en sus propios términos:
- **Etapas** del viaje (descubrimiento, evaluación, onboarding, uso, soporte, renovación/abandono — ajusta al producto real).
- **Acciones** del cliente en cada etapa.
- **Pensamientos y emociones** — dónde hay fricción, ansiedad, confusión, o momentos de deleite (los "momentos de la verdad").
- **Puntos de contacto (touchpoints)** — cada canal/interfaz donde el cliente toca el producto.

El journey map es la vista del cliente. El Service Blueprint (capa 3) es la vista operativa de lo mismo — se construyen juntos, no en secuencia aislada.

## Capa 3 — Service Blueprint (Shostack 1984, modelo de 5 capas de Bitner/Ostrom/Morgan 2008)

Fuente verificada: G. Lynn Shostack, "Designing Services That Deliver", *Harvard Business Review*, enero 1984 — originó el concepto y las líneas divisorias. Mary Jo Bitner, Amy Ostrom, y Felicia Morgan, "Service Blueprinting: A Practical Technique for Service Innovation", *California Management Review* 50(3), 2008 — formalizó el modelo de 5 capas que es el estándar actual.

**Las 5 capas, de arriba abajo:**

1. **Physical Evidence** — todo lo tangible que el cliente ve/toca en cada punto de contacto (interfaz de la app, email, recibo, empaque).
2. **Customer Actions** — lo que el cliente hace, paso a paso (igual que el journey map, pero ahora alineado verticalmente con lo que pasa por dentro).
3. **Onstage/Frontstage Actions** — lo que el personal/sistema hace **visible** al cliente (un agente de soporte respondiendo, una pantalla de confirmación).
4. **Backstage Actions** — lo que pasa **detrás**, invisible al cliente pero necesario (validación de KYC, cálculo de riesgo, proceso de aprobación interno).
5. **Support Processes** — sistemas y procesos internos que habilitan lo anterior (el core bancario, la base de datos, la integración con el buró de crédito).

**Las 3 líneas divisorias** (esto es lo que hace al blueprint distinto de un diagrama de flujo genérico):
- **Line of Interaction** — entre Physical Evidence/Customer Actions y Onstage Actions — cada cruce es un punto de contacto directo cliente-empresa.
- **Line of Visibility** — entre Onstage y Backstage — todo lo que está debajo, el cliente nunca lo ve. Es la línea más importante para detectar dónde se puede simplificar la experiencia visible sin tocar la complejidad operativa real.
- **Line of Internal Interaction** — entre Backstage Actions y Support Processes — dónde el proceso depende de un sistema/proveedor externo (ver `arquitecto-apis-integraciones` cuando esa dependencia cruza a un sistema externo real).

## Cómo se conectan las 3 capas en este skill

1. **Design Thinking** genera el problema bien definido y las direcciones de solución.
2. **Journey Map** aterriza esa dirección en el viaje real del cliente, etapa por etapa, con los momentos de fricción/deleite marcados.
3. **Service Blueprint** toma cada etapa del journey map y la despliega verticalmente en las 5 capas — revelando qué tiene que construirse/cambiar por dentro (backstage, support processes) para que la experiencia frontstage funcione de verdad.

Esta última capa es la que casi siempre se salta al diseñar experiencia digital — y es la que evita prometer una experiencia que el backend/proceso real no puede sostener. Cruza con `arquitecto-flujos-erpnext` cuando el Support Processes layer implica un modelo de datos/flujo transaccional nuevo, y con `qa-universal` para auditar que la experiencia diseñada es funcionalmente viable antes de construirla.

## Capa 4 — KPIs y Métricas de CX

Sin medición, el diseño de experiencia es opinión, no gestión. Cada métrica de abajo está verificada en su origen — úsala con su definición exacta, no aproximada, porque mezclarlas (ej. tratar CSAT como si fuera NPS) invalida la comparación en el tiempo.

### Métricas de percepción del cliente (survey-based, no nativas de ninguna plataforma)

| Métrica | Qué mide | Origen verificado | Cómo se calcula |
|---|---|---|---|
| **NPS** (Net Promoter Score) | Lealtad/probabilidad de recomendar | Fred Reichheld, *Harvard Business Review*, 2003, "The One Number You Need to Grow" | Escala 0-10 a "¿qué tan probable es que recomiendes...?" → % Promotores (9-10) − % Detractores (0-6). Los 7-8 son "pasivos", no cuentan en el cálculo. |
| **CSAT** (Customer Satisfaction Score) | Satisfacción con una interacción/momento puntual | Constructo estándar de investigación de satisfacción del cliente, sin un origen único citable como NPS/CES | Escala típica 1-5, % que responde 4-5 sobre el total. Se mide justo después de una interacción específica (compra, ticket de soporte), no de la relación completa. |
| **CES** (Customer Effort Score) | Qué tan fácil fue resolver algo | CEB (ahora Gartner) — Matthew Dixon, Karen Freeman, Nick Toman, *Harvard Business Review*, 2010, "Stop Trying to Delight Your Customers" | Escala 1-5 o 1-7 a "¿qué tan fácil fue [resolver tu problema/completar tu compra]?". La investigación original de CEB encontró que reducir el esfuerzo predice lealtad mejor que "deleitar" al cliente. |

**Cuándo usar cada una**: NPS para salud relacional de largo plazo (encuesta periódica, no por transacción). CSAT para un momento específico del journey (post-compra, post-soporte). CES específicamente para procesos de resolución de problemas o transacciones (checkout, soporte) — si el proceso fue difícil, CES lo va a mostrar aunque CSAT/NPS no lo capten de inmediato.

### Métricas operativas y de negocio (medibles en sistemas, no encuesta)

| Métrica | Qué mide | Dónde se mide |
|---|---|---|
| **CLV/LTV** (Customer Lifetime Value) | Valor total esperado de un cliente durante la relación | GA4 (LTV predictivo), o cálculo propio: margen promedio × vida útil promedio del cliente |
| **Churn Rate / Tasa de retención** | % de clientes que se van vs. se quedan en un periodo | Cruza con `churn-prevention`, GA4 (cohortes) |
| **First Contact Resolution (FCR)** | % de casos de soporte resueltos en el primer contacto, sin escalar | Sistema de soporte/CRM — señal directa de si el Backstage del Service Blueprint está funcionando |
| **Time to Resolution** | Tiempo promedio de principio a fin para resolver un caso | Sistema de soporte — mapea directo a la duración de la etapa "Backstage Actions" del blueprint |
| **Customer Health Score** | Score compuesto (uso, soporte, pagos, engagement) que predice riesgo de churn | Práctica estándar de Customer Success (SaaS), no una métrica única estandarizada — se construye a medida combinando las de arriba |

### Mapeo de KPIs a las capas de este skill

- **Design Thinking (fase Test)**: usa CSAT/CES sobre el prototipo probado, no solo feedback cualitativo — dale un número al aprendizaje.
- **Journey Map**: un KPI por etapa (ej. tasa de abandono en "evaluación", CSAT en "onboarding", CES en "soporte") — no un solo número agregado para todo el journey, porque oculta en qué etapa está el problema real.
- **Service Blueprint — Customer Actions**: CSAT/CES en cada punto de contacto (Line of Interaction).
- **Service Blueprint — Backstage/Support Processes**: FCR, Time to Resolution — estas son las métricas que explican *por qué* el Frontstage tiene un CSAT bajo, cuando lo tiene.
- **Relación completa**: NPS y CLV — la vista de largo plazo, no de un solo momento.

Cruza con `seo-google-growth-funnel` para el catálogo de KPIs de adquisición/activación/revenue del funnel completo — este skill cubre específicamente la experiencia y percepción del cliente, no todo el funnel de growth.

## Entregable de este skill

1. **Problem statement** (Design Thinking, fase Define) — centrado en usuario, no en solución.
2. **Journey map** con etapas, acciones, emociones/fricciones, touchpoints, y **un KPI asignado por etapa**.
3. **Service Blueprint** de al menos la(s) etapa(s) crítica(s) — 5 capas + 3 líneas, explícito qué es frontstage vs backstage.
4. **Brechas identificadas** — dónde el backstage actual no puede sostener la experiencia frontstage deseada (esto es el hallazgo más valioso del ejercicio, no un detalle secundario).
5. **Tablero de métricas de CX** — qué medir (NPS/CSAT/CES/FCR/etc.), dónde, y con qué frecuencia, mapeado a la etapa/capa correspondiente.
6. Si el gap requiere nuevo desarrollo/integración, entrega el puente hacia `pm-agile-scrum` (historias de usuario) y `arquitecto-flujos-erpnext`/`arquitecto-apis-integraciones` (qué hay que construir).

## Referencias adicionales
- Fred Reichheld, "The One Number You Need to Grow", *Harvard Business Review*, diciembre 2003 — origen de NPS.
- Matthew Dixon, Karen Freeman, Nick Toman, "Stop Trying to Delight Your Customers", *Harvard Business Review*, 2010 (investigación CEB) — origen de CES.
