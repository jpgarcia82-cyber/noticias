---
name: cfo-fintech-credito
description: Actúa como CFO de una fintech de crédito — catálogo completo de indicadores (originación, calidad de cartera/riesgo crediticio, rentabilidad, unit economics, liquidez/fondeo, capital regulatorio), estrategia para construir modelos financieros de crédito completos y correctos (ECL de IFRS 9, cascada de provisiones, balance de un prestamista), metodología de auditoría de cualquier modelo (lógica, estructura, fórmulas, balance, hardcodes), y benchmarking contra la industria para juzgar si un resultado hace sentido de negocio. Úsalo cuando el usuario pida "qué indicadores debo medir en mi fintech de crédito", "audita este modelo financiero", "compara mis resultados con la industria", "construye/revisa mi modelo de originación de crédito", "cuál es mi cost of risk/NPL/PAR30", "cómo modelo el ECL bajo IFRS 9", o actúe como CFO tomando decisiones financieras de una empresa de crédito.
---

# CFO de Fintech de Crédito — Indicadores, Modelos, Auditoría, Benchmarking

Cuatro capacidades de un CFO real de una fintech de crédito, integradas: **medir** (el catálogo completo de indicadores), **construir** (modelos financieros correctos desde la lógica de negocio real de un prestamista), **auditar** (verificar que cualquier modelo —propio o ajeno— es lógicamente correcto), y **contrastar** (saber si un resultado hace sentido comparado con la industria, no solo si el modelo "corre bien").

## 1. Indicadores de originación y volumen

| Indicador | Qué mide | Fórmula |
|---|---|---|
| **Volumen de originación** | Monto total colocado en el periodo | Suma de principal desembolsado |
| **Número de créditos otorgados** | Volumen en unidades | Conteo de originaciones |
| **Ticket promedio** | Tamaño medio del crédito | Volumen originado / número de créditos |
| **Tasa de aprobación** | % de solicitudes aprobadas | Créditos aprobados / solicitudes recibidas |
| **Tasa de conversión (funnel completo)** | % de solicitantes que llegan a desembolso | Créditos desembolsados / solicitudes iniciadas |
| **Tiempo de originación** | Velocidad del proceso, de solicitud a desembolso | Días/horas promedio |

## 2. Indicadores de calidad de cartera y riesgo crediticio (el núcleo de un CFO de crédito)

**Buckets de mora** — la base de todo lo demás: **Corriente (0 DPD)**, **1-30 DPD**, **31-60 DPD**, **61-90 DPD**, **90+ DPD (non-performing / vencida)**. DPD = *Days Past Due*, días de atraso desde la fecha de pago vencida.

| Indicador | Fórmula/definición | Rango de referencia por producto (orientativo, verifica contra tu propio histórico) |
|---|---|---|
| **NPL Ratio** (cartera vencida) | Saldo de créditos con 90+ DPD / saldo total de cartera activa | Crédito de consumo prime: 1-4%. Subprime: 8-25%. Crédito PyME: 4-12%. Estos son rangos orientativos de la industria, no un estándar regulatorio fijo — confirma contra el benchmark específico de tu producto/geografía antes de usarlos como meta. |
| **PAR30 / PAR90** (*Portfolio At Risk*) | Saldo de créditos con 30+ (o 90+) DPD / saldo total de cartera — a diferencia del NPL, se mide sobre el **saldo insoluto completo** de la cuenta en mora, no solo la cuota vencida, y captura deterioro más temprano que el NPL (30 DPD adelanta señal 60 días antes que 90 DPD) |
| **Cost of Risk (CoR)** | Provisiones para pérdidas crediticias del periodo (anualizadas) / saldo promedio de cartera, expresado en puntos base | Mide el costo esperado de la cartera, no la pérdida ya materializada — es el indicador que un CFO revisa primero para saber si el apetito de riesgo está calibrado correctamente |
| **Tasa de castigo (charge-off rate)** | Saldo castigado (dado de baja como incobrable) en el periodo / saldo promedio de cartera | Pérdida ya reconocida como definitiva, distinta de NPL (que aún se considera "en cobranza") |
| **Tasa de recuperación** | Monto recuperado de cartera castigada / saldo castigado | Mide la efectividad de cobranza extrajudicial/judicial post-castigo |
| **First Payment Default (FPD)** | % de créditos que caen en mora en su primer pago programado | Señal de calidad de originación/scoring, no de cobranza — un FPD alto apunta a un problema en el modelo de aprobación, no en el proceso de cobro |
| **Índice de cobertura de reservas (Coverage Ratio)** | Reservas/provisiones acumuladas / saldo de cartera vencida (90+ DPD) | Mide qué tan protegido está el balance ante la cartera ya deteriorada — un ratio menor a 100% significa que las reservas no cubren la pérdida esperada de la cartera ya vencida |
| **Vintage Analysis** | Desempeño de una cohorte de créditos (originados en el mismo mes/trimestre) medido en el tiempo transcurrido desde su originación — tasa de castigo acumulada, % en cada bucket de DPD, por "edad" del vintage | Es la herramienta más poderosa para comparar calidad de originación entre periodos de forma justa (cada cohorte contra sí misma en el mismo punto de madurez), no cartera total mezclando vintages de distinta edad |
| **Roll Rate Analysis** | Probabilidad de que una cuenta "ruede" de un bucket de mora al siguiente (o se "cure" y regrese a corriente) en un periodo, típicamente mensual | Predictivo — permite proyectar el NPL futuro antes de que ocurra, siguiendo el flujo de cuentas entre buckets |

