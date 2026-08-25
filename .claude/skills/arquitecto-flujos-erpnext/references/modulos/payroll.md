# Módulo: Payroll

Fuente: código real de ERPNext/HRMS (frappe/erpnext, frappe/hrms). 43 DocTypes en este módulo.

## Catálogos maestros (Masters) (6)

### Employee Benefit Ledger
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `payroll_period` (Payroll Period) → **Payroll Period**
- `salary_component` (Salary Component) → **Salary Component**
- `salary_slip` (Salary Slip) → **Salary Slip**
- `reference_doctype` (Reference Doctype) → **DocType**
- `reference_document` (Reference Document) → **Dynamic(reference_doctype)**

### Employee Tax Exemption Category

### Employee Tax Exemption Sub Category
**Relaciones (Link → FK a otro DocType):**
- `exemption_category` (Tax Exemption Category) → **Employee Tax Exemption Category**

### Gratuity Rule
**Tablas hijas (1-a-muchos embebido):**
- `applicable_earnings_component` (Applicable Earnings Component) → **Gratuity Applicable Component**
- `gratuity_rule_slabs` (Current Work Experience) → **Gratuity Rule Slab**

### Payroll Period
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `periods` (Payroll Periods) → **Payroll Period Date**

### Salary Component
**Tablas hijas (1-a-muchos embebido):**
- `accounts` (Accounts) → **Salary Component Account**

## Documentos transaccionales (Transactions — flujo del proceso) (17)

### Additional Salary
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `salary_component` (Salary Component) → **Salary Component**
- `department` (Department) → **Department**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Additional Salary**
- `ref_doctype` (Reference Document Type) → **DocType**
- `ref_docname` (Reference Document) → **Dynamic(ref_doctype)**
- `currency` (Currency) → **Currency**

### Arrear
**Relaciones (Link → FK a otro DocType):**
- `amended_from` (Amended From) → **Arrear**
- `employee` (Employee) → **Employee**
- `company` (Company) → **Company**
- `payroll_period` (Payroll Period) → **Payroll Period**
- `salary_structure` (Salary Structure) → **Salary Structure**
- `currency` (Currency) → **Currency**
**Tablas hijas (1-a-muchos embebido):**
- `earning_arrears` (Earning Arrears) → **Payroll Correction Child**
- `deduction_arrears` (Deduction Arrears) → **Payroll Correction Child**
- `accrual_arrears` (Accrual Arrears) → **Payroll Correction Child**

