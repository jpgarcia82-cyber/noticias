# Módulo: Quality Management

Fuente: código real de ERPNext/HRMS (frappe/erpnext, frappe/hrms). 16 DocTypes en este módulo.

## Catálogos maestros (Masters) (7)

### Non Conformance
**Relaciones (Link → FK a otro DocType):**
- `procedure` (Procedure) → **Quality Procedure**

### Quality Action
**Relaciones (Link → FK a otro DocType):**
- `goal` (Goal) → **Quality Goal**
- `procedure` (Procedure) → **Quality Procedure**
- `review` (Review) → **Quality Review**
- `feedback` (Feedback) → **Quality Feedback**
**Tablas hijas (1-a-muchos embebido):**
- `resolutions` (Resolutions) → **Quality Action Resolution**

### Quality Feedback
**Relaciones (Link → FK a otro DocType):**
- `template` (Template) → **Quality Feedback Template**
- `document_name` (Feedback By) → **Dynamic(document_type)**
**Tablas hijas (1-a-muchos embebido):**
- `parameters` (Parameters) → **Quality Feedback Parameter**

### Quality Feedback Template
**Tablas hijas (1-a-muchos embebido):**
- `parameters` (Parameters) → **Quality Feedback Template Parameter**

### Quality Goal
**Relaciones (Link → FK a otro DocType):**
- `procedure` (Procedure) → **Quality Procedure**
**Tablas hijas (1-a-muchos embebido):**
- `objectives` (Objectives) → **Quality Goal Objective**

### Quality Meeting
**Tablas hijas (1-a-muchos embebido):**
- `minutes` (Minutes) → **Quality Meeting Minutes**
- `agenda` (Agenda) → **Quality Meeting Agenda**

### Quality Review
**Relaciones (Link → FK a otro DocType):**
- `procedure` (Procedure) → **Quality Procedure**
- `goal` (Goal) → **Quality Goal**
**Tablas hijas (1-a-muchos embebido):**
- `reviews` (Reviews) → **Quality Review Objective**

## Jerarquías / árboles (Trees) (1)

### Quality Procedure
**Relaciones (Link → FK a otro DocType):**
- `parent_quality_procedure` (Parent Procedure) → **Quality Procedure**
- `process_owner` (Process Owner) → **User**
**Tablas hijas (1-a-muchos embebido):**
- `processes` (Processes) → **Quality Procedure Process**

## Tablas hijas usadas en este módulo (8)

`Quality Action Resolution`, `Quality Feedback Parameter`, `Quality Feedback Template Parameter`, `Quality Goal Objective`, `Quality Meeting Agenda`, `Quality Meeting Minutes`, `Quality Procedure Process`, `Quality Review Objective`
