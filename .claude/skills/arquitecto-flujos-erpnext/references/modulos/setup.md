# Módulo: Setup

Fuente: código real de ERPNext/HRMS (frappe/erpnext, frappe/hrms). 40 DocTypes en este módulo.

## Catálogos maestros (Masters) (17)

### Authorization Rule
**Relaciones (Link → FK a otro DocType):**
- `master_name` (Customer / Item / Item Group) → **Dynamic(customer_or_item)**
- `company` (Company) → **Company**
- `system_role` (Applicable To (Role)) → **Role**
- `to_emp` (Applicable To (Employee)) → **Employee**
- `system_user` (Applicable To (User)) → **User**
- `to_designation` (Applicable To (Designation)) → **Designation**
- `approving_role` (Approving Role (above authorized value)) → **Role**
- `approving_user` (Approving User  (above authorized value)) → **User**

### Branch

### Brand
**Tablas hijas (1-a-muchos embebido):**
- `brand_defaults` (Brand Defaults) → **Item Default**

### Currency Exchange
_Specify Exchange Rate to convert one currency into another_
**Relaciones (Link → FK a otro DocType):**
- `from_currency` (From Currency) → **Currency**
- `to_currency` (To Currency) → **Currency**

### Designation

### Driver
**Relaciones (Link → FK a otro DocType):**
- `transporter` (Transporter) → **Supplier**
- `employee` (Employee) → **Employee**
- `address` (Address) → **Address**
- `user` (User) → **User**
**Tablas hijas (1-a-muchos embebido):**
- `driving_license_category` (Driving License Category) → **Driving License Category**

