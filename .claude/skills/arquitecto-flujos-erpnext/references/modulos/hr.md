# Módulo: HR

Fuente: código real de ERPNext/HRMS (frappe/erpnext, frappe/hrms). 117 DocTypes en este módulo.

## Catálogos maestros (Masters) (40)

### Appointment Letter
**Relaciones (Link → FK a otro DocType):**
- `appointment_letter_template` (Appointment Letter Template) → **Appointment Letter Template**
- `job_applicant` (Job Applicant) → **Job Applicant**
- `company` (Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `terms` (Terms) → **Appointment Letter content**

### Appointment Letter Template
**Tablas hijas (1-a-muchos embebido):**
- `terms` (Terms) → **Appointment Letter content**

### Appraisal Cycle
**Relaciones (Link → FK a otro DocType):**
- `branch` (Branch) → **Branch**
- `department` (Department) → **Department**
- `designation` (Designation) → **Designation**
- `company` (Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `appraisees` (appraisees) → **Appraisee**

### Appraisal Template
**Tablas hijas (1-a-muchos embebido):**
- `goals` (KRAs) → **Appraisal Template Goal**
- `rating_criteria` (Rating Criteria) → **Employee Feedback Rating**

### Daily Work Summary
**Relaciones (Link → FK a otro DocType):**
- `daily_work_summary_group` (Daily Work Summary Group) → **Daily Work Summary Group**

### Daily Work Summary Group
**Relaciones (Link → FK a otro DocType):**
- `holiday_list` (Holiday List) → **Holiday List**
**Tablas hijas (1-a-muchos embebido):**
- `users` (Users) → **Daily Work Summary Group User**

### Employee Checkin
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `shift` (Shift) → **Shift Type**
- `attendance` (Attendance Marked) → **Attendance**
- `overtime_type` (Overtime Type) → **Overtime Type**

### Employee Feedback Criteria

### Employee Grade
**Relaciones (Link → FK a otro DocType):**
- `default_salary_structure` (Default Salary Structure) → **Salary Structure**
- `currency` (Currency) → **Currency**

### Employee Health Insurance

### Employee Onboarding Template
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `department` (Department) → **Department**
- `designation` (Designation) → **Designation**
- `employee_grade` (Employee Grade) → **Employee Grade**
**Tablas hijas (1-a-muchos embebido):**
- `activities` (Activities) → **Employee Boarding Activity**

### Employee Separation Template
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `department` (Department) → **Department**
- `designation` (Designation) → **Designation**
- `employee_grade` (Employee Grade) → **Employee Grade**
**Tablas hijas (1-a-muchos embebido):**
- `activities` (Activities) → **Employee Boarding Activity**

### Employee Skill Map
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
**Tablas hijas (1-a-muchos embebido):**
- `employee_skills` (Employee Skills) → **Employee Skill**
- `trainings` (Trainings) → **Employee Training**

### Employment Type

### Expense Claim Type
**Tablas hijas (1-a-muchos embebido):**
- `accounts` (Accounts) → **Expense Claim Account**

### Grievance Type

### HR Telemetry Milestone
_Bookkeeping for once-per-site activation telemetry. The document name is the event name, so the primary key makes claiming a milestone atomic across concurrent transactions._

### Identification Document Type

### Interest

### Interview Type
**Relaciones (Link → FK a otro DocType):**
- `designation` (Designation) → **Designation**
**Tablas hijas (1-a-muchos embebido):**
- `expected_skill_set` (Expected Skillset) → **Expected Skill Set**
- `interviewers` (Interviewers) → **Interviewer**

### Job Applicant
_Applicant for a Job_
**Relaciones (Link → FK a otro DocType):**
- `job_title` (Job Opening) → **Job Opening**
- `source` (Source) → **Job Applicant Source**
- `source_name` (Source Name) → **Employee**
- `country` (Country) → **Country**
- `currency` (Currency) → **Currency**
- `employee_referral` (Employee Referral) → **Employee Referral**
- `designation` (Designation) → **Designation**

### Job Applicant Source

### Job Offer Term Template
**Tablas hijas (1-a-muchos embebido):**
- `offer_terms` (Offer Terms) → **Job Offer Term**

### Job Opening
_Description of a Job Opening_
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `designation` (Designation) → **Designation**
- `department` (Department) → **Department**
- `staffing_plan` (Staffing Plan) → **Staffing Plan**
- `currency` (Currency) → **Currency**
- `job_requisition` (Job Requisition) → **Job Requisition**
- `employment_type` (Employment Type) → **Employment Type**
- `location` (Location) → **Branch**
- `job_opening_template` (Job Opening Template) → **Job Opening Template**

### Job Opening Template
**Relaciones (Link → FK a otro DocType):**
- `department` (Department) → **Department**
- `employment_type` (Employment Type) → **Employment Type**
- `location` (Location) → **Branch**
- `designation` (Designation) → **Designation**
- `currency` (Currency) → **Currency**

### Job Requisition
**Relaciones (Link → FK a otro DocType):**
- `designation` (Designation) → **Designation**
- `company` (Company) → **Company**
- `requested_by` (Requested By) → **Employee**
- `requested_by_dept` (Department) → **Department**
- `requested_by_designation` (Designation) → **Designation**
- `department` (Department) → **Department**

### KRA

### Leave Block List
_Block Holidays on important days._
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `leave_type` (Leave Type) → **Leave Type**
**Tablas hijas (1-a-muchos embebido):**
- `leave_block_list_dates` (Leave Block List Dates) → **Leave Block List Date**
- `leave_block_list_allowed` (Leave Block List Allowed) → **Leave Block List Allow**

### Leave Period
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `optional_holiday_list` (Holiday List for Optional Leave) → **Holiday List**

### Leave Type
**Relaciones (Link → FK a otro DocType):**
- `earning_component` (Earning Component) → **Salary Component**

### Offer Term

### Overtime Type
**Relaciones (Link → FK a otro DocType):**
- `overtime_salary_component` (Overtime Salary Component) → **Salary Component**
**Tablas hijas (1-a-muchos embebido):**
- `applicable_salary_component` (Applicable Salary Components) → **Overtime Salary Component**

### PWA Notification
**Relaciones (Link → FK a otro DocType):**
- `from_user` (From User) → **User**
- `to_user` (To User) → **User**
- `reference_document_type` (Reference Document Type) → **DocType**

### Purpose of Travel

### Shift Location

### Shift Schedule Assignment
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `company` (Company) → **Company**
- `shift_schedule` (Shift Schedule) → **Shift Schedule**
- `shift_location` (Shift Location) → **Shift Location**

### Shift Type
**Relaciones (Link → FK a otro DocType):**
- `holiday_list` (Holiday List) → **Holiday List**
- `overtime_type` (Overtime Type) → **Overtime Type**

### Skill

### Training Program
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `supplier` (Supplier) → **Supplier**
- `amended_from` (Amended From) → **Training Program**

### Vehicle Service Item

## Jerarquías / árboles (Trees) (1)

### Goal
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `old_parent` (Old Parent) → **Goal**
- `parent_goal` (Parent Goal) → **Goal**
- `kra` (KRA) → **KRA**
- `appraisal_cycle` (Appraisal Cycle) → **Appraisal Cycle**
- `company` (Company) → **Company**

## Documentos transaccionales (Transactions — flujo del proceso) (36)

### Appraisal
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `department` (Department) → **Department**
- `company` (Company) → **Company**
- `designation` (Designation) → **Designation**
- `appraisal_cycle` (Appraisal Cycle) → **Appraisal Cycle**
- `appraisal_template` (Appraisal Template) → **Appraisal Template**
- `amended_from` (Amended From) → **Appraisal**
**Tablas hijas (1-a-muchos embebido):**
- `appraisal_kra` (KRA vs Goals) → **Appraisal KRA**
- `goals` (Goals) → **Appraisal Goal**
- `self_ratings` (self_ratings) → **Employee Feedback Rating**

### Attendance
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `leave_type` (Leave Type) → **Leave Type**
- `leave_application` (Leave Application) → **Leave Application**
- `company` (Company) → **Company**
- `department` (Department) → **Department**
- `shift` (Shift) → **Shift Type**
- `attendance_request` (Attendance Request) → **Attendance Request**
- `amended_from` (Amended From) → **Attendance**
- `overtime_type` (Overtime Type) → **Overtime Type**

### Attendance Request
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `department` (Department) → **Department**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Attendance Request**
- `shift` (Shift) → **Shift Type**

### Compensatory Leave Request
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `department` (Department) → **Department**
- `leave_type` (Leave Type) → **Leave Type**
- `leave_allocation` (Leave Allocation) → **Leave Allocation**
- `amended_from` (Amended From) → **Compensatory Leave Request**

### Employee Advance
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `department` (Department) → **Department**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Employee Advance**
- `advance_account` (Advance Account) → **Account**
- `mode_of_payment` (Mode of Payment) → **Mode of Payment**
- `currency` (Currency) → **Currency**

### Employee Grievance
**Relaciones (Link → FK a otro DocType):**
- `grievance_type` (Grievance Type) → **Grievance Type**
- `resolved_by` (Resolved By) → **User**
- `employee_responsible` (Employee Responsible ) → **Employee**
- `grievance_against` (Grievance Against) → **Dynamic(grievance_against_party)**
- `raised_by` (Raised By) → **Employee**
- `amended_from` (Amended From) → **Employee Grievance**
- `designation` (Designation) → **Designation**
- `reports_to` (Reports To) → **Employee**
- `grievance_against_party` (Grievance Against Party) → **DocType**
- `associated_document_type` (Associated Document Type) → **DocType**
- `associated_document` (Associated Document) → **Dynamic(associated_document_type)**

### Employee Onboarding
**Relaciones (Link → FK a otro DocType):**
- `job_applicant` (Job Applicant) → **Job Applicant**
- `job_offer` (Job Offer) → **Job Offer**
- `employee` (Employee) → **Employee**
- `employee_onboarding_template` (Employee Onboarding Template) → **Employee Onboarding Template**
- `company` (Company) → **Company**
- `department` (Department) → **Department**
- `designation` (Designation) → **Designation**
- `employee_grade` (Employee Grade) → **Employee Grade**
- `project` (Project) → **Project**
- `amended_from` (Amended From) → **Employee Onboarding**
- `holiday_list` (Holiday List) → **Holiday List**
**Tablas hijas (1-a-muchos embebido):**
- `activities` (Activities) → **Employee Boarding Activity**

### Employee Performance Feedback
**Relaciones (Link → FK a otro DocType):**
- `employee` (For Employee) → **Employee**
- `appraisal` (Appraisal) → **Appraisal**
- `reviewer_designation` (Designation) → **Designation**
- `reviewer` (Reviewer) → **Employee**
- `department` (Department) → **Department**
- `designation` (Designation) → **Designation**
- `appraisal_cycle` (Appraisal Cycle) → **Appraisal Cycle**
- `user` (User) → **User**
- `amended_from` (Amended From) → **Employee Performance Feedback**
- `company` (Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `feedback_ratings` (Feedback Ratings) → **Employee Feedback Rating**

### Employee Promotion
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `department` (Department) → **Department**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Employee Promotion**
- `salary_currency` (Salary Currency) → **Currency**
**Tablas hijas (1-a-muchos embebido):**
- `promotion_details` (promotion_details) → **Employee Property History**

### Employee Referral
**Relaciones (Link → FK a otro DocType):**
- `department` (Department) → **Department**
- `amended_from` (Amended From) → **Employee Referral**
- `for_designation` (For Designation ) → **Designation**
- `referrer` (Referrer) → **Employee**

### Employee Separation
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `employee_separation_template` (Employee Separation Template) → **Employee Separation Template**
- `company` (Company) → **Company**
- `project` (Project) → **Project**
- `department` (Department) → **Department**
- `designation` (Designation) → **Designation**
- `employee_grade` (Employee Grade) → **Employee Grade**
- `amended_from` (Amended From) → **Employee Separation**
**Tablas hijas (1-a-muchos embebido):**
- `activities` (Activities) → **Employee Boarding Activity**

### Employee Transfer
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `company` (Company) → **Company**
- `new_company` (New Company) → **Company**
- `department` (Department) → **Department**
- `new_employee_id` (New Employee ID) → **Employee**
- `amended_from` (Amended From) → **Employee Transfer**
**Tablas hijas (1-a-muchos embebido):**
- `transfer_details` (Employee Transfer Detail) → **Employee Property History**

### Exit Interview
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `department` (Department) → **Department**
- `company` (Company) → **Company**
- `ref_doctype` (Reference Document Type) → **DocType**
- `reference_document_name` (Reference Document Name) → **Dynamic(ref_doctype)**
- `reports_to` (Reports To) → **Employee**
- `designation` (Designation) → **Designation**
- `amended_from` (Amended From) → **Exit Interview**
**Tablas hijas (1-a-muchos embebido):**
- `interviewers` (Interviewers) → **Interviewer**

### Expense Claim
**Relaciones (Link → FK a otro DocType):**
- `employee` (From Employee) → **Employee**
- `department` (Department) → **Department**
- `expense_approver` (Expense Approver) → **User**
- `vehicle_log` (Vehicle Log) → **Vehicle Log**
- `project` (Project) → **Project**
- `task` (Task) → **Task**
- `company` (Company) → **Company**
- `mode_of_payment` (Mode of Payment) → **Mode of Payment**
- `payable_account` (Payable Account) → **Account**
- `cost_center` (Cost Center) → **Cost Center**
- `amended_from` (Amended From) → **Expense Claim**
- `delivery_trip` (Delivery Trip) → **Delivery Trip**
- `currency` (Currency) → **Currency**
- `bank_or_cash_account` (Bank / Cash Account) → **Account**
- `gain_loss_account` (Gain Loss Account) → **Account**
**Tablas hijas (1-a-muchos embebido):**
- `expenses` (Expenses) → **Expense Claim Detail**
- `advances` (Advances) → **Expense Claim Advance**
- `taxes` (Expense Taxes and Charges) → **Expense Taxes and Charges**

### Full and Final Statement
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `designation` (Designation) → **Designation**
- `department` (Department) → **Department**
- `amended_from` (Amended From) → **Full and Final Statement**
- `company` (Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `assets_allocated` (assets_allocated) → **Full and Final Asset**
- `payables` (payables) → **Full and Final Outstanding Statement**
- `receivables` (receivables) → **Full and Final Outstanding Statement**

### Holiday List Assignment
**Relaciones (Link → FK a otro DocType):**
- `amended_from` (Amended From) → **Holiday List Assignment**
- `holiday_list` (Holiday List) → **Holiday List**
- `assigned_to` (Assigned To) → **Dynamic(applicable_for)**
- `employee_company` (Employee Company) → **Company**

### Interview
**Relaciones (Link → FK a otro DocType):**
- `job_applicant` (Job Applicant) → **Job Applicant**
- `job_opening` (Job Opening) → **Job Opening**
- `designation` (Designation) → **Designation**
- `amended_from` (Amended From) → **Interview**
- `interview_type` (Interview Type) → **Interview Type**
**Tablas hijas (1-a-muchos embebido):**
- `interview_details` (Interviewers) → **Interview Detail**

### Interview Feedback
**Relaciones (Link → FK a otro DocType):**
- `interview` (Interview) → **Interview**
- `interviewer` (Interviewer) → **User**
- `amended_from` (Amended From) → **Interview Feedback**
- `job_applicant` (Job Applicant) → **Job Applicant**
- `interview_type` (Interview Type) → **Interview Type**
**Tablas hijas (1-a-muchos embebido):**
- `skill_assessment` (skill_assessment) → **Skill Assessment**

### Job Offer
**Relaciones (Link → FK a otro DocType):**
- `job_applicant` (Job Applicant) → **Job Applicant**
- `designation` (Designation) → **Designation**
- `company` (Company) → **Company**
- `select_terms` (Select Terms and Conditions) → **Terms and Conditions**
- `letter_head` (Letter Head) → **Letter Head**
- `select_print_heading` (Print Heading) → **Print Heading**
- `amended_from` (Amended From) → **Job Offer**
- `job_offer_term_template` (Job Offer Term Template) → **Job Offer Term Template**
**Tablas hijas (1-a-muchos embebido):**
- `offer_terms` (Job Offer Terms) → **Job Offer Term**

### Leave Adjustment
**Relaciones (Link → FK a otro DocType):**
- `amended_from` (Amended From) → **Leave Adjustment**
- `employee` (Employee) → **Employee**
- `leave_type` (Leave Type) → **Leave Type**
- `leave_allocation` (Allocation to Adjust) → **Leave Allocation**

### Leave Allocation
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `department` (Department) → **Department**
- `leave_type` (Leave Type) → **Leave Type**
- `compensatory_request` (Compensatory Leave Request) → **Compensatory Leave Request**
- `leave_period` (Leave Period) → **Leave Period**
- `leave_policy` (Leave Policy) → **Leave Policy**
- `amended_from` (Amended From) → **Leave Allocation**
- `leave_policy_assignment` (Leave Policy Assignment) → **Leave Policy Assignment**
- `company` (Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `earned_leave_schedule` (earned_leave_schedule) → **Earned Leave Schedule**

### Leave Application
_Apply / Approve Leaves_
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `leave_type` (Leave Type) → **Leave Type**
- `department` (Department) → **Department**
- `leave_approver` (Leave Approver) → **User**
- `company` (Company) → **Company**
- `salary_slip` (Salary Slip) → **Salary Slip**
- `letter_head` (Letter Head) → **Letter Head**
- `amended_from` (Amended From) → **Leave Application**

### Leave Encashment
**Relaciones (Link → FK a otro DocType):**
- `leave_period` (Leave Period) → **Leave Period**
- `employee` (Employee) → **Employee**
- `department` (Department) → **Department**
- `leave_type` (Leave Type) → **Leave Type**
- `leave_allocation` (Leave Allocation) → **Leave Allocation**
- `amended_from` (Amended From) → **Leave Encashment**
- `additional_salary` (Additional Salary) → **Additional Salary**
- `currency` (Currency) → **Currency**
- `company` (Company) → **Company**
- `payable_account` (Payable Account) → **Account**
- `expense_account` (Expense Account) → **Account**
- `cost_center` (Cost Center) → **Cost Center**

### Leave Ledger Entry
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `leave_type` (Leave Type) → **Leave Type**
- `amended_from` (Amended From) → **Leave Ledger Entry**
- `transaction_type` (Transaction Type) → **DocType**
- `transaction_name` (Transaction Name) → **Dynamic(transaction_type)**
- `holiday_list` (Holiday List) → **Holiday List**
- `company` (Company) → **Company**

### Leave Policy
**Relaciones (Link → FK a otro DocType):**
- `amended_from` (Amended From) → **Leave Policy**
**Tablas hijas (1-a-muchos embebido):**
- `leave_policy_details` (Leave Policy Details) → **Leave Policy Detail**

### Leave Policy Assignment
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `leave_policy` (Leave Policy) → **Leave Policy**
- `leave_period` (Leave Period) → **Leave Period**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Leave Policy Assignment**

### Overtime Slip
**Relaciones (Link → FK a otro DocType):**
- `amended_from` (Amended From) → **Overtime Slip**
- `employee` (Employee) → **Employee**
- `department` (Department) → **Department**
- `company` (Company) → **Company**
- `salary_slip` (Salary Slip) → **Salary Slip**
- `payroll_entry` (Payroll Entry) → **Payroll Entry**
**Tablas hijas (1-a-muchos embebido):**
- `overtime_details` (Overtime Details) → **Overtime Details**

### Shift Assignment
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `department` (Department) → **Department**
- `shift_type` (Shift Type) → **Shift Type**
- `company` (Company) → **Company**
- `shift_request` (Shift Request) → **Shift Request**
- `amended_from` (Amended From) → **Shift Assignment**
- `shift_location` (Shift Location) → **Shift Location**
- `shift_schedule_assignment` (Shift Schedule Assignment) → **Shift Schedule Assignment**
- `overtime_type` (Overtime Type) → **Overtime Type**

### Shift Request
**Relaciones (Link → FK a otro DocType):**
- `shift_type` (Shift Type) → **Shift Type**
- `employee` (Employee) → **Employee**
- `department` (Department) → **Department**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Shift Request**
- `approver` (Approver) → **User**

### Shift Schedule
**Relaciones (Link → FK a otro DocType):**
- `shift_type` (Shift Type) → **Shift Type**
- `amended_from` (Amended From) → **Shift Schedule**
**Tablas hijas (1-a-muchos embebido):**
- `repeat_on_days` (Repeat On Days) → **Assignment Rule Day**

### Staffing Plan
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `department` (Department) → **Department**
- `amended_from` (Amended From) → **Staffing Plan**
**Tablas hijas (1-a-muchos embebido):**
- `staffing_details` (Staffing Details) → **Staffing Plan Detail**

### Training Event
**Relaciones (Link → FK a otro DocType):**
- `training_program` (Training Program) → **Training Program**
- `company` (Company) → **Company**
- `supplier` (Supplier) → **Supplier**
- `amended_from` (Amended From) → **Training Event**
**Tablas hijas (1-a-muchos embebido):**
- `employees` (Employees) → **Training Event Employee**

### Training Feedback
**Relaciones (Link → FK a otro DocType):**
- `employee` (Employee) → **Employee**
- `department` (Department) → **Department**
- `training_event` (Training Event) → **Training Event**
- `amended_from` (Amended From) → **Training Feedback**

### Training Result
**Relaciones (Link → FK a otro DocType):**
- `training_event` (Training Event) → **Training Event**
- `amended_from` (Amended From) → **Training Result**
**Tablas hijas (1-a-muchos embebido):**
- `employees` (Employees) → **Training Result Employee**

### Travel Request
**Relaciones (Link → FK a otro DocType):**
- `purpose_of_travel` (Purpose of Travel) → **Purpose of Travel**
- `employee` (Employee) → **Employee**
- `personal_id_type` (Identification Document Type) → **Identification Document Type**
- `cost_center` (Cost Center) → **Cost Center**
- `amended_from` (Amended From) → **Travel Request**
- `company` (Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `itinerary` (itinerary) → **Travel Itinerary**
- `costings` (Costing) → **Travel Request Costing**

### Vehicle Log
**Relaciones (Link → FK a otro DocType):**
- `license_plate` (License Plate) → **Vehicle**
- `employee` (Employee) → **Employee**
- `supplier` (Supplier) → **Supplier**
- `amended_from` (Amended From) → **Vehicle Log**
**Tablas hijas (1-a-muchos embebido):**
- `service_detail` (service_detail) → **Vehicle Service**

## Configuración global (Single) (4)

### Employee Attendance Tool

### HR Settings

### Leave Control Panel

### Shift Assignment Tool

## Tablas hijas usadas en este módulo (36)

`Appointment Letter content`, `Appraisal Goal`, `Appraisal KRA`, `Appraisal Template Goal`, `Appraisee`, `Daily Work Summary Group User`, `Department Approver`, `Designation Skill`, `Earned Leave Schedule`, `Employee Boarding Activity`, `Employee Feedback Rating`, `Employee Property History`, `Employee Skill`, `Employee Training`, `Expected Skill Set`, `Expense Claim Account`, `Expense Claim Advance`, `Expense Claim Detail`, `Expense Taxes and Charges`, `Full and Final Asset`, `Full and Final Outstanding Statement`, `Interview Detail`, `Interviewer`, `Job Offer Term`, `Leave Block List Allow`, `Leave Block List Date`, `Leave Policy Detail`, `Overtime Details`, `Overtime Salary Component`, `Skill Assessment`, `Staffing Plan Detail`, `Training Event Employee`, `Training Result Employee`, `Travel Itinerary`, `Travel Request Costing`, `Vehicle Service`
