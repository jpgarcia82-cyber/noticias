# Metodología de diseño de flujos de servicio (estilo ERPNext)

Proceso de 6 pasos para diseñar un sistema o flujo de servicio con la misma disciplina que ERPNext, más los flujos de referencia reales de cada módulo (verificados contra el código fuente, no inventados).

## Los 6 pasos

### 1. Mapear el proceso de negocio de punta a punta primero, la base de datos después
No empieces por las tablas. Empieza por la secuencia de eventos: "¿qué pasa primero, qué pasa después, quién aprueba, qué dispara qué?". ERPNext resuelve esto con **cadenas de documentos encadenados** (cada documento nuevo se crea "Get Items From" el anterior, heredando datos y quedando enlazado). Ejemplo real order-to-cash:

```
Lead → Opportunity → Quotation → Sales Order → Delivery Note → Sales Invoice → Payment Entry
```

Cada flecha es un `Link` field en el documento siguiente apuntando al anterior (ej. `Sales Invoice.sales_order` → `Sales Order`). Esto da trazabilidad automática: desde una factura puedes llegar hasta el lead original con joins, sin campos duplicados.

### 2. Clasificar cada entidad: Master, Transaction o Child Table
Ver `00-framework-frappe.md` para la definición. Regla práctica:
- ¿Se repite/reutiliza a través de muchos documentos? → **Master** (Cliente, Producto, Almacén, Empleado).
- ¿Representa un evento de negocio en el tiempo, con estado (borrador/confirmado/cancelado)? → **Transaction**.
- ¿Solo tiene sentido como línea dentro de otro documento? → **Child Table**.

### 3. Dibujar las relaciones (tu diagrama entidad-relación)
Para cada Transaction, lista sus `Link` fields hacia Masters y hacia otras Transactions (documento de origen). Para cada Master, lista sus propios Links (ej. `Customer.customer_group` → `Customer Group`). Esto es literalmente tu esquema de base de datos — cada Link es una FK con índice.

### 4. Definir el ciclo de vida de cada Transaction
- ¿Draft/Submit/Cancel simple basta, o necesita **Workflow** con aprobaciones multinivel?
- ¿Qué efectos colaterales dispara el submit? (mover inventario, generar asiento contable, notificar, bloquear edición de campos)
- ¿Qué puede pasar tras cancelar? (¿se puede Amend/reemitir?)

### 5. Diseñar permisos por rol
Lista los roles funcionales del proceso (no personas) y qué puede hacer cada uno en cada Transaction: crear, leer, editar, aprobar/submit, cancelar, exportar. Ver la matriz real de `Sales Order` en `00-framework-frappe.md §5` como plantilla.

### 6. Verificar cobertura de reporting
Todo proceso necesita, mínimo: una lista filtrable del documento transaccional, un reporte de "pendientes por aprobar", y un reporte que cruce el documento con su origen (ej. "Sales Orders sin facturar"). Si no puedes nombrar estos 3 reportes para tu proceso, todavía no está bien modelado.

---

## Flujos de referencia reales (verificados contra el código fuente)

### Order-to-Cash (Ventas) — módulos Selling + CRM + Accounts + Stock
```
Lead → Opportunity → Quotation → Sales Order ─┬→ Delivery Note → (Stock Ledger Entry)
                                               └→ Sales Invoice → (GL Entry) → Payment Entry
```
Ver `modulos/crm.md` y `modulos/selling.md` para los Masters/Transactions completos de este tramo, `modulos/accounts.md` para la parte contable, `modulos/stock.md` para el movimiento de inventario.

### Procure-to-Pay (Compras) — módulos Buying + Stock + Accounts
```
Material Request → Purchase Order → Purchase Receipt → (Stock Ledger Entry)
                                  └→ Purchase Invoice → (GL Entry) → Payment Entry
```
Ver `modulos/buying.md`.

### Plan-to-Produce (Manufactura) — módulos Manufacturing + Stock
```
BOM (receta) → Work Order → Job Card (por operación) → Stock Entry (consumo/producción)
             └→ (si falta capacidad interna) → Subcontracting Order → Subcontracting Receipt
```
Ver `modulos/manufacturing.md` y `modulos/subcontracting.md`.

### Hire-to-Retire (RH) — módulo HR + Payroll
```
Job Applicant → Employee → Attendance / Leave Application → Salary Slip (vía Payroll Entry) → Appraisal
```
Ver `modulos/hr.md` y `modulos/payroll.md`.

### Activos (mantenimiento de capital) — módulo Assets
```
Asset (alta) → Asset Depreciation Schedule (automático) → Asset Repair / Asset Movement → Asset Capitalization / Disposal
```
Ver `modulos/assets.md`.

### Calidad — módulo Quality Management
```
Quality Inspection (ligado a Purchase Receipt / Stock Entry / Delivery Note) → Non Conformance → Corrective/Preventive Action
```
Ver `modulos/quality-management.md`.

### Servicio postventa — módulo Support + Maintenance
```
Issue (ticket) → (opcional) Maintenance Visit programada contra un Sales Order/Item con garantía
```
Ver `modulos/support.md` y `modulos/maintenance.md`.

### Proyectos — módulo Projects
```
Project → Task → Timesheet → (Sales Invoice si es facturable por horas)
```
Ver `modulos/projects.md`.

---

## Cómo usar esto para diseñar algo tuyo, no ERPNext

1. Identifica cuál de los flujos de arriba se parece más a lo que necesitas — casi todo proceso de servicio es una variación de Order-to-Cash o Procure-to-Pay con otro vocabulario.
2. Copia la forma (Master → Transaction encadenada → Transaction encadenada → efecto colateral), no los nombres. Ej.: un flujo de "onboarding de cliente en una fintech" es estructuralmente un Order-to-Cash: `Lead → Solicitud (KYC) → Cuenta Aprobada (Sales Order) → Activación (Delivery Note) → Primer Cargo (Sales Invoice)`.
3. Entrega el diseño como haría un arquitecto de Frappe: lista de DocTypes con su tipo (Master/Transaction/Child), sus campos Link, su matriz de permisos por rol, y su diagrama de flujo — eso es un blueprint implementable en Frappe sin escribir una línea de Python, solo creando los DocTypes vía UI (o exportando fixtures JSON).
