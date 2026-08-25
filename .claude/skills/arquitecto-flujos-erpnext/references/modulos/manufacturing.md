# Módulo: Manufacturing

Fuente: código real de ERPNext/HRMS (frappe/erpnext, frappe/hrms). 49 DocTypes en este módulo.

## Catálogos maestros (Masters) (9)

### Downtime Entry
**Relaciones (Link → FK a otro DocType):**
- `workstation` (Workstation / Machine) → **Workstation**
- `operator` (Operator) → **Employee**

### Master Production Schedule
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `parent_warehouse` (Parent Warehouse) → **Warehouse**
- `amended_from` (Amended From) → **Master Production Schedule**
- `sales_forecast` (Sales Forecast) → **Sales Forecast**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Items) → **Master Production Schedule Item**
- `sales_orders` (Sales Orders) → **Production Plan Sales Order**
- `material_requests` (Material Requests) → **Production Plan Material Request**
- `select_items` (Select Items) → **Master Production Schedule Item**

### Operation
**Relaciones (Link → FK a otro DocType):**
- `workstation` (Default Workstation) → **Workstation**
- `quality_inspection_template` (Quality Inspection Template) → **Quality Inspection Template**
**Tablas hijas (1-a-muchos embebido):**
- `sub_operations` (sub_operations) → **Sub Operation**

### Plant Floor
**Relaciones (Link → FK a otro DocType):**
- `warehouse` (Warehouse) → **Warehouse**
- `company` (Company) → **Company**

### Production Plan Schedule
**Relaciones (Link → FK a otro DocType):**
- `production_plan` (Production Plan) → **Production Plan**
- `company` (Company) → **Company**
- `item_code` (Item Code) → **Item**
- `operation` (Operation) → **Operation**
- `workstation` (Workstation) → **Workstation**
- `supplier` (Supplier) → **Supplier**

### Routing
**Tablas hijas (1-a-muchos embebido):**
- `operations` (BOM Operation) → **BOM Operation**

### Workstation
**Relaciones (Link → FK a otro DocType):**
- `holiday_list` (Holiday List) → **Holiday List**
- `workstation_type` (Workstation Type) → **Workstation Type**
- `plant_floor` (Plant Floor) → **Plant Floor**
- `warehouse` (Warehouse) → **Warehouse**
**Tablas hijas (1-a-muchos embebido):**
- `working_hours` (Working Hours) → **Workstation Working Hour**
- `workstation_costs` (Operating Components Cost) → **Workstation Cost**

### Workstation Operating Component
**Tablas hijas (1-a-muchos embebido):**
- `accounts` (Component Expense Account) → **Workstation Operating Component Account**

### Workstation Type
**Tablas hijas (1-a-muchos embebido):**
- `workstation_costs` (Operating Components Cost) → **Workstation Cost**

## Documentos transaccionales (Transactions — flujo del proceso) (8)

### BOM
**Relaciones (Link → FK a otro DocType):**
- `item` (Item to Manufacture) → **Item**
- `uom` (Unit Of Measure) → **UOM**
- `quality_inspection_template` (Quality Inspection Template) → **Quality Inspection Template**
- `company` (Company) → **Company**
- `currency` (Currency) → **Currency**
- `buying_price_list` (Price List) → **Price List**
- `routing` (Routing) → **Routing**
- `project` (Project) → **Project**
- `amended_from` (Amended From) → **BOM**
- `price_list_currency` (Price List Currency) → **Currency**
- `bom_creator` (BOM Creator) → **BOM Creator**
- `default_source_warehouse` (Default Source Warehouse) → **Warehouse**
- `default_target_warehouse` (Default Target Warehouse) → **Warehouse**
**Tablas hijas (1-a-muchos embebido):**
- `operations` (Operations) → **BOM Operation**
- `items` (Components) → **BOM Item**
- `exploded_items` (Exploded Items) → **BOM Explosion Item**
- `secondary_items` (Secondary Items) → **BOM Secondary Item**

### BOM Creator
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `buying_price_list` (Price List) → **Price List**
- `price_list_currency` (Price List Currency) → **Currency**
- `currency` (Currency) → **Currency**
- `project` (Project) → **Project**
- `item_code` (Finished Good) → **Item**
- `uom` (UOM) → **UOM**
- `item_group` (Item Group) → **Item Group**
- `amended_from` (Amended From) → **BOM Creator**
- `default_warehouse` (Default Source Warehouse) → **Warehouse**
- `routing` (Routing) → **Routing**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Items) → **BOM Creator Item**

### BOM Update Log
_BOM Update Tool Log with job status maintained_
**Relaciones (Link → FK a otro DocType):**
- `current_bom` (Current BOM) → **BOM**
- `new_bom` (New BOM) → **BOM**
- `amended_from` (Amended From) → **BOM Update Log**
- `error_log` (Error Log) → **Error Log**
**Tablas hijas (1-a-muchos embebido):**
- `bom_batches` (bom_batches) → **BOM Update Batch**

### Blanket Order
**Relaciones (Link → FK a otro DocType):**
- `customer` (Customer) → **Customer**
- `supplier` (Supplier) → **Supplier**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Blanket Order**
- `tc_name` (Terms) → **Terms and Conditions**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Item) → **Blanket Order Item**

