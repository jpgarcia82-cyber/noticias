---
name: qa-universal
description: Universal QA gate — reviews any deliverable produced by another skill in this repo for functional correctness, architecture soundness, and code/formula quality before it's presented as final. Use automatically after applying any of the other 137 skills (marketing, finance, compliance, arquitecto-flujos-erpnext, output-format skills) to validate the result, or when the user explicitly says "QA esto", "revisa esto antes de entregarlo", "asegura que esto es viable", "audita este entregable", "esto está listo?", or "verifica calidad".
---

# QA Universal — Control de calidad de punta a punta

Segunda pasada obligatoria sobre cualquier entregable producido por otro skill de esta biblioteca, antes de presentarlo como terminado. No reemplaza al skill que hizo el trabajo — lo audita.

## Cuándo se aplica

Después de que **cualquiera** de los otros 136 skills instalados produce un entregable — un modelo financiero, un flujo de ERPNext, un memo de cumplimiento, copy de marketing, un archivo .xlsx/.pptx, un plan de arquitectura — corre este skill antes de darlo por terminado. Si el resultado es solo una respuesta informativa corta (una definición, una explicación) sin entregable construido, no hace falta este paso completo; usa criterio.

## Las 4 lentes de QA

No todas aplican a todo entregable — usa las que correspondan al tipo de trabajo:

### 1. QA Funcional — ¿resuelve lo que se pidió?
- Relee el pedido original del usuario. Lista cada requisito explícito e implícito.
- Marca cada uno: cubierto / parcialmente cubierto / no cubierto.
- Busca casos borde que el entregable no contempla (¿qué pasa si el dato viene vacío? ¿si el monto es cero o negativo? ¿si el cliente no tiene historial?).
- Si el entregable resuelve algo distinto a lo pedido (scope creep o scope drift), señálalo.

### 2. QA de Arquitectura/Diseño — ¿es viable estructuralmente?
Aplica cuando el entregable es un sistema, flujo, modelo de datos, o proceso (típicamente de `arquitecto-flujos-erpnext`, los skills financieros de modelado, o `cumplimiento-regulatorio-mx`):
- **Consistencia del modelo de datos**: ¿cada entidad está bien clasificada (Master/Transaction/Child Table)? ¿las relaciones `Link` apuntan a la entidad correcta? ¿hay datos duplicados que debieran ser una FK?
- **Trazabilidad**: ¿cada documento transaccional importante encadena a su origen? ¿se puede reconstruir el historial completo con joins, o hay huecos?
- **Permisos**: ¿la matriz de roles es coherente (nadie tiene más acceso del que su función requiere, nadie menos del que necesita para operar)?
- **Escalabilidad**: ¿el diseño se rompe con volumen (N clientes, N transacciones/día)? ¿hay un cuello de botella obvio?
- **Ciclo de vida**: ¿está definido qué pasa en cada estado (borrador, aprobado, cancelado) y qué efectos colaterales dispara cada transición?

### 3. QA de Código/Fórmulas — ¿es correcto y seguro?
Aplica cuando el entregable incluye código, fórmulas de Excel, scripts, JSON, o archivos generados (`xlsx-author`, `pptx-author`, `dcf-model`, `lbo-model`, etc.):
- **Corrección**: ¿la fórmula/script hace lo que dice? Verifica con un caso de prueba concreto, no de memoria.
- **Seguridad**: sin inyección, sin credenciales hardcodeadas, sin lectura/escritura fuera del alcance esperado.
- **Errores silenciosos**: ¿algo puede fallar sin avisar (división por cero, referencia circular en Excel, campo nulo no manejado)?
- **Ejecutable**: si es posible correr o validar el archivo/script realmente (no solo leerlo), hazlo antes de dar por bueno.

### 4. QA de Rigor de Dominio — ¿los números/citas/afirmaciones son correctos?
- **Financiero**: los totales cuadran, el balance balancea, la tasa de descuento y el WACC están bien aplicados, no hay circularidad rota en el modelo.
- **Regulatorio/Compliance**: cada cita a una ley/regulador (CNBV, LFPIORPI, SEC, FINRA) corresponde realmente a esa norma — no inventada, no obsoleta a simple vista.
- **Marketing**: no hay promesas engañosas, cifras sin sustento, ni comparaciones injustas con competidores.

## Entregable del QA

Nunca "se ve bien" sin evidencia. Estructura la salida como:

1. **Matriz de hallazgos** — lente | hallazgo | severidad (bloqueante / importante / menor) | corrección propuesta.
2. **Qué se corrigió ya** — si el hallazgo es bloqueante o importante y la corrección es directa, corrígelo tú mismo antes de presentar el resultado final; no te limites a reportarlo.
3. **Qué queda pendiente y por qué** — si algo requiere una decisión del usuario (ej. un trade-off de diseño, un dato que falta), dilo explícito en vez de asumir.
4. **Veredicto final**: LISTO / LISTO CON RESERVAS / NO LISTO — una palabra, no ambigüedad.

## Principios

- No repitas el trabajo del skill original — audítalo. Si tú mismo generaste el entregable en este turno, sigue siendo obligatorio pasar por este checklist antes de decir "listo".
- Sé específico: "el DCF no valida" no es un hallazgo, "la fila 42 usa WACC del 8% pero el input dice 6.5%" sí lo es.
- Prioriza severidad: un hallazgo bloqueante (el número está mal, la ley citada no existe, el modelo de datos tiene una relación circular) para el veredicto en NO LISTO hasta corregirse. Un hallazgo menor (formato, redacción) no debe bloquear la entrega.
- Si no encontraste nada que corregir después de aplicar las 4 lentes en serio, dilo así — no inventes hallazgos menores para parecer riguroso.