## 3. Indicadores de rentabilidad del negocio de crédito

| Indicador | Fórmula |
|---|---|
| **Net Interest Margin (NIM)** | (Ingresos por intereses − gastos por intereses/fondeo) / activos productivos promedio |
| **Yield de cartera** | Ingresos por intereses y comisiones del crédito / saldo promedio de cartera |
| **Costo de fondeo (Cost of Funds)** | Gasto financiero total / saldo promedio de fuentes de fondeo (deuda, warehouse, depósitos si aplica) |
| **Spread** | Yield de cartera − costo de fondeo |
| **Margen de contribución por crédito** | Ingresos del crédito − costo de fondeo asignado − provisión esperada (CoR) − costos variables de originación/cobranza |
| **Efficiency Ratio** | Gastos operativos / ingresos totales — más bajo es mejor; mide cuánto cuesta operar por cada peso de ingreso |
| **ROA** | Utilidad neta / activos totales promedio |
| **ROE** | Utilidad neta / capital contable promedio |

## 4. Unit economics (nivel cliente/crédito, no solo cartera agregada)

Cruza con `unit-economics` de este repo para la metodología general — aquí la variante específica de crédito:
- **CAC** (costo de adquisición) — debe compararse contra el **margen de contribución esperado del cliente a lo largo de su relación crediticia** (créditos recurrentes/renovaciones), no solo del primer crédito.
- **LTV crediticio** — valor presente de los márgenes de contribución esperados de todos los créditos futuros de un cliente, descontados por la probabilidad de retención y ajustados por el CoR esperado de cada renovación.
- **Payback period** — en cuántos créditos/meses el margen de contribución acumulado cubre el CAC inicial.

## 5. Liquidez y estructura de fondeo

- **Stack de fondeo** — composición por fuente (capital propio, deuda senior, warehouse facility, deuda subordinada, depósitos si es SOFIPO) con su costo y plazo — un CFO de crédito vive y muere por el **descalce de plazos** entre el activo (créditos a X meses) y el pasivo (fondeo a Y meses).
- **Utilización de warehouse facility** — saldo dispuesto / línea total disponible — señal de cuánta capacidad de originación queda antes de necesitar una nueva ronda de fondeo.
- **Runway de efectivo** — meses de operación cubiertos con el efectivo disponible al ritmo de quema actual — crítico en fintechs pre-rentabilidad.
- **Razón corriente / prueba del ácido** — para la porción no relacionada con cartera del balance (obligaciones operativas de corto plazo).

## 6. Capital y marco regulatorio (México — verificar vigencia)

Fuente verificada: Ley para Regular las Instituciones de Tecnología Financiera ("Ley Fintech", DOF, 9 de marzo de 2018) crea la figura de **ITF (Institución de Tecnología Financiera)** regulada por la **CNBV**, con 6 modelos (pagos electrónicos, crowdfunding, activos virtuales, asesoría/gestión de inversiones, sandbox regulatorio, Open Banking). Capital mínimo verificado para instituciones de crowdfunding con un solo tipo de operación: **500,000 UDIs**; si cotizan deuda en el RNV, **700,000 UDIs**. Un originador de crédito digital vía **SOFOM** (Sociedad Financiera de Objeto Múltiple) generalmente **no cae bajo la Ley Fintech** — opera bajo la regulación general de SOFOM/CNBV, sin el mismo requisito de capital mínimo de una ITF. Una **SOFIPO** (captadora de depósitos, enfocada en inclusión financiera) sí requiere capital mínimo regulado (del orden de $20-30M MXN, verificar cifra vigente) por operar con fondeo del público.

**Implicación para el CFO**: la figura legal exacta bajo la que opera la fintech (SOFOM no regulada, SOFOM regulada, SOFIPO, ITF) determina requisitos de capital, supervisión y reporteo completamente distintos — nunca asumas el régimen, confírmalo primero. Cruza con `cumplimiento-regulatorio-mx` y `fintech-docs-mx` para el detalle regulatorio/documental completo.

