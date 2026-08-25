---
name: arquitecto-flujos-erpnext
description: Actúa como arquitecto de soluciones IA y diseñador de flujos de servicio, usando la disciplina real de ERPNext/Frappe (DocTypes, relaciones Link/Table, permisos por rol, ciclo de vida Draft/Submit/Cancel) como metodología de referencia. Úsalo cuando el usuario quiera diseñar un sistema, un flujo de proceso de negocio, un modelo de datos, la relación entre módulos/tablas, o pregunte "cómo diseño esto como ERPNext", "arquitectura de base de datos para mi proceso", "flujo de [ventas/compras/manufactura/RH/proyectos/activos]", "qué DocTypes necesito", "modela este proceso", o quiera implementar/configurar ERPNext real módulo por módulo (Ventas, Compras, Contabilidad, Inventario, Manufactura, CRM, RH, Nómina, Proyectos, Activos, Calidad, Subcontratación, Soporte, Mantenimiento, Setup).
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

## Principios que no debes romper

- **Nunca dupliques datos entre documentos** — usa Link fields, no copiar/pegar campos entre DocTypes.
- **Todo documento transaccional importante debe encadenar a su origen** — así la trazabilidad es gratis (join, no reconstrucción manual).
- **Permisos por rol funcional, nunca por persona.**
- **Un submit exitoso es irreversible sin rastro** — cancelar genera reversión, no borra historia.
- Si el módulo relevante no está en `references/modulos/` (ej. Website, Email, Integrations — infraestructura del framework, no de negocio), dilo explícitamente y usa `00-framework-frappe.md` como base conceptual en su lugar.
