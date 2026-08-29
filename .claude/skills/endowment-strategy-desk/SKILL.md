---
name: endowment-strategy-desk
description: Aplica los modelos documentados de inversión de fondos patrimoniales (endowment) de largo plazo — el Modelo Yale de David Swensen (Pioneering Portfolio Management) y el marco de Harvard Management Company — con asignación estratégica de activos, prima de iliquidez, política de gasto sostenible, y equidad intergeneracional. Úsalo cuando el usuario pida "diseña una asignación de activos estilo Yale/Swensen", "cuál es la política de gasto sostenible de este fondo", "aplica el modelo de endowment a este mandato", "cómo cuantifico la prima de iliquidez", "equidad intergeneracional en este portafolio", o gestione un fondo patrimonial/dotación con horizonte perpetuo o muy largo.
---

# Endowment Strategy Desk

Gestión de capital con horizonte perpetuo (o casi) — el marco que institucionalizó Yale bajo David Swensen y que Harvard Management Company documenta de forma paralela: diversificación genuina, tolerancia a iliquidez a cambio de retorno, y una política de gasto que preserve poder adquisitivo para generaciones futuras sin sacrificar a los beneficiarios actuales.

## 1. Modelo Yale (David Swensen)

Fuente verificada: David Swensen, *Pioneering Portfolio Management: An Unconventional Approach to Institutional Investment* (2000, revisado 2009) — Swensen dirigió el Yale Investments Office y expandió el endowment de Yale de $1.3 mil millones (1985) a $42.3 mil millones (30 de junio de 2021), con un retorno anualizado del 13.7% durante su gestión de 36 años.

**Principio central**: a diferencia del portafolio tradicional 60/40, el Modelo Yale reduce deliberadamente la asignación a renta fija líquida de bajo retorno y prioriza activos alternativos ilíquidos (private equity, bienes raíces, timber, infraestructura, hedge funds) que capturan una **prima de iliquidez** — retorno adicional no disponible en mercados públicos, como compensación por el bloqueo de capital a 10-15 años.

**Clases de activo del marco Swensen**:
- Renta variable doméstica — núcleo de liquidez y retorno.
- Renta variable desarrollada extranjera — diversificación + retorno.
- Mercados emergentes — mayor retorno esperado + mayor riesgo.
- Activos reales — protección contra inflación + retorno.
- Private equity — captura de la prima de iliquidez.
- Retorno absoluto (hedge funds) — diversificación no correlacionada.

**Requisito crítico, casi siempre ignorado**: capturar la prima de iliquidez requiere la infraestructura de gobernanza para evaluarla y sostenerla — capital permanente, reglas de gasto suavizadas, y capacidad interna real para seleccionar gestores de private equity/hedge funds. Aplicar el modelo Yale sin esa infraestructura de gobernanza no reproduce el resultado de Yale, solo copia la etiqueta de la asignación de activos.

## 2. Modelo Harvard Management Company (HMC)

Principios documentados (per reportes anuales de HMC), paralelos y complementarios al modelo Yale:
- **Diversificación genuina** — no basta con tener etiquetas de distintas clases de activo si el riesgo subyacente está correlacionado.
- **Horizonte de inversión largo** — capacidad de capturar la prima de iliquidez.
- **Rebalanceo contracíclico** — añadir riesgo en mercados a la baja, no reducirlo (lo opuesto al comportamiento natural/emocional del inversionista).
- **Gasto sostenible** — balance explícito entre beneficiarios actuales y generaciones futuras.
- **Análisis de retorno real** — retorno nominal menos gasto menos inflación, no solo retorno nominal.
- **Equidad intergeneracional** — ¿el fondo protege el poder adquisitivo para las generaciones futuras, o lo está erosionando por gasto excesivo hoy?
- **Presupuesto de riesgo** — tolerancia total de riesgo del portafolio y su asignación explícita por clase de activo.

## 3. Política de gasto — el punto donde más fondos fallan

Una tasa de gasto (spending rule) típica se expresa como % del valor del fondo (a menudo sobre un promedio móvil de varios años, no el valor puntual, para suavizar volatilidad). El análisis de sostenibilidad debe responder:
- ¿La tasa de gasto es sostenible para un horizonte perpetuo dado el retorno esperado y la inflación proyectada?
- Sensibilidad: ¿qué pasa con el poder adquisitivo del fondo a 20/30 años si el retorno real es 1-2 puntos menor al esperado?

## Entregable de este skill

1. **Asignación estratégica de activos (SAA)** estilo Yale/HMC — % por clase de activo, con justificación de la prima de iliquidez esperada de cada clase ilíquida.
2. **Análisis de política de gasto** — tasa propuesta, sostenibilidad proyectada, sensibilidad a escenarios de retorno más bajo.
3. **Requisitos de gobernanza** — qué capacidad interna se necesita para ejecutar la asignación propuesta (selección de gestores, due diligence de private equity/hedge funds) vs. la capacidad actual, y la brecha explícita.
4. **Análisis de retorno real y equidad intergeneracional** — no solo retorno nominal.
5. Señala explícitamente cuándo el mandato del usuario (AUM, horizonte, capacidad de gobernanza) **no** soporta una réplica fiel del modelo Yale — un fondo pequeño sin infraestructura de gobernanza no debería imitar la asignación a ilíquidos de un endowment de $40B+ sin ajustar por esa diferencia real.

## Cruce con otros skills de este repo

- `portfolio-monitoring`, `portfolio-rebalance` — implementación y seguimiento continuo de la SAA definida aquí.
- `sovereign-wealth-desk` — marco paralelo para capital perpetuo a escala soberana (NBIM, CPPIB) — comparte horizonte largo y tolerancia a iliquidez pero difiere en gobernanza y objetivo (preservación intergeneracional de una nación vs. de una institución).

## Referencias
- David Swensen, *Pioneering Portfolio Management: An Unconventional Approach to Institutional Investment*, primera edición 2000, revisada 2009.
- Cifras del endowment de Yale (crecimiento de $1.3B en 1985 a $42.3B en junio 2021, retorno anualizado 13.7%) verificadas vía búsqueda web — confirmar contra el reporte anual más reciente de Yale Investments Office antes de citar en un entregable formal, ya que el AUM y el retorno cambian cada año fiscal.
- Reportes anuales de Harvard Management Company (HMC) — verificar principios y cifras vigentes contra el reporte anual más reciente antes de un entregable formal.