### Job Card
**Relaciones (Link → FK a otro DocType):**
- `work_order` (Work Order) → **Work Order**
- `bom_no` (Final BOM) → **BOM**
- `workstation` (Workstation) → **Workstation**
- `operation` (Operation) → **Operation**
- `company` (Company) → **Company**
- `stock_uom` (Stock UOM) → **UOM**
- `wip_warehouse` (WIP Warehouse) → **Warehouse**
- `project` (Project) → **Project**
- `amended_from` (Amended From) → **Job Card**
- `production_item` (Final Product) → **Item**
- `quality_inspection` (Quality Inspection) → **Quality Inspection**
- `for_job_card` (For Job Card) → **Job Card**
- `for_operation` (For Operation) → **Operation**
- `batch_no` (Batch No) → **Batch**
- `quality_inspection_template` (Quality Inspection Template) → **Quality Inspection Template**
- `workstation_type` (Workstation Type) → **Workstation Type**
- `serial_and_batch_bundle` (Serial and Batch Bundle) → **Serial and Batch Bundle**
- `finished_good` (Item to Manufacture) → **Item**
- `target_warehouse` (Target Warehouse) → **Warehouse**
- `source_warehouse` (Source Warehouse) → **Warehouse**
- `semi_fg_bom` (Manufacturing BOM) → **BOM**
**Tablas hijas (1-a-muchos embebido):**
- `time_logs` (Time Logs) → **Job Card Time Log**
- `items` (Items) → **Job Card Item**
- `sub_operations` (Sub Operations) → **Job Card Operation**
- `employee` (Employee) → **Job Card Time Log**
- `scheduled_time_logs` (Scheduled Time Logs) → **Job Card Scheduled Time**
- `secondary_items` (Secondary Items) → **Job Card Secondary Item**

### Production Plan
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `item_code` (Item Code) → **Item**
- `customer` (Customer) → **Customer**
- `warehouse` (Warehouse) → **Warehouse**
- `project` (Project) → **Project**
- `amended_from` (Amended From) → **Production Plan**
- `for_warehouse` (For Warehouse) → **Warehouse**
- `raw_material_group_warehouse` (Raw Material Group Warehouse) → **Warehouse**
- `sub_assembly_warehouse` (Sub Assembly Warehouse) → **Warehouse**
**Tablas hijas (1-a-muchos embebido):**
- `sales_orders` (Sales Orders) → **Production Plan Sales Order**
- `material_requests` (Material Requests) → **Production Plan Material Request**
- `po_items` (Assembly Items) → **Production Plan Item**
- `mr_items` (Raw Materials) → **Material Request Plan Item**
- `warehouses` (Warehouses) → **Production Plan Material Request Warehouse**
- `prod_plan_references` (Production Plan Item Reference) → **Production Plan Item Reference**
- `sub_assembly_items` (sub_assembly_items) → **Production Plan Sub Assembly Item**

### Sales Forecast
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `parent_warehouse` (Parent Warehouse) → **Warehouse**
- `amended_from` (Amended From) → **Sales Forecast**
**Tablas hijas (1-a-muchos embebido):**
- `selected_items` (Select Items) → **Sales Forecast Item**
- `items` (Items) → **Sales Forecast Item**

### Work Order
**Relaciones (Link → FK a otro DocType):**
- `production_item` (Item To Manufacture) → **Item**
- `bom_no` (BOM No) → **BOM**
- `company` (Company) → **Company**
- `sales_order` (Sales Order) → **Sales Order**
- `project` (Project) → **Project**
- `wip_warehouse` (Work-in-Progress Warehouse) → **Warehouse**
- `fg_warehouse` (Target Warehouse) → **Warehouse**
- `scrap_warehouse` (Scrap Warehouse) → **Warehouse**
- `stock_uom` (Stock UOM) → **UOM**
- `material_request` (Material Request) → **Material Request**
- `production_plan` (Production Plan) → **Production Plan**
- `product_bundle_item` (Product Bundle Item) → **Item**
- `amended_from` (Amended From) → **Work Order**
- `source_warehouse` (Source Warehouse) → **Warehouse**
- `mps` (MPS) → **Master Production Schedule**
- `subcontracting_inward_order` (Subcontracting Inward Order) → **Subcontracting Inward Order**
**Tablas hijas (1-a-muchos embebido):**
- `required_items` (required_items) → **Work Order Item**
- `operations` (Operations) → **Work Order Operation**
- `non_stock_items` (Additional Costs (as per BOM)) → **Work Order Additional Item**
- `secondary_items` (Secondary Items (as per BOM)) → **Work Order Additional Item**

## Configuración global (Single) (2)

### BOM Update Tool
_Replace a particular BOM in all other BOMs where it is used. It will replace the old BOM link, update cost and regenerate "BOM Explosion Item" table as per new BOM. It also updates_

### Manufacturing Settings

## Tablas hijas usadas en este módulo (30)

`BOM Creator Item`, `BOM Explosion Item`, `BOM Item`, `BOM Operation`, `BOM Secondary Item`, `BOM Update Batch`, `BOM Website Item`, `BOM Website Operation`, `Blanket Order Item`, `Job Card Item`, `Job Card Operation`, `Job Card Scheduled Time`, `Job Card Secondary Item`, `Job Card Time Log`, `Master Production Schedule Item`, `Material Request Plan Item`, `Production Plan Item`, `Production Plan Item Reference`, `Production Plan Material Request`, `Production Plan Material Request Warehouse`, `Production Plan Sales Order`, `Production Plan Sub Assembly Item`, `Sales Forecast Item`, `Sub Operation`, `Work Order Additional Item`, `Work Order Item`, `Work Order Operation`, `Workstation Cost`, `Workstation Operating Component Account`, `Workstation Working Hour`
