# Módulo: Stock

Fuente: código real de ERPNext/HRMS (frappe/erpnext, frappe/hrms). 78 DocTypes en este módulo.

## Catálogos maestros (Masters) (22)

### Batch
**Relaciones (Link → FK a otro DocType):**
- `item` (Item) → **Item**
- `parent_batch` (Parent Batch) → **Batch**
- `supplier` (Supplier) → **Supplier**
- `reference_doctype` (Source Document Type) → **DocType**
- `reference_name` (Source Document Name) → **Dynamic(reference_doctype)**
- `stock_uom` (Batch UOM) → **UOM**

### Bin
**Relaciones (Link → FK a otro DocType):**
- `warehouse` (Warehouse) → **Warehouse**
- `item_code` (Item Code) → **Item**
- `stock_uom` (UOM) → **UOM**
- `company` (Company) → **Company**

### Customs Tariff Number

### Inventory Dimension
**Relaciones (Link → FK a otro DocType):**
- `reference_document` (Reference Document) → **DocType**
- `document_type` (Apply to Document) → **DocType**

### Item
_A Product or a Service that is bought, sold or kept in stock._
**Relaciones (Link → FK a otro DocType):**
- `variant_of` (Variant Of) → **Item**
- `item_group` (Item Group) → **Item Group**
- `stock_uom` (Default Unit of Measure) → **UOM**
- `asset_category` (Asset Category) → **Asset Category**
- `brand` (Brand) → **Brand**
- `weight_uom` (Weight UOM) → **UOM**
- `purchase_uom` (Default Purchase Unit of Measure) → **UOM**
- `country_of_origin` (Country of Origin) → **Country**
- `customs_tariff_number` (Customs Tariff Number) → **Customs Tariff Number**
- `sales_uom` (Default Sales Unit of Measure) → **UOM**
- `quality_inspection_template` (Quality Inspection Template) → **Quality Inspection Template**
- `default_bom` (Default BOM) → **BOM**
- `default_item_manufacturer` (Default Item Manufacturer) → **Manufacturer**
- `purchase_tax_withholding_category` (Purchase Tax Withholding Category) → **Tax Withholding Category**
- `sales_tax_withholding_category` (Sales Tax Withholding Category) → **Tax Withholding Category**
**Tablas hijas (1-a-muchos embebido):**
- `barcodes` (Barcodes) → **Item Barcode**
- `reorder_levels` (Reorder level based on Warehouse) → **Item Reorder**
- `uoms` (uoms) → **UOM Conversion Detail**
- `attributes` (Variant Attributes) → **Item Variant Attribute**
- `item_defaults` (Item Defaults) → **Item Default**
- `supplier_items` (Item Supplier) → **Item Supplier**
- `customer_items` (Customer Items) → **Item Customer Detail**
- `taxes` (Taxes) → **Item Tax**
- `allowed_companies` (Allowed Companies) → **Company Restriction**

### Item Alternative
**Relaciones (Link → FK a otro DocType):**
- `item_code` (Item Code) → **Item**
- `alternative_item_code` (Alternative Item Code) → **Item**

### Item Attribute
**Tablas hijas (1-a-muchos embebido):**
- `item_attribute_values` (Item Attribute Values) → **Item Attribute Value**

### Item Lead Time
**Relaciones (Link → FK a otro DocType):**
- `item_code` (Item Code) → **Item**
- `stock_uom` (Stock UOM) → **UOM**
**Tablas hijas (1-a-muchos embebido):**
- `supplier_lead_times` (Supplier Lead Times) → **Item Lead Time Supplier**

### Item Manufacturer
**Relaciones (Link → FK a otro DocType):**
- `manufacturer` (Manufacturer) → **Manufacturer**
- `item_code` (Item Code) → **Item**

### Item Price
_Log the selling and buying rate of an Item_
**Relaciones (Link → FK a otro DocType):**
- `item_code` (Item Code) → **Item**
- `uom` (UOM) → **UOM**
- `brand` (Brand) → **Brand**
- `price_list` (Price List) → **Price List**
- `customer` (Customer) → **Customer**
- `supplier` (Supplier) → **Supplier**
- `currency` (Currency) → **Currency**
- `batch_no` (Batch No) → **Batch**

### Manufacturer
_Manufacturers used in Items_
**Relaciones (Link → FK a otro DocType):**
- `country` (Country) → **Country**

### Price List
_A Price List is a collection of Item Prices either Selling, Buying, or both_
**Relaciones (Link → FK a otro DocType):**
- `currency` (Currency) → **Currency**
**Tablas hijas (1-a-muchos embebido):**
- `countries` (Applicable for Countries) → **Price List Country**

