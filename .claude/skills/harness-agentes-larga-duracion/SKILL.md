---
name: harness-agentes-larga-duracion
description: Diseña harnesses (hooks + subagentes) para que un agente de Claude Code trabaje de forma autónoma durante sesiones largas sin perder rigor — contrato "default-FAIL" que exige evidencia real antes de marcar algo como hecho, evaluador de contexto fresco que no se autocalifica, y handoff persistente (PROGRESS.md + commits) entre sesiones que no comparten memoria. Basado en los patrones publicados por Anthropic (Prithvi Rajasekaran et al.), verificados contra el repo oficial anthropics/cwc-long-running-agents. Úsalo cuando el usuario pida "diseña un loop autónomo para esto", "cómo evito que el agente se autoevalúe mal", "necesito que Claude trabaje varias horas sin supervisión", "cómo mantengo contexto entre sesiones largas", "configura un evaluador independiente", o construya un harness/hook/subagente para tareas largas y autónomas — incluida la construcción sistemática de skills de este mismo repo.
---

# Harness para Agentes de Larga Duración

Un agente que trabaja solo durante horas sin este diseño tiende a dos fallas predecibles: se declara exitoso sin haberlo comprobado ("¿ya funciona? sí" sin haber corrido nada), y pierde el hilo entre sesiones porque el resumen automático de contexto descarta detalle. Este skill formaliza los 3 primitivos que Anthropic documentó para resolver exactamente eso — la misma disciplina que ya seguimos manualmente en este repo (verificar antes de afirmar, cerrar cada unidad de trabajo con commit) pero como patrón de ingeniería reutilizable con hooks reales.

## Los 3 primitivos verificados (repo oficial `anthropics/cwc-long-running-agents`, Apache 2.0)

### 1. Contrato "default-FAIL"

El problema: un agente marcará una feature como "pasando" después de un test unitario superficial o un `curl`, aunque la interfaz esté visiblemente rota — pedirlo explícitamente en el prompt no lo evita de forma confiable. La solución lo hace **estructural**, no de buena voluntad:

- Cada feature es una fila en un `test-results.json` del proyecto, y **empieza en `false`**:
  ```json
  { "feature-1": { "passes": false }, "feature-2": { "passes": false } }
  ```
- Un hook `PreToolUse` **bloquea cualquier escritura** a ese archivo de resultados a menos que el agente haya **leído primero** un archivo de evidencia real (screenshot, log de consola, resultado de test) que coincida con el patrón esperado.
- El agente no puede reclamar un éxito que no observó — la evidencia se exige antes del veredicto, no después.

### 2. Evaluador de contexto fresco

El problema: quien construye no debería calificar su propio trabajo — un agente que acaba de escribir el código tiende a sobrestimar que está bien.

- Después de cada feature, se invoca un **subagente separado** (`agents/evaluator.md`), **sin herramientas Write/Edit**, en una ventana de contexto que **nunca vio la construcción** — revisa el diff y las evidencias (screenshots) desde cero.
- Devuelve `PASS` o `NEEDS_WORK` con hallazgos específicos.
- En `NEEDS_WORK`, esos hallazgos se convierten en el prompt de inicio de la siguiente sesión constructora — así se cierra el loop construir → evaluar → reconstruir.
- Invocación: `claude --agent evaluator -p "<prompt de revisión>"`.

### 3. Handoff mantenido por el propio agente

El problema: una sesión nueva no tiene memoria de la anterior, y cuando una sesión larga llena su ventana de contexto, Claude Code resume el historial — y ese resumen pierde detalle real.

- El agente **acota cada sesión a una sola feature**, escribe su propio `PROGRESS.md` mientras trabaja, y **lo relee primero** al reiniciar.
- Hace `git add`/`commit` en checkpoints con sentido, para que `git log` sea un segundo registro verificable, independiente del `PROGRESS.md`.
- Un hook de respaldo (`commit-on-stop.sh`) captura cualquier cambio que quedó sin commitear al final de la sesión.
- **Esta es la capa más sensible a la capacidad del modelo** — modelos más nuevos divagan menos y se autoacotan mejor; reevalúa cuánto de las instrucciones de `CLAUDE.md` sigue siendo necesario después de cada salto de modelo (ver sección "Re-simplificar" abajo).

Un cuarto elemento —una **rúbrica para trabajo subjetivo** (diseño, calidad de redacción)— no viene incluido porque es específico de cada proyecto; ver la sección de rúbricas abajo para agregarlo al evaluador.

## Cómo correr el loop — dos caminos

### Camino simple: `/goal` (integrado en Claude Code)

```
/goal cada feature en PROGRESS.md está implementada, commiteada, y sus tests pasan
```

Después de cada turno, un modelo rápido separado revisa la condición y mantiene la sesión activa hasta cumplirla. Una sola línea, sin archivo de contrato ni hooks propios. Funciona igual en Claude Code interactivo, `claude -p` (headless), y Remote Control.

### Camino con control total: tu propio `evaluator.md` como compuerta

Cuando quieres el contrato default-FAIL (`test-results.json` + `verify-gate`) exigiendo evidencia, y tu propio prompt de evaluador decidiendo `PASS`/`NEEDS_WORK`:

| Superficie | Cómo |
|---|---|
| Claude Code | Un `Stop` hook propio corre el evaluador como un proceso `claude` nuevo después de cada turno, y bloquea con cualquier cosa que no sea `PASS` |
| Headless (`claude -p`) | Un script wrapper llama `claude --agent evaluator -p` entre construcciones |
| Agent SDK | Llamadas `query()` separadas para generador y evaluador |

```bash
while grep -q '"passes": false' test-results.json; do
  claude -p "Lee PROGRESS.md y construye la siguiente feature pendiente según CLAUDE.md."
  VERDICT=$(claude --agent evaluator -p "Revisa el commit más reciente contra su especificación.")
  [ "$(echo "$VERDICT" | head -1)" = "PASS" ] || echo "$VERDICT" > NEXT_FINDINGS.md
done
```

Cada pasada es un contexto fresco. Se detiene cuando el archivo de contrato no tiene nada pendiente, un ciclo no produce cambios, o se agota un presupuesto de tiempo/tokens — `touch AGENT_STOP` para detener manualmente.

## Controles de operador — para observar o intervenir en pleno vuelo

- **`kill-switch.sh`** — mientras exista un archivo `AGENT_STOP` en la raíz del proyecto, detiene toda llamada a herramienta. Freno de emergencia sin matar el proceso a mano.
- **`steer.sh`** — muestra el contenido de `STEER.md` (raíz del proyecto) al agente una sola vez y lo limpia — permite redirigir a mitad de una corrida larga sin reiniciarla.

**Observar sin dashboard**, todo queda en disco:
```bash
watch -n 2 'tail -20 PROGRESS.md'                          # notas propias del agente
watch -n 5 'git log --oneline -8'                           # trabajo guardado
watch -n 5 'find screenshots -name "*.png" | tail -5'        # qué está viendo
```

## Patrones adicionales (nivel siguiente, mismo repo)

| Patrón | Qué añade |
|---|---|
| **Loop desatendido** | Un script externo limita la duración de cada sesión y arranca la siguiente (elige la próxima feature, construye, evalúa, resetea) |
| **Agente planificador** | Una primera sesión que expande una petición de una línea en un `BUILD_PLAN.md` contra el cual corre el loop |
| **Contratos de sprint** | El constructor y el evaluador acuerdan por feature qué significa "terminado", y lo escriben en un archivo que el hook hace cumplir |
| **Rúbricas de calificación** | Para trabajo subjetivo (diseño, redacción): darle al evaluador principios de puntuación (funcionalidad, diseño, oficio, originalidad) con ejemplos few-shot, en vez de pass/fail binario — cruza con `frontend-design` de este repo para el criterio de calidad subjetiva de diseño |
| **Evaluador verificado en navegador** | El evaluador abre la app corriendo él mismo (vía Playwright MCP), en vez de confiar en los screenshots que entregó el constructor |
| **Re-simplificar tras cada salto de modelo** | Después de cada release de modelo, comenta piezas del harness una por una para ver cuáles siguen siendo necesarias — modelos más capaces necesitan menos andamiaje |

## Cruce con la disciplina de este repo

Este patrón es la versión formalizada, con hooks reales, de lo que ya hacemos manualmente al construir cada skill: `fuentes-confiables` es el equivalente del **contrato default-FAIL** (no afirmar sin verificar contra fuente primaria), `qa-universal` es el equivalente del **evaluador de contexto fresco** (revisar el entregable con criterio independiente antes de darlo por terminado), y el hábito de commit+push después de cada skill es el **handoff persistente**. Cruza con `prompt-perfecto` cuando la tarea requiera orquestar múltiples pasos/skills en secuencia — ese skill decide *qué* secuencia de trabajo hace falta; este skill decide *cómo* mantener esa secuencia rigurosa y verificable si se ejecuta de forma autónoma y larga.

## Entregable de este skill

1. **Diagnóstico de qué falla hoy** en el loop autónomo del usuario (¿se autoevalúa sin evidencia? ¿pierde contexto entre sesiones? ¿no hay forma de detenerlo a medio vuelo?).
2. **Los 3 primitivos aplicados al caso concreto** — estructura de `test-results.json`/contrato equivalente, definición del subagente evaluador (sin Write/Edit), y mecanismo de handoff (`PROGRESS.md` + commits).
3. **Elección justificada** entre `/goal` (simple, integrado) vs. harness propio con hooks (control total, más setup).
4. Si aplica: rúbrica de calidad subjetiva para el evaluador, y el patrón de evaluador verificado en navegador si el entregable es una interfaz visual.

## Referencias
- Repo oficial verificado: [anthropics/cwc-long-running-agents](https://github.com/anthropics/cwc-long-running-agents) (Apache 2.0) — clonado y leído completo para este skill, contenido resumido/reestructurado a partir del `README.md` real, no parafraseado de memoria.
- Artículo fuente: "Harness Design for Long-Running Application Development" (Anthropic Engineering, marzo 2026) y "Effective Harnesses for Long-Running Agents" (noviembre 2025) — ambos por el equipo de Prithvi Rajasekaran; contenido verificado vía búsqueda web ya que `www.anthropic.com` está bloqueado por el proxy de red de este entorno para `WebFetch` directo.
- Prithvi Rajasekaran, Member of Technical Staff, Anthropic Applied AI — coautor también de `frontend-design` (ya incluido en este repo) junto con Alexander Bricken.
