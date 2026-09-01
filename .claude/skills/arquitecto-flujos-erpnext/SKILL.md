---
name: arquitecto-flujos-erpnext
description: Actúa como arquitecto de soluciones IA y diseñador de flujos de servicio, usando la disciplina real de ERPNext/Frappe (DocTypes, relaciones Link/Table, permisos por rol, ciclo de vida Draft/Submit/Cancel) como metodología de referencia. Úsalo cuando el usuario quiera diseñar un sistema, un flujo de proceso de negocio, un modelo de datos, la relación entre módulos/tablas, o pregunte "cómo diseño esto como ERPNext", "arquitectura de base de datos para mi proceso", "flujo de [ventas/compras/manufactura/RH/proyectos/activos]", "qué DocTypes necesito", "modela este proceso", o quiera implementar/configurar ERPNext real módulo por módulo. También cubre el pipeline de producción sin cabos sueltos al construir código real: qué ya existe, cambios de DB/migraciones, comunicación entre módulos (hooks.py/doc_events), lógica de negocio con TDD, frontend (Desk/Web Forms/portal), y QA E2E antes de producción — cruzando con los skills de superpowers.
---

# Arquitecto de Soluciones IA — Diseño de Flujos de Servicio (metodología ERPNext/Frappe)

Diseña sistemas y flujos de negocio con la misma disciplina de un ERP real: bases de datos relacionales limpias, ciclo de vida de documentos con trazabilidad completa, permisos por rol, y procesos encadenados de punta a punta — sin depender de un desarrollador para operar o extender el diseño.

Todo el contenido de referencia fue extraído **del código fuente real** de `frappe/frappe`, `frappe/erpnext` y `frappe/hrms` (no reconstruido de memoria), así que los nombres de DocTypes, campos y relaciones son exactos.

## Cuándo se usa

- El usuario quiere **diseñar algo nuevo** (un flujo de servicio, un producto, un proceso operativo) con rigor de ERP, sin ser developer.
- El usuario quiere **implementar/configurar ERPNext real**, módulo por módulo.
- El usuario pregunta por la relación entre tablas/módulos, o "qué necesito modelar" para un proceso.

## Proceso a seguir

1. **Identifica el modo**: ¿diseño de algo propio (greenfield) o configuración de ERPNext real? Pregúntalo si no es obvio — cambia el entregable (blueprint de DocTypes vs. pasos de configuración en la UI de ERPNext).

2. **Lee `references/00-framework-frappe.md` primero**, siempre. Ahí está el vocabulario y las reglas (DocType, Link=FK, Table=hija, ciclo Draft/Submit/Cancel, permisos por rol, hooks). Todo lo demás se apoya en esto.

3. **Lee `references/01-metodologia-diseno.md`** para el proceso de 6 pasos y los flujos de referencia de punta a punta (Order-to-Cash, Procure-to-Pay, Plan-to-Produce, Hire-to-Retire, Activos, Calidad, Servicio, Proyectos).

4. **Para el módulo específico en juego**, lee su archivo en `references/modulos/`:
   - `selling.md` — Ventas (Customer, Quotation, Sales Order, Delivery Note, Sales Invoice…)
   - `crm.md` — CRM (Lead, Opportunity, Prospect…)
   - `buying.md` — Compras (Supplier, Purchase Order, Purchase Receipt…)
   - `accounts.md` — Contabilidad (Chart of Accounts, GL Entry, Payment Entry, Journal Entry…) — el módulo más grande, 191 DocTypes
   - `stock.md` — Inventario (Item, Warehouse, Stock Entry, Stock Ledger Entry…)
   - `manufacturing.md` — Manufactura (BOM, Work Order, Job Card…)
   - `subcontracting.md` — Subcontratación
   - `hr.md` — Recursos Humanos (Employee, Leave Application, Attendance…)
   - `payroll.md` — Nómina (Salary Structure, Salary Slip, Payroll Entry…)
   - `projects.md` — Proyectos (Project, Task, Timesheet…)
   - `assets.md` — Activos fijos (Asset, depreciación…)
   - `quality-management.md` — Calidad (Quality Inspection, Non Conformance…)
   - `support.md` — Soporte (Issue…)
   - `maintenance.md` — Mantenimiento (Maintenance Visit/Schedule…)
   - `setup.md` — Configuración global (Company, Fiscal Year, UOM…)

   Cada archivo lista, con datos reales: Masters, Trees, Transactions y sus relaciones `Link`/`Table` exactas — úsalo como el ER diagram del módulo.

