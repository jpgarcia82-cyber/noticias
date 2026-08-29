---
name: prompt-perfecto
description: Construye el prompt/brief perfecto para cualquier tema — captura todo el contexto necesario para no perder ningún resultado, escanea la biblioteca completa de skills instalados (150+) para identificar TODOS los que aplican (no solo el mejor match, como skill-router), y ensambla un plan orquestado multi-skill secuenciado con handoffs explícitos entre entregables. Úsalo cuando el usuario pida "arma el prompt perfecto para esto", "usa todos los skills que apliquen", "no quiero perder nada de contexto", "escala todas mis capacidades en este tema", "orquesta todos los skills necesarios", "dame el brief completo antes de ejecutar", o quiera maximizar cobertura de la biblioteca de skills en una tarea compleja en vez de resolverla con un solo skill aislado.
---

# Prompt Perfecto — Orquestador Multi-Skill de Cobertura Total

Convierte una petición corta o ambigua en un brief completo, sin huecos de contexto, que moviliza **todos** los skills relevantes de la biblioteca (no uno solo) en la secuencia correcta — para que el resultado use la capacidad completa del repo en vez de la primera coincidencia obvia.

**Diferencia con `skill-router`**: `skill-router` busca **el mejor match** y despacha a un skill (o dos, si hay dependencia clara). Este skill busca **cobertura máxima** — todos los skills cuya descripción toca el tema, aunque sea parcialmente, y los organiza en un plan de ejecución secuenciado con handoffs explícitos. Úsalo cuando el objetivo es no dejar nada fuera, no solo resolver rápido.

## Proceso — 5 pasos, en orden, ninguno se salta

### 1. Captura de contexto completo (antes de tocar cualquier skill)

No construyas el brief sobre una petición incompleta. Extrae o pregunta explícitamente por:
- **Objetivo real** — no la tarea superficial pedida, sino el resultado de negocio detrás ("quiero un email de bienvenida" → ¿para qué producto, qué audiencia, qué se espera que el usuario haga después?).
- **Audiencia/contexto de negocio** — industria, geografía (relevante para compliance/regulación — ej. `cumplimiento-regulatorio-mx`, `advertising-compliance`, `know-your-customer` cambian por jurisdicción), tamaño/etapa de la empresa.
- **Restricciones** — presupuesto, plazo, tono de marca, restricciones legales/regulatorias ya conocidas, sistemas/herramientas ya en uso.
- **Datos disponibles vs. datos que faltan** — qué información real existe (métricas, documentos, código) vs. qué habría que suponer o pedir. Nunca rellenes un hueco de dato real con un valor inventado que parezca real — dilo explícito como pendiente.
- **Definición de éxito** — cómo sabremos que el entregable final cumplió el objetivo, no solo que se produjo un documento.

Si falta información bloqueante para identificar los skills correctos (ej. no se sabe si el producto es financiero, con qué implicaría compliance regulatorio), pregunta antes de continuar — un brief construido sobre una suposición equivocada desperdicia todos los pasos siguientes.

### 2. Escaneo completo de la biblioteca — no te detengas en el primer match

Recorre la lista completa de skills disponibles (la que llega cada turno en el system reminder de skills instalados) contra el objetivo capturado en el paso 1, no solo contra las palabras literales del prompt del usuario. Un tema real casi siempre toca varias categorías a la vez:

- **Núcleo** — el/los skill(s) que producen el entregable principal.
- **Investigación/insumos** — skills que alimentan de datos/contexto al núcleo antes de que pueda ejecutarse bien (ej. `customer-research`, `competitor-profiling`, `competitive-analysis` antes de `copywriting` o `positioning`).
- **Cumplimiento/riesgo** — cualquier skill de compliance/legal que aplique al dominio y jurisdicción (ej. `cumplimiento-regulatorio-mx`, `fintech-docs-mx`, `advertising-compliance`, `reg-bi`, `privacy-data-security`) — se revisan **siempre** que el tema toque finanzas, datos personales, o publicidad regulada, incluso si el usuario no los mencionó.
- **Medición/verificación** — skills que instrumentan o miden el resultado (ej. `analytics`, `attribution`, `ab-testing`) para que el entregable no termine sin forma de saber si funcionó.
- **Calidad/fuentes** — `fuentes-confiables` (si el entregable incluye cifras, citas legales, datos de mercado o afirmaciones verificables) y `qa-universal` (siempre, al final) — no son opcionales, son el cierre de cualquier brief construido con este skill.

