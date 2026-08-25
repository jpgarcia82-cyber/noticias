# Módulo: Subcontracting

Fuente: código real de ERPNext/HRMS (frappe/erpnext, frappe/hrms). 13 DocTypes en este módulo.

## Catálogos maestros (Masters) (1)

### Subcontracting BOM
**Relaciones (Link → FK a otro DocType):**
- `finished_good` (Finished Good) → **Item**
- `finished_good_bom` (Finished Good BOM) → **BOM**
- `service_item` (Service Item) → **Item**
- `service_item_uom` (Service Item UOM) → **UOM**
- `finished_good_uom` (Finished Good UOM) → **UOM**

## Documentos transaccionales (Transactions — flujo del proceso) (3)

### Subcontracting Inward Order
**Relaciones (Link → FK a otro DocType):**
- `sales_order` (Subcontracting Sales Order) → **Sales Order**
- `customer` (Customer) → **Customer**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Subcontracting Inward Order**
- `set_delivery_warehouse` (Set Delivery Warehouse) → **Warehouse**
- `customer_warehouse` (Customer Warehouse) → **Warehouse**
- `currency` (Customer Currency) → **Currency**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Items) → **Subcontracting Inward Order Item**
- `service_items` (Service Items) → **Subcontracting Inward Order Service Item**
- `received_items` (Required Items) → **Subcontracting Inward Order Received Item**
- `secondary_items` (Secondary Items) → **Subcontracting Inward Order Secondary Item**

### Subcontracting Order
**Relaciones (Link → FK a otro DocType):**
- `purchase_order` (Subcontracting Purchase Order) → **Purchase Order**
- `supplier` (Job Worker) → **Supplier**
- `supplier_warehouse` (Job Worker Warehouse) → **Warehouse**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Subcontracting Order**
- `supplier_address` (Job Worker Address) → **Address**
- `contact_person` (Job Worker Contact) → **Contact**
- `shipping_address` (Company Shipping Address) → **Address**
- `billing_address` (Company Billing Address) → **Address**
- `set_warehouse` (Set Target Warehouse) → **Warehouse**
- `set_reserve_warehouse` (Set Reserve Warehouse) → **Warehouse**
- `select_print_heading` (Print Heading) → **Print Heading**
- `letter_head` (Letter Head) → **Letter Head**
- `cost_center` (Cost Center) → **Cost Center**
- `project` (Project) → **Project**
- `supplier_currency` (Job Worker Currency) → **Currency**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Items) → **Subcontracting Order Item**
- `service_items` (Service Items) → **Subcontracting Order Service Item**
- `supplied_items` (Supplied Items) → **Subcontracting Order Supplied Item**
- `additional_costs` (Additional Costs) → **Landed Cost Taxes and Charges**

### Subcontracting Receipt
**Relaciones (Link → FK a otro DocType):**
- `supplier` (Job Worker) → **Supplier**
- `company` (Company) → **Company**
- `supplier_address` (Select Job Worker Address) → **Address**
- `contact_person` (Contact Person) → **Contact**
- `shipping_address` (Select Shipping Address) → **Address**
- `set_warehouse` (Accepted Warehouse) → **Warehouse**
- `rejected_warehouse` (Rejected Warehouse) → **Warehouse**
- `supplier_warehouse` (Job Worker Warehouse) → **Warehouse**
- `amended_from` (Amended From) → **Subcontracting Receipt**
- `auto_repeat` (Auto Repeat) → **Auto Repeat**
- `letter_head` (Letter Head) → **Letter Head**
- `select_print_heading` (Print Heading) → **Print Heading**
- `billing_address` (Select Billing Address) → **Address**
- `represents_company` (Represents Company) → **Company**
- `return_against` (Return Against Subcontracting Receipt) → **Subcontracting Receipt**
- `cost_center` (Cost Center) → **Cost Center**
- `project` (Project) → **Project**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Items) → **Subcontracting Receipt Item**
- `supplied_items` (Consumed Items) → **Subcontracting Receipt Supplied Item**
- `additional_costs` (Additional Costs) → **Landed Cost Taxes and Charges**

## Tablas hijas usadas en este módulo (9)

`Subcontracting Inward Order Item`, `Subcontracting Inward Order Received Item`, `Subcontracting Inward Order Secondary Item`, `Subcontracting Inward Order Service Item`, `Subcontracting Order Item`, `Subcontracting Order Service Item`, `Subcontracting Order Supplied Item`, `Subcontracting Receipt Item`, `Subcontracting Receipt Supplied Item`
