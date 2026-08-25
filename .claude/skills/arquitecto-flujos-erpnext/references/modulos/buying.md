# Módulo: Buying

Fuente: código real de ERPNext/HRMS (frappe/erpnext, frappe/hrms). 19 DocTypes en este módulo.

## Catálogos maestros (Masters) (5)

### Supplier
_Supplier of Goods or Services._
**Relaciones (Link → FK a otro DocType):**
- `country` (Country) → **Country**
- `default_bank_account` (Company Bank Account) → **Bank Account**
- `tax_category` (Tax Category) → **Tax Category**
- `tax_withholding_category` (Tax Withholding Category) → **Tax Withholding Category**
- `represents_company` (Represents Company) → **Company**
- `supplier_group` (Supplier Group) → **Supplier Group**
- `language` (Print Language) → **Language**
- `default_currency` (Billing Currency) → **Currency**
- `default_price_list` (Price List) → **Price List**
- `payment_terms` (Payment Terms Template) → **Payment Terms Template**
- `supplier_primary_contact` (Primary Contact) → **Contact**
- `supplier_primary_address` (Primary Address) → **Address**
- `tax_withholding_group` (Tax Withholding Group) → **Tax Withholding Group**
- `gender` (Gender) → **Gender**
**Tablas hijas (1-a-muchos embebido):**
- `companies` (Allowed to transact with) → **Allowed To Transact With**
- `accounts` (Per-Company Accounts) → **Party Account**
- `allowed_companies` (Allowed Companies) → **Company Restriction**
- `portal_users` (Supplier Portal Users) → **Portal User**
- `customer_numbers` (Customer Numbers) → **Customer Number At Supplier**

### Supplier Scorecard
**Relaciones (Link → FK a otro DocType):**
- `supplier` (Supplier) → **Supplier**
- `employee` (Employee) → **Employee**
**Tablas hijas (1-a-muchos embebido):**
- `standings` (Scoring Standings) → **Supplier Scorecard Scoring Standing**
- `criteria` (Scoring Criteria) → **Supplier Scorecard Scoring Criteria**

### Supplier Scorecard Criteria

### Supplier Scorecard Standing
**Relaciones (Link → FK a otro DocType):**
- `employee_link` (Other) → **Employee**

### Supplier Scorecard Variable

## Documentos transaccionales (Transactions — flujo del proceso) (4)

### Purchase Order
**Relaciones (Link → FK a otro DocType):**
- `supplier` (Supplier) → **Supplier**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Purchase Order**
- `customer` (Customer) → **Customer**
- `customer_contact_person` (Customer Contact) → **Contact**
- `supplier_address` (Supplier Address) → **Address**
- `contact_person` (Supplier Contact) → **Contact**
- `shipping_address` (Shipping Address) → **Address**
- `currency` (Currency) → **Currency**
- `buying_price_list` (Price List) → **Price List**
- `price_list_currency` (Price List Currency) → **Currency**
- `set_warehouse` (Set Target Warehouse) → **Warehouse**
- `supplier_warehouse` (Supplier Warehouse) → **Warehouse**
- `taxes_and_charges` (Purchase Taxes and Charges Template) → **Purchase Taxes and Charges Template**
- `shipping_rule` (Shipping Rule) → **Shipping Rule**
- `payment_terms_template` (Payment Terms Template) → **Payment Terms Template**
- `tc_name` (Terms) → **Terms and Conditions**
- `ref_sq` (Supplier Quotation) → **Supplier Quotation**
- `party_account_currency` (Party Account Currency) → **Currency**
- `inter_company_order_reference` (Inter Company Order Reference) → **Sales Order**
- `letter_head` (Letter Head) → **Letter Head**
- `select_print_heading` (Print Heading) → **Print Heading**
- `auto_repeat` (Auto Repeat) → **Auto Repeat**
- `tax_category` (Tax Category) → **Tax Category**
- `set_reserve_warehouse` (Set Reserve Warehouse) → **Warehouse**
- `billing_address` (Company Billing Address) → **Address**
- `represents_company` (Represents Company) → **Company**
- `cost_center` (Cost Center) → **Cost Center**
- `project` (Project) → **Project**
- `set_from_warehouse` (Set From Warehouse) → **Warehouse**
- `incoterm` (Incoterm) → **Incoterm**
- `dispatch_address` (Dispatch Address) → **Address**
- `supplier_group` (Supplier Group) → **Supplier Group**
- `mps` (MPS) → **Master Production Schedule**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Items) → **Purchase Order Item**
- `pricing_rules` (Purchase Order Pricing Rule) → **Pricing Rule Detail**
- `taxes` (Purchase Taxes and Charges) → **Purchase Taxes and Charges**
- `payment_schedule` (Payment Schedule) → **Payment Schedule**
- `item_wise_tax_details` (Item Wise Tax Details) → **Item Wise Tax Detail**

