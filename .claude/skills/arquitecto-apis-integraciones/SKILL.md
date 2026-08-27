---
name: arquitecto-apis-integraciones
description: Diseña APIs, webhooks e integraciones externas para productos financieros — contratos REST, autenticación, idempotencia, reintentos, y conexión con rieles de pago y datos de México (PSPs como Stripe/Conekta/Openpay, SPEI/CoDi de Banxico, buró de crédito, CFDI/SAT). Complemento de arquitecto-flujos-erpnext para todo lo que cruza el borde del sistema hacia afuera. Úsalo cuando el usuario pregunte "cómo diseño esta API", "cómo integro con [PSP/banco/SAT]", "cómo recibo webhooks de forma segura", "qué pasa si me llega el mismo webhook dos veces", "cómo verso mi API", "diseño de contrato de integración", o quiera exponer/consumir datos entre sistemas.
---

# Arquitecto de APIs e Integraciones

Diseña el borde externo de un sistema: cómo expone su API, cómo consume APIs de terceros, y cómo sobrevive a que internet sea poco confiable (reintentos, duplicados, fuera de orden, caído a medias).

## 1. Diseño de contrato REST

- **Recursos, no verbos.** `POST /pagos`, no `POST /crear-pago`. El verbo lo da el método HTTP.
- **Un ID único por recurso**, devuelto en la creación, usado en toda referencia posterior. En un sistema financiero, ese ID es lo que conecta el registro interno con el externo — trátalo como llave primaria real (ver `arquitecto-flujos-erpnext` para cómo modelarlo como `Link`).
- **Versiona desde el día uno.** `/v1/pagos`, no porque lo vayas a romper pronto, sino porque el día que sí lo rompas, no vas a poder migrar a todos los consumidores a la vez. Nunca rompas `v1` una vez que alguien lo consume — crea `v2`.
- **Respuestas de error consistentes**: código HTTP correcto + cuerpo JSON con `error.code` (string estable, ej. `insufficient_funds`) y `error.message` (humano). El código es lo que el consumidor programa contra; el mensaje es para logs/humanos — nunca al revés.
- **Paginación desde el inicio** en cualquier endpoint de lista, aunque hoy tenga 3 registros. Cursor-based (`?after=<id>`) es más robusto que offset-based cuando hay escritura concurrente.

## 2. Idempotencia — la regla más importante en pagos

Todo endpoint que **crea** algo con efecto financiero (cobrar, transferir, mover inventario) debe aceptar una **idempotency key** enviada por el cliente (header `Idempotency-Key: <uuid>`):
- Primera vez que llega esa key: procesa y guarda `(key → resultado)`.
- Si llega de nuevo la misma key (por timeout del cliente, reintento automático, doble clic): devuelve el **mismo resultado guardado**, sin volver a cobrar/transferir.
- Sin esto, un timeout de red duplica cargos — es la causa número uno de doble cobro en integraciones de pago mal diseñadas.
- Vencimiento razonable de la key: 24h es el estándar de la industria (Stripe, por ejemplo).

## 3. Webhooks — recibir eventos de terceros de forma segura

Cuando un PSP, un banco, o el SAT te notifican algo (pago confirmado, CFDI timbrado) vía webhook:

1. **Verifica la firma antes de procesar nada.** El proveedor firma el payload con un secreto compartido (HMAC-SHA256 es el estándar — Stripe, Conekta, la mayoría lo usan así). Si la firma no valida, responde 400 y descarta. Nunca proceses un webhook sin verificar firma — cualquiera puede mandarte un POST a tu endpoint público simulando ser el proveedor.
2. **Responde 200 rápido, procesa después.** El proveedor reintenta si no le respondes en unos segundos (varía por proveedor, usualmente 5-10s). Si tu procesamiento es lento (llamadas a BD, otros servicios), acusa recibo primero y encola el trabajo real.
3. **Espera duplicados — son garantizados, no una posibilidad.** Todo proveedor serio de webhooks documenta "at-least-once delivery": el mismo evento puede llegar más de una vez. Usa el `event_id` del proveedor como idempotency key de tu lado (mismo patrón que en el punto 2).
4. **Espera desorden.** Un webhook de "pago fallido" puede llegar después de uno de "pago exitoso" si hubo reintento de red. No asumas que el orden de llegada es el orden de los hechos — usa el timestamp del evento del proveedor, no tu hora de recepción, para decidir cuál es el estado más reciente.

## 4. Reintentos y resiliencia (cuando TÚ llamas a otros)

- **Backoff exponencial con jitter**, nunca reintento inmediato en bucle — satura al proveedor y a ti mismo. Patrón estándar: espera base × 2^intento + variación aleatoria, tope de 3-5 intentos.
- **Distingue errores reintentables de definitivos.** Un 500/timeout del proveedor: reintenta. Un 400 (tu request estaba mal) o 402 (fondos insuficientes): no reintentes, ese resultado no va a cambiar solo.
- **Circuit breaker** si un proveedor está caído: después de N fallos seguidos, deja de intentar por un rato (no sigas mandando tráfico a un servicio caído) y avisa/degrada en vez de colgar la operación del usuario.

## 5. Rieles específicos de México (verifica vigencia contra la doc oficial antes de integrar — esto cambia)

| Riel | Para qué | Notas de diseño |
|---|---|---|
| **SPEI (Banxico)** | Transferencias interbancarias en tiempo real | Requiere CLABE de 18 dígitos con dígito verificador; confirmación es asíncrona vía notificación del banco, no en la respuesta del cargo. |
| **CoDi (Banxico)** | Cobro vía QR/NFC | El cobro se genera como una solicitud, el pago lo confirma el banco del pagador — de nuevo, patrón asíncrono con webhook/notificación. |
| **CFDI / SAT** | Facturación electrónica | El PAC (Proveedor Autorizado de Certificación) timbra el CFDI y te regresa el XML sellado — diseña esto como un paso asíncrono con reintento, el SAT/PAC puede tener latencia o caídas. |
| **PSPs (Stripe, Conekta, Openpay, Clip)** | Tarjetas, tokenización | Nunca toques el número de tarjeta crudo en tu backend — usa su SDK/tokenización en el cliente para no meterte en alcance PCI-DSS pesado (ver `seguridad-fintech`). |
| **Buró de Crédito / Círculo de Crédito** | Consulta de historial crediticio | Requiere consentimiento expreso documentado del titular antes de cada consulta — guarda evidencia del consentimiento, no solo la consulta. |

## 6. Entregable de este skill

Cuando diseñes una integración, entrega:
1. **Contrato del endpoint/webhook** — método, ruta, payload de entrada/salida, códigos de error.
2. **Estrategia de idempotencia** — qué campo es la key, dónde se guarda, cuánto dura.
3. **Manejo de fallas** — qué se reintenta, qué no, con qué backoff.
4. **Qué pasa si llega duplicado o fuera de orden** — explícito, no asumido.
5. Si toca un riel mexicano específico, la tabla de arriba como checklist de lo que falta verificar contra la documentación vigente del proveedor.
