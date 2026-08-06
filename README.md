# Magoya Brand System

Sistema de diseño oficial de **Magoya** — AgTech digital product studio. Una sola fuente de verdad, consumible por personas y por AIs.

**Live:** https://facundo-web.github.io/magoya-brand-system/

**Regla madre:** si se crea algo nuevo que puede ir en una pieza, tiene que estar en el brand. Ningún asset ni componente existe sin su ficha — qué es, cuándo se usa, cuándo no, y de dónde se baja.

## Para personas

Las 9 páginas comparten la misma topbar y el mismo índice lateral (dock).

| Página | Qué hay |
|---|---|
| [`index.html`](index.html) | **La portada** — el moodboard: 19 celdas con un elemento real de la marca cada una, cada celda entra al capítulo que le corresponde. Es la entrada al sistema |
| [`brand-book.html`](brand-book.html) | **El brand book** — 13 secciones: esencia, logo & avatares, color, tipografía, fotografía, ilustración & motivos, convivencia de recursos, iconografía, componentes, aplicaciones, merch, papelería, reglas de oro · + §14 marca anexa |
| [`ai-en-campo.html`](ai-en-campo.html) | **Manual de la marca anexa "AI en campo"** — la línea de contenido educativo de IA para el agro (rompe tres reglas del core a propósito) |
| [`slides.html`](slides.html) | 41 módulos de presentación en 13 familias (escala 126/84/56/42pt) + exportador .pptx |
| [`pieces.html`](pieces.html) | Plantillas de piezas comerciales con anatomía (one-pager, flyers) |
| [`icons.html`](icons.html) | 58 iconos línea redondeada — click para copiar el SVG |
| [`library.html`](library.html) | Ficha + descarga directa de cada asset aprobado, y los 8 ZIPs por sección |
| [`logos.html`](logos.html) | Logos de clientes y stack tecnológico |
| [`ai.html`](ai.html) | **Integrar con AI** — cómo cargar la marca en Claude, Cursor, Copilot o un GPT, y cómo validar lo que devuelve |

## Para AIs

Si sos una AI generando piezas para Magoya, leé **en este orden**:

1. [`BRAND.md`](BRAND.md) — la doctrina completa en Markdown (reglas, roles de color, matriz de convivencia, recetas de aplicación, prohibiciones). Sus secciones 1–13 + §14 espejan una a una las del brand book visual.
2. [`tokens.json`](tokens.json) — todos los valores exactos: paleta con roles y reglas de accesibilidad, tipografía, espaciado, radios, matriz de convivencia, layouts de export y rutas de assets.
3. [`tokens.css`](tokens.css) — los mismos tokens como custom properties CSS con 4 temas (`default` verde profundo, `light`, `paper`, `studio`).
4. [`llms.txt`](llms.txt) — el resumen corto y estable de la marca para agentes.
5. [`.ai/`](.ai) — prompts listos para pegar (`brand-prompt.md`, `brand-prompt-short.md`), el checklist de validación (`checklist.md`) y presets por herramienta (`.ai/presets/`). La guía de uso está en [`ai.html`](ai.html).

Reglas mínimas si solo vas a leer una cosa: Manrope; negro `#161616` construye (~75%), verde hace crecer (~25%); lima `#A2FF00` solo UN golpe por pieza y nunca como texto sobre blanco; logo/avatares = `#00DE68`; el motivo (paño de semicírculos) va al corte naciendo de un borde o detrás de un objeto; personajes sin rostro recortados por el borde; máximo 2 recursos gráficos por pieza; emojis prohibidos salvo manitos que señalan y banderas; el monograma "m" no va en cards; en la firma de email va el wordmark; nada de gradientes glossy, puzzle, banda festoneada, naranja ni amarillo.

## Assets

