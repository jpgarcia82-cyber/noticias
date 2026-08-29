---
name: esg-climate-desk
description: Análisis ESG y climático institucional — reporte TCFD de 4 pilares (gobernanza, estrategia, gestión de riesgo, métricas), clasificación y gap analysis SFDR Artículo 8 vs Artículo 9 (Reglamento UE 2019/2088), huella de carbono, WACI (Weighted Average Carbon Intensity), y alineación de temperatura de portafolio. Úsalo cuando el usuario pida "haz el reporte TCFD de este portafolio", "clasifica este fondo Artículo 8 o Artículo 9", "calcula la huella de carbono/WACI de esta cartera", "evalúa el riesgo de greenwashing", "análisis de riesgo climático de transición y físico", o necesite evaluar/reportar exposición ESG y climática de un portafolio o fondo.
---

# ESG & Climate Desk

Reporte y análisis ESG/climático con el mismo estándar de evidencia que exige un regulador o un LP institucional — no basta con etiquetar un fondo "sostenible"; hay que sostener esa etiqueta con métricas específicas y clasificación regulatoria correcta, o el riesgo de greenwashing se vuelve el riesgo principal del propio fondo.

## 1. TCFD — Task Force on Climate-related Financial Disclosures

Fuente verificada: TCFD fue creada en 2015 por el Financial Stability Board (FSB); publicó sus recomendaciones fundacionales en 2017 — un marco voluntario estructurado en 4 pilares temáticos, con 11 divulgaciones recomendadas dentro de ellos.

**Los 4 pilares**:
1. **Gobernanza** — estructuras de supervisión climática a nivel consejo/dirección — ¿quién es responsable y con qué frecuencia se revisa?
2. **Estrategia** — impactos actuales y potenciales de riesgos/oportunidades climáticas en el negocio, estrategia y planeación financiera, analizados por escenario:
   - **Escenario 1.5°C ordenado** — qué sectores se benefician (transición energética, eficiencia) y cuáles enfrentan riesgo de activos varados (stranded assets — activos que pierden valor económico antes de su vida útil esperada por la transición).
   - **Escenario 3°C+ desordenado** — riesgo físico (inundación, calor extremo, estrés hídrico) y disrupción de demanda por geografía.
3. **Gestión de riesgo** — cómo se identifica, evalúa y gestiona el riesgo climático dentro del proceso de inversión — no como ejercicio separado, sino integrado.
4. **Métricas y objetivos** — obligatorias para un reporte TCFD completo:
   - **Huella de carbono** — tCO2e por cada millón de moneda invertida.
   - **WACI (Weighted Average Carbon Intensity)** — intensidad de carbono ponderada por peso del portafolio, en tCO2e por millón de moneda de **ingresos** de las empresas en cartera (distinto de la huella de carbono, que se mide sobre el capital invertido).
   - **Alineación de temperatura del portafolio** — estimación de a qué trayectoria de calentamiento global está alineado el portafolio agregado.
   - **Progreso hacia net-zero** vs. año base definido.
   - **Top 3 posiciones que requieren engagement prioritario**, con la solicitud específica a cada una (no genérica).

## 2. SFDR — clasificación Artículo 8 vs. Artículo 9

Fuente verificada: Reglamento (UE) 2019/2088 (Sustainable Finance Disclosure Regulation), en aplicación desde el 10 de marzo de 2021, con estándares técnicos regulatorios detallados (RTS) bajo el Reglamento Delegado (UE) 2022/1288 vigentes desde el 1 de enero de 2023.

- **Artículo 8 ("verde claro")** — fondos que **promueven** características ambientales o sociales, sin que la inversión sostenible sea el objetivo central.
- **Artículo 9 ("verde oscuro")** — fondos donde la inversión sostenible **es el objetivo principal**, con los requisitos de divulgación más estrictos: reporte obligatorio de PAI (Principal Adverse Impact — impactos adversos principales de las decisiones de inversión sobre factores de sostenibilidad, ambientales y sociales) y divulgación completa de alineación con la Taxonomía UE.

**Checklist de clasificación (contra guía ESMA)**:
1. **Lenguaje del objetivo de inversión** — ¿dice explícitamente "objetivo principal" (requerido para Artículo 9), o solo lo menciona como "consideración"? Esta distinción de lenguaje es el primer punto de rechazo regulatorio si se reclama Artículo 9 sin sustentarlo.
2. **Proporción de inversión sostenible (SI)** — guía de mercado sitúa el mínimo creíble para Artículo 9 por encima del 50%, aunque no es un umbral legal fijo — verifica el estándar vigente contra la guía ESMA/regulador local antes de un entregable formal, este umbral se ha revisado en propuestas recientes de simplificación de SFDR.
3. **Indicadores PAI** — ¿se reportan todos los PAI obligatorios, no solo los opcionales/convenientes?
4. **DNSH (Do No Significant Harm)** — ¿está realizado, documentado, e incluido en el anexo precontractual?
5. **Alineación con Taxonomía UE** — ¿se divulga el % de alineación donde es requerido?

**Riesgo de greenwashing** — reclamar Artículo 9 sin cumplir estos puntos no es solo un riesgo reputacional: es un riesgo regulatorio directo (reclasificación forzada, sanciones). Señala explícitamente cualquier brecha encontrada, con el fix específico y el timeline de remediación — nunca como nota al pie.

## Entregable de este skill

1. **Reporte TCFD de 4 pilares** completo, con las métricas obligatorias del Pilar 4 calculadas o explícitamente marcadas como pendientes de dato.
2. **Clasificación SFDR actual** (Artículo 6/8/9) y, si aplica, **gap analysis** hacia Artículo 9 con remediación específica por brecha.
3. **Tabla de emisiones** — huella de carbono y WACI por posición relevante, comparado contra benchmark.
4. **Top 3 engagements prioritarios** con solicitud específica, no genérica.
5. Marca explícitamente cualquier dato climático/regulatorio no verificado contra fuente primaria (proveedor de datos de emisiones, texto regulatorio vigente) — las cifras de emisiones de terceros y los umbrales regulatorios cambian con frecuencia.

## Cruce con otros skills de este repo

- `cumplimiento-regulatorio-mx` — si el fondo opera bajo régimen mexicano, cruza para verificar si aplica un marco de sostenibilidad financiera local además del europeo (SFDR es UE, no aplica automáticamente fuera de esa jurisdicción).
- `portfolio-monitoring` — seguimiento continuo de las métricas de emisiones/temperatura del portafolio una vez establecida la línea base.

## Referencias
- Task Force on Climate-related Financial Disclosures (TCFD), *Final Report: Recommendations of the Task Force on Climate-related Financial Disclosures*, 2017 — [fsb-tcfd.org/recommendations](https://www.fsb-tcfd.org/recommendations/).
- Reglamento (UE) 2019/2088 sobre divulgaciones de finanzas sostenibles (SFDR), en aplicación desde el 10 de marzo de 2021; Reglamento Delegado (UE) 2022/1288 (RTS), vigente desde el 1 de enero de 2023.
- Verifica el umbral de proporción de inversión sostenible para Artículo 9 y el estado de las propuestas de simplificación de SFDR contra la guía ESMA vigente antes de un entregable formal — este punto específico está sujeto a revisión regulatoria activa.
