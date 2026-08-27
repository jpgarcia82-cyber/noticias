---
name: fuentes-confiables
description: Disciplina de investigación con fuentes primarias verificadas — aplica a cualquier entregable de los otros 140 skills que incluya cifras, citas legales/regulatorias, datos de mercado, metodología técnica, o afirmaciones factuales. Antes de presentar algo como cierto, verifica contra la fuente original (no memoria, no resúmenes de segunda mano) y cita esa fuente explícitamente. Úsalo cuando el usuario diga "esto está sustentado?", "de dónde sacaste esto", "verifica la fuente", "investiga esto a fondo", "necesito que esto venga de fuentes reales", o siempre que un entregable vaya a citar una ley, una cifra de mercado, una regla técnica, o cualquier dato que cambie con el tiempo.
---

# Fuentes Confiables — Investigación Fundamentada

Regla base: **nunca presentes como hecho algo que no verificaste, cuando existe una fuente primaria disponible para verificarlo.** La memoria del modelo es un punto de partida, nunca la fuente final para algo que un usuario va a usar en producción, con un regulador, o con dinero de por medio.

Este skill no reemplaza a los otros 141 — se aplica **encima** de cualquiera de ellos cuando el entregable contiene algo verificable.

## Cuándo se activa

Al construir un entregable con cualquier otro skill, revisa si contiene alguno de estos tipos de afirmación:
- Una cita a ley/regulación/norma (CNBV, LFPIORPI, SEC, FINRA, OWASP, PCI-DSS…).
- Una cifra de mercado, financiera, o estadística (tasas, múltiplos, benchmarks, precios).
- Un detalle técnico de una plataforma/framework que cambia entre versiones (API de un PSP, campos de ERPNext, límites de una plataforma de ads).
- Un dato específico de una empresa/producto/persona real.

Si el entregable NO tiene nada de esto (es puro criterio, framework conceptual, o copy creativo), este skill no aplica — no todo necesita cita.

## Jerarquía de fuentes por dominio

No todas las fuentes valen igual. Usa la más cercana al origen posible:

| Dominio | Fuente primaria (úsala) | Evita |
|---|---|---|
| Regulación financiera México | Texto en el **DOF** (Diario Oficial de la Federación), sitio oficial de **CNBV**/**Banxico**/**CONDUSEF** | Blogs, resúmenes de terceros sin fecha, memoria del modelo sin verificar |
| Regulación financiera EE.UU. | **SEC.gov**, **FINRA.org**, texto literal de la regla citada | Artículos de opinión, resúmenes desactualizados |
| Cifras de mercado / valoración | Filings oficiales (10-K/10-Q, reportes trimestrales), fuente de datos verificable con fecha | Cifras "de memoria" sin verificar vigencia |
| Arquitectura/framework (ej. ERPNext) | **Código fuente real** del repositorio (clonar y leer, como se hizo con `arquitecto-flujos-erpnext`) | Documentación de terceros no oficial, memoria de versiones viejas |
| Seguridad | **OWASP.org**, CVE oficial, advisory del vendor | Foros, blogs de seguridad sin verificar |
| Estándares de marketing/benchmarks | Estudio o reporte original citable (con fecha y autor) | "Se sabe que..." sin fuente |

## Proceso

1. **Detecta la afirmación verificable** en lo que estás a punto de escribir.
2. **Pregúntate: ¿lo sé con certeza actualizada, o es mi mejor recuerdo?** Si hay la más mínima duda de vigencia (leyes cambian, tasas cambian, APIs cambian), trátalo como no verificado.
3. **Verifica contra la fuente primaria** antes de escribirlo:
   - Para leyes/regulación/noticias/cifras de mercado actuales: usa `WebSearch`/`WebFetch`.
   - Para arquitectura de software/framework de código abierto: clona el repositorio real y lee el código (mismo patrón que `arquitecto-flujos-erpnext` — no documentar de memoria un framework cuando su fuente está disponible).
   - Para datos internos del usuario (sus propios archivos, su propio repo): lee el archivo real, no asumas su contenido.
4. **Cita la fuente en el entregable** — no "según la normativa aplicable" sino la referencia concreta (nombre de la ley/artículo, URL, fecha de consulta si es dato que cambia).
5. **Si no se pudo verificar** (sin acceso, fuente no disponible): dilo explícito — "no verificado, confirmar contra [fuente] antes de usar" — nunca presentes una suposición con el mismo tono de confianza que un hecho verificado.

## Ejemplo de la disciplina ya aplicada en este repo

`arquitecto-flujos-erpnext` no se escribió de memoria: se clonó `frappe/erpnext`, `frappe/frappe`, y `frappe/hrms` reales, y cada DocType/relación se extrajo programáticamente del código fuente. Esa es la vara — cuando construyas algo nuevo que dependa de un sistema externo real, replica ese proceso en vez de aproximar.

## Qué NO hacer

- No cites una ley/regla que no verificaste solo porque "suena correcta".
- No inventes una cifra de mercado o un dato de empresa para rellenar un ejemplo — usa un placeholder explícito (`[cifra a confirmar]`) en vez de un número inventado que parezca real.
- No confundas "esto es de sentido común/framework conceptual" con "esto necesita fuente" — aplica la vara solo donde corresponde, no la conviertas en fricción para todo.

## Entregable

Cuando este skill aplica, el resultado debe traer:
1. **Lista de afirmaciones verificables** identificadas en el entregable.
2. **Fuente usada para cada una** (verificada esta sesión, no de memoria) o marca explícita de "no verificado".
3. Si algo no se pudo verificar y es material para la decisión del usuario, dilo antes de que use el entregable, no como nota al pie.
