---
name: quant-trading-desk
description: Diseña y evalúa estrategias de trading cuantitativo — señales sistemáticas (momentum, mean reversion, factor investing), backtesting con controles de sobreajuste (walk-forward, out-of-sample, corrección por múltiples pruebas), métricas de riesgo/retorno (Sharpe, Sortino, máximo drawdown, tasa de aciertos vs. ratio de pago), y detección de anomalías de mercado. Complemento cuantitativo de los skills de análisis fundamental de este repo. Úsalo cuando el usuario pida "diseña una estrategia de trading sistemático", "backtestea esta señal", "cómo evito el overfitting en mi estrategia", "calcula el Sharpe/Sortino de esto", "detecta anomalías o edges de mercado", o quiera pasar de una idea de trading a una estrategia cuantitativa evaluada con rigor estadístico.
---

# Quant Trading Desk

Diseña y evalúa estrategias sistemáticas con el mismo rigor que un desk cuantitativo institucional exige antes de arriesgar capital: una señal sin backtest limpio y sin control de sobreajuste no es una estrategia, es una coincidencia histórica disfrazada de edge.

## 1. Tipos de señales sistemáticas

- **Momentum** — activos que han subido/bajado recientemente tienden a continuar la tendencia en el corto/mediano plazo (documentado extensamente en la literatura de factor investing, ej. Jegadeesh & Titman 1993 para momentum de acciones 3-12 meses).
- **Mean reversion (reversión a la media)** — precios que se desvían significativamente de un promedio/valor justo tienden a regresar — opuesto al momentum, opera en horizontes distintos (suele ser más de corto plazo intradía/días vs. meses del momentum).
- **Factor investing** — exposición sistemática a factores de riesgo compensados (value, size, quality, low-volatility, además de momentum) — cruza con `equity-research` cuando el factor se aplica a selección fundamental de acciones, no solo señal técnica.
- **Anomalías de mercado** — patrones estadísticamente detectables que no se explican completamente por riesgo compensado conocido (ej. efectos de calendario, microestructura) — trátalas con más escepticismo que los factores documentados: muchas anomalías reportadas desaparecen o se explican por sesgos de datos al re-testearlas fuera de la muestra original.

## 2. Backtesting — la parte que casi siempre se hace mal

El backtest no prueba que la estrategia funcione — prueba que no se puede rechazar todavía. La disciplina está en no engañarse a uno mismo:

1. **Walk-forward / out-of-sample real** — divide los datos en periodo de entrenamiento (donde se ajustan parámetros) y periodo de prueba nunca visto durante el ajuste. Un backtest que solo reporta el periodo de entrenamiento no es un backtest, es un ajuste de curva.
2. **Corrección por múltiples pruebas (multiple testing)** — si se probaron 50 variantes de la señal y se reporta solo la mejor, esa "mejor" tiene alta probabilidad de ser ruido con suerte, no señal real. Reporta cuántas variantes se probaron, no solo el resultado ganador (deflated Sharpe ratio o Bonferroni son enfoques estándar para corregir esto).
3. **Costos de transacción y slippage reales** — un backtest sin comisiones, spread y slippage sistemáticamente sobreestima el resultado, especialmente en estrategias de alta frecuencia de operación.
4. **Look-ahead bias** — verificar explícitamente que ningún dato usado en una fecha de la señal estuviera disponible solo después de esa fecha (ej. usar el cierre del día para generar una señal que se ejecuta ese mismo cierre).
5. **Supervivencia (survivorship bias)** — el universo de activos del backtest debe incluir los que quebraron/fueron deslistados, no solo los sobrevivientes actuales.

## 3. Métricas de evaluación — catálogo, con definición exacta

| Métrica | Qué mide | Fórmula/definición |
|---|---|---|
| **Sharpe Ratio** | Retorno ajustado por riesgo total (volatilidad) | (Retorno del portafolio − tasa libre de riesgo) / desviación estándar del retorno |
| **Sortino Ratio** | Retorno ajustado solo por riesgo a la baja (downside) | (Retorno − tasa libre de riesgo) / desviación estándar de retornos negativos únicamente — más apropiado que Sharpe cuando la distribución de retornos no es simétrica |
| **Máximo Drawdown** | Peor caída de pico a valle en el periodo | % de caída desde el máximo histórico del equity curve hasta el mínimo posterior, antes de recuperar el máximo previo |
| **Tasa de aciertos (win rate)** | % de operaciones ganadoras | Operaciones ganadoras / total de operaciones — **no usar sola**: una tasa de aciertos alta con pérdidas grandes y ganancias pequeñas puede ser una estrategia perdedora neta |
| **Ratio de pago (payoff ratio)** | Tamaño promedio de ganancia vs. pérdida | Ganancia promedio por operación ganadora / pérdida promedio por operación perdedora — se evalúa siempre junto con la tasa de aciertos, nunca aislado |
| **Calmar Ratio** | Retorno anualizado vs. peor drawdown | Retorno anualizado / máximo drawdown — penaliza estrategias con retornos buenos pero caídas severas |

## 4. Riesgos específicos a señalar siempre

- **Sobreajuste (overfitting)** — el riesgo más común y más caro: una estrategia con demasiados parámetros ajustados a datos históricos específicos que no generaliza a datos nuevos.
- **Capacidad/impacto de mercado** — una estrategia que funciona con capital pequeño puede no ser viable a escala (mover el precio al ejecutar, especialmente en mean reversion de activos poco líquidos).
- **Régimen de mercado** — una señal calibrada en un régimen (ej. baja volatilidad, tasas bajas) puede fallar sistemáticamente cuando el régimen cambia — señala explícitamente en qué periodo/régimen se probó la estrategia.

## Cruce con otros skills de este repo

- `equity-research`, `earnings-analysis` — cuando la señal cuantitativa se combina con análisis fundamental (factor investing con inputs fundamentales).
- `portfolio-monitoring`, `portfolio-rebalance` — implementación y seguimiento de una estrategia sistemática ya validada dentro de un portafolio real.
- `macro-rates-monitor` — contexto macro/de tasas que puede explicar cambios de régimen relevantes para la estrategia.

## Entregable de este skill

1. **Definición precisa de la señal** — regla exacta de entrada/salida, sin ambigüedad.
2. **Resultados de backtest** con periodo de entrenamiento y out-of-sample separados explícitamente, costos de transacción incluidos.
3. **Tabla de métricas** (Sharpe, Sortino, máximo drawdown, win rate, payoff ratio, Calmar).
4. **Riesgos identificados** — sobreajuste, capacidad, dependencia de régimen — explícitos, no solo el resultado positivo.
5. **Veredicto**: ¿la evidencia soporta que esto es señal real o es indistinguible de ruido dado cuántas variantes se probaron?

## Referencias
- Michael E. Porter no aplica aquí — ver `strategy-consulting-desk` para ese framework.
- Jegadeesh, N. & Titman, S., "Returns to Buying Winners and Selling Losers", *Journal of Finance*, 1993 — evidencia empírica original de momentum en acciones.
- Bailey, D. & López de Prado, M., "The Deflated Sharpe Ratio: Correcting for Selection Bias, Backtest Overfitting and Non-Normality", *Journal of Portfolio Management*, 2014 — método estándar de corrección por múltiples pruebas citado arriba.
- Verifica cifras de mercado específicas (retornos, correlaciones actuales) contra datos de mercado reales antes de un entregable formal — este skill define metodología, no sustituye datos de precios reales.
