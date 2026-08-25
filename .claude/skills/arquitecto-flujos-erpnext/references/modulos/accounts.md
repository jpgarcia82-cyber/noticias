# Módulo: Accounts

Fuente: código real de ERPNext/HRMS (frappe/erpnext, frappe/hrms). 191 DocTypes en este módulo.

## Catálogos maestros (Masters) (47)

### Account Category

### Accounting Dimension
**Relaciones (Link → FK a otro DocType):**
- `document_type` (Reference Document Type) → **DocType**
**Tablas hijas (1-a-muchos embebido):**
- `dimension_defaults` (Dimension Defaults) → **Accounting Dimension Detail**

### Accounting Dimension Filter
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `accounts` (Applicable On Account) → **Applicable On Account**
- `dimensions` (Applicable Dimension) → **Allowed Dimension**

### Accounting Period
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `exempted_role` (Exempted Role) → **Role**
**Tablas hijas (1-a-muchos embebido):**
- `closed_documents` (Closed Documents) → **Closed Document**

### Bank
**Tablas hijas (1-a-muchos embebido):**
- `bank_transaction_mapping` (Bank Transaction Mapping) → **Bank Transaction Mapping**

### Bank Account
**Relaciones (Link → FK a otro DocType):**
- `account` (Company Account) → **Account**
- `bank` (Bank) → **Bank**
- `account_type` (Account Type) → **Bank Account Type**
- `account_subtype` (Account Subtype) → **Bank Account Subtype**
- `company` (Company) → **Company**
- `party_type` (Party Type) → **DocType**
- `party` (Party) → **Dynamic(party_type)**

### Bank Account Balance
**Relaciones (Link → FK a otro DocType):**
- `bank_account` (Bank Account) → **Bank Account**
- `company` (Company) → **Company**

### Bank Account Subtype

### Bank Account Type

### Bank Statement Import
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `bank_account` (Bank Account) → **Bank Account**
- `bank` (Bank) → **Bank**
- `reference_doctype` (Document Type) → **DocType**

### Bank Statement Import Log
**Relaciones (Link → FK a otro DocType):**
- `bank_account` (Bank Account) → **Bank Account**
- `currency` (Currency) → **Currency**
**Tablas hijas (1-a-muchos embebido):**
- `column_mapping` (Column Mapping) → **Bank Statement Import Log Column Map**