### Email Digest
_Send regular summary reports via Email._
**Relaciones (Link → FK a otro DocType):**
- `company` (For Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `recipients` (Recipients) → **Email Digest Recipient**

### Employee Group
**Tablas hijas (1-a-muchos embebido):**
- `employee_list` (Employee) → **Employee Group Table**

### Holiday List
**Tablas hijas (1-a-muchos embebido):**
- `holidays` (Holidays) → **Holiday**

### Incoterm

### Party Type
**Relaciones (Link → FK a otro DocType):**
- `party_type` (Party Type) → **DocType**

### Quotation Lost Reason

### Sales Partner
_A third party distributor / dealer / commission agent / affiliate / reseller who sells the companies products for a commission._
**Relaciones (Link → FK a otro DocType):**
- `partner_type` (Partner Type) → **Sales Partner Type**
- `territory` (Territory) → **Territory**
**Tablas hijas (1-a-muchos embebido):**
- `targets` (Targets) → **Target Detail**

### Terms and Conditions
_Standard Terms and Conditions that can be added to Sales and Purchases. Examples: Validity of the offer, Payment Terms, Safety and Usage, etc._

### UOM
**Relaciones (Link → FK a otro DocType):**
- `category` (Category) → **UOM Category**

### UOM Conversion Factor
**Relaciones (Link → FK a otro DocType):**
- `category` (Category) → **UOM Category**
- `from_uom` (From) → **UOM**
- `to_uom` (To) → **UOM**

### Vehicle
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `uom` (Fuel UOM) → **UOM**
- `amended_from` (Amended From) → **Vehicle**
- `company` (Company) → **Company**

## Jerarquías / árboles (Trees) (8)

### Company
_Legal Entity / Subsidiary with a separate Chart of Accounts belonging to the Organization._
**Relaciones (Link → FK a otro DocType):**
- `default_finance_book` (Default Finance Book) → **Finance Book**
- `parent_company` (Parent Company) → **Company**
- `default_currency` (Default Currency) → **Currency**
- `default_letter_head` (Default Letter Head (DocType)) → **Letter Head**
- `default_holiday_list` (Default Holiday List) → **Holiday List**
- `default_warehouse_for_sales_return` (Default Warehouse for Sales Return) → **Warehouse**
- `country` (Country) → **Country**
- `existing_company` (Existing Company ) → **Company**
- `default_bank_account` (Default Bank Account) → **Account**
- `default_cash_account` (Default Cash Account) → **Account**
- `default_receivable_account` (Default Receivable Account) → **Account**
- `round_off_account` (Round Off Account) → **Account**
- `round_off_cost_center` (Round Off Cost Center) → **Cost Center**
- `write_off_account` (Write Off Account) → **Account**
- `bank_charges_account` (Bank Charges Account) → **Account**
- `exchange_gain_loss_account` (Exchange Gain / Loss Account) → **Account**
- `exchange_gain_account` (Exchange Gain Account) → **Account**
- `exchange_loss_account` (Exchange Loss Account) → **Account**
- `unrealized_exchange_gain_loss_account` (Unrealized Exchange Gain/Loss Account) → **Account**
- `default_payable_account` (Default Payable Account) → **Account**
- `default_expense_account` (Default Cost of Goods Sold Account) → **Account**
- `default_income_account` (Default Income Account) → **Account**
- `default_deferred_revenue_account` (Default Deferred Revenue Account) → **Account**
- `default_deferred_expense_account` (Default Deferred Expense Account) → **Account**
- `cost_center` (Default Cost Center) → **Cost Center**
- `payment_terms` (Default Payment Terms Template) → **Payment Terms Template**
- `default_inventory_account` (Default Inventory Account) → **Account**
- `stock_adjustment_account` (Stock Adjustment Account) → **Account**
- `default_purchase_price_variance_account` (Default Purchase Price Variance Account) → **Account**
- `default_manufacturing_variance_account` (Default Manufacturing Variance Account) → **Account**
- `stock_received_but_not_billed` (Stock Received But Not Billed) → **Account**
- `accumulated_depreciation_account` (Accumulated Depreciation Account) → **Account**
- `depreciation_expense_account` (Depreciation Expense Account) → **Account**
- `disposal_account` (Gain/Loss Account on Asset Disposal) → **Account**
- `depreciation_cost_center` (Asset Depreciation Cost Center) → **Cost Center**
- `capital_work_in_progress_account` (Capital Work In Progress Account) → **Account**
- `asset_received_but_not_billed` (Asset Received But Not Billed) → **Account**
- `exception_budget_approver_role` (Exception Budget Approver Role) → **Role**
- `default_selling_terms` (Default Selling Terms) → **Terms and Conditions**
- `default_buying_terms` (Default Buying Terms) → **Terms and Conditions**
- `default_in_transit_warehouse` (Default In-Transit Warehouse) → **Warehouse**
- `default_warehouse` (Default Warehouse) → **Warehouse**
- `sample_retention_warehouse` (Sample Retention Warehouse) → **Warehouse**
- `unrealized_profit_loss_account` (Unrealized Profit / Loss Account) → **Account**
- `default_discount_account` (Default Payment Discount Account) → **Account**
- `default_provisional_account` (Default Provisional Account) → **Account**
- `default_advance_received_account` (Default Advance Received Account) → **Account**
- `default_advance_paid_account` (Default Advance Paid Account) → **Account**
- `default_operating_cost_account` (Default Operating Cost Account) → **Account**
- `round_off_for_opening` (Round Off for Opening) → **Account**
- `reporting_currency` (Reporting Currency) → **Currency**
- `purchase_expense_account` (Purchase Expense Account) → **Account**
- `purchase_expense_contra_account` (Purchase Expense Contra Account) → **Account**
- `service_expense_account` (Service Expense Account) → **Account**
- `expenses_added_to_stock_account` (Expenses Added To Stock Account) → **Account**
- `expenses_added_to_stock_contra_account` (Expenses Added To Stock Contra Account) → **Account**
- `default_wip_warehouse` ( Default Work In Progress Warehouse ) → **Warehouse**
- `default_fg_warehouse` (Default Finished Goods Warehouse) → **Warehouse**
- `default_scrap_warehouse` (Default Scrap Warehouse) → **Warehouse**
- `default_sales_contact` (Default Sales Contact) → **Contact**
- `role_allowed_for_frozen_entries` (Roles Allowed to Set and Edit Frozen Account Entries) → **Role**
- `default_letter_head_report` (Default Letter Head (Report)) → **Letter Head**
- `stock_delivered_but_not_billed` (Stock Delivered But Not Billed) → **Account**

### Customer Group
**Relaciones (Link → FK a otro DocType):**
- `parent_customer_group` (Parent Customer Group) → **Customer Group**
- `default_price_list` (Default Price List) → **Price List**
- `payment_terms` (Default Payment Terms Template) → **Payment Terms Template**
- `old_parent` (old_parent) → **Customer Group**
**Tablas hijas (1-a-muchos embebido):**
- `accounts` (Accounts) → **Party Account**
- `credit_limits` (Credit & Overdue Limits) → **Customer Credit Limit**

### Department
**Relaciones (Link → FK a otro DocType):**
- `parent_department` (Parent Department) → **Department**
- `company` (Company) → **Company**

### Employee
**Relaciones (Link → FK a otro DocType):**
- `salutation` (Salutation) → **Salutation**
- `company` (Company) → **Company**
- `gender` (Gender) → **Gender**
- `user_id` (User ID) → **User**
- `department` (Department) → **Department**
- `designation` (Designation) → **Designation**
- `reports_to` (Reports to) → **Employee**
- `branch` (Branch) → **Branch**
- `holiday_list` (Holiday List) → **Holiday List**
- `salary_currency` (Salary Currency) → **Currency**
**Tablas hijas (1-a-muchos embebido):**
- `education` (Education) → **Employee Education**
- `external_work_history` (External Work History) → **Employee External Work History**
- `internal_work_history` (Internal Work History) → **Employee Internal Work History**

### Item Group
_An Item Group is a way to classify items based on types._
**Relaciones (Link → FK a otro DocType):**
- `parent_item_group` (Parent Item Group) → **Item Group**
- `old_parent` (old_parent) → **Item Group**
**Tablas hijas (1-a-muchos embebido):**
- `item_group_defaults` (Item Group Defaults) → **Item Default**
- `taxes` (Taxes) → **Item Tax**

### Sales Person
_All Sales Transactions can be tagged against multiple Sales Persons so that you can set and monitor targets._
**Relaciones (Link → FK a otro DocType):**
- `parent_sales_person` (Parent Sales Person) → **Sales Person**
- `employee` (Employee) → **Employee**
- `department` (Department) → **Department**
**Tablas hijas (1-a-muchos embebido):**
- `targets` (Targets) → **Target Detail**

### Supplier Group
**Relaciones (Link → FK a otro DocType):**
- `parent_supplier_group` (Parent Supplier Group) → **Supplier Group**
- `payment_terms` (Default Payment Terms Template) → **Payment Terms Template**
- `old_parent` (Old Parent) → **Supplier Group**
**Tablas hijas (1-a-muchos embebido):**
- `accounts` (Accounts) → **Party Account**

### Territory
_Classification of Customers by region_
**Relaciones (Link → FK a otro DocType):**
- `parent_territory` (Parent Territory) → **Territory**
- `territory_manager` (Territory Manager) → **Sales Person**
- `old_parent` (old_parent) → **Territory**
**Tablas hijas (1-a-muchos embebido):**
- `targets` (Targets) → **Target Detail**

## Documentos transaccionales (Transactions — flujo del proceso) (1)

### Transaction Deletion Record
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Transaction Deletion Record**
**Tablas hijas (1-a-muchos embebido):**
- `doctypes` (Summary) → **Transaction Deletion Record Details**
- `doctypes_to_delete` (DocTypes To Delete) → **Transaction Deletion Record To Delete**
- `doctypes_to_be_ignored` (Excluded DocTypes) → **Transaction Deletion Record Item**

## Configuración global (Single) (2)

### Authorization Control

### Global Defaults

## Tablas hijas usadas en este módulo (12)

`Driving License Category`, `Email Digest Recipient`, `Employee Education`, `Employee External Work History`, `Employee Group Table`, `Employee Internal Work History`, `Holiday`, `Quotation Lost Reason Detail`, `Target Detail`, `Transaction Deletion Record Item`, `Transaction Deletion Record To Delete`, `Website Item Group`
