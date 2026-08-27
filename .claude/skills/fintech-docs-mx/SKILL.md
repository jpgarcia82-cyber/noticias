---
name: fintech-docs-mx
description: Redacta documentos legales reales para productos financieros mexicanos — aviso de privacidad (LFPDPPP), contrato de adhesión listo para registro en el RECA de CONDUSEF, y términos y condiciones. Complemento de cumplimiento-regulatorio-mx — ese skill audita qué falta, este lo redacta. Úsalo cuando el usuario pida "redacta el aviso de privacidad", "necesito el contrato de adhesión", "escribe los términos y condiciones", "genera el documento legal para esto", o quiera pasar de un hallazgo de cumplimiento a un documento entregable.
---

# Documentos Legales Fintech — México

Redacta el documento, no solo lo audita — cierra el ciclo que empieza en `cumplimiento-regulatorio-mx`.

## Límite explícito

Estos son **borradores estructurados según los requisitos legales verificados**, no asesoría legal certificada. Todo documento generado aquí debe pasar por revisión de un abogado especializado en derecho financiero antes de publicarse o usarse con clientes reales — díselo al usuario cada vez que entregues uno de estos documentos, no como disclaimer genérico sino como paso siguiente concreto.

## 1. Aviso de Privacidad (LFPDPPP, Art. 15-16)

Fuente verificada: Ley Federal de Protección de Datos Personales en Posesión de los Particulares, Art. 15-16, y sus Lineamientos del Aviso de Privacidad (DOF).

**Elementos obligatorios** (todo aviso integral debe tenerlos, sin excepción):
1. **Identidad y domicilio del responsable** — quién trata los datos, dirección completa.
2. **Datos personales que se tratan** — lista explícita, señalando cuáles son **datos sensibles** (datos financieros/patrimoniales cuentan como sensibles en el criterio del INAI para efectos de tratamiento reforzado).
3. **Finalidades del tratamiento** — separando explícitamente las **finalidades primarias** (necesarias para el servicio, no requieren opt-out) de las **secundarias** (marketing, perfilamiento — sí requieren mecanismo de oposición/opt-out).
4. **Mecanismo para ejercer derechos ARCO** (Acceso, Rectificación, Cancelación, Oposición) — procedimiento concreto, no solo "contáctanos".
5. **Transferencias de datos a terceros** — a quién, para qué, y si requieren consentimiento.
6. **Medio y procedimiento para comunicar cambios al aviso** — cómo se entera el titular si el aviso se actualiza.

**Tres modalidades** (usa la que corresponda al canal):
- **Integral** — documento completo, disponible siempre (sitio web, app).
- **Simplificado** — versión resumida entregada en el momento de recolección de datos (ej. un formulario), con referencia al integral.
- **Corto** — para espacios mínimos (SMS, notificación push) — solo lo esencial + link al integral.

## 2. Contrato de Adhesión (LTOSF Art. 11 — registro en RECA de CONDUSEF)

Fuente verificada: Ley de Transparencia y Ordenamiento de los Servicios Financieros (LTOSF), Art. 11 — bancos, SOFOM, SOFIPO, uniones de crédito, y quien otorgue crédito/financiamiento al público debe registrar su modelo de contrato de adhesión en el **RECA** (Registro de Contratos de Adhesión) de CONDUSEF. El registro **no implica** que CONDUSEF haya validado el contenido — la responsabilidad de que cumpla la ley es de la institución.

**Estructura mínima esperada:**
1. Identificación de las partes (institución + cliente).
2. Descripción del producto/servicio — términos claros, sin lenguaje ambiguo que induzca a error.
3. **CAT (Costo Anual Total)** visible y calculado correctamente, si es producto de crédito — no opcional, es requisito de transparencia CONDUSEF.
4. Comisiones aplicables, listadas explícitamente (no "comisiones podrán aplicar" sin monto).
5. Derechos y obligaciones de cada parte.
6. Procedimiento de aclaraciones/quejas — referencia a la Unidad Especializada de Atención a Usuarios (UNE) de la institución.
7. Cláusulas de modificación del contrato — cómo y con qué aviso previo se puede modificar.

## 3. Términos y Condiciones (plataforma/app, distinto del contrato de adhesión)

No confundir con el contrato de adhesión — los T&C cubren el uso de la plataforma/app (no el producto financiero en sí):
- Reglas de uso aceptable, qué está prohibido en la plataforma.
- Limitación de responsabilidad de la plataforma (dentro de lo que la ley permite — no se puede limitar responsabilidad por fraude o dolo).
- Ley aplicable y jurisdicción (default razonable: leyes de México, tribunales competentes de la ciudad donde opera la institución).
- Vigencia y terminación del servicio.

## Proceso de este skill

1. Identifica qué documento se necesita y para qué tipo de entidad/producto (cruza con `cumplimiento-regulatorio-mx` si no está claro el régimen aplicable).
2. Redacta con la estructura verificada arriba — cada sección presente, nada en blanco ni "[completar después]" para elementos que la ley exige.
3. Marca explícitamente los campos que **sí** requieren dato específico del usuario (nombre legal de la entidad, domicilio, montos de comisiones reales) — no inventes esos datos, pídelos o dejarlos como placeholder visible (`[NOMBRE LEGAL DE LA ENTIDAD]`), nunca un valor de ejemplo que parezca real.
4. Cierra siempre con el recordatorio de revisión legal antes de publicar.