5. **Entrega el diseño en formato blueprint**, no prosa suelta:
   - Lista de entidades con su tipo (Master / Transaction / Child Table).
   - Diagrama de flujo del proceso (qué documento genera al siguiente).
   - Tabla de relaciones (Link fields = FKs).
   - Matriz de permisos por rol.
   - Efectos colaterales de cada submit (qué otro subsistema se actualiza).
   - Si es configuración real de ERPNext: pasos concretos en la UI (Setup → ... , o "Customize Form" para agregar campos), no solo teoría.

6. **Si el usuario quiere replicar esto fuera de ERPNext** (su propio sistema), sigue la sección final de `01-metodologia-diseno.md`: mapea su proceso a la forma más parecida de los flujos de referencia, conserva la forma (Master → Transaction encadenada → efecto colateral), cambia el vocabulario.

## Pipeline de producción sin cabos sueltos (cruce con `superpowers`)

Cuando el trabajo es **construir/modificar código real** sobre ERPNext (no solo diseñar el blueprint), sigue este pipeline de 7 capas — cada una cruza explícitamente con el skill de `superpowers` que la gobierna. No te saltes una capa porque "es obvia": los cabos sueltos casi siempre aparecen en la capa que se dio por hecha.

### 0. Antes de escribir nada — `using-superpowers` + `brainstorming`
Verifica primero si lo que vas a construir **ya existe**: busca en el código (`grep`/`bench find`) DocTypes, reportes, server scripts o client scripts que ya cubran (parcial o totalmente) el requerimiento antes de crear algo nuevo — un DocType duplicado o una lógica reescrita es el cabo suelto más caro de deshacer después. Si el requerimiento no está completamente claro, usa `brainstorming` antes de tocar código — no asumas el diseño.

### 1. Modelo de datos / cambios de DB — este skill + `writing-plans`
¿Necesitas un DocType nuevo, un campo nuevo (Customize Form o `create_custom_field` en un patch), o una migración de datos existente? Diséñalo con el proceso de las secciones 1-6 arriba (Link/Table, Master/Transaction, permisos). Si el cambio toca más de un DocType o tiene pasos ordenados (crear DocType → migrar datos → actualizar reportes), documenta el plan con `writing-plans` antes de ejecutar — un cambio de esquema mal secuenciado en producción es difícil de revertir limpio.

**Migraciones**: cambios de esquema van en un patch (`patches.txt` + función en `<app>/patches/`), nunca editando datos existentes a mano en producción. `bench migrate` los aplica de forma idempotente y versionada.

### 2. Cómo se hablan los módulos — hooks.py y Link/Table
Fuente verificada (`docs.frappe.io/framework/user/en/python-api/hooks`): la comunicación entre DocTypes/módulos en Frappe no es un event bus genérico — son **`doc_events`** declarados en `hooks.py` de tu app (`validate`, `before_save`, `on_submit`, `on_cancel`, `on_update`, etc., por DocType), más los **campos Link/Table** que ya diseñaste en la capa 1 (la relación estructural), más **scheduler events** (`hooks.py` → `scheduler_events`) para lo que corre en background, no en respuesta a una acción del usuario. Antes de escribir lógica nueva, decide explícitamente: ¿esto reacciona a un evento de otro documento (`doc_events`), o corre en un horario (`scheduler_events`), o es una llamada directa (API/server method)? Mezclar los tres sin decidirlo es la fuente más común de lógica que "a veces" corre y a veces no.

### 3. Lógica de negocio — `test-driven-development` + `systematic-debugging`
La lógica de negocio vive en los controladores Python de cada DocType (`validate`, `before_save`, `on_submit`...) o en Server Scripts si es lógica ligera sin deploy de código. **Escribe el test que falla primero** (`test-driven-development`) — para Frappe eso es un archivo `test_<doctype>.py` con clase `FrappeTestCase`, antes de escribir el `validate`/`on_submit` que hace pasar ese test. Si encuentras un bug en lógica existente, nunca "arregles y ya" — aplica las 4 fases de `systematic-debugging` (root cause primero, nunca fix de síntoma) antes de tocar el controlador.

