# Módulo: Selling

Fuente: código real de ERPNext/HRMS (frappe/erpnext, frappe/hrms). 20 DocTypes en este módulo.

## Catálogos maestros (Masters) (5)

### Customer
_Buyer of Goods and Services._
**Relaciones (Link → FK a otro DocType):**
- `gender` (Gender) → **Gender**
- `default_bank_account` (Company Bank Account) → **Bank Account**
- `lead_name` (Lead) → **Lead**
- `account_manager` (Account Manager) → **User**
- `customer_group` (Customer Group) → **Customer Group**
- `territory` (Territory) → **Territory**
- `tax_category` (Tax Category) → **Tax Category**
- `represents_company` (Represents Company) → **Company**
- `default_currency` (Billing Currency) → **Currency**
- `default_price_list` (Price List) → **Price List**
- `language` (Print Language) → **Language**
- `customer_primary_contact` (Customer Primary Contact) → **Contact**
- `customer_primary_address` (Customer Primary Address) → **Address**
- `payment_terms` (Payment Terms Template) → **Payment Terms Template**
- `market_segment` (Market Segment) → **Market Segment**
- `industry` (Industry) → **Industry Type**
- `loyalty_program` (Loyalty Program) → **Loyalty Program**
- `default_sales_partner` (Sales Partner) → **Sales Partner**
- `tax_withholding_category` (Tax Withholding Category) → **Tax Withholding Category**
- `opportunity_name` (Opportunity) → **Opportunity**
- `prospect_name` (Prospect) → **Prospect**
- `tax_withholding_group` (Tax Withholding Group) → **Tax Withholding Group**
**Tablas hijas (1-a-muchos embebido):**
- `companies` (Allowed to transact with) → **Allowed To Transact With**
- `accounts` (Default Accounts) → **Party Account**
- `sales_team` (Sales Team) → **Sales Team**
- `credit_limits` (Credit & Overdue Limits) → **Customer Credit Limit**
- `allowed_companies` (Allowed Companies) → **Company Restriction**
- `portal_users` (Customer Portal Users) → **Portal User**
- `supplier_numbers` (Supplier Numbers) → **Supplier Number At Customer**

### Delivery Schedule Item
**Relaciones (Link → FK a otro DocType):**
- `item_code` (Item Code) → **Item**
- `sales_order` (Sales Order) → **Sales Order**
- `warehouse` (Warehouse) → **Warehouse**
- `uom` (UOM) → **UOM**
- `stock_uom` (Stock UOM) → **UOM**

### Industry Type

### Party Specific Item
**Relaciones (Link → FK a otro DocType):**
- `party` (Party Name) → **Dynamic(party_type)**
- `based_on_value` (Based On Value) → **Dynamic(restrict_based_on)**

### Sales Partner Type

## Documentos transaccionales (Transactions — flujo del proceso) (5)

### Installation Note
**Relaciones (Link → FK a otro DocType):**
- `customer` (Customer) → **Customer**
- `customer_address` (Customer Address) → **Address**
- `contact_person` (Contact Person) → **Contact**
- `territory` (Territory) → **Territory**
- `customer_group` (Customer Group) → **Customer Group**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Installation Note**
- `project` (Project) → **Project**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Items) → **Installation Note Item**

### Product Bundle
_Aggregate a group of Items into another Item. This is useful if you are maintaining the stock of the packed items and not the bundled item_
**Relaciones (Link → FK a otro DocType):**
- `new_item_code` (Parent Item) → **Item**
- `amended_from` (Amended From) → **Product Bundle**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Items) → **Product Bundle Item**

### Proforma Invoice
**Relaciones (Link → FK a otro DocType):**
- `sales_order` (Sales Order) → **Sales Order**
- `customer` (Customer) → **Customer**
- `company` (Company) → **Company**
- `currency` (Currency) → **Currency**
- `print_format` (Print Format) → **Print Format**
- `letter_head` (Letter Head) → **Letter Head**
- `amended_from` (Amended From) → **Proforma Invoice**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Items) → **Proforma Invoice Item**