### Bank Transaction Rule
**Relaciones (Link → FK a otro DocType):**
- `account` (Account) → **Account**
- `party_type` (Party Type) → **DocType**
- `party` (Party) → **Dynamic(party_type)**
- `company` (Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `description_rules` (Description Rules) → **Bank Transaction Rule Description Conditions**
- `accounts` (Accounts) → **Bank Transaction Rule Accounts**

### Bisect Nodes
**Relaciones (Link → FK a otro DocType):**
- `root` (Root) → **Bisect Nodes**
- `left_child` (Left Child) → **Bisect Nodes**
- `right_child` (Right Child) → **Bisect Nodes**

### Cheque Print Template

### Coupon Code
**Relaciones (Link → FK a otro DocType):**
- `customer` (Customer) → **Customer**
- `pricing_rule` (Pricing Rule) → **Pricing Rule**
- `amended_from` (Amended From) → **Coupon Code**

### Dunning Type
**Relaciones (Link → FK a otro DocType):**
- `income_account` (Income Account) → **Account**
- `cost_center` (Cost Center) → **Cost Center**
- `company` (Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `dunning_letter_text` (dunning_letter_text) → **Dunning Letter Text**

### Finance Book

### Financial Report Template
**Relaciones (Link → FK a otro DocType):**
- `module` (Module (for Export)) → **Module Def**
**Tablas hijas (1-a-muchos embebido):**
- `rows` (Report Line Items) → **Financial Report Row**

### Fiscal Year
_Represents a Financial Year. All accounting entries and other major transactions are tracked against the Fiscal Year._
**Tablas hijas (1-a-muchos embebido):**
- `companies` (Companies) → **Fiscal Year Company**

### Item Tax Template
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `taxes` (Tax Rates) → **Item Tax Template Detail**

### Journal Entry Template
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `accounts` (Accounting Entries) → **Journal Entry Template Account**

### Ledger Health

### Ledger Merge
**Relaciones (Link → FK a otro DocType):**
- `account` (Account) → **Account**
- `company` (Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `merge_accounts` (Accounts to Merge) → **Ledger Merge Accounts**

### Loyalty Point Entry
**Relaciones (Link → FK a otro DocType):**
- `loyalty_program` (Loyalty Program) → **Loyalty Program**
- `customer` (Customer) → **Customer**
- `redeem_against` (Redeem Against) → **Loyalty Point Entry**
- `company` (Company) → **Company**
- `invoice_type` (Invoice Type) → **DocType**
- `invoice` (Invoice) → **Dynamic(invoice_type)**

### Loyalty Program
**Relaciones (Link → FK a otro DocType):**
- `customer_group` (Customer Group) → **Customer Group**
- `customer_territory` (Customer Territory) → **Territory**
- `expense_account` (Expense Account) → **Account**
- `cost_center` (Cost Center) → **Cost Center**
- `company` (Company) → **Company**
- `project` (Project) → **Project**
**Tablas hijas (1-a-muchos embebido):**
- `collection_rules` (Collection Rules) → **Loyalty Program Collection**

### Mode of Payment
**Tablas hijas (1-a-muchos embebido):**
- `accounts` (Accounts) → **Mode of Payment Account**

### Monthly Distribution
_Helps you distribute the Budget/Target across months if you have seasonality in your business._
**Relaciones (Link → FK a otro DocType):**
- `fiscal_year` (Fiscal Year) → **Fiscal Year**
**Tablas hijas (1-a-muchos embebido):**
- `percentages` (Monthly Distribution Percentages) → **Monthly Distribution Percentage**

### POS Profile
**Relaciones (Link → FK a otro DocType):**
- `customer` (Customer) → **Customer**
- `company` (Company) → **Company**
- `company_address` (Company Address) → **Address**
- `letter_head` (Letter Head) → **Letter Head**
- `tc_name` (Terms and Conditions) → **Terms and Conditions**
- `select_print_heading` (Print Heading) → **Print Heading**
- `selling_price_list` (Price List) → **Price List**
- `currency` (Currency) → **Currency**
- `write_off_account` (Write Off Account) → **Account**
- `write_off_cost_center` (Write Off Cost Center) → **Cost Center**
- `account_for_change_amount` (Account for Change Amount) → **Account**
- `income_account` (Income Account) → **Account**
- `expense_account` (Expense Account) → **Account**
- `cost_center` (Cost Center) → **Cost Center**
- `taxes_and_charges` (Taxes and Charges) → **Sales Taxes and Charges Template**
- `tax_category` (Tax Category) → **Tax Category**
- `print_format` (Print Format) → **Print Format**
- `warehouse` (Warehouse) → **Warehouse**
- `utm_campaign` (Campaign) → **UTM Campaign**
- `utm_source` (Source) → **UTM Source**
- `utm_medium` (Medium) → **UTM Campaign**
- `project` (Project) → **Project**
**Tablas hijas (1-a-muchos embebido):**
- `applicable_for_users` (Applicable for Users) → **POS Profile User**
- `payments` (Payment Methods) → **POS Payment Method**
- `item_groups` (Item Groups) → **POS Item Group**
- `customer_groups` (Customer Groups) → **POS Customer Group**

### Party Link
**Relaciones (Link → FK a otro DocType):**
- `primary_role` (Primary Role) → **DocType**
- `secondary_role` (Secondary Role) → **DocType**
- `primary_party` (Primary Party) → **Dynamic(primary_role)**
- `secondary_party` (Secondary Party) → **Dynamic(secondary_role)**

### Payment Gateway Account
**Relaciones (Link → FK a otro DocType):**
- `payment_gateway` (Payment Gateway) → **Payment Gateway**
- `payment_account` (Payment Account) → **Account**
- `company` (Company) → **Company**

### Payment Term
**Relaciones (Link → FK a otro DocType):**
- `mode_of_payment` (Mode of Payment) → **Mode of Payment**

### Payment Terms Template
**Tablas hijas (1-a-muchos embebido):**
- `terms` (Payment Terms) → **Payment Terms Template Detail**

### Pricing Rule
**Relaciones (Link → FK a otro DocType):**
- `warehouse` (Warehouse) → **Warehouse**
- `other_item_code` (Item Code) → **Item**
- `other_item_group` (Item Group) → **Item Group**
- `other_brand` (Brand) → **Brand**
- `customer` (Customer) → **Customer**
- `customer_group` (Customer Group) → **Customer Group**
- `territory` (Territory) → **Territory**
- `sales_partner` (Sales Partner) → **Sales Partner**
- `campaign` (Campaign) → **UTM Campaign**
- `supplier` (Supplier) → **Supplier**
- `supplier_group` (Supplier Group) → **Supplier Group**
- `company` (Company) → **Company**
- `currency` (Currency) → **Currency**
- `for_price_list` (For Price List) → **Price List**
- `free_item` (Free Item) → **Item**
- `free_item_uom` (UOM) → **UOM**
- `promotional_scheme` (Promotional Scheme) → **Promotional Scheme**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Apply Rule On Item Code) → **Pricing Rule Item Code**
- `item_groups` (Apply Rule On Item Group) → **Pricing Rule Item Group**
- `brands` (Apply Rule On Brand) → **Pricing Rule Brand**

### Process Payment Reconciliation Log
**Relaciones (Link → FK a otro DocType):**
- `process_pr` (Parent Document) → **Process Payment Reconciliation**
**Tablas hijas (1-a-muchos embebido):**
- `allocations` (Allocations) → **Process Payment Reconciliation Log Allocations**

### Process Statement Of Accounts
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `collection_name` (Recipient) → **Dynamic(customer_collection)**
- `account` (Account) → **Account**
- `finance_book` (Finance Book) → **Finance Book**
- `currency` (Currency) → **Currency**
- `letter_head` (Letter Head) → **Letter Head**
- `terms_and_conditions` (Terms and Conditions) → **Terms and Conditions**
- `sender` (Sender) → **Email Account**
- `payment_terms_template` (Payment Terms Template) → **Payment Terms Template**
- `sales_partner` (Sales Partner) → **Sales Partner**
- `sales_person` (Sales Person) → **Sales Person**
- `territory` (Territory) → **Territory**
- `print_format` (Print Format) → **Print Format**
**Tablas hijas (1-a-muchos embebido):**
- `cost_center` (Cost Center) → **PSOA Cost Center**
- `project` (Project) → **PSOA Project**
- `cc_to` (CC To) → **Process Statement Of Accounts CC**
- `customers` (Customers) → **Process Statement Of Accounts Customer**

### Promotional Scheme
**Relaciones (Link → FK a otro DocType):**
- `other_item_code` (Item Code) → **Item**
- `other_item_group` (Item Group) → **Item Group**
- `other_brand` (Brand) → **Brand**
- `company` (Company) → **Company**
- `currency` (Currency) → **Currency**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Pricing Rule Item Code) → **Pricing Rule Item Code**
- `item_groups` (Pricing Rule Item Group) → **Pricing Rule Item Group**
- `brands` (Pricing Rule Brand) → **Pricing Rule Brand**
- `customer` (Customer) → **Customer Item**
- `customer_group` (Customer Group) → **Customer Group Item**
- `territory` (Territory) → **Territory Item**
- `sales_partner` (Sales Partner) → **Sales Partner Item**
- `campaign` (Campaign) → **Campaign Item**
- `supplier` (Supplier) → **Supplier Item**
- `supplier_group` (Supplier Group) → **Supplier Group Item**
- `price_discount_slabs` (Promotional Scheme Price Discount) → **Promotional Scheme Price Discount**
- `product_discount_slabs` (Promotional Scheme Product Discount) → **Promotional Scheme Product Discount**

### Purchase Taxes and Charges Template
_Standard tax template that can be applied to all Purchase Transactions. This template can contain a list of tax heads and also other expense heads like "Shipping", "Insurance", "Ha_
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `tax_category` (Tax Category) → **Tax Category**
**Tablas hijas (1-a-muchos embebido):**
- `taxes` (Purchase Taxes and Charges) → **Purchase Taxes and Charges**

### Sales Taxes and Charges Template
_Standard tax template that can be applied to all Sales Transactions. This template can contain a list of tax heads and also other expense/income heads like "Shipping", "Insurance",_
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `tax_category` (Tax Category) → **Tax Category**
**Tablas hijas (1-a-muchos embebido):**
- `taxes` (Sales Taxes and Charges) → **Sales Taxes and Charges**

### Share Type

### Shareholder
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `share_balance` (Share Balance) → **Share Balance**

### Shipping Rule
_Specify conditions to calculate shipping amount_
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `account` (Shipping Account) → **Account**
- `cost_center` (Cost Center) → **Cost Center**
- `project` (Project) → **Project**
**Tablas hijas (1-a-muchos embebido):**
- `conditions` (Shipping Rule Conditions) → **Shipping Rule Condition**
- `countries` (Valid for Countries) → **Shipping Rule Country**

### Subscription
**Relaciones (Link → FK a otro DocType):**
- `party_type` (Party Type) → **DocType**
- `party` (Party) → **Dynamic(party_type)**
- `sales_tax_template` (Sales Taxes and Charges Template) → **Sales Taxes and Charges Template**
- `purchase_tax_template` (Purchase Taxes and Charges Template) → **Purchase Taxes and Charges Template**
- `cost_center` (Cost Center) → **Cost Center**
- `company` (Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `plans` (Plans) → **Subscription Plan Detail**

### Subscription Plan
**Relaciones (Link → FK a otro DocType):**
- `currency` (Currency) → **Currency**
- `item` (Item) → **Item**
- `price_list` (Price List) → **Price List**
- `payment_gateway` (Payment Gateway) → **Payment Gateway Account**
- `cost_center` (Cost Center) → **Cost Center**

### Tax Category

### Tax Rule
**Relaciones (Link → FK a otro DocType):**
- `sales_tax_template` (Sales Tax Template) → **Sales Taxes and Charges Template**
- `purchase_tax_template` (Purchase Tax Template) → **Purchase Taxes and Charges Template**
- `customer` (Customer) → **Customer**
- `supplier` (Supplier) → **Supplier**
- `item` (Item) → **Item**
- `billing_country` (Billing Country) → **Country**
- `tax_category` (Tax Category) → **Tax Category**
- `customer_group` (Customer Group) → **Customer Group**
- `supplier_group` (Supplier Group) → **Supplier Group**
- `item_group` (Item Group) → **Item Group**
- `shipping_country` (Shipping Country) → **Country**
- `company` (Company) → **Company**

### Tax Withholding Category
**Tablas hijas (1-a-muchos embebido):**
- `rates` (Rates) → **Tax Withholding Rate**
- `accounts` (Accounts) → **Tax Withholding Account**

### Tax Withholding Group

## Jerarquías / árboles (Trees) (2)

### Account
_Heads (or groups) against which Accounting Entries are made and balances are maintained._
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `account_currency` (Currency) → **Currency**
- `parent_account` (Parent Account) → **Account**
- `account_category` (Account Category) → **Account Category**

### Cost Center
_Track separate Income and Expense for product verticals or divisions._
**Relaciones (Link → FK a otro DocType):**
- `parent_cost_center` (Parent Cost Center) → **Cost Center**
- `company` (Company) → **Company**
- `old_parent` (old_parent) → **Cost Center**

## Documentos transaccionales (Transactions — flujo del proceso) (31)

### Account Closing Balance
**Relaciones (Link → FK a otro DocType):**
- `account` (Account) → **Account**
- `cost_center` (Cost Center) → **Cost Center**
- `account_currency` (Account Currency) → **Currency**
- `project` (Project) → **Project**
- `company` (Company) → **Company**
- `finance_book` (Finance Book) → **Finance Book**
- `period_closing_voucher` (Period Closing Voucher) → **Period Closing Voucher**

### Advance Payment Ledger Entry
**Relaciones (Link → FK a otro DocType):**
- `voucher_type` (Voucher Type) → **DocType**
- `voucher_no` (Voucher No) → **Dynamic(voucher_type)**
- `against_voucher_type` (Against Voucher Type) → **DocType**
- `against_voucher_no` (Against Voucher No) → **Dynamic(against_voucher_type)**
- `currency` (Currency) → **Currency**
- `company` (Company) → **Company**

### Bank Guarantee
**Relaciones (Link → FK a otro DocType):**
- `reference_doctype` (Reference Document Type) → **DocType**
- `reference_docname` (Reference Document Name) → **Dynamic(reference_doctype)**
- `customer` (Customer) → **Customer**
- `supplier` (Supplier) → **Supplier**
- `project` (Project) → **Project**
- `bank` (Bank) → **Bank**
- `bank_account` (Bank Account) → **Bank Account**
- `account` (Account) → **Account**
- `amended_from` (Amended From) → **Bank Guarantee**

### Bank Transaction
**Relaciones (Link → FK a otro DocType):**
- `bank_account` (Bank Account) → **Bank Account**
- `company` (Company) → **Company**
- `currency` (Currency) → **Currency**
- `amended_from` (Amended From) → **Bank Transaction**
- `party_type` (Party Type) → **DocType**
- `party` (Party) → **Dynamic(party_type)**
- `matched_transaction_rule` (Matched Transaction Rule) → **Bank Transaction Rule**
**Tablas hijas (1-a-muchos embebido):**
- `payment_entries` (Payment Entries) → **Bank Transaction Payments**

### Budget
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `cost_center` (Cost Center) → **Cost Center**
- `project` (Project) → **Project**
- `amended_from` (Amended From) → **Budget**
- `account` (Account) → **Account**
- `from_fiscal_year` (From Fiscal Year) → **Fiscal Year**
- `to_fiscal_year` (To Fiscal Year) → **Fiscal Year**
**Tablas hijas (1-a-muchos embebido):**
- `budget_distribution` (Budget Distribution) → **Budget Distribution**

### Cashier Closing
**Relaciones (Link → FK a otro DocType):**
- `user` (User) → **User**
- `amended_from` (Amended From) → **Cashier Closing**
**Tablas hijas (1-a-muchos embebido):**
- `payments` (Payments) → **Cashier Closing Payments**

### Cost Center Allocation
**Relaciones (Link → FK a otro DocType):**
- `main_cost_center` (Main Cost Center) → **Cost Center**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Cost Center Allocation**
**Tablas hijas (1-a-muchos embebido):**
- `allocation_percentages` (Cost Center Allocation Percentages) → **Cost Center Allocation Percentage**

### Dunning
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `dunning_type` (Dunning Type) → **Dunning Type**
- `language` (Print Language) → **Language**
- `letter_head` (Letter Head) → **Letter Head**
- `amended_from` (Amended From) → **Dunning**
- `customer` (Customer) → **Customer**
- `income_account` (Income Account) → **Account**
- `customer_address` (Customer Address) → **Address**
- `contact_person` (Contact Person) → **Contact**
- `cost_center` (Cost Center) → **Cost Center**
- `company_address` (Company Address) → **Address**
- `currency` (Currency) → **Currency**
**Tablas hijas (1-a-muchos embebido):**
- `overdue_payments` (Overdue Payments) → **Overdue Payment**

### Exchange Rate Revaluation
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Exchange Rate Revaluation**
**Tablas hijas (1-a-muchos embebido):**
- `accounts` (Exchange Rate Revaluation Account) → **Exchange Rate Revaluation Account**

### GL Entry
**Relaciones (Link → FK a otro DocType):**
- `account` (Account) → **Account**
- `party_type` (Party Type) → **DocType**
- `party` (Party) → **Dynamic(party_type)**
- `cost_center` (Cost Center) → **Cost Center**
- `account_currency` (Account Currency) → **Currency**
- `against_voucher_type` (Against Voucher Type) → **DocType**
- `against_voucher` (Against Voucher) → **Dynamic(against_voucher_type)**
- `voucher_type` (Voucher Type) → **DocType**
- `voucher_no` (Voucher No) → **Dynamic(voucher_type)**
- `project` (Project) → **Project**
- `fiscal_year` (Fiscal Year) → **Fiscal Year**
- `company` (Company) → **Company**
- `finance_book` (Finance Book) → **Finance Book**
- `transaction_currency` (Transaction Currency) → **Currency**

### Invoice Discounting
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `short_term_loan` (Short Term Loan Account) → **Account**
- `bank_account` (Bank Account) → **Account**
- `bank_charges_account` (Bank Charges Account) → **Account**
- `accounts_receivable_credit` (Accounts Receivable Credit Account) → **Account**
- `accounts_receivable_discounted` (Accounts Receivable Discounted Account) → **Account**
- `accounts_receivable_unpaid` (Accounts Receivable Unpaid Account) → **Account**
- `amended_from` (Amended From) → **Invoice Discounting**
**Tablas hijas (1-a-muchos embebido):**
- `invoices` (Invoices) → **Discounted Invoice**

### Journal Entry
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `finance_book` (Finance Book) → **Finance Book**
- `total_amount_currency` (Total Amount Currency) → **Currency**
- `inter_company_journal_entry_reference` (Inter Company Journal Entry Reference) → **Journal Entry**
- `letter_head` (Letter Head) → **Letter Head**
- `select_print_heading` (Print Heading) → **Print Heading**
- `mode_of_payment` (Mode of Payment) → **Mode of Payment**
- `payment_order` (Payment Order) → **Payment Order**
- `stock_entry` (Stock Entry) → **Stock Entry**
- `auto_repeat` (Auto Repeat) → **Auto Repeat**
- `amended_from` (Amended From) → **Journal Entry**
- `from_template` (From Template) → **Journal Entry Template**
- `tax_withholding_category` (Tax Withholding Category) → **Tax Withholding Category**
- `reversal_of` (Reversal Of) → **Journal Entry**
- `process_deferred_accounting` (Process Deferred Accounting) → **Process Deferred Accounting**
- `periodic_entry_difference_account` (Periodic Entry Difference Account) → **Account**
- `stock_asset_account` (Stock Asset Account) → **Account**
- `tax_withholding_group` (Tax Withholding Group) → **Tax Withholding Group**
**Tablas hijas (1-a-muchos embebido):**
- `accounts` (Accounting Entries) → **Journal Entry Account**
- `tax_withholding_entries` (Tax Withholding Entries) → **Tax Withholding Entry**

### POS Closing Entry
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `pos_profile` (POS Profile) → **POS Profile**
- `user` (Cashier) → **User**
- `amended_from` (Amended From) → **POS Closing Entry**
- `pos_opening_entry` (POS Opening Entry) → **POS Opening Entry**
**Tablas hijas (1-a-muchos embebido):**
- `payment_reconciliation` (Payment Reconciliation) → **POS Closing Entry Detail**
- `taxes` (Taxes) → **POS Closing Entry Taxes**
- `pos_invoices` (POS Transactions) → **POS Invoice Reference**
- `sales_invoices` (Sales Invoice Transactions) → **Sales Invoice Reference**

### POS Invoice
**Relaciones (Link → FK a otro DocType):**
- `customer` (Customer) → **Customer**
- `pos_profile` (POS Profile) → **POS Profile**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **POS Invoice**
- `return_against` (Return Against) → **POS Invoice**
- `project` (Project) → **Project**
- `cost_center` (Cost Center) → **Cost Center**
- `customer_address` (Customer Address) → **Address**
- `contact_person` (Contact Person) → **Contact**
- `territory` (Territory) → **Territory**
- `shipping_address_name` (Shipping Address Name) → **Address**
- `company_address` (Company Address Name) → **Address**
- `currency` (Currency) → **Currency**
- `selling_price_list` (Price List) → **Price List**
- `price_list_currency` (Price List Currency) → **Currency**
- `set_warehouse` (Source Warehouse) → **Warehouse**
- `taxes_and_charges` (Sales Taxes and Charges Template) → **Sales Taxes and Charges Template**
- `shipping_rule` (Shipping Rule) → **Shipping Rule**
- `tax_category` (Tax Category) → **Tax Category**
- `loyalty_program` (Loyalty Program) → **Loyalty Program**
- `loyalty_redemption_account` (Redemption Account) → **Account**
- `loyalty_redemption_cost_center` (Redemption Cost Center) → **Cost Center**
- `payment_terms_template` (Payment Terms Template) → **Payment Terms Template**
- `cash_bank_account` (Cash/Bank Account) → **Account**
- `account_for_change_amount` (Account for Change Amount) → **Account**
- `write_off_account` (Write Off Account) → **Account**
- `write_off_cost_center` (Write Off Cost Center) → **Cost Center**
- `tc_name` (Terms) → **Terms and Conditions**
- `letter_head` (Letter Head) → **Letter Head**
- `select_print_heading` (Print Heading) → **Print Heading**
- `inter_company_invoice_reference` (Inter Company Invoice Reference) → **Purchase Invoice**
- `customer_group` (Customer Group) → **Customer Group**
- `debit_to` (Debit To) → **Account**
- `party_account_currency` (Party Account Currency) → **Currency**
- `sales_partner` (Sales Partner) → **Sales Partner**
- `auto_repeat` (Auto Repeat) → **Auto Repeat**
- `consolidated_invoice` (Consolidated Sales Invoice) → **Sales Invoice**
- `coupon_code` (Coupon Code) → **Coupon Code**
- `utm_medium` (Medium) → **UTM Medium**
- `utm_campaign` (Campaign) → **UTM Campaign**
- `utm_source` (Source) → **UTM Source**
- `company_contact_person` (Company Contact Person) → **Contact**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Items) → **POS Invoice Item**
- `pricing_rules` (Pricing Rule Detail) → **Pricing Rule Detail**
- `packed_items` (Packed Items) → **Packed Item**
- `timesheets` (Time Sheets) → **Sales Invoice Timesheet**
- `taxes` (Sales Taxes and Charges) → **Sales Taxes and Charges**
- `advances` (Advances) → **Sales Invoice Advance**
- `payment_schedule` (Payment Schedule) → **Payment Schedule**
- `payments` (Sales Invoice Payment) → **Sales Invoice Payment**
- `sales_team` (Sales Team) → **Sales Team**
- `item_wise_tax_details` (Item Wise Tax Details) → **Item Wise Tax Detail**

### POS Invoice Merge Log
**Relaciones (Link → FK a otro DocType):**
- `customer` (Customer) → **Customer**
- `amended_from` (Amended From) → **POS Invoice Merge Log**
- `consolidated_invoice` (Consolidated Sales Invoice) → **Sales Invoice**
- `consolidated_credit_note` (Consolidated Credit Note) → **Sales Invoice**
- `pos_closing_entry` (POS Closing Entry) → **POS Closing Entry**
- `customer_group` (Customer Group) → **Customer Group**
- `company` (Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `pos_invoices` (POS Invoices) → **POS Invoice Reference**

### POS Opening Entry
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `pos_profile` (POS Profile) → **POS Profile**
- `user` (Cashier) → **User**
- `amended_from` (Amended From) → **POS Opening Entry**
**Tablas hijas (1-a-muchos embebido):**
- `balance_details` (Opening Balance Details) → **POS Opening Entry Detail**

### Payment Entry
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `cost_center` (Cost Center) → **Cost Center**
- `mode_of_payment` (Mode of Payment) → **Mode of Payment**
- `party_type` (Party Type) → **DocType**
- `party` (Party) → **Dynamic(party_type)**
- `contact_person` (Contact) → **Contact**
- `paid_from` (Account Paid From) → **Account**
- `paid_from_account_currency` (Account Currency (From)) → **Currency**
- `paid_to` (Account Paid To) → **Account**
- `paid_to_account_currency` (Account Currency (To)) → **Currency**
- `project` (Project) → **Project**
- `letter_head` (Letter Head) → **Letter Head**
- `print_heading` (Print Heading) → **Print Heading**
- `payment_order` (Payment Order) → **Payment Order**
- `auto_repeat` (Auto Repeat) → **Auto Repeat**
- `amended_from` (Amended From) → **Payment Entry**
- `bank_account` (Company Bank Account) → **Bank Account**
- `party_bank_account` (Party Bank Account) → **Bank Account**
- `tax_withholding_category` (Tax Withholding Category) → **Tax Withholding Category**
- `purchase_taxes_and_charges_template` (Purchase Taxes and Charges Template) → **Purchase Taxes and Charges Template**
- `sales_taxes_and_charges_template` (Sales Taxes and Charges Template) → **Sales Taxes and Charges Template**
- `tax_withholding_group` (Tax Withholding Group) → **Tax Withholding Group**
**Tablas hijas (1-a-muchos embebido):**
- `references` (Payment References) → **Payment Entry Reference**
- `deductions` (Payment Deductions or Loss) → **Payment Entry Deduction**
- `taxes` (Advance Taxes and Charges) → **Advance Taxes and Charges**
- `tax_withholding_entries` (Tax Withholding Entries) → **Tax Withholding Entry**

### Payment Ledger Entry
**Relaciones (Link → FK a otro DocType):**
- `account` (Account) → **Account**
- `party_type` (Party Type) → **DocType**
- `party` (Party) → **Dynamic(party_type)**
- `voucher_type` (Voucher Type) → **DocType**
- `voucher_no` (Voucher No) → **Dynamic(voucher_type)**
- `against_voucher_type` (Against Voucher Type) → **DocType**
- `against_voucher_no` (Against Voucher No) → **Dynamic(against_voucher_type)**
- `account_currency` (Currency) → **Currency**
- `company` (Company) → **Company**
- `cost_center` (Cost Center) → **Cost Center**
- `project` (Project) → **Project**
- `finance_book` (Finance Book) → **Finance Book**

### Payment Order
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `party` (Supplier) → **Supplier**
- `amended_from` (Amended From) → **Payment Order**
- `company_bank_account` (Company Bank Account) → **Bank Account**
- `company_bank` (Bank) → **Bank**
**Tablas hijas (1-a-muchos embebido):**
- `references` (Payment Order Reference) → **Payment Order Reference**

### Payment Request
**Relaciones (Link → FK a otro DocType):**
- `mode_of_payment` (Mode of Payment) → **Mode of Payment**
- `party_type` (Party Type) → **DocType**
- `party` (Party) → **Dynamic(party_type)**
- `reference_doctype` (Reference Doctype) → **DocType**
- `reference_name` (Reference Name) → **Dynamic(reference_doctype)**
- `currency` (Transaction Currency) → **Currency**
- `bank_account` (Bank Account) → **Bank Account**
- `bank` (Bank) → **Bank**
- `cost_center` (Cost Center) → **Cost Center**
- `project` (Project) → **Project**
- `payment_gateway_account` (Payment Gateway Account) → **Payment Gateway Account**
- `payment_order` (Payment Order) → **Payment Order**
- `amended_from` (Amended From) → **Payment Request**
- `company` (Company) → **Company**
- `party_account_currency` (Party Account Currency) → **Currency**
**Tablas hijas (1-a-muchos embebido):**
- `subscription_plans` (Subscription Plans) → **Subscription Plan Detail**
- `payment_reference` (Payment Reference) → **Payment Reference**

### Period Closing Voucher
**Relaciones (Link → FK a otro DocType):**
- `fiscal_year` (Fiscal Year) → **Fiscal Year**
- `amended_from` (Amended From) → **Period Closing Voucher**
- `company` (Company) → **Company**
- `closing_account_head` (Closing Account Head) → **Account**

### Process Deferred Accounting
**Relaciones (Link → FK a otro DocType):**
- `amended_from` (Amended From) → **Process Deferred Accounting**
- `account` (Account) → **Account**
- `company` (Company) → **Company**

### Process Payment Reconciliation
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `party_type` (Party Type) → **DocType**
- `party` (Party) → **Dynamic(party_type)**
- `receivable_payable_account` (Receivable/Payable Account) → **Account**
- `cost_center` (Cost Center) → **Cost Center**
- `bank_cash_account` (Bank/Cash Account) → **Account**
- `amended_from` (Amended From) → **Process Payment Reconciliation**
- `default_advance_account` (Default Advance Account) → **Account**

### Process Period Closing Voucher
**Relaciones (Link → FK a otro DocType):**
- `parent_pcv` (PCV) → **Period Closing Voucher**
- `amended_from` (Amended From) → **Process Period Closing Voucher**
**Tablas hijas (1-a-muchos embebido):**
- `normal_balances` (Dates to Process) → **Process Period Closing Voucher Detail**
- `z_opening_balances` (Opening Balances) → **Process Period Closing Voucher Detail**

### Process Subscription
**Relaciones (Link → FK a otro DocType):**
- `amended_from` (Amended From) → **Process Subscription**
- `subscription` (Subscription) → **Subscription**

### Purchase Invoice
**Relaciones (Link → FK a otro DocType):**
- `supplier` (Supplier) → **Supplier**
- `company` (Company) → **Company**
- `cost_center` (Cost Center) → **Cost Center**
- `amended_from` (Amended From) → **Purchase Invoice**
- `return_against` (Return Against Purchase Invoice) → **Purchase Invoice**
- `supplier_address` (Select Supplier Address) → **Address**
- `contact_person` (Contact Person) → **Contact**
- `shipping_address` (Select Shipping Address) → **Address**
- `currency` (Currency) → **Currency**
- `buying_price_list` (Price List) → **Price List**
- `price_list_currency` (Price List Currency) → **Currency**
- `set_warehouse` (Set Accepted Warehouse) → **Warehouse**
- `rejected_warehouse` (Rejected Warehouse) → **Warehouse**
- `tax_category` (Tax Category) → **Tax Category**
- `shipping_rule` (Shipping Rule) → **Shipping Rule**
- `taxes_and_charges` (Purchase Taxes and Charges Template) → **Purchase Taxes and Charges Template**
- `mode_of_payment` (Mode of Payment) → **Mode of Payment**
- `cash_bank_account` (Cash/Bank Account) → **Account**
- `write_off_account` (Write Off Account) → **Account**
- `write_off_cost_center` (Write Off Cost Center) → **Cost Center**
- `payment_terms_template` (Payment Terms Template) → **Payment Terms Template**
- `tc_name` (Terms) → **Terms and Conditions**
- `letter_head` (Letter Head) → **Letter Head**
- `select_print_heading` (Print Heading) → **Print Heading**
- `credit_to` (Credit To) → **Account**
- `party_account_currency` (Party Account Currency) → **Currency**
- `inter_company_invoice_reference` (Inter Company Invoice Reference) → **Sales Invoice**
- `auto_repeat` (Auto Repeat) → **Auto Repeat**
- `billing_address` (Select Billing Address) → **Address**
- `project` (Project) → **Project**
- `unrealized_profit_loss_account` (Unrealized Profit / Loss Account) → **Account**
- `represents_company` (Represents Company) → **Company**
- `set_from_warehouse` (Set From Warehouse) → **Warehouse**
- `supplier_warehouse` (Supplier Warehouse) → **Warehouse**
- `subscription` (Subscription) → **Subscription**
- `incoterm` (Incoterm) → **Incoterm**
- `supplier_group` (Supplier Group) → **Supplier Group**
- `dispatch_address` (Select Dispatch Address ) → **Address**
- `tax_withholding_group` (Tax Withholding Group) → **Tax Withholding Group**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Items) → **Purchase Invoice Item**
- `pricing_rules` (Pricing Rule Detail) → **Pricing Rule Detail**
- `supplied_items` (Supplied Items) → **Purchase Receipt Item Supplied**
- `taxes` (Purchase Taxes and Charges) → **Purchase Taxes and Charges**
- `advances` (Advances) → **Purchase Invoice Advance**
- `payment_schedule` (Payment Schedule) → **Payment Schedule**
- `item_wise_tax_details` (Item Wise Tax Details) → **Item Wise Tax Detail**
- `tax_withholding_entries` (Tax Withholding Entries) → **Tax Withholding Entry**

### Repost Accounting Ledger
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Repost Accounting Ledger**
- `scheduled_job` (Scheduled Job) → **RQ Job**
**Tablas hijas (1-a-muchos embebido):**
- `vouchers` (Vouchers) → **Repost Accounting Ledger Items**

### Repost Payment Ledger
**Relaciones (Link → FK a otro DocType):**
- `voucher_type` (Voucher Type) → **DocType**
- `amended_from` (Amended From) → **Repost Payment Ledger**
- `company` (Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `repost_vouchers` (Selected Vouchers) → **Repost Payment Ledger Items**

### Sales Invoice
**Relaciones (Link → FK a otro DocType):**
- `customer` (Customer) → **Customer**
- `project` (Project) → **Project**
- `pos_profile` (POS Profile) → **POS Profile**
- `company` (Company) → **Company**
- `cost_center` (Cost Center) → **Cost Center**
- `amended_from` (Amended From) → **Sales Invoice**
- `return_against` (Return Against) → **Sales Invoice**
- `customer_address` (Customer Address) → **Address**
- `contact_person` (Contact Person) → **Contact**
- `territory` (Territory) → **Territory**
- `shipping_address_name` (Shipping Address Name) → **Address**
- `shipping_contact_person` (Shipping Contact Person) → **Contact**
- `company_address` (Company Address Name) → **Address**
- `currency` (Currency) → **Currency**
- `selling_price_list` (Price List) → **Price List**
- `price_list_currency` (Price List Currency) → **Currency**
- `set_warehouse` (Source Warehouse) → **Warehouse**
- `taxes_and_charges` (Sales Taxes and Charges Template) → **Sales Taxes and Charges Template**
- `shipping_rule` (Shipping Rule) → **Shipping Rule**
- `tax_category` (Tax Category) → **Tax Category**
- `loyalty_program` (Loyalty Program) → **Loyalty Program**
- `loyalty_redemption_account` (Redemption Account) → **Account**
- `loyalty_redemption_cost_center` (Redemption Cost Center) → **Cost Center**
- `payment_terms_template` (Payment Terms Template) → **Payment Terms Template**
- `cash_bank_account` (Cash/Bank Account) → **Account**
- `account_for_change_amount` (Account for Change Amount) → **Account**
- `write_off_account` (Write Off Account) → **Account**
- `write_off_cost_center` (Write Off Cost Center) → **Cost Center**
- `tc_name` (Terms) → **Terms and Conditions**
- `letter_head` (Letter Head) → **Letter Head**
- `language` (Print Language) → **Language**
- `select_print_heading` (Print Heading) → **Print Heading**
- `inter_company_invoice_reference` (Inter Company Invoice Reference) → **Purchase Invoice**
- `customer_group` (Customer Group) → **Customer Group**
- `debit_to` (Debit To) → **Account**
- `party_account_currency` (Party Account Currency) → **Currency**
- `sales_partner` (Sales Partner) → **Sales Partner**
- `auto_repeat` (Auto Repeat) → **Auto Repeat**
- `unrealized_profit_loss_account` (Unrealized Profit / Loss Account) → **Account**
- `represents_company` (Represents Company) → **Company**
- `set_target_warehouse` (Set Target Warehouse) → **Warehouse**
- `additional_discount_account` (Discount Account) → **Account**
- `dispatch_address_name` (Dispatch Address Name) → **Address**
- `subscription` (Subscription) → **Subscription**
- `incoterm` (Incoterm) → **Incoterm**
- `coupon_code` (Coupon Code) → **Coupon Code**
- `utm_medium` (Medium) → **UTM Medium**
- `utm_campaign` (Campaign) → **UTM Campaign**
- `utm_source` (Source) → **UTM Source**
- `company_contact_person` (Company Contact Person) → **Contact**
- `pos_closing_entry` (POS Closing Entry) → **POS Closing Entry**
- `tax_withholding_group` (Tax Withholding Group) → **Tax Withholding Group**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Items) → **Sales Invoice Item**
- `pricing_rules` (Pricing Rule Detail) → **Pricing Rule Detail**
- `packed_items` (Packed Items) → **Packed Item**
- `timesheets` (Time Sheets) → **Sales Invoice Timesheet**
- `taxes` (Sales Taxes and Charges) → **Sales Taxes and Charges**
- `advances` (Advances) → **Sales Invoice Advance**
- `payment_schedule` (Payment Schedule) → **Payment Schedule**
- `payments` (Sales Invoice Payment) → **Sales Invoice Payment**
- `sales_team` (Sales Contributions and Incentives) → **Sales Team**
- `item_wise_tax_details` (Item Wise Tax Details) → **Item Wise Tax Detail**
- `tax_withholding_entries` (Tax Withholding Entries) → **Tax Withholding Entry**

### Share Transfer
**Relaciones (Link → FK a otro DocType):**
- `from_shareholder` (From Shareholder) → **Shareholder**
- `equity_or_liability_account` (Equity/Liability Account) → **Account**
- `asset_account` (Asset Account) → **Account**
- `to_shareholder` (To Shareholder) → **Shareholder**
- `share_type` (Share Type) → **Share Type**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Share Transfer**

### Unreconcile Payment
**Relaciones (Link → FK a otro DocType):**
- `amended_from` (Amended From) → **Unreconcile Payment**
- `company` (Company) → **Company**
- `voucher_type` (Voucher Type) → **DocType**
- `voucher_no` (Voucher No) → **Dynamic(voucher_type)**
**Tablas hijas (1-a-muchos embebido):**
- `allocations` (Allocations) → **Unreconcile Payment Entries**

## Configuración global (Single) (12)

### Accounts Settings

### Bank Clearance

### Bank Reconciliation Tool

### Bisect Accounting Statements

### Chart of Accounts Importer
_Import Chart of Accounts from a csv file_

### Currency Exchange Settings

### Ledger Health Monitor

### Opening Invoice Creation Tool

### POS Settings

### Payment Reconciliation

### Pegged Currencies

### Subscription Settings

## Tablas hijas usadas en este módulo (99)

`Accounting Dimension Detail`, `Advance Taxes and Charges`, `Allowed Dimension`, `Allowed To Transact With`, `Applicable On Account`, `Bank Clearance Detail`, `Bank Statement Import Log Column Map`, `Bank Transaction Mapping`, `Bank Transaction Payments`, `Bank Transaction Rule Accounts`, `Bank Transaction Rule Description Conditions`, `Budget Account`, `Budget Distribution`, `Campaign Item`, `Cashier Closing Payments`, `Closed Document`, `Cost Center Allocation Percentage`, `Currency Exchange Settings Details`, `Currency Exchange Settings Result`, `Customer Group Item`, `Customer Item`, `Discounted Invoice`, `Dunning Letter Text`, `Exchange Rate Revaluation Account`, `Financial Report Row`, `Fiscal Year Company`, `Item Tax Template Detail`, `Item Wise Tax Detail`, `Journal Entry Account`, `Journal Entry Template Account`, `Ledger Health Monitor Company`, `Ledger Merge Accounts`, `Loyalty Point Entry Redemption`, `Loyalty Program Collection`, `Mode of Payment Account`, `Monthly Distribution Percentage`, `Opening Invoice Creation Tool Item`, `Overdue Payment`, `POS Closing Entry Detail`, `POS Closing Entry Taxes`, `POS Customer Group`, `POS Field`, `POS Invoice Item`, `POS Invoice Reference`, `POS Item Group`, `POS Opening Entry Detail`, `POS Payment Method`, `POS Profile User`, `POS Search Fields`, `PSOA Cost Center`, `PSOA Project`, `Party Account`, `Payment Entry Deduction`, `Payment Entry Reference`, `Payment Order Reference`, `Payment Reconciliation Allocation`, `Payment Reconciliation Invoice`, `Payment Reconciliation Payment`, `Payment Reference`, `Payment Schedule`, `Payment Terms Template Detail`, `Pegged Currency Details`, `Pricing Rule Brand`, `Pricing Rule Detail`, `Pricing Rule Item Code`, `Pricing Rule Item Group`, `Process Payment Reconciliation Log Allocations`, `Process Period Closing Voucher Detail`, `Process Statement Of Accounts CC`, `Process Statement Of Accounts Customer`, `Promotional Scheme Price Discount`, `Promotional Scheme Product Discount`, `Purchase Invoice Advance`, `Purchase Invoice Item`, `Purchase Taxes and Charges`, `Repost Accounting Ledger Items`, `Repost Allowed Types`, `Repost Payment Ledger Items`, `Sales Invoice Advance`, `Sales Invoice Item`, `Sales Invoice Payment`, `Sales Invoice Reference`, `Sales Invoice Timesheet`, `Sales Partner Item`, `Sales Taxes and Charges`, `Share Balance`, `Shipping Rule Condition`, `Shipping Rule Country`, `South Africa VAT Account`, `Subscription Invoice`, `Subscription Plan Detail`, `Supplier Group Item`, `Supplier Item`, `Tax Withholding Account`, `Tax Withholding Entry`, `Tax Withholding Rate`, `Territory Item`, `Transaction Deletion Record Details`, `Unreconcile Payment Entries`
