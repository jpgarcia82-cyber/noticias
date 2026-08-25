# Módulo: CRM

Fuente: código real de ERPNext/HRMS (frappe/erpnext, frappe/hrms). 28 DocTypes en este módulo.

## Catálogos maestros (Masters) (12)

### Appointment
**Relaciones (Link → FK a otro DocType):**
- `calendar_event` (Calendar Event) → **Event**
- `appointment_with` (Appointment With) → **DocType**
- `party` (Party) → **Dynamic(appointment_with)**

### Campaign
_Keep Track of Sales Campaigns. Keep track of Leads, Quotations, Sales Order etc from Campaigns to gauge Return on Investment._
**Tablas hijas (1-a-muchos embebido):**
- `campaign_schedules` (Campaign Schedules) → **Campaign Email Schedule**

### Competitor

### Contract Template
**Tablas hijas (1-a-muchos embebido):**
- `fulfilment_terms` (Fulfilment Terms and Conditions) → **Contract Template Fulfilment Terms**

### Email Campaign
**Relaciones (Link → FK a otro DocType):**
- `campaign_name` (Campaign) → **Campaign**
- `recipient` (Recipient) → **Dynamic(email_campaign_for)**
- `sender` (Sender) → **User**

### Lead
**Relaciones (Link → FK a otro DocType):**
- `lead_owner` (Lead Owner) → **User**
- `salutation` (Salutation) → **Salutation**
- `gender` (Gender) → **Gender**
- `customer` (From Customer) → **Customer**
- `market_segment` (Market Segment) → **Market Segment**
- `industry` (Industry) → **Industry Type**
- `company` (Company) → **Company**
- `territory` (Territory) → **Territory**
- `language` (Print Language) → **Language**
- `qualified_by` (Qualified By) → **User**
- `country` (Country) → **Country**
- `utm_source` (Source) → **UTM Source**
- `utm_medium` (Medium) → **UTM Medium**
- `utm_campaign` (Campaign) → **UTM Campaign**
**Tablas hijas (1-a-muchos embebido):**
- `notes` (Notes) → **CRM Note**

### Market Segment

### Opportunity
_Potential Sales Deal_
**Relaciones (Link → FK a otro DocType):**
- `opportunity_from` (Opportunity From) → **DocType**
- `party_name` (Party) → **Dynamic(opportunity_from)**
- `opportunity_type` (Opportunity Type) → **Opportunity Type**
- `currency` (Currency) → **Currency**
- `sales_stage` (Sales Stage) → **Sales Stage**
- `customer_address` (Customer / Lead Address) → **Address**
- `territory` (Territory) → **Territory**
- `customer_group` (Customer Group) → **Customer Group**
- `contact_person` (Contact Person) → **Contact**
- `company` (Company) → **Company**
- `amended_from` (Amended From) → **Opportunity**
- `language` (Print Language) → **Language**
- `industry` (Industry) → **Industry Type**
- `market_segment` (Market Segment) → **Market Segment**
- `opportunity_owner` (Opportunity Owner) → **User**
- `country` (Country) → **Country**
- `utm_source` (Source) → **UTM Source**
- `utm_campaign` (Campaign) → **UTM Campaign**
- `utm_medium` (Medium) → **UTM Medium**
**Tablas hijas (1-a-muchos embebido):**
- `items` (Items) → **Opportunity Item**
- `lost_reasons` (Lost Reasons) → **Opportunity Lost Reason Detail**
- `competitors` (Competitors) → **Competitor Detail**
- `notes` (Notes) → **CRM Note**

### Opportunity Lost Reason

### Opportunity Type

### Prospect
**Relaciones (Link → FK a otro DocType):**
- `industry` (Industry) → **Industry Type**
- `market_segment` (Market Segment) → **Market Segment**
- `customer_group` (Customer Group) → **Customer Group**
- `territory` (Territory) → **Territory**
- `prospect_owner` (Prospect Owner) → **User**
- `company` (Company) → **Company**
**Tablas hijas (1-a-muchos embebido):**
- `opportunities` (Opportunities) → **Prospect Opportunity**
- `leads` (leads) → **Prospect Lead**
- `notes` (Notes) → **CRM Note**

### Sales Stage

## Documentos transaccionales (Transactions — flujo del proceso) (1)

### Contract
**Relaciones (Link → FK a otro DocType):**
- `party_name` (Party Name) → **Dynamic(party_type)**
- `party_user` (Party User) → **User**
- `contract_template` (Contract Template) → **Contract Template**
- `document_name` (Document Name) → **Dynamic(document_type)**
- `amended_from` (Amended From) → **Contract**
- `signed_by_company` (Signed By (Company)) → **User**
**Tablas hijas (1-a-muchos embebido):**
- `fulfilment_terms` (Fulfilment Terms) → **Contract Fulfilment Checklist**

## Configuración global (Single) (2)

### Appointment Booking Settings

### CRM Settings
_Settings for Selling Module_

## Tablas hijas usadas en este módulo (13)

`Appointment Booking Slots`, `Availability Of Slots`, `CRM Note`, `Campaign Email Schedule`, `Competitor Detail`, `Contract Fulfilment Checklist`, `Contract Template Fulfilment Terms`, `Frappe CRM Allowed User`, `Lost Reason Detail`, `Opportunity Item`, `Opportunity Lost Reason Detail`, `Prospect Lead`, `Prospect Opportunity`