### Request for Quotation
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `vendor` (Supplier) → **Supplier**
- `email_template` (Email Template) → **Email Template**
- `tc_name` (Terms) → **Terms and Conditions**
- `select_print_heading` (Print Heading) → **Print Heading**
- `letter_head` (Letter Head) → **Letter Head**
- `opportunity` (Opportunity) → **Opportunity**
- `amended_from` (Amended From) → **Request for Quotation**
- `incoterm` (Incoterm) → **Incoterm**
- `billing_address` (Company Billing Address) → **Address**
- `shipping_address` (Company Shipping Address) → **Address**
**Tablas hijas (1-a-muchos embebido):**
- `suppliers` (Suppliers) → **Request for Quotation Supplier**
- `items` (Items) → **Request for Quotation Item**

### Supplier Quotation
**Relaciones (Link → FK a otro DocType):**
- `supplier` (Supplier) → **Supplier**
- `amended_from` (Amended From) → **Supplier Quotation**
- `company` (Company) → **Company**
- `supplier_address` (Supplier Address) → **Address**
- `contact_person` (Contact Person) → **Contact**
- `currency` (Currency) → **Currency**
- `buying_price_list` (Price List) → **Price List**
- `price_list_currency` (Price List Currency) → **Currency**
- `tax_category` (Tax Category) → **Tax Category**
- `shipping_rule` (Shipping Rule) → **Shipping Rule**
- `taxes_and_charges` (Purchase Taxes and Charges Template) → **Purchase Taxes and Charges Template**
- `tc_name` (Terms Template) → **Terms and Conditions**
- `select_print_heading` (Print Heading) → **Print Heading**
- `letter_head` (Letter Head) → **Letter Head**
- `auto_repeat` (Auto Repeat) → **Auto Repeat**
- `opportunity` (Opportunity) → **Opportunity**
- `incoterm` (Incoterm) → **Incoterm**
- `shipping_address` (Shipping Address) → **Address**
- `billing_address` (Company Billing Address) → **Address**
- `cost_center` (Cost Center) → **Cost Center**
- `project` (Project) → **Project**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Items) → **Supplier Quotation Item**
- `pricing_rules` (Pricing Rule Detail) → **Pricing Rule Detail**
- `taxes` (Purchase Taxes and Charges) → **Purchase Taxes and Charges**
- `item_wise_tax_details` (Item Wise Tax Details) → **Item Wise Tax Detail**

### Supplier Scorecard Period
**Relaciones (Link → FK a otro DocType):**
- `supplier` (Supplier) → **Supplier**
- `scorecard` (Supplier Scorecard Setup) → **Supplier Scorecard**
- `amended_from` (Amended From) → **Supplier Scorecard Period**
**Tablas hijas (1-a-muchos embebido):**
- `criteria` (Criteria) → **Supplier Scorecard Scoring Criteria**
- `variables` (Variables) → **Supplier Scorecard Scoring Variable**

## Configuración global (Single) (1)

### Buying Settings

## Tablas hijas usadas en este módulo (9)

`Customer Number At Supplier`, `Purchase Order Item`, `Purchase Receipt Item Supplied`, `Request for Quotation Item`, `Request for Quotation Supplier`, `Supplier Quotation Item`, `Supplier Scorecard Scoring Criteria`, `Supplier Scorecard Scoring Standing`, `Supplier Scorecard Scoring Variable`