```
assets/
├── magoya-wordmark-{green,cream,black,deep}.svg
├── magoya-wordmark-animado.svg   # versión animada (web + firma)
├── avatars/          # go · o · cara · m (vectoriales)
├── favicon/          # favicon.svg + favicon-{16,32,180,512}.png — aplicado en las 9 páginas
├── motif-semis.svg   # el único motivo: paño de semicírculos
├── flourish-{circle,arrow}.svg + doodle-sparkle.svg   # marcas a mano
├── illus/            # 4 personajes planos (paleta cerrada de 5 colores)
├── photos/           # 5 aéreas + retrato B&N (+ merch/ para las fotos de producto)
├── pieces/           # capturas de piezas reales producidas en el Studio
├── logos/clients/    # 17 clientes reales
├── logos/partners/   # 14 partners tecnológicos
├── logos/*.svg       # 3 logos de cuentas objetivo (bayer, basf, john-deere)
├── studio/           # espejo de los archivos de Magoya Studio: iconos agro/IA/redes,
│                     # doodles, flourishes, badge EN VIVO, mockups de dispositivo,
│                     # mark-ai-campo.svg (mark a mano del lockup "AI en campo · por Magoya")
├── downloads/        # 8 ZIPs por sección + firma GIF/PNG + doc-header/footer
├── refs/             # MATERIAL FUENTE — no publicable, ver abajo
└── font/manrope/     # Manrope variable 200–800 (OFL)
```

**`assets/refs/` es material fuente, no un asset del sistema.** Son los exports originales del diseñador (SVG/PNG de los módulos, ~25 MB) que sirvieron de referencia de trazado. No se enlazan desde ninguna página, no se distribuyen y no tienen ficha en `library.html`. Si algo de ahí tiene que poder usarse, primero se produce como asset aprobado y se le hace su ficha.

**Retirados de la doctrina** (los archivos quedan en disco solo como historial, sin ficha y sin uso en piezas nuevas): `motif-estratos.svg` y `illus/camino-*.svg` (motivos de líneas), la banda festoneada — que ya no tiene asset —, y `flourish-underline.svg` (el subrayado a mano: no cubría bien la palabra completa y el trazo no tenía fuerza; el énfasis de un titular ahora es color, no marca a mano).

**Duplicados conocidos** (existen en dos rutas; la de la derecha es la que usa el manual): `assets/badge-envivo.svg` y `assets/doodle-{blob,dots,loop}.svg` → viven en `assets/studio/` · `assets/logos/{corteva,syngenta}.svg` → viven en `assets/logos/clients/`. Al bajar un asset, usar siempre el que linkea `library.html`.

**Fuentes de las piezas de "AI en campo"**: `assets/photos/ai-campo-silueta.{jpg,png}` es la silueta recortada que usan las plantillas del Studio, y `assets/pieces/*.jpg` son capturas de piezas ya publicadas que el manual muestra como referencia. Son insumos de producción del Studio, no assets de descarga.

## Documentos de trabajo

No son parte del manual — son el registro de por qué el manual dice lo que dice.

| Archivo | Qué es |
|---|---|
| [`AUDITORIA-FEEDBACK.md`](AUDITORIA-FEEDBACK.md) | Cada pedido de feedback con su estado verificado, la evidencia (archivo:línea) y el criterio de aceptación. Incluye el roadmap por olas y las contradicciones abiertas |
| [`VOICE-RESEARCH.md`](VOICE-RESEARCH.md) | Relevamiento de la voz con citas trazables: el Manual de Marca 2022, la estrategia de Varu, los pilares de contenido y las reuniones |
| [`ROADMAP.md`](ROADMAP.md) | Roadmap maestro y decisiones tomadas que no se re-litigan |

## Desarrollo

Sitio estático — no hay build. Servir la carpeta con cualquier server:

```bash
python3 -m http.server 5501 --directory .
```

`archive/` contiene versiones previas del sistema (no usar). `app/` es el Deck Studio (renderer + admin de presentaciones por cliente).

---

Manrope © The Manrope Project (OFL). Logos de clientes/partners: marcas registradas de sus dueños, uso nominativo.
