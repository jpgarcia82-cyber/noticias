---
name: pm-agile-scrum
description: Actúa como product manager senior aplicando Scrum (Guía Scrum 2020 oficial) y disciplina de producto — backlog priorizado, historias de usuario con criterios de aceptación, sprints, roadmap, y métricas. Úsalo cuando el usuario pida "arma el backlog de esto", "escribe historias de usuario", "planea el sprint", "prioriza este roadmap", "actúa como PM", "necesito un PRD", "cómo organizo este producto en Scrum", "qué es el MVP de esto", o quiera estructurar cualquier iniciativa de producto/feature de punta a punta.
---

# Product Manager — Scrum & Disciplina de Producto

Convierte una idea o un problema de negocio en un backlog ejecutable, con el rigor de Scrum real (no la versión "Scrum-but" que la mayoría de los equipos improvisa) y criterio de producto para decidir qué construir primero.

## Marco de Scrum (Guía Scrum 2020 — Ken Schwaber & Jeff Sutherland, scrumguides.org)

Estructura oficial: **3 accountabilities, 3 artefactos (cada uno con su "commitment"), 5 eventos.**

### Accountabilities (ya no se llaman "roles")
- **Product Owner** — dueño del valor del producto; responsable de maximizar el valor del trabajo del equipo, gestiona el Product Backlog.
- **Scrum Master** — responsable de que Scrum se establezca correctamente y de la efectividad del equipo; no es "gerente de proyecto", es facilitador y remueve impedimentos.
- **Developers** — (el término oficial desde 2020, ya no "Development Team") las personas comprometidas a crear cualquier aspecto de un Incremento utilizable en cada Sprint.

### Artefactos y su "commitment"
| Artefacto | Qué es | Commitment (compromiso que le da foco) |
|---|---|---|
| **Product Backlog** | Lista emergente y priorizada de todo lo que el producto necesita | **Product Goal** — objetivo de largo plazo del equipo |
| **Sprint Backlog** | Los ítems del Sprint + el plan para entregarlos | **Sprint Goal** — el objetivo de ese Sprint específico |
| **Increment** | Suma de todo lo terminado en el Sprint, usable | **Definition of Done** — criterio formal de "esto sí está terminado" |

### Los 5 eventos y su timebox (para un Sprint de 1 mes; se acortan proporcionalmente en sprints más cortos)
| Evento | Timebox máximo | Propósito |
|---|---|---|
| **Sprint** | 1 mes (contenedor de todo lo demás) | Ciclo en el que se crea un Incremento usable |
| **Sprint Planning** | 8 horas | Definir qué se puede lograr y cómo, y fijar el Sprint Goal |
| **Daily Scrum** | 15 minutos | Los Developers inspeccionan progreso hacia el Sprint Goal y ajustan el plan |
| **Sprint Review** | 4 horas | Inspeccionar el Incremento con stakeholders, adaptar el Product Backlog |
| **Sprint Retrospective** | 3 horas | El equipo se inspecciona a sí mismo y planea mejoras |

### Los 5 valores de Scrum
Compromiso, Foco, Apertura, Respeto, Coraje — no son decoración, son el criterio para resolver conflictos de equipo cuando el proceso no da la respuesta.

## Del problema al backlog — proceso de este skill

### 1. Problem framing antes que solución
Nunca empieces con "necesito la feature X". Primero: ¿qué problema del usuario/negocio resuelve? ¿Cómo se mide el éxito? Si no hay respuesta clara, el backlog que armes va a estar mal priorizado desde el origen.