### Putaway Rule
**Relaciones (Link → FK a otro DocType):**
- `item_code` (Item) → **Item**
- `warehouse` (Warehouse) → **Warehouse**
- `stock_uom` (Stock UOM) → **UOM**
- `company` (Company) → **Company**
- `uom` (UOM) → **UOM**

### Quality Inspection Parameter
**Relaciones (Link → FK a otro DocType):**
- `parameter_group` (Parameter Group) → **Quality Inspection Parameter Group**

### Quality Inspection Parameter Group

### Quality Inspection Template
**Tablas hijas (1-a-muchos embebido):**
- `item_quality_inspection_parameter` (Item Quality Inspection Parameter) → **Item Quality Inspection Parameter**

### Serial No
_Distinct unit of an Item_
**Relaciones (Link → FK a otro DocType):**
- `item_code` (Item Code) → **Item**
- `item_group` (Item Group) → **Item Group**
- `brand` (Brand) → **Brand**
- `asset` (Asset) → **Asset**
- `location` (Location) → **Location**
- `employee` (Employee) → **Employee**
- `company` (Company) → **Company**
- `work_order` (Work Order) → **Work Order**
- `warehouse` (Warehouse) → **Warehouse**
- `batch_no` (Batch No) → **Batch**
- `customer` (Customer) → **Customer**
- `reference_doctype` (Source Document Type) → **DocType**
- `reference_name` (Source Document Name) → **Dynamic(reference_doctype)**

### Shipment Parcel Template

### Stock Closing Balance
**Relaciones (Link → FK a otro DocType):**
- `item_code` (Item Code) → **Item**
- `warehouse` (Warehouse) → **Warehouse**
- `company` (Company) → **Company**
- `stock_uom` (Stock UOM) → **UOM**
- `item_group` (Item Group) → **Item Group**
- `stock_closing_entry` (Stock Closing Entry) → **Stock Closing Entry**
- `batch_no` (Batch No) → **Batch**

### Stock Entry Type

### UOM Category

### Warehouse Type

## Jerarquías / árboles (Trees) (1)

### Warehouse
_A logical Warehouse against which stock entries are made._
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `account` (Account) → **Account**
- `parent_warehouse` (Parent Warehouse) → **Warehouse**
- `old_parent` (Old Parent) → **Warehouse**
- `warehouse_type` (Warehouse Type) → **Warehouse Type**
- `default_in_transit_warehouse` (Default In-Transit Warehouse) → **Warehouse**
- `customer` (Customer) → **Customer**

## Documentos transaccionales (Transactions — flujo del proceso) (17)

### Delivery Note
**Relaciones (Link → FK a otro DocType):**
- `customer` (Customer) → **Customer**
- `amended_from` (Amended From) → **Delivery Note**
- `company` (Company) → **Company**
- `return_against` (Return Against Delivery Note) → **Delivery Note**
- `shipping_address_name` (Shipping Address) → **Address**
- `shipping_contact_person` (Shipping Contact Person) → **Contact**
- `contact_person` (Contact Person) → **Contact**
- `customer_address` (Billing Address Name) → **Address**
- `company_address` (Company Address Name) → **Address**
- `currency` (Currency) → **Currency**
- `selling_price_list` (Price List) → **Price List**
- `price_list_currency` (Price List Currency) → **Currency**
- `set_warehouse` (Set Source Warehouse) → **Warehouse**
- `tax_category` (Tax Category) → **Tax Category**
- `shipping_rule` (Shipping Rule) → **Shipping Rule**
- `taxes_and_charges` (Sales Taxes and Charges Template) → **Sales Taxes and Charges Template**
- `tc_name` (Terms) → **Terms and Conditions**
- `transporter` (Transporter) → **Supplier**
- `driver` (Driver) → **Driver**
- `project` (Project) → **Project**
- `customer_group` (Customer Group) → **Customer Group**
- `territory` (Territory) → **Territory**
- `letter_head` (Letter Head) → **Letter Head**
- `select_print_heading` (Print Heading) → **Print Heading**
- `language` (Print Language) → **Language**
- `auto_repeat` (Auto Repeat) → **Auto Repeat**
- `sales_partner` (Sales Partner) → **Sales Partner**
- `inter_company_reference` (Inter Company Reference) → **Purchase Receipt**
- `set_target_warehouse` (Set Target Warehouse) → **Warehouse**
- `represents_company` (Represents Company) → **Company**
- `dispatch_address_name` (Dispatch Address Name) → **Address**
- `cost_center` (Cost Center) → **Cost Center**
- `incoterm` (Incoterm) → **Incoterm**
- `delivery_trip` (Delivery Trip) → **Delivery Trip**
- `utm_medium` (Medium) → **UTM Medium**
- `utm_source` (Source) → **UTM Source**
- `utm_campaign` (Campaign) → **UTM Campaign**
- `company_contact_person` (Company Contact Person) → **Contact**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Delivery Note Item) → **Delivery Note Item**
- `pricing_rules` (Pricing Rule Detail) → **Pricing Rule Detail**
- `packed_items` (Packed Items) → **Packed Item**
- `taxes` (Sales Taxes and Charges) → **Sales Taxes and Charges**
- `sales_team` (Sales Team) → **Sales Team**
- `item_wise_tax_details` (Item Wise Tax Details) → **Item Wise Tax Detail**