## 7. Construcción de modelos financieros perfectos — la lógica específica de un prestamista

Un modelo de crédito no es un 3-statement model genérico con más filas — tiene mecánica propia que si se omite, el modelo se ve bien pero está mal:

1. **El balance de un prestamista se construye desde la cartera, no al revés** — el activo principal es la cartera de crédito (bruta) menos reservas (ECL acumulado) = cartera neta. El pasivo principal es el stack de fondeo. El modelo empieza en originación mensual → cartera se acumula por cohortes (vintages) → cada vintage madura según su curva de mora propia → de ahí sale el ECL, el interés devengado, y los castigos.
2. **Provisión bajo IFRS 9 — modelo de 3 etapas (Expected Credit Loss)**, fuente verificada IFRS 9.5.5:
   - **Etapa 1**: sin incremento significativo de riesgo desde el origen → se provisiona **ECL a 12 meses** (pérdida esperada por eventos de default posibles dentro de los próximos 12 meses).
   - **Etapa 2**: incremento significativo de riesgo desde el origen (ej. atraso, deterioro de score) pero aún no en default → se provisiona **ECL de por vida (lifetime)**.
   - **Etapa 3**: crédito ya deteriorado/en default → **ECL de por vida**, y el interés se calcula sobre el saldo neto (después de reserva), no sobre el saldo bruto.
   - El modelo debe mover créditos entre etapas dinámicamente según reglas de "incremento significativo de riesgo" (ej. X+ DPD, caída de score), no con una tasa de provisión fija para toda la cartera — esa simplificación es el error más común y más caro en modelos de crédito hechos rápido.
3. **Cascada de provisiones (waterfall)** — Reserva inicial + provisión del periodo (nuevo ECL) − castigos del periodo + recuperaciones = Reserva final. Si esta cascada no cuadra exactamente contra el balance de reservas, el modelo tiene un error de lógica, no solo de formato.
4. **Modelado por cohortes (vintage-based), no por cartera agregada** — cada cohorte de originación tiene su propia curva de maduración de mora; sumar todo en un solo bucket mensual oculta si el deterioro viene de originación reciente (problema de scoring) o de cartera vieja (problema de cobranza/macro).
5. **Circularidad controlada** — el interés sobre deuda de fondeo depende del saldo de deuda, que depende del flujo de caja, que depende del interés — usa un switch de circularidad (o cálculo sobre saldo inicial del periodo, no saldo promedio circular) para que el modelo no dependa de iteración manual de Excel.
6. **Drivers explícitos y separados de los outputs** — tasa de aprobación, ticket promedio, tasa de default por vintage, tasa de recuperación, costo de fondeo: cada uno en una celda de input identificable, nunca hardcodeado dentro de una fórmula de cálculo.
7. **Escenarios y sensibilidad obligatorios** — al mínimo: caso base, estrés de mora (+X puntos de NPL), estrés de fondeo (+X puntos de costo de fondeo) — un modelo de crédito sin escenario de estrés no está completo, el riesgo de cola es la naturaleza del negocio.

Cruza con `3-statement-model` para la integración completa IS/BS/CF, y con `dcf-model` si el entregable final es una valuación de la fintech, no solo el modelo operativo.

## 8. Auditoría de cualquier modelo financiero — checklist de CFO

Cruza con `audit-xls` para la mecánica de revisión de fórmulas en spreadsheet — esta es la capa de **lógica de negocio de crédito** encima de esa auditoría técnica:

**Lógica y estructura**:
- ¿El balance cuadra? (Activo = Pasivo + Capital, en cada periodo, no solo el último).
- ¿La cascada de reservas/provisiones cuadra exactamente contra el saldo de reservas del balance?
- ¿Los créditos se mueven entre etapas ECL de forma dinámica, o hay una tasa de provisión fija disfrazada de modelo de 3 etapas?
- ¿El modelo está armado por vintage/cohorte, o mezcla toda la cartera en un solo bucket que oculta la fuente real del deterioro?
- ¿Hay circularidad sin control (sin switch, dependiendo de cálculo iterativo manual de Excel)?

**Fórmulas y consistencia**:
- ¿Los drivers (tasas, supuestos) están en celdas de input identificables, o hardcodeados dentro de fórmulas de cálculo? (un hardcode dentro de una fórmula es el error más difícil de detectar y el más caro de arrastrar).
- ¿La misma fórmula es consistente a lo largo de toda una fila/columna, o hay una celda "distinta" a la mitad que rompe el patrón? (señal clásica de un error manual no propagado).
- ¿Los signos son consistentes? (ingresos/egresos, activo/contra-activo).

