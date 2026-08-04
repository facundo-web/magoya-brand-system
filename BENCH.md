# Bench — Variables de estructura de slide

> Referencias relevadas para definir el set de arquetipos de la app. Fuente disparadora: Magnific (ex-Freepik) "simple presentation template" — la página es una galería JS con anti-bot (403 / timeout), así que el inventario se reconstruye desde la taxonomía estándar que exponen estas librerías (Magnific/Freepik, Slidesgo, Canva, SlideModel, Figma Community). El valor está en el cruce con nuestros arquetipos.

## A. Inventario de layouts (taxonomía estándar de templates)

| # | Layout | Elementos que sostiene | Variables/opciones típicas |
|---|---|---|---|
| 1 | **Cover / título** | título, subtítulo, logo, fondo | claro/oscuro · full-bleed · con imagen/abstracto |
| 2 | **Agenda / índice (TOC)** | lista numerada de secciones | 3–6 ítems · 1–2 columnas |
| 3 | **Section divider** | número de sección, título | full-color · con imagen |
| 4 | **About / intro** | título, párrafo, imagen | imagen izq/der · sin imagen |
| 5 | **Two-column** | título + 2 bloques de texto | con/ sin íconos |
| 6 | **Three / multi-column** | título + 3–4 bloques | 3 o 4 col |
| 7 | **Image + text (split)** | imagen grande + texto | imagen izq/der · 40/60 o 50/50 |
| 8 | **Full-bleed image** | imagen a sangre + título overlay | overlay claro/oscuro |
| 9 | **Big quote / testimonial** | cita, autor, rol, foto/logo | con/ sin retrato |
| 10 | **Stats / KPIs** | 1 métrica hero + métricas de apoyo | 1 grande · grilla 2–4 |
| 11 | **Comparison** | 2 columnas enfrentadas (A vs B) | con check/cross |
| 12 | **Process / steps** | pasos numerados con flecha | horizontal/vertical · 3–5 pasos |
| 13 | **Timeline** | hitos sobre eje | horizontal/vertical |
| 14 | **Team / people grid** | fotos + nombre + rol | 3–6 personas |
| 15 | **Services / features grid** | ícono + título + texto | 3–6 tarjetas |
| 16 | **Table** | filas/columnas de datos | con header destacado |
| 17 | **Chart / data** | gráfico + leyenda + insight | barras/líneas/torta |
| 18 | **Map** | mapa + marcadores/regiones | mundial/regional |
| 19 | **Logo wall** | grilla de logos | 4–6 por fila · mono/color |
| 20 | **Portfolio / gallery** | grilla de imágenes | 2–4 col |
| 21 | **Contact / CTA** | título, oferta, contacto, botón | con/ sin form |
| 22 | **Thank you / cierre** | título + datos | minimal |

**Variables transversales (las "estructuras" que pide el usuario):** tema claro/oscuro · nº de columnas (1–4) · con/ sin imagen · con/ sin métrica · alineación (izq/centrado) · densidad (texto mín/máx) · acento de color (verde on/off).

## B. Cruce con los 6 arquetipos Magoya (grammar.html)

| Arquetipo actual | Cubre del inventario |
|---|---|
| 1 · Cover | #1 Cover, #3 Section divider |
| 2 · Pillars | #5/#6 columnas, #15 features grid |
| 3 · Proof / Logos | #19 Logo wall, #11 comparison (PRIMARY/ALTERNATE) |
| 4 · Data hero | #10 Stats/KPIs, #17 chart |
| 5 · Case study | #4 about, #7 split, #16 table (parcial) |
| 6 · CTA | #21 contact, #22 thank you |

## C. GAPS — arquetipos a SUMAR a la app (hallazgo del bench)

El Master Script v6 + este inventario muestran que faltan 5 moldes para cubrir todo el deck sin forzar:

- **7 · Índice / Agenda** (#2) — útil para el leave-behind navegable.
- **8 · Split-media** (#7/#8) — imagen/foto **B&N** + texto. Es donde vive la slide de la fundadora ("Pioneering AgTech") → resuelve la tensión foto-sí/foto-no como variante.
- **9 · Process / Método** (#12/#13) — para "The Magoya Method" (Discover→Align→Execute→Learn). Hoy no tiene molde propio.
- **10 · Quote / Testimonial** (#9) — citas de clientes (Apeel "hard to tell the difference…", Biome Makers). Proof que "vende solo".
- **11 · Map** (#18) — countries del deck (US, AR, BR, EU, AU/NZ), dibujado en lenguaje **Estratos** (capas/regiones), legible pero no literal.

→ Set objetivo de la app: **11 arquetipos**. Esto alimenta C1 (modelo de datos: el campo `archetype` enumera estos 11) y C2 (componentes a construir).
