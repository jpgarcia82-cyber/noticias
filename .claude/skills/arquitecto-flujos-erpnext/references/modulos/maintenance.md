# Módulo: Maintenance

Fuente: código real de ERPNext/HRMS (frappe/erpnext, frappe/hrms). 5 DocTypes en este módulo.

## Documentos transaccionales (Transactions — flujo del proceso) (2)

### Maintenance Schedule
**Relaciones (Link → FK a otro DocType):**
- `customer` (Customer) → **Customer**
- `contact_person` (Contact Person) → **Contact**
- `customer_address` (Customer Address) → **Address**
- `territory` (Territory) → **Territory**
- `customer_group` (Customer Group) → **Customer Group**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Maintenance Schedule**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Items) → **Maintenance Schedule Item**
- `schedules` (Schedules) → **Maintenance Schedule Detail**

### Maintenance Visit
**Relaciones (Link → FK a otro DocType):**
- `customer` (Customer) → **Customer**
- `amended_from` (Amended From) → **Maintenance Visit**
- `company` (Company) → **Company**
- `customer_address` (Customer Address) → **Address**
- `contact_person` (Contact Person) → **Contact**
- `territory` (Territory) → **Territory**
- `customer_group` (Customer Group) → **Customer Group**
- `maintenance_schedule` (Maintenance Schedule) → **Maintenance Schedule**
- `maintenance_schedule_detail` (Maintenance Schedule Detail) → **Maintenance Schedule Detail**
**Tablas hijas (1-a-muchos embebido):**
- `purposes` (Purposes) → **Maintenance Visit Purpose**

## Tablas hijas usadas en este módulo (3)

`Maintenance Schedule Detail`, `Maintenance Schedule Item`, `Maintenance Visit Purpose`
