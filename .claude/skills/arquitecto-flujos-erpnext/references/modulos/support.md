# Módulo: Support

Fuente: código real de ERPNext/HRMS (frappe/erpnext, frappe/hrms). 11 DocTypes en este módulo.

## Catálogos maestros (Masters) (5)

### Issue
**Relaciones (Link → FK a otro DocType):**
- `customer` (Customer) → **Customer**
- `priority` (Priority) → **Issue Priority**
- `issue_type` (Issue Type) → **Issue Type**
- `service_level_agreement` (Service Level Agreement) → **Service Level Agreement**
- `lead` (Lead) → **Lead**
- `contact` (Contact) → **Contact**
- `email_account` (Email Account) → **Email Account**
- `project` (Project) → **Project**
- `company` (Company) → **Company**
- `issue_split_from` (Issue Split From) → **Issue**

### Issue Priority

### Issue Type

### Service Level Agreement
**Relaciones (Link → FK a otro DocType):**
- `holiday_list` (Holiday List) → **Holiday List**
- `entity` (Entity) → **Dynamic(entity_type)**
- `default_priority` (Default Priority) → **Issue Priority**
- `document_type` (Apply On) → **DocType**
**Tablas hijas (1-a-muchos embebido):**
- `support_and_resolution` (Working Hours) → **Service Day**
- `priorities` (Priorities) → **Service Level Priority**
- `pause_sla_on` (SLA Paused On) → **Pause SLA On Status**
- `sla_fulfilled_on` (SLA Fulfilled On) → **SLA Fulfilled On Status**

### Warranty Claim
**Relaciones (Link → FK a otro DocType):**
- `serial_no` (Serial No) → **Serial No**
- `customer` (Customer) → **Customer**
- `item_code` (Item Code) → **Item**
- `resolved_by` (Resolved By) → **User**
- `contact_person` (Contact Person) → **Contact**
- `territory` (Territory) → **Territory**
- `customer_group` (Customer Group) → **Customer Group**
- `customer_address` (Customer Address) → **Address**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Warranty Claim**

## Configuración global (Single) (1)

### Support Settings

## Tablas hijas usadas en este módulo (5)

`Pause SLA On Status`, `SLA Fulfilled On Status`, `Service Day`, `Service Level Priority`, `Support Search Source`