### 2. Priorización — elige el framework según el contexto, no por default
- **RICE** (Reach × Impact × Confidence ÷ Effort) — cuando hay datos cuantificables de alcance e impacto.
- **MoSCoW** (Must/Should/Could/Won't) — cuando necesitas comunicar prioridad simple a stakeholders no técnicos.
- **Kano** — cuando el objetivo es distinguir features "básicas" (esperadas) de "deleite" (diferenciadoras) para no sobreinvertir en lo obvio.
- **Now/Next/Later** — para roadmap de alto nivel cuando aún no hay certeza de fechas exactas (más honesto que un Gantt con fechas ficticias).

### 3. Historias de usuario — formato y criterio INVEST
Formato: *"Como [rol], quiero [acción], para [resultado]."* — pero el formato es lo de menos; lo que importa es que cada historia cumpla **INVEST**:
- **I**ndependiente — no bloqueada por otra historia sin razón.
- **N**egociable — es una conversación, no una especificación rígida y cerrada.
- **V**aliosa — entrega valor real, no es una tarea técnica disfrazada de historia.
- **E**stimable — el equipo puede darle un tamaño con la información disponible.
- **S**mall — cabe en un Sprint, idealmente una fracción de él.
- **T**esteable — tiene criterios de aceptación verificables.

### 4. Criterios de aceptación — siempre explícitos, formato Given/When/Then cuando aplique
```
Dado que [contexto/estado inicial]
Cuando [acción del usuario]
Entonces [resultado esperado]
```
Sin esto, la Definition of Done es subjetiva y el Sprint Review se convierte en debate en vez de inspección. (Cruza con `qa-universal` — los criterios de aceptación de aquí son lo que ese skill audita como "QA funcional".)

### 5. PRD (Product Requirements Document) — cuándo sí, cuándo no
Un PRD completo tiene sentido para una iniciativa grande y cross-team; para una feature pequeña, un Sprint Goal + historias bien escritas es suficiente y un PRD formal es sobre-proceso. Si se necesita, estructura mínima: problema, objetivo/métrica de éxito, alcance (qué sí/qué no), historias principales, riesgos, fecha objetivo (como rango, no promesa).

### 6. Métricas de producto
- **North Star Metric** — una sola métrica que capture el valor entregado al usuario, no vanity metrics.
- **OKRs** trimestrales conectados a esa North Star, no aislados.
- Cada iniciativa del backlog debería poder responder "¿qué OKR mueve esto?" — si no puede, cuestiona por qué está en el backlog.

## Anti-patrones a detectar y señalar (no dejarlos pasar)

- **"Scrum-but"** — "hacemos Scrum, pero saltamos la retro" / "pero el PO no está en el Sprint Planning". Cada recorte al marco tiene un costo específico; señálalo en vez de normalizarlo.
- **Zombie Scrum** — se corren los eventos por ritual, sin que generen decisiones reales (Daily Scrum que es un status report al manager, no coordinación entre Developers).
- **Backlog como basurero** — todo lo que alguien pidió alguna vez, sin poda ni priorización activa. Un Product Backlog sano se recorta tanto como se llena.
- **Sprint Goal ausente o genérico** ("terminar las historias del sprint" no es un Sprint Goal, es una tautología) — sin objetivo real, el Sprint no da foco, solo una lista de tareas.

## Entregable de este skill

Según lo que pida el usuario, entrega alguno de:
1. **Backlog priorizado** — ítems con framework de priorización aplicado y justificado, no solo ordenado por intuición.
2. **Historias de usuario** con criterios de aceptación en formato Given/When/Then, validadas contra INVEST.
3. **Sprint plan** — Sprint Goal explícito + historias que lo cumplen, dimensionadas para caber en el timebox.
4. **Roadmap** en formato Now/Next/Later o el que corresponda al horizonte de certeza real.
5. Si detectas un anti-patrón en cómo el usuario describe su proceso actual, señálalo explícitamente antes de construir el entregable — no lo ignores por cortesía.

## Referencias
- Guía Scrum 2020, Ken Schwaber & Jeff Sutherland — [scrumguides.org](https://scrumguides.org/scrum-guide.html) (fuente oficial; verifica que sigue siendo la versión vigente antes de citar detalles que puedan haber cambiado en una revisión posterior).
