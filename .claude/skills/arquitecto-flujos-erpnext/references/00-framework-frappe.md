# El motor detrás de ERPNext: framework Frappe

ERPNext no es una app monolítica — es una app construida sobre el framework **Frappe** (low-code, metadata-driven). Toda la disciplina de diseño de ERPNext viene de las reglas de este framework. Para replicar su calidad en un sistema propio (sin depender de developers para cada cambio), hay que copiar estas reglas, no solo el catálogo de módulos.

Verificado contra código fuente real (`frappe/frappe`, ejemplo `sales_order.json` de `frappe/erpnext`).

## 1. DocType = tabla + formulario + permisos + API, en un solo objeto

Un **DocType** es la unidad atómica de diseño en Frappe. Cada DocType que se crea automáticamente genera:
- una **tabla SQL** (MariaDB/Postgres) con una columna por campo,
- un **formulario de captura** (UI generada, no programada a mano),
- una **API REST** (`/api/resource/<DocType>`) con CRUD completo,
- un **modelo de permisos** por rol,
- **listas, reportes y dashboards** genéricos sobre esa tabla.

Esto es lo que permite "no depender de developers": agregar un campo a un DocType (vía la UI de Frappe, "Customize Form") altera la tabla, el formulario y la API al mismo tiempo, sin tocar código.

## 2. Tipos de campo = tipos de relación de base de datos

| fieldtype en Frappe | Qué es en términos de BD | Ejemplo real (Sales Order) |
|---|---|---|
| `Data`, `Int`, `Float`, `Currency`, `Date`, `Datetime`, `Check`, `Select` | Columna normal | `grand_total` (Currency) |
| `Link` | **Llave foránea** a otro DocType (relación N:1) | `customer` → **Customer** |
| `Dynamic Link` | FK polimórfica — el DocType destino lo dice OTRO campo (`options` apunta al nombre del campo que contiene el doctype) | `party` → `Dynamic(party_type)` |
| `Table` | **Tabla hija embebida** (relación 1:N, hijos viven y mueren con el padre) | `items` (Sales Order Item) |
| `Table MultiSelect` | Relación N:M vía tabla puente automática | — |
| `Attach` / `Attach Image` | Archivo en almacenamiento, referenciado por URL | — |

Esto es exactamente el vocabulario de un modelo entidad-relación clásico: **Link = FK 1:N**, **Table = composición 1:N (hijos dependientes)**, **Table MultiSelect = M:N**. Cuando diseñes un sistema nuevo, piensa primero en qué DocTypes son maestros (catálogos), cuáles son transaccionales (documentos de negocio), y cuáles son tablas hijas (líneas de un documento).

## 3. Tres arquetipos de DocType

1. **Master (catálogo)** — entidad de referencia relativamente estable: `Customer`, `Item`, `Employee`, `Warehouse`. No suele ser `submittable`.
2. **Transaction (documento transaccional)** — representa un evento de negocio con ciclo de vida: `Sales Order`, `Purchase Invoice`, `Stock Entry`. Es `is_submittable: 1` — tiene el ciclo **Draft (0) → Submitted (1) → Cancelled (2)**. Un documento **submitted** es inmutable y dispara efectos reales (mueve inventario, crea asientos contables). Cancelar no borra — crea la reversión, preservando el rastro de auditoría completo.
3. **Child Table (tabla hija)** — vive dentro de un padre, no tiene identidad ni permisos propios: `Sales Order Item`, `Purchase Invoice Item`. Es donde van las líneas/renglones de un documento.

Hay un cuarto tipo, **Single**, para configuración global de un módulo sin múltiples registros (ej. `Selling Settings`) — una sola fila lógica, útil para parámetros del sistema.

## 4. Ciclo de vida y trazabilidad (por qué nunca se pierde el rastro)

- Draft → Submit → (Cancel → Amend opcional). El estado vive en el campo `docstatus` (0/1/2), no se modela a mano.
- Cada submit puede disparar **General Ledger Entries** (contabilidad), **Stock Ledger Entries** (inventario) — subsistemas append-only que nunca se editan, solo se revierten con una entrada de signo contrario.
- Todo documento transaccional referencia a su origen: un `Sales Invoice` tiene `Link` a `Sales Order`; una `Purchase Receipt` tiene `Link` a `Purchase Order`. Esto crea una **cadena de trazabilidad completa** de un extremo a otro del flujo, consultable con una sola query de joins.

## 5. Permisos por rol, no por usuario

Cada DocType define su matriz de permisos como una lista de reglas `{role, read, write, create, delete, submit, cancel, amend, report, export, print, email, share}` (visto arriba en `sales_order.json`: `Sales User` puede crear/editar/submit pero no necesariamente exportar; `Sales Manager` sí). Se puede ir más fino con **Permission Level** (permisos por campo, no solo por documento) y **User Permissions** (restringir un usuario a solo cierta Company/Territory). Diseña roles por función de negocio (`Sales User`, `Sales Manager`, `Accounts User`), nunca por persona.

## 6. Naming — cómo se identifica cada registro

`autoname` define cómo se genera el ID único de cada documento. Patrones reales usados en ERPNext:
- `naming_series:` — el usuario elige una serie (`SO-.YYYY.-`) y el sistema autonumera (`SO-2026-00001`).
- `field:fieldname` — usa el valor de otro campo como ID (ej. `Item` usa `item_code`).
- `hash` — ID aleatorio, cuando el nombre no importa (tablas hijas).

## 7. Hooks — dónde vive la lógica de negocio sin tocar el core

Frappe no modifica los DocTypes core para agregar lógica — usa **hooks** (`hooks.py`) que enganchan eventos del ciclo de vida: `validate`, `before_save`, `on_submit`, `on_cancel`, `after_insert`. Esto es lo que hace posible que ERPNext extienda el framework Frappe sin forkearlo, y que tú extiendas ERPNext sin tocar su código: escribes un **Custom App** que solo agrega hooks y DocTypes nuevos.

## 8. Reportes y dashboards son configuración, no código

**Report Builder** (point-and-click), **Query Report** (una consulta SQL/Python parametrizada) y **Script Report** son las tres formas de reportar, todas generadas desde los DocTypes existentes sin tocar la base. Los **Number Cards** y **Dashboards** se arman igual, por configuración.

## 9. Workflow — máquina de estados encima del docstatus

Cuando el ciclo binario Draft/Submitted/Cancelled no basta (ej. una requisición que pasa por 3 aprobaciones), se define un **Workflow**: estados con nombre (`Pending Approval`, `Approved`, `Rejected`), transiciones permitidas por rol, y una acción por transición. Esto es 100% configuración vía UI — no requiere desarrollador.

## 10. Regla de oro para replicar esta arquitectura en un sistema propio

Al diseñar un sistema nuevo con esta misma disciplina:
1. Lista las **entidades del negocio** → decide cuáles son Master, cuáles Transaction, cuáles Child Table.
2. Dibuja las **relaciones Link** entre ellas (quién apunta a quién) — esto ES tu modelo entidad-relación.
3. Define el **ciclo de vida** de cada Transaction (¿necesita aprobación? ¿genera efectos irreversibles al confirmarse?).
4. Define **roles** por función, no por persona, y la matriz de permisos por rol.
5. Decide qué efectos colaterales dispara cada submit (¿mueve inventario? ¿genera un asiento contable? ¿notifica a alguien?) — eso son tus hooks.
6. Verifica que cada Transaction importante tenga un Link hacia su documento de origen — así construyes trazabilidad de punta a punta sin esfuerzo extra.