### Delivery Trip
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `driver` (Driver) → **Driver**
- `uom` (Distance UOM) → **UOM**
- `vehicle` (Vehicle) → **Vehicle**
- `amended_from` (Amended From) → **Delivery Trip**
- `driver_address` (Driver Address) → **Address**
- `employee` (Employee) → **Employee**
**Tablas hijas (1-a-muchos embebido):**
- `delivery_stops` (Delivery Stop) → **Delivery Stop**

### Item Standard Cost
**Relaciones (Link → FK a otro DocType):**
- `item_code` (Item) → **Item**
- `company` (Company) → **Company**
- `revaluation_entry` (Revaluation Entry) → **Stock Reconciliation**
- `amended_from` (Amended From) → **Item Standard Cost**

### Landed Cost Voucher
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Landed Cost Voucher**
**Tablas hijas (1-a-muchos embebido):**
- `purchase_receipts` (Vouchers) → **Landed Cost Purchase Receipt**
- `items` (Receipt Items) → **Landed Cost Item**
- `taxes` (Landed Cost) → **Landed Cost Taxes and Charges**
- `vendor_invoices` (Vendor Invoices) → **Landed Cost Vendor Invoice**

### Material Request
**Relaciones (Link → FK a otro DocType):**
- `customer` (Customer) → **Customer**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Material Request**
- `letter_head` (Letter Head) → **Letter Head**
- `select_print_heading` (Print Heading) → **Print Heading**
- `tc_name` (Terms) → **Terms and Conditions**
- `job_card` (Job Card) → **Job Card**
- `set_warehouse` (Set Target Warehouse) → **Warehouse**
- `set_from_warehouse` (Set Source Warehouse) → **Warehouse**
- `work_order` (Work Order) → **Work Order**
- `buying_price_list` (Price List) → **Price List**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Items) → **Material Request Item**

### Packing Slip
_Generate packing slips for packages to be delivered. Used to notify package number, package contents and its weight._
**Relaciones (Link → FK a otro DocType):**
- `delivery_note` (Delivery Note) → **Delivery Note**
- `net_weight_uom` (Net Weight UOM) → **UOM**
- `gross_weight_uom` (Gross Weight UOM) → **UOM**
- `letter_head` (Letter Head) → **Letter Head**
- `amended_from` (Amended From) → **Packing Slip**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Items) → **Packing Slip Item**

### Pick List
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `parent_warehouse` (Warehouse) → **Warehouse**
- `customer` (Customer) → **Customer**
- `work_order` (Work Order) → **Work Order**
- `amended_from` (Amended From) → **Pick List**
- `material_request` (Material Request) → **Material Request**
**Tablas hijas (1-a-muchos embebido):**
- `locations` (Item Locations) → **Pick List Item**

