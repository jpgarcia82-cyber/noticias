---
name: sovereign-wealth-desk
description: Aplica los modelos documentados de fondos soberanos de inversión — NBIM/Norway Government Pension Fund Global (sesgo cero a activos domésticos, núcleo pasivo, inversión responsable a escala) y CPPIB Canada Pension Plan (enfoque de portafolio total, inversión directa, gestión interna) — para diseñar asignación estratégica de activos de capital soberano/perpetuo. Úsalo cuando el usuario pida "diseña la asignación de un fondo soberano", "aplica el modelo NBIM/Noruega", "aplica el enfoque de portafolio total de CPPIB", "compara el modelo Noruega vs Canadá", "cómo maneja un fondo soberano el sesgo doméstico", o gestione capital de un fondo soberano/pensión pública a gran escala.
---

# Sovereign Wealth Desk

Dos modelos documentados y públicamente auditables de gestión de capital soberano de largo plazo — Noruega (pasivo, transparente, escala máxima) y Canadá (activo, directo, interno) — representan los dos extremos legítimos del espectro, y la elección entre ellos depende de escala y capacidad de gobernanza, no de cuál es "mejor" en abstracto.

## 1. Modelo NBIM / Norway Government Pension Fund Global (GPFG)

Fuente verificada: reportes anuales de Norges Bank Investment Management (NBIM) y documentos oficiales del gobierno noruego. El GPFG (conocido como "Oil Fund") se estableció en 1990 para invertir el excedente de ingresos petroleros de Noruega. AUM aproximado de US$2.05 billones (mayo 2026, verificado vía NBIM), invertido en su totalidad **fuera de Noruega** — aproximadamente 70% en renta variable (~7,100 empresas) y 30% en renta fija.

**Principios documentados**:
- **Cero sesgo doméstico (home-country bias)** — el fondo no invierte en Noruega. Racional explícito: la economía noruega ya está expuesta al riesgo petrolero vía el propio PIB; el fondo existe precisamente para **diversificar lejos** de ese riesgo concentrado, no para reforzarlo.
- **Núcleo de renta variable pasiva** — bajo costo, transparente, escalable — apropiado dado el tamaño del fondo, donde gestión activa a esa escala enfrenta límites de capacidad.
- **Inversión responsable a escala** — integración ESG, engagement activo con empresas en cartera, y exclusiones documentadas por criterios éticos definidos por el Parlamento noruego.
- **Horizonte de inversión largo** — capital paciente, tolerancia a iliquidez donde aplica.
- **Transparencia y rendición de cuentas** al público noruego — reportes públicos detallados, a diferencia de la mayoría de fondos soberanos.

## 2. Modelo CPPIB / Canada Pension Plan Investment Board

Fuente verificada: reportes anuales de CPP Investments. Principios documentados:
- **Enfoque de portafolio total (Total Portfolio Approach)** — cada activo se evalúa por su contribución absoluta y relativa al portafolio completo, no en silos por clase de activo aislada.
- **Gestión interna** — construcción de experiencia in-house en vez de depender completamente de gestores externos, con el objetivo de capturar el costo/margen que de otro modo iría al gestor externo.
- **Inversión directa** — posesión directa de activos (ej. infraestructura, real estate, private equity directo) en vez de solo exposición vía fondos de terceros.
- **Apalancamiento dentro de renta fija** — usar leverage específicamente en renta fija para amplificar retorno sin añadir riesgo de renta variable adicional.
- **Portafolio de referencia (reference portfolio)** — un benchmark pasivo simple usado como vara de comparación de gobernanza para justificar la complejidad adicional del enfoque activo/directo.

## 3. Comparación Noruega vs. Canadá — cuándo aplica cada uno

| Dimensión | Modelo Noruega (NBIM) | Modelo Canadá (CPPIB) |
|---|---|---|
| Gestión | Predominantemente pasiva | Activa, interna, directa |
| Costo | Muy bajo (bps mínimos) | Mayor costo interno, justificado si genera alpha neto de ese costo |
| Escala mínima requerida | Viable a cualquier escala grande | Requiere AUM suficiente para justificar el costo fijo de construir capacidad interna — por debajo de cierto umbral, el modelo Canadá no es costo-efectivo |
| Gobernanza requerida | Menor — el núcleo pasivo no requiere equipos de inversión directa extensos | Mucho mayor — equipos internos de private equity, infraestructura, real estate directo |
| Transparencia | Máxima, reporte público exhaustivo | Reportado, pero con menor granularidad pública que Noruega |

**El umbral de decisión real**: el modelo Canadá agrega valor solo si el AUM es suficientemente grande para amortizar el costo fijo de construir capacidad interna de inversión directa — para un fondo soberano/pensión de menor escala, replicar el modelo Noruega (núcleo pasivo, bajo costo) suele ser la elección más defendible, no una limitación.

## Entregable de este skill

1. **SAA propuesta** — clase de activo, % objetivo, benchmark, justificación — indicando explícitamente si el diseño sigue predominantemente el modelo Noruega, Canadá, o un híbrido justificado.
2. **Análisis de sesgo doméstico** — argumento económico y exposición recomendada, explícito para el país/mandato específico (no todo mandato debe replicar el cero sesgo de Noruega si la economía del país no tiene la misma concentración de riesgo).
3. **Comparación Noruega vs. Canadá** aplicada al AUM y capacidad de gobernanza reales del mandato — con el umbral de escala explícito para justificar (o descartar) el modelo Canadá.
4. **Política de moneda** — si se cubre o no exposición cambiaria, y por qué, dado el tamaño del fondo.

## Cruce con otros skills de este repo

- `endowment-strategy-desk` — marco paralelo de capital perpetuo, comparte tolerancia a iliquidez y horizonte largo, pero con objetivo/gobernanza distintos (institución vs. nación).
- `macro-rates-monitor` — contexto macro relevante para la política de moneda y renta fija del fondo soberano.

## Referencias
- Norges Bank Investment Management (NBIM), reportes anuales — [nbim.no/en/news-and-insights/reports](https://www.nbim.no/en/news-and-insights/reports/) — AUM (~US$2.05 billones, mayo 2026) y asignación (~70% renta variable / 30% renta fija) verificados vía búsqueda web; confirmar cifra exacta contra el reporte más reciente antes de un entregable formal, cambia trimestralmente.
- CPP Investments, reportes anuales — verificar principios y cifras de AUM vigentes antes de citar en un entregable formal.
- Government Pension Fund of Norway — Wikipedia y fuentes NBIM, establecido 1990.
