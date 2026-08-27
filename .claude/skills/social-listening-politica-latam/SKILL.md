---
name: social-listening-politica-latam
description: Metodología de análisis de sentimiento y discurso político en redes sociales para audiencias hispanohablantes (LatAm/México) — más allá del análisis por palabras clave, cubre manejo de negación/ironía, distinción sentimiento vs stance (postura), detección de bots/comportamiento coordinado, topic modeling, y límites de representatividad de la muestra. Complemento del skill genérico `social` de marketing, especializado en discurso político y medios. Úsalo cuando el usuario trabaje con análisis de sentimiento de comentarios/redes sobre temas políticos, pregunte "por qué mi análisis de palabras clave da resultados raros", "cómo detecto bots", "esto es sentimiento o postura", "cómo interpreto esta muestra de comentarios de YouTube/Twitter", o quiera mejorar la metodología de un análisis de sentimiento existente.
---

# Social Listening — Discurso Político en Español (LatAm)

Metodología para llevar un análisis de sentimiento de "contar palabras clave" a algo con rigor suficiente para sostener una conclusión — especialmente relevante para discurso político, donde la ironía, el sarcasmo, y la manipulación coordinada son la norma, no la excepción.

## El problema con el análisis por palabras clave (baseline típico)

Un enfoque de listas de palabras positivas/negativas (como el que usa por defecto la mayoría de los prototipos, incluido el `worker.js` de este mismo repo) falla sistemáticamente en discurso político por tres razones:

1. **Negación invierte el sentido y las listas de palabras no lo detectan**: "no es bueno" cuenta "bueno" como positivo si solo se hace matching de palabras sueltas.
2. **Ironía y sarcasmo son la forma dominante de crítica política en redes** — "qué gobierno tan excelente 👏" es negativo pese a usar puro vocabulario positivo. Investigación del Instituto VRAIN (Universitat Politècnica de València, 2025) muestra que incorporar una capa de análisis de sentimiento sobre los casos ambiguos de ironía mejora la precisión de detección de discurso tóxico de 80.35% a 87.89% frente al enfoque sin esa capa — la ironía específicamente requiere modelar contexto, no solo léxico.
3. **Sentimiento ≠ postura (stance)**: un comentario puede ser emocionalmente neutro en tono pero claramente a favor/en contra de un actor político. Medir solo positivo/negativo/neutral pierde la pregunta que casi siempre importa más en análisis político: ¿a favor de quién?

## Metodología recomendada, por capas

### 1. Preprocesamiento específico para español
- Normaliza acentos y variantes ortográficas informales de redes (sin perder el significado — "grasias" sigue siendo "gracias").
- Maneja negación explícitamente: detecta partículas de negación (`no`, `nunca`, `sin`, `tampoco`) y su alcance sobre la palabra siguiente antes de puntuar sentimiento.
- Filtra o marca aparte emojis, mayúsculas sostenidas, y signos de exclamación repetidos — son señal de intensidad emocional, no ruido a descartar.

### 2. Modelo — cuándo léxico basta y cuándo no
- **Léxico de palabras clave**: sirve para un filtro rápido de volumen/tendencia, no para conclusiones sobre tono real. Útil como primera pasada, nunca como resultado final en un análisis que se va a presentar como conclusión.
- **Modelos de lenguaje entrenados en español** (ej. BETO — BERT en español, o el propio modelo con el que trabajas ahora) capturan contexto y manejan negación/ironía mucho mejor que listas de palabras — úsalos para la clasificación real cuando el análisis tenga peso en una decisión.
- Para el caso específico de ironía/sarcasmo: la investigación citada usa un enfoque de dos etapas — clasificar primero con confianza alta/baja, y solo aplicar el análisis de sentimiento más costoso a los casos ambiguos. Es un patrón replicable: no proceses todo con el modelo más caro, resérvalo para lo que el filtro rápido marcó como incierto.

### 3. Sentimiento vs Stance — mide las dos, son preguntas distintas
- **Sentimiento**: ¿el tono es positivo/negativo/neutral?
- **Stance (postura)**: ¿está a favor, en contra, o neutral respecto a un actor/tema específico? — esto requiere identificar primero el objeto del comentario (¿de quién/qué se habla?) antes de poder clasificar postura.
- Repórtalos por separado. Un comentario puede tener tono neutro y postura claramente en contra ("interesante que ganara con esos números").

### 4. Detección de comportamiento coordinado/bots
Señales a revisar antes de tratar un pico de menciones como "opinión pública orgánica":
- Ráfagas de cuentas nuevas o con actividad mínima previa posteando el mismo mensaje o variantes casi idénticas en ventana corta de tiempo.
- Patrones de posteo a horas/frecuencia no humanas (constante 24/7, intervalos exactos).
- Concentración de amplificación en pocas cuentas de origen replicadas por muchas cuentas de bajo historial.
Sin este filtro, un análisis de "sentimiento de la opinión pública" puede estar midiendo en realidad una campaña coordinada de pocos actores, no opinión genuina distribuida.

### 5. Topic modeling — de qué se habla, no solo cómo se siente
Agrupa comentarios por tema (LDA, o clustering sobre embeddings) antes de agregar sentimiento — un sentimiento negativo agregado sin saber si es sobre economía, seguridad, o un escándalo puntual no es accionable. El sentimiento por tema sí lo es.

## Límites de representatividad — decir esto explícito, siempre

- Los comentarios de YouTube/redes sociales **no son una muestra representativa de la opinión pública general** — sobrerrepresentan a usuarios más jóvenes, más digitalmente activos, y con posturas más extremas (quien comenta suele tener opinión más fuerte que el promedio). Nunca generalices "esto es lo que piensa la gente" de una muestra de comentarios sin esta salvedad.
- El volumen de comentarios sobre un tema mide **atención**, no necesariamente sentimiento representativo — un tema puede generar mucho volumen negativo concentrado en pocos usuarios muy activos.

## Consideraciones legales (cruza con `cumplimiento-regulatorio-mx` si el uso es comercial)

- Datos que revelan opinión/afiliación política son **datos sensibles** bajo la LFPDPPP — si el análisis involucra perfilar personas identificables (no solo agregados anónimos) por su postura política, aplica el régimen reforzado de datos sensibles: consentimiento expreso y explícito, no solo aviso de privacidad simple.
- Este skill es para entender narrativa y tendencia agregada, no para construir perfiles individuales de orientación política de personas identificadas — si el uso se acerca a eso, es un límite ético y legal a señalar antes de construir el entregable.

## Entregable de este skill

1. **Metodología usada** — qué capas se aplicaron (léxico/modelo/negación/ironía), explícito, no solo el resultado.
2. **Sentimiento y stance por separado**, nunca fusionados en una sola cifra si el análisis lo permite.
3. **Nota de representatividad** de la muestra — siempre, no solo cuando se pregunta.
4. **Señal de comportamiento coordinado** si el volumen/patrón lo amerita, antes de interpretar el pico como orgánico.
5. Desglose por tema (topic modeling) cuando el volumen de comentarios lo justifique, no solo un número agregado de sentimiento.

## Referencia
- VRAIN (Universitat Politècnica de València), sistema de detección de ironía/toxicidad en discurso político, 2025 — mejora de 80.35% a 87.89% de precisión al incorporar capa de sentimiento sobre casos ambiguos. Verifica publicación específica antes de citar cifras exactas en un entregable formal — esto se confirmó vía búsqueda web, no es una cifra de memoria, pero no se leyó el paper académico original completo.