### Purchase Receipt
**Relaciones (Link → FK a otro DocType):**
- `supplier` (Supplier) → **Supplier**
- `company` (Company) → **Company**
- `return_against` (Return Against Purchase Receipt) → **Purchase Receipt**
- `supplier_address` (Supplier Address) → **Address**
- `contact_person` (Contact Person) → **Contact**
- `shipping_address` (Shipping Address Template) → **Address**
- `currency` (Currency) → **Currency**
- `buying_price_list` (Price List) → **Price List**
- `price_list_currency` (Price List Currency) → **Currency**
- `set_warehouse` (Accepted Warehouse) → **Warehouse**
- `rejected_warehouse` (Rejected Warehouse) → **Warehouse**
- `supplier_warehouse` (Supplier Warehouse) → **Warehouse**
- `tax_category` (Tax Category) → **Tax Category**
- `shipping_rule` (Shipping Rule) → **Shipping Rule**
- `taxes_and_charges` (Purchase Taxes and Charges Template) → **Purchase Taxes and Charges Template**
- `tc_name` (Terms) → **Terms and Conditions**
- `amended_from` (Amended From) → **Purchase Receipt**
- `project` (Project) → **Project**
- `auto_repeat` (Auto Repeat) → **Auto Repeat**
- `letter_head` (Letter Head) → **Letter Head**
- `select_print_heading` (Print Heading) → **Print Heading**
- `inter_company_reference` (Inter Company Reference) → **Delivery Note**
- `billing_address` (Billing Address) → **Address**
- `set_from_warehouse` (Set From Warehouse) → **Warehouse**
- `represents_company` (Represents Company) → **Company**
- `cost_center` (Cost Center) → **Cost Center**
- `incoterm` (Incoterm) → **Incoterm**
- `subcontracting_receipt` (Subcontracting Receipt) → **Subcontracting Receipt**
- `dispatch_address` (Dispatch Address Template) → **Address**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Items) → **Purchase Receipt Item**
- `pricing_rules` (Pricing Rule Detail) → **Pricing Rule Detail**
- `supplied_items` (Consumed Items) → **Purchase Receipt Item Supplied**
- `taxes` (Purchase Taxes and Charges) → **Purchase Taxes and Charges**
- `item_wise_tax_details` (Item Wise Tax Details) → **Item Wise Tax Detail**

### Quality Inspection
**Relaciones (Link → FK a otro DocType):**
- `reference_name` (Reference Name) → **Dynamic(reference_type)**
- `item_code` (Item Code) → **Item**
- `item_serial_no` (Item Serial No) → **Serial No**
- `batch_no` (Batch No) → **Batch**
- `inspected_by` (Inspected By) → **User**
- `bom_no` (BOM No) → **BOM**
- `amended_from` (Amended From) → **Quality Inspection**
- `quality_inspection_template` (Quality Inspection Template) → **Quality Inspection Template**
- `company` (Company) → **Company**
- `letter_head` (Letter Head) → **Letter Head**
**Tablas hijas (1-a-muchos embebido):**
- `readings` (Readings) → **Quality Inspection Reading**

### Repost Item Valuation
**Relaciones (Link → FK a otro DocType):**
- `item_code` (Item Code) → **Item**
- `warehouse` (Warehouse) → **Warehouse**
- `amended_from` (Amended From) → **Repost Item Valuation**
- `company` (Company) → **Company**
- `voucher_type` (Voucher Type) → **DocType**
- `voucher_no` (Voucher No) → **Dynamic(voucher_type)**

### Serial and Batch Bundle
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `item_group` (Item Group) → **Item Group**
- `item_code` (Item Code) → **Item**
- `voucher_type` (Voucher Type) → **DocType**
- `voucher_no` (Voucher No) → **Dynamic(voucher_type)**
- `amended_from` (Amended From) → **Serial and Batch Bundle**
- `warehouse` (Warehouse) → **Warehouse**
**Tablas hijas (1-a-muchos embebido):**
- `entries` (entries) → **Serial and Batch Entry**

### Shipment
**Relaciones (Link → FK a otro DocType):**
- `pickup_company` (Company) → **Company**
- `pickup_customer` (Customer) → **Customer**
- `pickup_supplier` (Supplier) → **Supplier**
- `pickup_address_name` (Address) → **Address**
- `pickup_contact_name` (Contact) → **Contact**
- `delivery_company` (Company) → **Company**
- `delivery_customer` (Customer) → **Customer**
- `delivery_supplier` (Supplier) → **Supplier**
- `delivery_address_name` (Address) → **Address**
- `delivery_contact_name` (Contact) → **Contact**
- `parcel_template` (Parcel Template) → **Shipment Parcel Template**
- `amended_from` (Amended From) → **Shipment**
- `incoterm` (Incoterm) → **Incoterm**
- `pickup_contact_person` (Pickup Contact Person) → **User**
**Tablas hijas (1-a-muchos embebido):**
- `shipment_parcel` (Shipment Parcel) → **Shipment Parcel**
- `shipment_delivery_note` (Shipment Delivery Note) → **Shipment Delivery Note**

### Stock Closing Entry
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Stock Closing Entry**