Regla de inclusión: si la descripción de un skill cubre una parte real del objetivo del paso 1 — aunque sea una sola frase de su trigger — inclúyelo en el plan. Es preferible listar un skill de más y descartarlo con una línea de justificación, que omitirlo silenciosamente.

### 3. Ordena el plan por dependencia, no por orden alfabético

Los skills identificados casi nunca son intercambiables en orden — la salida de uno suele ser el insumo del siguiente. Construye la secuencia explícita:

1. **Investigación/contexto** primero (research, auditorías, diagnóstico) — nunca generes contenido/entregable antes de tener el insumo real.
2. **Diseño/estrategia** — el marco o decisión estructural (ej. `cx-design-thinking-blueprint`, `strategy-consulting-desk`, `pricing`) antes de la ejecución táctica que depende de esa decisión.
3. **Producción del entregable núcleo** — el skill que redacta/construye/calcula el resultado principal.
4. **Cumplimiento/revisión legal** — siempre después de tener un borrador real que revisar, nunca reemplazando el paso de producción.
5. **Medición/instrumentación** — cómo se va a medir el resultado una vez publicado/ejecutado.
6. **`fuentes-confiables`** aplicado a todo el contenido con cifras/citas/datos verificables.
7. **`qa-universal`** al final, sobre el entregable completo ya ensamblado — no sobre cada pieza aislada.

Marca explícitamente los **handoffs**: qué output exacto de un paso necesita el paso siguiente para poder ejecutarse (ej. "el diagnóstico de `seo-audit` debe listar las páginas prioritarias antes de que `copywriting` redacte contenido para ellas").

### 4. Ensambla el brief final — la salida de este skill

El entregable de este skill **no es el resultado final del tema** — es el brief/plan orquestado que, al ejecutarse, produce el resultado final con cobertura completa. Formato:

```
OBJETIVO REAL: [del paso 1, no la petición superficial]
CONTEXTO CAPTURADO: [audiencia, restricciones, datos disponibles/faltantes, definición de éxito]

SKILLS IDENTIFICADOS Y POR QUÉ (cobertura completa, no solo el núcleo):
1. [skill] — [qué aporta, qué handoff produce para el siguiente paso]
2. [skill] — ...
...

SECUENCIA DE EJECUCIÓN: [el orden del paso 3, con handoffs explícitos entre pasos]

VERIFICACIÓN: fuentes-confiables aplicado a [qué partes], qa-universal aplicado al final sobre [el entregable completo]

HUECOS PENDIENTES: [cualquier dato real que falta y no se debe inventar — pídelo explícito]
```

### 5. Ejecuta el plan, o entrégalo, según lo que pidió el usuario

Si el usuario pidió "arma el prompt perfecto" como paso previo a ejecutar, presenta el brief del paso 4 y procede a ejecutarlo skill por skill en la secuencia definida, sin volver a pedir confirmación en cada paso salvo que un hueco pendiente lo bloquee. Si el usuario solo quería el brief/prompt en sí (para usarlo después, o en otra sesión/herramienta), entrega el bloque del paso 4 como resultado final.

## Errores que este skill existe para evitar

- **Tunel de un solo skill** — resolver con el primer match obvio (ej. solo `copywriting`) cuando el tema real también necesitaba `customer-research` antes y `advertising-compliance` después — el resultado queda técnicamente correcto pero incompleto.
- **Contexto asumido, no capturado** — construir el entregable sobre supuestos no verificados con el usuario cuando la información real estaba disponible con una pregunta.
- **Cifras o citas sin verificar** — cualquier dato de mercado, cifra regulatoria, o cita legal que entra al entregable sin pasar por `fuentes-confiables` primero.
- **Sin QA final** — entregar el resultado ensamblado de varios skills sin una pasada de `qa-universal` que revise la coherencia del conjunto, no solo de cada pieza por separado.

## Entregable de este skill

1. **Brief orquestado completo** (formato del paso 4) — objetivo real, contexto, skills identificados con justificación, secuencia con handoffs, plan de verificación, huecos pendientes.
2. Si se ejecuta el plan (no solo se entrega el brief): el resultado final combinado de todos los skills en la secuencia definida, con una línea de resumen de qué skill aportó qué parte.
3. Una lista explícita de **qué skills se consideraron y se descartaron**, con la razón — esto es lo que demuestra que el escaneo fue completo, no solo que se usó el primero que encajó.