### Quotation
**Relaciones (Link → FK a otro DocType):**
- `quotation_to` (Quotation To) → **DocType**
- `party_name` (Party) → **Dynamic(quotation_to)**
- `amended_from` (Amended From) → **Quotation**
- `company` (Company) → **Company**
- `customer_address` (Customer Address) → **Address**
- `contact_person` (Contact Person) → **Contact**
- `shipping_address_name` (Shipping Address) → **Address**
- `customer_group` (Customer Group) → **Customer Group**
- `territory` (Territory) → **Territory**
- `currency` (Currency) → **Currency**
- `selling_price_list` (Price List) → **Price List**
- `price_list_currency` (Price List Currency) → **Currency**
- `tax_category` (Tax Category) → **Tax Category**
- `shipping_rule` (Shipping Rule) → **Shipping Rule**
- `taxes_and_charges` (Sales Taxes and Charges Template) → **Sales Taxes and Charges Template**
- `coupon_code` (Coupon Code) → **Coupon Code**
- `referral_sales_partner` (Referral Sales Partner) → **Sales Partner**
- `payment_terms_template` (Payment Terms Template) → **Payment Terms Template**
- `tc_name` (Terms) → **Terms and Conditions**
- `letter_head` (Letter Head) → **Letter Head**
- `select_print_heading` (Print Heading) → **Print Heading**
- `language` (Print Language) → **Language**
- `auto_repeat` (Auto Repeat) → **Auto Repeat**
- `supplier_quotation` (Supplier Quotation) → **Supplier Quotation**
- `opportunity` (Opportunity) → **Opportunity**
- `company_address` (Company Address Name) → **Address**
- `incoterm` (Incoterm) → **Incoterm**
- `utm_campaign` (Campaign) → **UTM Campaign**
- `utm_source` (Source) → **UTM Source**
- `utm_medium` (Medium) → **UTM Medium**
- `company_contact_person` (Company Contact Person) → **Contact**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Items) → **Quotation Item**
- `pricing_rules` (Pricing Rule Detail) → **Pricing Rule Detail**
- `taxes` (Sales Taxes and Charges) → **Sales Taxes and Charges**
- `payment_schedule` (Payment Schedule) → **Payment Schedule**
- `lost_reasons` (Lost Reasons) → **Quotation Lost Reason Detail**
- `packed_items` (Bundle Items) → **Packed Item**
- `competitors` (Competitors) → **Competitor Detail**
- `item_wise_tax_details` (Item Wise Tax Details) → **Item Wise Tax Detail**

### Sales Order
**Relaciones (Link → FK a otro DocType):**
- `customer` (Customer) → **Customer**
- `amended_from` (Amended From) → **Sales Order**
- `company` (Company) → **Company**
- `customer_address` (Customer Address) → **Address**
- `contact_person` (Contact Person) → **Contact**
- `company_address` (Company Address Name) → **Address**
- `shipping_address_name` (Shipping Address Name) → **Address**
- `shipping_contact_person` (Shipping Contact Person) → **Contact**
- `customer_group` (Customer Group) → **Customer Group**
- `territory` (Territory) → **Territory**
- `currency` (Currency) → **Currency**
- `selling_price_list` (Price List) → **Price List**
- `price_list_currency` (Price List Currency) → **Currency**
- `set_warehouse` (Set Source Warehouse) → **Warehouse**
- `tax_category` (Tax Category) → **Tax Category**
- `shipping_rule` (Shipping Rule) → **Shipping Rule**
- `taxes_and_charges` (Sales Taxes and Charges Template) → **Sales Taxes and Charges Template**
- `coupon_code` (Coupon Code) → **Coupon Code**
- `payment_terms_template` (Payment Terms Template) → **Payment Terms Template**
- `tc_name` (Terms) → **Terms and Conditions**
- `inter_company_order_reference` (Inter Company Order Reference) → **Purchase Order**
- `project` (Project) → **Project**
- `party_account_currency` (Party Account Currency) → **Currency**
- `language` (Print Language) → **Language**
- `letter_head` (Letter Head) → **Letter Head**
- `select_print_heading` (Print Heading) → **Print Heading**
- `sales_partner` (Sales Partner) → **Sales Partner**
- `auto_repeat` (Auto Repeat) → **Auto Repeat**
- `represents_company` (Represents Company) → **Company**
- `dispatch_address_name` (Dispatch Address Name) → **Address**
- `cost_center` (Cost Center) → **Cost Center**
- `incoterm` (Incoterm) → **Incoterm**
- `utm_medium` (Medium) → **UTM Medium**
- `utm_source` (Source) → **UTM Source**
- `utm_campaign` (Campaign) → **UTM Campaign**
- `company_contact_person` (Company Contact Person) → **Contact**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Items) → **Sales Order Item**
- `pricing_rules` (Pricing Rule Detail) → **Pricing Rule Detail**
- `taxes` (Sales Taxes and Charges) → **Sales Taxes and Charges**
- `packed_items` (Packed Items) → **Packed Item**
- `payment_schedule` (Payment Schedule) → **Payment Schedule**
- `sales_team` (Sales Team) → **Sales Team**
- `item_wise_tax_details` (Item Wise Tax Details) → **Item Wise Tax Detail**

## Configuración global (Single) (2)

### SMS Center

### Selling Settings
_Settings for Selling Module_

## Tablas hijas usadas en este módulo (8)

`Customer Credit Limit`, `Installation Note Item`, `Product Bundle Item`, `Proforma Invoice Item`, `Quotation Item`, `Sales Order Item`, `Sales Team`, `Supplier Number At Customer`
