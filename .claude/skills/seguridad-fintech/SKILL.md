---
name: seguridad-fintech
description: Revisa arquitectura y código de productos financieros contra vulnerabilidades de seguridad — OWASP Top 10 y OWASP API Security Top 10 aplicados a pagos, datos sensibles, autenticación, y alcance PCI-DSS. Úsalo cuando el usuario pida "revisa la seguridad de esto", "esto es seguro?", "cómo protejo los datos de tarjeta/cuenta", "auditoría de seguridad", "cómo evito que me roben datos financieros", "IDOR", "esto cumple PCI", o antes de lanzar cualquier producto financiero a producción.
---

# Seguridad para Fintech

Revisión de seguridad enfocada en lo que específicamente hace daño en un producto financiero: no es una lista genérica de OWASP, es OWASP aplicado a dinero y datos personales sensibles.

## 1. Nunca toques el número de tarjeta crudo (alcance PCI-DSS)

La regla de oro: **si tu backend nunca recibe, procesa, ni almacena el PAN (número de tarjeta) completo, tu alcance de cumplimiento PCI-DSS se reduce drásticamente** (SAQ A en vez de SAQ D).
- Usa el SDK del PSP en el cliente (Stripe Elements, Conekta.js, etc.) para tokenizar la tarjeta antes de que el dato toque tu servidor.
- Tu backend solo ve el token, nunca el PAN.
- Si en algún punto ves un número de tarjeta completo en tus logs, tu base de datos, o tu código — es un hallazgo bloqueante, no una nota.

## 2. IDOR — el bug más común y más caro en fintech

Insecure Direct Object Reference: un endpoint que confía en un ID que viene del cliente sin verificar que le pertenece.
- Ejemplo real: `GET /cuentas/12345/estado-cuenta` — si no verificas que la cuenta `12345` pertenece al usuario autenticado, cualquiera puede ver el estado de cuenta de cualquiera cambiando el número.
- Revisa **cada endpoint que recibe un ID en la URL o el body**: ¿se valida pertenencia contra el usuario autenticado en cada uno, o solo en algunos?
- Esto aplica también a IDs "difíciles de adivinar" — no es suficiente que el ID sea un UUID, si de todos modos no validas pertenencia.

## 3. Autenticación y sesiones

- **Rate limiting agresivo en login y en cualquier endpoint que valide un secreto** (OTP, PIN, contraseña) — sin esto, fuerza bruta es trivial. Bloqueo progresivo o captcha después de N intentos fallidos.
- **MFA para operaciones de alto riesgo** (cambiar cuenta destino de transferencias, aumentar límites, cambiar datos de contacto), no solo para login.
- **Tokens de sesión con expiración corta** + refresh token, nunca un token de vida infinita para operaciones financieras.
- **Nunca en el JWT/token datos que cambien y que el backend deba validar de nuevo** (saldo, límite, rol) — el token dice quién eres, no cuánto tienes; eso se consulta fresco en cada operación sensible.

## 4. Datos sensibles — clasificación y cifrado

- **En tránsito**: TLS en todo, sin excepción, incluyendo llamadas internas entre servicios si cruzan red no confiable.
- **En reposo**: cifra CLABE, RFC/CURP, y cualquier dato que la LFPDPPP trate como sensible. Cifrado a nivel de columna para lo más crítico, no solo cifrado de disco genérico.
- **Logs**: nunca loguees el payload completo de un request que contenga tarjeta, contraseña, token, o CLABE — enmascara (`****1234`) antes de loguear. Un log comprometido no debe ser equivalente a una brecha de datos financieros.
- **Principio de mínimo dato**: si no necesitas guardar el RFC completo para la operación, no lo guardes — cada campo sensible que almacenas es superficie de ataque y de responsabilidad regulatoria (cruza con `cumplimiento-regulatorio-mx` para el lado normativo).

## 5. Inyección y validación de entrada

- SQL/NoSQL injection: queries parametrizadas siempre, nunca concatenación de strings con input de usuario — esto sigue siendo el hallazgo #1 de OWASP por una razón.
- Validación de tipo y rango en cada campo financiero: un monto negativo donde no debería, una fecha futura de nacimiento, una CLABE con longitud incorrecta — valida en el backend, nunca confíes solo en la validación del frontend.

## 6. Webhooks y APIs expuestas (ver también `arquitecto-apis-integraciones`)

- Todo webhook entrante **debe** verificar firma HMAC antes de procesar — un webhook sin verificación de firma es una puerta abierta para que cualquiera simule "pago confirmado" y active efectos reales en tu sistema.
- Rate limit también en endpoints públicos no autenticados (registro, cotizador) — son el blanco favorito de scraping y abuso.

## 7. Manejo de secretos

- API keys, credenciales de PSP, llaves de firma: nunca hardcodeadas en el código ni committeadas al repo — usa variables de entorno/secret manager (ver `deploy-cloudflare-workers` para el mecanismo concreto en Workers).
- Si encuentras un secreto hardcodeado durante una revisión, es hallazgo **bloqueante** — rota la credencial además de sacarla del código, porque una vez que estuvo en el historial de git, hay que asumirla comprometida.

## 8. Entregable de este skill

Al revisar un sistema o código, entrega:
1. **Matriz de hallazgos** por las 7 categorías de arriba — severidad (bloqueante/importante/menor), ubicación exacta, cómo explotarlo en una frase, cómo corregirlo.
2. **Alcance PCI-DSS estimado** si hay manejo de tarjetas — SAQ A vs SAQ D según si tocas el PAN.
3. **Qué se corrigió ya** vs qué requiere decisión/acceso que no tienes.
4. Cruce explícito con `cumplimiento-regulatorio-mx` cuando un hallazgo de seguridad es también un hallazgo regulatorio (ej. dato sensible sin cifrar es tanto riesgo de seguridad como incumplimiento de LFPDPPP).
