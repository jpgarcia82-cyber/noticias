# Módulo: Projects

Fuente: código real de ERPNext/HRMS (frappe/erpnext, frappe/hrms). 15 DocTypes en este módulo.

## Catálogos maestros (Masters) (6)

### Activity Cost
**Relaciones (Link → FK a otro DocType):**
- `activity_type` (Activity Type) → **Activity Type**
- `employee` (Employee) → **Employee**
- `department` (Department) → **Department**

### Activity Type

### Project
**Relaciones (Link → FK a otro DocType):**
- `project_type` (Project Type) → **Project Type**
- `project_template` (From Template) → **Project Template**
- `department` (Department) → **Department**
- `customer` (Customer) → **Customer**
- `sales_order` (Sales Order) → **Sales Order**
- `company` (Company) → **Company**
- `cost_center` (Default Cost Center) → **Cost Center**
- `holiday_list` (Holiday List) → **Holiday List**
**Tablas hijas (1-a-muchos embebido):**
- `users` (Users) → **Project User**

### Project Template
**Relaciones (Link → FK a otro DocType):**
- `project_type` (Project Type) → **Project Type**
**Tablas hijas (1-a-muchos embebido):**
- `tasks` (Tasks) → **Project Template Task**

### Project Type

### Task Type

## Jerarquías / árboles (Trees) (1)

### Task
**Relaciones (Link → FK a otro DocType):**
- `project` (Project) → **Project**
- `issue` (Issue) → **Issue**
- `type` (Type) → **Task Type**
- `parent_task` (Parent Task) → **Task**
- `department` (Department) → **Department**
- `company` (Company) → **Company**
- `completed_by` (Completed By) → **User**
**Tablas hijas (1-a-muchos embebido):**
- `depends_on` (Dependent Tasks) → **Task Depends On**

## Documentos transaccionales (Transactions — flujo del proceso) (2)

### Project Update
**Relaciones (Link → FK a otro DocType):**
- `project` (Project) → **Project**
- `amended_from` (Amended From) → **Project Update**
**Tablas hijas (1-a-muchos embebido):**
- `users` (Users) → **Project User**

### Timesheet
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `sales_invoice` (Sales Invoice) → **Sales Invoice**
- `employee` (Employee) → **Employee**
- `department` (Department) → **Department**
- `user` (User) → **User**
- `amended_from` (Amended From) → **Timesheet**
- `parent_project` (Project) → **Project**
- `customer` (Customer) → **Customer**
- `currency` (Currency) → **Currency**
**Tablas hijas (1-a-muchos embebido):**
- `time_logs` (Time Sheets) → **Timesheet Detail**

## Configuración global (Single) (1)

### Projects Settings

## Tablas hijas usadas en este módulo (5)

`Dependent Task`, `Project Template Task`, `Project User`, `Task Depends On`, `Timesheet Detail`