### Employee Benefit Application
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `payroll_period` (Payroll Period) → **Payroll Period**
- `department` (Department) → **Department**
- `amended_from` (Amended From) → **Employee Benefit Application**
- `currency` (Currency) → **Currency**
- `company` (Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `employee_benefits` (Flexible Benefits) → **Employee Benefit Application Detail**

### Employee Benefit Claim
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `department` (Department) → **Department**
- `earning_component` (Claim Benefit For) → **Salary Component**
- `amended_from` (Amended From) → **Employee Benefit Claim**
- `currency` (Currency) → **Currency**
- `company` (Company) → **Company**

### Employee Incentive
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `amended_from` (Amended From) → **Employee Incentive**
- `department` (Department) → **Department**
- `salary_component` (Salary Component) → **Salary Component**
- `currency` (Currency) → **Currency**
- `company` (Company) → **Company**

### Employee Other Income
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `payroll_period` (Payroll Period) → **Payroll Period**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Employee Other Income**

### Employee Tax Exemption Declaration
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `department` (Department) → **Department**
- `payroll_period` (Payroll Period) → **Payroll Period**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Employee Tax Exemption Declaration**
- `currency` (Currency) → **Currency**
**Tablas hijas (1-a-muchos embebido):**
- `declarations` (Declarations) → **Employee Tax Exemption Declaration Category**

### Employee Tax Exemption Proof Submission
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `department` (Department) → **Department**
- `payroll_period` (Payroll Period) → **Payroll Period**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Employee Tax Exemption Proof Submission**
- `currency` (Currency) → **Currency**
**Tablas hijas (1-a-muchos embebido):**
- `tax_exemption_proofs` (Tax Exemption Proofs) → **Employee Tax Exemption Proof Submission Detail**

### Gratuity
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `company` (Company) → **Company**
- `expense_account` (Expense Account) → **Account**
- `mode_of_payment` (Mode of Payment) → **Mode of Payment**
- `gratuity_rule` (Gratuity Rule) → **Gratuity Rule**
- `department` (Department) → **Department**
- `amended_from` (Amended From) → **Gratuity**
- `payable_account` (Payable Account) → **Account**
- `cost_center` (Cost Center) → **Cost Center**
- `salary_component` (Salary Component) → **Salary Component**

### Income Tax Slab
**Relaciones (Link → FK a otro DocType):**
- `amended_from` (Amended From) → **Income Tax Slab**
- `company` (Company) → **Company**
- `currency` (Currency) → **Currency**
**Tablas hijas (1-a-muchos embebido):**
- `slabs` (Taxable Salary Slabs) → **Taxable Salary Slab**
- `other_taxes_and_charges` (Other Taxes and Charges) → **Income Tax Slab Other Charges**

### Payroll Correction
**Relaciones (Link → FK a otro DocType):**
- `amended_from` (Amended From) → **Payroll Correction**
- `employee` (Employee) → **Employee**
- `company` (Company) → **Company**
- `currency` (Currency) → **Currency**
- `payroll_period` (Payroll Period) → **Payroll Period**
- `salary_slip_reference` (Salary Slip Reference) → **Salary Slip**
**Tablas hijas (1-a-muchos embebido):**
- `earning_arrears` (Earning Arrears) → **Payroll Correction Child**
- `deduction_arrears` (Deduction Arrears) → **Payroll Correction Child**
- `accrual_arrears` (Accrual Arrears) → **Payroll Correction Child**

### Payroll Entry
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `branch` (Branch) → **Branch**
- `department` (Department) → **Department**
- `designation` (Designation) → **Designation**
- `cost_center` (Cost Center) → **Cost Center**
- `project` (Project) → **Project**
- `payment_account` (Payment Account) → **Account**
- `amended_from` (Amended From) → **Payroll Entry**
- `bank_account` (Bank Account) → **Bank Account**
- `currency` (Currency) → **Currency**
- `payroll_payable_account` (Payroll Payable Account) → **Account**
- `grade` (Grade) → **Employee Grade**
**Tablas hijas (1-a-muchos embebido):**
- `employees` (employees) → **Payroll Employee Detail**

### Retention Bonus
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `employee` (Employee) → **Employee**
- `amended_from` (Amended From) → **Retention Bonus**
- `department` (Department) → **Department**
- `salary_component` (Salary Component) → **Salary Component**
- `currency` (Currency) → **Currency**

### Salary Slip
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `department` (Department) → **Department**
- `designation` (Designation) → **Designation**
- `branch` (Branch) → **Branch**
- `journal_entry` (Journal Entry) → **Journal Entry**
- `payroll_entry` (Payroll Entry) → **Payroll Entry**
- `company` (Company) → **Company**
- `letter_head` (Letter Head) → **Letter Head**
- `salary_structure` (Salary Structure) → **Salary Structure**
- `amended_from` (Amended From) → **Salary Slip**
- `currency` (Currency) → **Currency**
- `salary_withholding` (Salary Withholding) → **Salary Withholding**
- `current_payroll_period` (Current Payroll Period) → **Payroll Period**
**Tablas hijas (1-a-muchos embebido):**
- `timesheets` (Salary Slip Timesheet) → **Salary Slip Timesheet**
- `earnings` (Earnings) → **Salary Detail**
- `deductions` (Deductions) → **Salary Detail**
- `leave_details` (Leave Details) → **Salary Slip Leave**
- `accrued_benefits` (Accrued Benefits) → **Employee Benefit Detail**

### Salary Structure
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `letter_head` (Letter Head) → **Letter Head**
- `salary_component` (Salary Component) → **Salary Component**
- `mode_of_payment` (Mode of Payment) → **Mode of Payment**
- `payment_account` (Payment Account) → **Account**
- `amended_from` (Amended From) → **Salary Structure**
- `currency` (Currency) → **Currency**
**Tablas hijas (1-a-muchos embebido):**
- `earnings` (Earnings) → **Salary Detail**
- `deductions` (Deductions) → **Salary Detail**
- `employer_contributions` (Employer Contributions) → **Salary Detail**
- `employee_benefits` (Flexible Benefits) → **Employee Benefit Detail**

### Salary Structure Assignment
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `department` (Department) → **Department**
- `designation` (Designation) → **Designation**
- `salary_structure` (Salary Structure) → **Salary Structure**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Salary Structure Assignment**
- `income_tax_slab` (Income Tax Slab) → **Income Tax Slab**
- `currency` (Currency) → **Currency**
- `payroll_payable_account` (Payroll Payable Account) → **Account**
- `grade` (Grade) → **Employee Grade**
**Tablas hijas (1-a-muchos embebido):**
- `payroll_cost_centers` (Cost Centers) → **Employee Cost Center**
- `employee_benefits` (Flexible Benefits) → **Employee Benefit Detail**

### Salary Withholding
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Salary Withholding**
**Tablas hijas (1-a-muchos embebido):**
- `cycles` (Cycles) → **Salary Withholding Cycle**

## Configuración global (Single) (2)

### Bulk Salary Structure Assignment

### Payroll Settings

## Tablas hijas usadas en este módulo (18)

`Employee Benefit Application Detail`, `Employee Benefit Detail`, `Employee Cost Center`, `Employee Tax Exemption Declaration Category`, `Employee Tax Exemption Proof Submission Detail`, `Gratuity Applicable Component`, `Gratuity Rule Slab`, `Income Tax Slab Other Charges`, `Payroll Correction Child`, `Payroll Employee Detail`, `Payroll Period Date`, `Salary Component Account`, `Salary Detail`, `Salary Slip Leave`, `Salary Slip Loan`, `Salary Slip Timesheet`, `Salary Withholding Cycle`, `Taxable Salary Slab`
