# Magoya Brand System

Sistema de diseño oficial de **Magoya** — AgTech digital product studio. Una sola fuente de verdad, consumible por personas y por AIs.

**Live:** https://facundo-web.github.io/magoya-brand-system/

**Regla madre:** si se crea algo nuevo que puede ir en una pieza, tiene que estar en el brand. Ningún asset ni componente existe sin su ficha — qué es, cuándo se usa, cuándo no, y de dónde se baja.

## Para personas

Las 7 páginas comparten la misma topbar y el mismo índice lateral.

| Página | Qué hay |
|---|---|
| [`index.html`](index.html) | **El brand book** — 13 secciones: esencia, logo & avatares, color, tipografía, fotografía, ilustración & motivos, convivencia de recursos, iconografía, componentes, aplicaciones, merch, papelería, reglas de oro · + §14 marca anexa |
| [`ai-en-campo.html`](ai-en-campo.html) | **Manual de la marca anexa "AI en campo"** — la línea de contenido educativo de IA para el agro (rompe tres reglas del core a propósito) |
| [`slides.html`](slides.html) | 16 módulos de presentación en 7 familias (escala 126/84/56/42pt) |
| [`pieces.html`](pieces.html) | Plantillas de piezas comerciales con anatomía (one-pager, flyers) |
| [`icons.html`](icons.html) | 58 iconos línea redondeada — click para copiar el SVG |
| [`library.html`](library.html) | Ficha + descarga directa de cada asset aprobado, y los 8 ZIPs por sección |
| [`logos.html`](logos.html) | Logos de clientes y stack tecnológico |

## Para AIs

Si sos una AI generando piezas para Magoya, leé **en este orden**:

1. [`BRAND.md`](BRAND.md) — la doctrina completa en Markdown (reglas, roles de color, matriz de convivencia, recetas de aplicación, prohibiciones). Sus secciones 1–13 + §14 espejan una a una las del brand book visual.
2. [`tokens.json`](tokens.json) — todos los valores exactos: paleta con roles y reglas de accesibilidad, tipografía, espaciado, radios, matriz de convivencia, layouts de export y rutas de assets.
3. [`tokens.css`](tokens.css) — los mismos tokens como custom properties CSS con 4 temas (`default` verde profundo, `light`, `paper`, `studio`).

Reglas mínimas si solo vas a leer una cosa: Manrope; negro `#161616` construye (~75%), verde hace crecer (~25%); lima `#A2FF00` solo UN golpe por pieza y nunca como texto sobre blanco; logo/avatares = `#00DE68`; el motivo (paño de semicírculos) va al corte naciendo de un borde o detrás de un objeto; personajes sin rostro recortados por el borde; máximo 2 recursos gráficos por pieza; emojis prohibidos salvo manitos que señalan y banderas; el monograma "m" no va en cards; en la firma de email va el wordmark; nada de gradientes glossy, puzzle, banda festoneada, naranja ni amarillo.

## Assets

```
assets/
├── magoya-wordmark-{green,cream,black,deep}.svg
├── magoya-wordmark-animado.svg   # versión animada (web + firma)
├── avatars/          # go · o · cara · m (vectoriales)
├── motif-semis.svg   # el único motivo: paño de semicírculos
├── flourish-{underline,circle,arrow}.svg + doodle-sparkle.svg   # marcas a mano
├── illus/            # 4 personajes planos (paleta cerrada de 5 colores)
├── photos/           # 5 aéreas + retrato B&N (+ merch/ para las fotos de producto)
├── pieces/           # capturas de piezas reales producidas en el Studio
├── logos/clients/    # 17 clientes reales
├── logos/partners/   # 14 partners tecnológicos
├── logos/*.svg       # 3 logos de cuentas objetivo (bayer, basf, john-deere)
├── studio/           # espejo de los archivos de Magoya Studio: iconos agro/IA/redes,
│                     # doodles, flourishes, badge EN VIVO, mockups de dispositivo
├── downloads/        # 8 ZIPs por sección + firma GIF/PNG + doc-header/footer
├── refs/             # MATERIAL FUENTE — no publicable, ver abajo
└── font/manrope/     # Manrope variable 200–800 (OFL)
```

**`assets/refs/` es material fuente, no un asset del sistema.** Son los exports originales del diseñador (SVG/PNG de los módulos, ~25 MB) que sirvieron de referencia de trazado. No se enlazan desde ninguna página, no se distribuyen y no tienen ficha en `library.html`. Si algo de ahí tiene que poder usarse, primero se produce como asset aprobado y se le hace su ficha.

**Retirados de la doctrina** (los archivos quedan en disco solo como historial, sin ficha y sin uso en piezas nuevas): `motif-estratos.svg` y `illus/camino-*.svg` (motivos de líneas), y la banda festoneada — que ya no tiene asset.

## Desarrollo

Sitio estático — no hay build. Servir la carpeta con cualquier server:

```bash
python3 -m http.server 5501 --directory .
```

`archive/` contiene versiones previas del sistema (no usar). `app/` es el Deck Studio (renderer + admin de presentaciones por cliente).

---

Manrope © The Manrope Project (OFL). Logos de clientes/partners: marcas registradas de sus dueños, uso nominativo.
