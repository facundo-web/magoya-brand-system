# Magoya — Brand System v1.1

> Manual de marca en Markdown, pensado para ser consumido por personas y por AIs.
> Tokens exactos en [`tokens.json`](tokens.json) y [`tokens.css`](tokens.css). Manual visual navegable en [`index.html`](index.html).

## 1. Qué es Magoya

Estudio/partner de **estrategia y desarrollo de producto digital para agribusiness** (desde 2017). *"We partner with modern agribusinesses to design, build, and evolve their products and platforms."* Hero de marca: **"AgTech challenges demand more than code."** Diferenciador: equipos senior **embebidos** en el equipo del cliente — tecnólogos, expertos de producto y agrónomos. Pilares (las 3C): **Clarity** (complejidad → plan claro), **Confidence** (equipos senior con fluidez AgTech), **Commitment** (largo plazo).

**Voz:** profesional pero cercana; experta y senior, nunca vendedora; transparente y estructurada. Madura y confiable — **no whimsical**: la calidez viene del trato humano, no de la infantilización. Vocabulario propio: *embedded, deep AgTech fluency, clarity/confidence/commitment, long-term value.*

## 2. Logo & avatares

- **Wordmark** redondeado (4 versiones: verde digital `#00DE68` sobre blanco · crema sobre verde profundo · negro `#161616` sobre blanco · verde profundo sobre crema). Nunca reconstruir ni alterar espaciado.
- **Avatares** (círculo `#00DE68` + marca blanca): `go`, `o`, `cara`, `m`. La **cara** = redes de comunidad; la **m** = monograma funcional (favicon, app icon, canales corporativos).
- Aire mínimo: la altura de la "m". Tamaño mínimo: 90px pantalla / 24mm impreso — menos que eso, usar avatar "m".
- ✗ No estirar, rotar, sombrear, degradar. ✗ Wordmark en lima. ✗ Recolorear avatares.

## 3. Color

| Color | HEX | Rol |
|---|---|---|
| Verde Magoya | `#133825` | Core institucional: fondos oscuros, overlays, texto sobre claro |
| Verde digital | `#00DE68` | Identidad: wordmark, avatares, micro-acentos. Como texto SOLO sobre oscuro |
| Lima energía | `#A2FF00` | CTA, display, motivo. **Dosis única por pieza.** Nunca texto sobre blanco |
| Verde ilustración | `#33DB4E` | Ropa de personajes, soporte, data-viz |
| Crema Magoya | `#ECE3DB` | Neutro cálido firma; texto sobre verde profundo |
| Sage | `#EEF2EC` | Superficie clara de slides |
| Negro Magoya | `#161616` | Texto, titulares, cards dark |

**Regla central: "El negro construye, el verde hace crecer."** Neutros ≈75% de cada pieza, verde ≈25%, un solo movimiento verde dominante. Nunca pieza 100% negra ni 100% verde.

**Accesibilidad (no negociable):** lima nunca como texto sobre claro (1.25:1). Verde sobre blanco como texto = `#009145` y solo ≥24px bold. `#00DE68` como texto solo sobre fondos oscuros. Captions sobre claro: mínimo `#6E756D`.

## 4. Tipografía

**Manrope** (variable 200–800, self-hosted). Fallback: **Arial**. Display ExtraBold 800 con tracking −3%; cuerpo Regular 400. Kickers MAYÚSCULAS +12% tracking. Escala de slides: hero 126pt · display 84pt · título 56pt · subtítulo 42pt (sobre 1920px).

Reglas: máximo **3 niveles tipográficos por pieza**; el peso hace la jerarquía; resaltado por color o **subrayado lima** — prohibido el bloque resaltador sólido detrás de texto; labels de botón en sentence case. **Emojis: nunca en títulos**; solo se permiten manitos que señalan (👈 👉 👇) para dirigir a un CTA y banderas de países para geografía — ningún otro.

## 5. Fotografía

Dos familias, cada una con su regla:
- **Aérea de campo** (color natural): para fondos y portadas, siempre con **scrim verde profundo 55–86%** cuando lleva texto encima. El scrim es el único gradiente permitido.
- **Personas**: gente real del equipo, **siempre B&N** con un acento verde o lima. Remera Magoya, luz natural, gesto genuino.
- ✗ Stock corporativo posado, oficinas genéricas, personas a color en piezas de marca.

## 6. Ilustración & motivos

- **Personajes planos redondeados, sin rostro.** Paleta CERRADA de 5 colores: `#33DB4E` (ropa) · `#A2FF00` (ropa) · `#DFDFDF` (ropa) · `#FFC67B` (piel) · `#161616` (pelo/detalle). Siempre **recortados por un borde de la pieza**, del lado opuesto al texto — nunca flotando enteros ni centrados como clipart.
- **Motivo de marca: semicírculos** (patrón en grilla diagonal + banda festoneada). La **banda festoneada se reserva para la composición con personaje** (no se usa como remate genérico en cada pieza). **Regla de sangrado: el motivo va al corte y siempre nace de un extremo de la pieza o de detrás de un objeto — nunca puede verse cortado flotando en el aire.** Colores: verde digital sobre crema/blanco · crema sobre verde profundo · lima solo en banda sobre oscuro.
- **Marcas a mano**: **subrayado** = enfatiza una palabra del titular (pegado a la línea base) · **círculo** = marca una fecha o dato puntual · **flecha** = señala el CTA: nace del texto y su punta cae sobre el botón (diagonal, no al costado). Una sola por pieza, en **verde digital #00DE68 sobre claro / lima sobre oscuro** (nunca en negro: contra el texto no resaltan), siempre sobre texto compuesto — nunca sueltas como adorno.
- ✗ RETIRADOS: motivos de líneas (caminos concéntricos, estratos), personajes con rostro/monoline/stock, y la metáfora del **puzzle** (brand viejo — su reemplazo narrativo es el crecimiento/semicírculos). ✗ Naranja y amarillo del brand viejo.

