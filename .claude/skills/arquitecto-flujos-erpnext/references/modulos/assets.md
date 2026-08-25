# Módulo: Assets

Fuente: código real de ERPNext/HRMS (frappe/erpnext, frappe/hrms). 26 DocTypes en este módulo.

## Catálogos maestros (Masters) (5)

### Asset Activity
**Relaciones (Link → FK a otro DocType):**
- `asset` (Asset) → **Asset**
- `user` (User) → **User**

### Asset Category
**Tablas hijas (1-a-muchos embebido):**
- `finance_books` (Finance Books) → **Asset Finance Book**
- `accounts` (Accounts) → **Asset Category Account**

### Asset Maintenance
**Relaciones (Link → FK a otro DocType):**
- `asset_name` (Asset Name) → **Asset**
- `company` (Company) → **Company**
- `maintenance_team` (Maintenance Team) → **Asset Maintenance Team**
**Tablas hijas (1-a-muchos embebido):**
- `asset_maintenance_tasks` (Maintenance Tasks) → **Asset Maintenance Task**

### Asset Maintenance Team
**Relaciones (Link → FK a otro DocType):**
- `maintenance_manager` (Maintenance Manager) → **User**
- `company` (Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `maintenance_team_members` (Maintenance Team Members) → **Maintenance Team Member**

### Asset Shift Factor

## Jerarquías / árboles (Trees) (1)

### Location
**Relaciones (Link → FK a otro DocType):**
- `parent_location` (Parent Location) → **Location**
- `area_uom` (Area UOM) → **UOM**

## Documentos transaccionales (Transactions — flujo del proceso) (8)

### Asset
**Relaciones (Link → FK a otro DocType):**
- `item_code` (Item Code) → **Item**
- `asset_category` (Asset Category) → **Asset Category**
- `asset_owner_company` (Asset Owner Company) → **Company**
- `supplier` (Supplier) → **Supplier**
- `customer` (Customer) → **Customer**
- `company` (Company) → **Company**
- `location` (Location) → **Location**
- `custodian` (Custodian) → **Employee**
- `cost_center` (Cost Center) → **Cost Center**
- `department` (Department) → **Department**
- `journal_entry_for_scrap` (Journal Entry for Scrap) → **Journal Entry**
- `purchase_receipt` (Purchase Receipt) → **Purchase Receipt**
- `purchase_invoice` (Purchase Invoice) → **Purchase Invoice**
- `default_finance_book` (Default Finance Book) → **Finance Book**
- `amended_from` (Amended From) → **Asset**
- `split_from` (Split From) → **Asset**
**Tablas hijas (1-a-muchos embebido):**
- `finance_books` (Finance Books) → **Asset Finance Book**

### Asset Capitalization
**Relaciones (Link → FK a otro DocType):**
- `target_item_code` (Target Item Code) → **Item**
- `target_asset` (Target Asset) → **Asset**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Asset Capitalization**
- `finance_book` (Finance Book) → **Finance Book**
- `cost_center` (Cost Center) → **Cost Center**
- `project` (Project) → **Project**
- `target_fixed_asset_account` (Target Fixed Asset Account) → **Account**
**Tablas hijas (1-a-muchos embebido):**
- `stock_items` (Stock Items) → **Asset Capitalization Stock Item**
- `asset_items` (Assets) → **Asset Capitalization Asset Item**
- `service_items` (Services) → **Asset Capitalization Service Item**

### Asset Depreciation Schedule
**Relaciones (Link → FK a otro DocType):**
- `asset` (Asset) → **Asset**
- `amended_from` (Amended From) → **Asset Depreciation Schedule**
- `finance_book` (Finance Book) → **Finance Book**
- `company` (Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `depreciation_schedule` (Depreciation Schedule) → **Depreciation Schedule**

### Asset Maintenance Log
**Relaciones (Link → FK a otro DocType):**
- `asset_maintenance` (Asset Maintenance) → **Asset Maintenance**
- `task` (Task) → **Asset Maintenance Task**
- `amended_from` (Amended From) → **Asset Maintenance Log**

### Asset Movement
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `reference_doctype` (Reference Document Type) → **DocType**
- `reference_name` (Reference Document Name) → **Dynamic(reference_doctype)**
- `amended_from` (Amended From) → **Asset Movement**
**Tablas hijas (1-a-muchos embebido):**
- `assets` (Assets) → **Asset Movement Item**

### Asset Repair
**Relaciones (Link → FK a otro DocType):**
- `amended_from` (Amended From) → **Asset Repair**
- `asset` (Asset) → **Asset**
- `cost_center` (Cost Center) → **Cost Center**
- `project` (Project) → **Project**
- `company` (Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `stock_items` (Stock Items) → **Asset Repair Consumed Item**
- `invoices` (Repair Purchase Invoices) → **Asset Repair Purchase Invoice**

### Asset Shift Allocation
**Relaciones (Link → FK a otro DocType):**
- `amended_from` (Amended From) → **Asset Shift Allocation**
- `asset` (Asset) → **Asset**
- `finance_book` (Finance Book) → **Finance Book**
**Tablas hijas (1-a-muchos embebido):**
- `depreciation_schedule` (Depreciation Schedule) → **Depreciation Schedule**

### Asset Value Adjustment
**Relaciones (Link → FK a otro DocType):**
- `company` (Company) → **Company**
- `asset` (Asset) → **Asset**
- `finance_book` (Finance Book) → **Finance Book**
- `journal_entry` (Journal Entry) → **Journal Entry**
- `cost_center` (Cost Center) → **Cost Center**
- `amended_from` (Amended From) → **Asset Value Adjustment**
- `difference_account` (Difference Account) → **Account**

## Tablas hijas usadas en este módulo (12)

`Asset Capitalization Asset Item`, `Asset Capitalization Service Item`, `Asset Capitalization Stock Item`, `Asset Category Account`, `Asset Finance Book`, `Asset Maintenance Task`, `Asset Movement Item`, `Asset Repair Consumed Item`, `Asset Repair Purchase Invoice`, `Depreciation Schedule`, `Linked Location`, `Maintenance Team Member`