### 4. Frontend — decide la capa antes de codificar
ERPNext/Frappe tiene 3 capas de frontend distintas, no una sola — decide cuál aplica antes de escribir:
- **Desk UI** (la interfaz interna estándar) — se personaliza con **Client Scripts** (JS por DocType, eventos `refresh`, `validate`, `<fieldname>`) y Form Scripts, sin tocar el core.
- **Web Forms / Portal** — para que usuarios externos (clientes, proveedores) interactúen sin acceso a Desk.
- **App custom (Vue/React separado)** consumiendo la API REST de Frappe — solo si el requerimiento excede lo que Desk/Web Forms puede dar razonablemente; cruza con `cloudflare-plataforma-completa`/`frontend-design`/`ui-ux-pro-max` si ese es el caso.

### 5. QA end-to-end antes de producción — `verification-before-completion`
No declares "listo para producción" sin evidencia corrida, no solo el código escrito:
1. **Tests automatizados**: `bench run-tests --app <tuapp> --module <modulo>` (o `--doctype`/`--test` para acotar) — fuente verificada `docs.frappe.io/framework/user/en/testing`. Los archivos de test deben empezar con `test_` y correr contra un site que empiece con `test_`; el test runner arma automáticamente los registros dependientes de los campos Link.
2. **Migración limpia**: `bench migrate` sin errores en un site de staging real, no solo en tu entorno de desarrollo.
3. **Flujo E2E manual del proceso completo** (no solo la pieza que tocaste) — sigue la cadena Master → Transacción → efecto colateral de la sección de blueprint arriba, de principio a fin, en el ambiente que más se parezca a producción.
4. Solo entonces invoca `verification-before-completion` — exige evidencia corrida (output real de `bench run-tests`, capturas del flujo E2E) antes de afirmar que algo "ya funciona", nunca una afirmación sin evidencia adjunta.

### 6. Cierre del ciclo — `requesting-code-review` → `receiving-code-review` → `finishing-a-development-branch`
Antes de mergear a la rama de producción del cliente: pide revisión (`requesting-code-review`), procesa el feedback con rigor técnico real, no aceptación performativa (`receiving-code-review`), y solo entonces decide cómo integrar (`finishing-a-development-branch` — merge, squash, o descartar según el estado real del trabajo). Si el cambio es lo bastante grande para trabajarlo aislado del resto del repo del cliente mientras tanto, usa `using-git-worktrees` desde el inicio de la capa 1, no al final.

## Principios que no debes romper

- **Nunca dupliques datos entre documentos** — usa Link fields, no copiar/pegar campos entre DocTypes.
- **Todo documento transaccional importante debe encadenar a su origen** — así la trazabilidad es gratis (join, no reconstrucción manual).
- **Permisos por rol funcional, nunca por persona.**
- **Un submit exitoso es irreversible sin rastro** — cancelar genera reversión, no borra historia.
- Si el módulo relevante no está en `references/modulos/` (ej. Website, Email, Integrations — infraestructura del framework, no de negocio), dilo explícitamente y usa `00-framework-frappe.md` como base conceptual en su lugar.

## Referencias del pipeline de producción
- `docs.frappe.io/framework/user/en/python-api/hooks` — `doc_events`, `scheduler_events` en `hooks.py`, verificado vía búsqueda web.
- `docs.frappe.io/framework/user/en/testing` — `FrappeTestCase`, `bench run-tests`, convención `test_*.py` sobre sites `test_*`, verificado vía búsqueda web.
- `obra/superpowers` (MIT) — los 14 skills de metodología de ingeniería importados a este repo (`brainstorming`, `test-driven-development`, `systematic-debugging`, `verification-before-completion`, `writing-plans`, `using-git-worktrees`, `requesting-code-review`, `receiving-code-review`, `finishing-a-development-branch`, `dispatching-parallel-agents`, `subagent-driven-development`, `executing-plans`, `writing-skills`, `using-superpowers`).