**Resultados vs. sentido de negocio** (sección 9):
- ¿El NPL/PAR resultante es razonable para el tipo de producto y geografía, o es una señal de que el modelo de mora está mal calibrado?
- ¿El CoR resultante es consistente con el NIM/yield — es decir, el negocio es rentable neto de riesgo, o el modelo está mostrando una rentabilidad bruta que desaparece al restar la provisión real?
- ¿El coverage ratio es razonable (no muy por debajo de 100% sin justificación, no artificialmente alto ocultando rentabilidad)?

## 9. Comparar contra la industria — ¿el resultado hace sentido de negocio?

Un modelo puede estar matemáticamente perfecto y seguir siendo una mentira de negocio si sus resultados no se contrastan contra la realidad del sector:

- **Compara NPL/PAR30/PAR90 contra el segmento de riesgo real del producto** (prime vs. subprime vs. PyME tienen rangos completamente distintos — comparar un NPL de crédito subprime contra el benchmark de banca prime lleva a conclusiones falsas en cualquier dirección).
- **Compara el spread (yield − costo de fondeo) contra el CoR** — si el spread apenas cubre el CoR proyectado, el negocio no tiene margen real de utilidad después de riesgo, aunque el modelo "muestre ganancia" antes de provisiones.
- **Compara el efficiency ratio contra fintechs digitales comparables**, no contra banca tradicional — la estructura de costos de un originador 100% digital es estructuralmente distinta (menor costo por transacción, mayor costo de adquisición digital).
- **Señala explícitamente cuando un resultado es atípico** (NPL muy por debajo del benchmark del segmento puede ser señal de scoring excelente, o de que la cartera es demasiado joven para haber madurado su mora real — usa vintage analysis para distinguir cuál es el caso real antes de celebrar un NPL bajo).

## Cruce con otros skills de este repo

- `dcf-model`, `3-statement-model`, `comps-analysis` — construcción/valuación general, este skill aporta la mecánica específica de crédito que esos modelos genéricos no cubren.
- `audit-xls` — mecánica de auditoría de fórmulas en spreadsheet; este skill aporta el criterio de negocio de qué debe cuadrar y por qué.
- `unit-economics` — metodología general de CAC/LTV; este skill aporta la variante crediticia (renovaciones, riesgo ajustado).
- `cumplimiento-regulatorio-mx`, `fintech-docs-mx`, `seguridad-fintech` — marco legal/documental/seguridad de la operación de crédito en México.
- `macro-rates-monitor` — contexto de tasas relevante para costo de fondeo y yield de cartera.

## Entregable de este skill

1. **Tablero de indicadores** completo (originación, calidad de cartera, rentabilidad, unit economics, liquidez, capital) con la fórmula exacta de cada uno.
2. **Diagnóstico del modelo financiero actual** (si existe) contra el checklist de la sección 8 — hallazgos bloqueantes primero (balance no cuadra, cascada de reservas rota) antes que hallazgos de estilo.
3. **Comparación contra benchmarks de industria** de la sección 9, explícita sobre qué segmento/producto se está comparando — nunca un benchmark genérico sin ese contexto.
4. Si se construye un modelo nuevo: estructura por cohortes/vintages, ECL de 3 etapas dinámico, cascada de reservas verificable, drivers separados de outputs, y al menos un escenario de estrés.

## Referencias
- IFRS 9, Sección 5.5 (Impairment) — modelo de 3 etapas de Expected Credit Loss, definiciones de ECL a 12 meses y ECL de por vida (IFRS 9.5.5.5, Apéndice A, IFRS 9.5.5.3) — verificado vía búsqueda web contra múltiples fuentes de práctica contable; confirma la versión vigente del estándar antes de un entregable formal.
- Definiciones de NPL, PAR30/90, Cost of Risk, Vintage Analysis, Roll Rate Analysis — verificadas vía búsqueda web contra fuentes de la industria de lending/fintech (BBVA, HES Fintech, ListenData, Finro). Los rangos de referencia de NPL por producto (prime 1-4%, subprime 8-25%, PyME 4-12%) son **orientativos de la industria, no un estándar único citable** — confírmalos contra el benchmark específico del segmento/geografía antes de usarlos como meta de negocio.
- Ley para Regular las Instituciones de Tecnología Financiera (Ley Fintech), Diario Oficial de la Federación, 9 de marzo de 2018 — 6 modelos regulados, capital mínimo de ITF de crowdfunding (500,000 / 700,000 UDIs). Cifra de capital mínimo de SOFIPO (~$20-30M MXN) marcada explícitamente como no verificada con precisión — confírmala contra la normativa CNBV vigente antes de un entregable formal, y confirma si el vehículo legal específico del usuario (SOFOM regulada/no regulada, SOFIPO, ITF) es el correcto antes de aplicar cualquier requisito de capital.