### Stock Entry
**Relaciones (Link → FK a otro DocType):**
- `stock_entry_type` (Stock Entry Type) → **Stock Entry Type**
- `outgoing_stock_entry` (Stock Entry (Outward GIT)) → **Stock Entry**
- `source_stock_entry` (Source Stock Entry (Manufacture)) → **Stock Entry**
- `company` (Company) → **Company**
- `work_order` (Work Order) → **Work Order**
- `purchase_order` (Purchase Order) → **Purchase Order**
- `subcontracting_order` (Subcontracting Order) → **Subcontracting Order**
- `delivery_note_no` (Delivery Note No) → **Delivery Note**
- `sales_invoice_no` (Sales Invoice No) → **Sales Invoice**
- `purchase_receipt_no` (Purchase Receipt No) → **Purchase Receipt**
- `bom_no` (BOM No) → **BOM**
- `from_warehouse` (Default Source Warehouse) → **Warehouse**
- `source_warehouse_address` (Source Warehouse Address Link) → **Address**
- `to_warehouse` (Default Target Warehouse) → **Warehouse**
- `target_warehouse_address` (Target Warehouse Address Link) → **Address**
- `supplier` (Supplier) → **Supplier**
- `supplier_address` (Supplier Address) → **Address**
- `select_print_heading` (Print Heading) → **Print Heading**
- `letter_head` (Letter Head) → **Letter Head**
- `project` (Project) → **Project**
- `job_card` (Job Card) → **Job Card**
- `amended_from` (Amended From) → **Stock Entry**
- `credit_note` (Credit Note) → **Journal Entry**
- `pick_list` (Pick List) → **Pick List**
- `asset_repair` (Asset Repair) → **Asset Repair**
- `subcontracting_inward_order` (Subcontracting Inward Order) → **Subcontracting Inward Order**
- `cost_center` (Cost Center) → **Cost Center**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Items) → **Stock Entry Detail**
- `additional_costs` (Additional Costs) → **Landed Cost Taxes and Charges**

### Stock Ledger Entry
**Relaciones (Link → FK a otro DocType):**
- `item_code` (Item Code) → **Item**
- `warehouse` (Warehouse) → **Warehouse**
- `voucher_type` (Voucher Type) → **DocType**
- `voucher_no` (Voucher No) → **Dynamic(voucher_type)**
- `stock_uom` (Stock UOM) → **UOM**
- `project` (Project) → **Project**
- `company` (Company) → **Company**
- `serial_and_batch_bundle` (Serial and Batch Bundle) → **Serial and Batch Bundle**

### Stock Reconciliation
_This tool helps you to update or fix the quantity and valuation of stock in the system. It is typically used to synchronise the system values and what actually exists in your wareh_
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `expense_account` (Difference Account) → **Account**
- `cost_center` (Cost Center) → **Cost Center**
- `amended_from` (Amended From) → **Stock Reconciliation**
- `set_warehouse` (Default Warehouse) → **Warehouse**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Items) → **Stock Reconciliation Item**

### Stock Reservation Entry
**Relaciones (Link → FK a otro DocType):**
- `item_code` (Item Code) → **Item**
- `warehouse` (Warehouse) → **Warehouse**
- `voucher_no` (Voucher No) → **Dynamic(voucher_type)**
- `stock_uom` (Stock UOM) → **UOM**
- `project` (Project) → **Project**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Stock Reservation Entry**
- `from_voucher_no` (From Voucher No) → **Dynamic(from_voucher_type)**
**Tablas hijas (1-a-muchos embebido):**
- `sb_entries` (sb_entries) → **Serial and Batch Entry**

## Configuración global (Single) (5)

### Delivery Settings

### Item Variant Settings

### Quick Stock Balance

### Stock Reposting Settings

### Stock Settings
_Default settings for your stock-related transactions_

## Tablas hijas usadas en este módulo (33)

`Company Restriction`, `Delivery Note Item`, `Delivery Stop`, `Item Attribute Value`, `Item Barcode`, `Item Customer Detail`, `Item Default`, `Item Lead Time Supplier`, `Item Quality Inspection Parameter`, `Item Reorder`, `Item Supplier`, `Item Tax`, `Item Variant`, `Item Variant Attribute`, `Item Website Specification`, `Landed Cost Item`, `Landed Cost Purchase Receipt`, `Landed Cost Taxes and Charges`, `Landed Cost Vendor Invoice`, `Material Request Item`, `Packed Item`, `Packing Slip Item`, `Pick List Item`, `Price List Country`, `Purchase Receipt Item`, `Quality Inspection Reading`, `Serial and Batch Entry`, `Shipment Delivery Note`, `Shipment Parcel`, `Stock Entry Detail`, `Stock Reconciliation Item`, `UOM Conversion Detail`, `Variant Field`