## 7. Iconografía

Línea 2px, terminaciones y esquinas redondeadas, grid 24×24, `currentColor`. **Set agro de 16 íconos + 10 logos de IA + 13 de redes en `assets/studio/icons/` — los mismos archivos que usa Magoya Studio.** Negro sobre claro, crema sobre oscuro, **lima solo el ícono destacado (uno por pieza)**. Librería propia de 58 iconos en 7 categorías (`icons.html`); completar con Lucide (misma gramática) si hace falta volumen. Nunca rellenos sólidos ni 3D.

## 8. Componentes

- **Botón ≠ chip.** Botón: rectángulo radio 10px, fondo sólido (lima = CTA primario, negro, verde profundo, ghost). Chip: **pill outline** — borde y texto del mismo color, fondo transparente. Nunca chip sólido ni botón pill.
- Estados: hover (lima→`#8BDB00`, resto brightness), focus ring `rgba(0,222,104,.45)` sin blur.
- Cards: hiring (negro + lima), quote (foto B&N + cita), stat (número 800 −3%). Logo wall: logos **siempre reales**, en gris, grilla pareja.

## 9. Aplicaciones (recetas)

- **Hero canónico** (la pieza que define la marca): foto aérea + scrim verde + wordmark crema arriba-izq + CTA lima arriba-der + display ExtraBold abajo-izq con una frase en lima.
- **Feed 1:1** — 3 recetas rotativas: foto (statement sobre aérea) · crema (aviso + avatar) · dark (dato lima + personaje recortado). En redes, **display y cifras al ~70% del ancho**: grande o nada.
- **Story 9:16**: foto arriba + bloque verde abajo con festón; CTA lima. **Banner de LinkedIn**: foto del equipo en B&N + scrim negro degradado + wordmark crema + filete verde digital al borde (misma receta que la fotografía de personas). **Avatar**: cara (comunidad) / m (corporativo).
- **Slides**: lienzos blanco/sage, un golpe de lima por slide, margen interior 7% (`slides.html`, 16 módulos). **Piezas comerciales**: one-pager madre + flyers derivados (`pieces.html`).

## 10. Marca anexa "AI en campo" (manual propio)

**No es una sección de este brand: es una marca anexa con su propio manual** (`ai-en-campo.html`). Línea de contenido educativo de IA para el agro (carruseles, reels, webinars). Mismo ADN (Manrope, verdes oficiales) pero **rompe tres reglas del core a propósito**: (1) lienzo **verde digital pleno #00DE68** como fondo dominante; (2) **placa negra** #161616 con texto crema para el dato clave — permitida acá como lenguaje sticker; (3) **ruido con los assets del Studio** (`assets/studio/`): doodles (sparkle, dots, blob, loop), flourishes (arrow, navarrow, circle, underline), badge EN VIVO y logos oficiales de IA/redes — 2–4 por pieza, ±5–15°, en las esquinas. Terracota #C97B5A solo para teñir doodles. Texto secundario verde profundo; display negro; wordmark negro abajo-izquierda. Formato madre: **carrusel retrato 4:5 (1080×1350)**. Las piezas se producen SIEMPRE desde plantillas del Studio y su receta queda guardada en un `.magoya.json` (template, scheme, accent, anchor, rule, silueta, objetos con x/y/scale/rotation) — esa es la fuente para reproducirlas, no el ojo. Producción en Magoya Studio (30+ plantillas, 13 formatos de red). Nada de esto vuelve al core.

## 11. Merch & papelería

- **Textil**: verde profundo + crema, discreto y premium. **El merch se muestra SIEMPRE con foto o render real del producto — nunca ilustración ni esquema vectorial** (referencia de calidad: render "Buzo Propuesta 1"). Catálogo de 10 productos (buzo, remera blanca/negra, gorra, medias, mochila, termo, cuaderno, stickers, equipo usándolo); las fotos van en `assets/photos/merch/` con los nombres del LEEME y el manual las levanta solo. Wordmark chico pecho izquierdo, monograma "m" en espalda, patrón de avatares solo en forros. Bordado > estampa. **Sin lima en textil.**
- **Membrete A4**: wordmark verde arriba-izq (20% del ancho), pie con filete verde digital + avatar m. **Firma de email**: avatar + filete verde + nombre 700 + rol gris — sin banners.
- Docs: wordmark esquina sup-izq ≤1/5 del ancho; Manrope o Arial; nunca logo como marca de agua.

## 12. Reglas de oro (resumen ejecutable)

1. El negro construye, el verde hace crecer (75/25, un movimiento verde por pieza).
2. Lima = energía en dosis única: un CTA, un display o un motivo por pieza.
3. Verde digital `#00DE68` = identidad (logo/avatares); lima ≠ logo.
4. Personas reales en B&N con acento verde; ilustración plana para conceptos.
5. Logos de clientes SIEMPRE reales — jamás placeholders.
6. Todo redondeado — como el wordmark. Botón rect 10px, chip pill outline.
7. Motivos al corte: nacen de un borde o de detrás de un objeto — nunca cortados al aire.
8. ✗ Resaltador sólido tras texto · ✗ gradientes glossy/3D/estética IA · ✗ pieza 100% negra o verde · ✗ personajes con rostro/monoline · ✗ puzzle · ✗ naranja/amarillo.

---

*Pendientes de contenido: fotos/nombres reales del equipo, cita completa de Camila López Colmano, logos vectoriales de ProducePay/HabiTerre/IntelinAir, validación de Staff Augmentation.*
