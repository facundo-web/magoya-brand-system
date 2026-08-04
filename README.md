# Magoya Brand System

Sistema de diseño oficial de **Magoya** — AgTech digital product studio. Una sola fuente de verdad, consumible por personas y por AIs.

**Live:** https://facundo-web.github.io/magoya-brand-system/

## Para personas 👀

| Página | Qué hay |
|---|---|
| [`index.html`](index.html) | **El brand book** — 12 secciones: esencia, logo & avatares, color, tipografía, fotografía, ilustración & motivos, iconografía, componentes, aplicaciones, merch, papelería, reglas de oro |
| [`slides.html`](slides.html) | 16 módulos de presentación en 7 familias (escala 126/84/56/42pt) |
| [`pieces.html`](pieces.html) | Plantillas de piezas comerciales con anatomía (one-pager, flyers) |
| [`icons.html`](icons.html) | 58 iconos línea redondeada — click para copiar el SVG |
| [`library.html`](library.html) | Todos los assets con descarga directa |
| [`logos.html`](logos.html) | Logos de clientes y stack tecnológico |

## Para AIs 🤖

Si sos una AI generando piezas para Magoya, leé **en este orden**:

1. [`BRAND.md`](BRAND.md) — la doctrina completa en Markdown (reglas, roles de color, recetas de aplicación, prohibiciones).
2. [`tokens.json`](tokens.json) — todos los valores exactos: paleta con roles y reglas de accesibilidad, tipografía, espaciado, radios, layouts de export y rutas de assets.
3. [`tokens.css`](tokens.css) — los mismos tokens como custom properties CSS con 4 temas (`default` verde profundo, `light`, `paper`, `studio`).

Reglas mínimas si solo vas a leer una cosa: Manrope; negro `#161616` construye (~75%), verde hace crecer (~25%); lima `#A2FF00` solo UN golpe por pieza y nunca como texto sobre blanco; logo/avatares = `#00DE68`; motivos al corte nacen de un borde; personajes sin rostro recortados por el borde; nada de gradientes glossy, puzzle, naranja ni amarillo.

## Assets

```
assets/
├── magoya-wordmark-{green,cream,black,deep}.svg
├── avatars/          # go · o · cara · m (vectoriales)
├── motif-semis.svg   # patrón de semicírculos (+ motif-semis-band.svg)
├── illus/            # 4 personajes planos (paleta cerrada de 5 colores)
├── photos/           # 4 aéreas + retratos B&N
├── logos/clients/    # 17 clientes reales
├── logos/partners/   # 14 partners tecnológicos
└── font/manrope/     # Manrope variable 200–800 (OFL)
```

## Desarrollo

Sitio estático — no hay build. Servir la carpeta con cualquier server:

```bash
python3 -m http.server 5501 --directory .
```

`archive/` contiene versiones previas del sistema (no usar). `app/` es el Deck Studio (renderer + admin de presentaciones por cliente).

---

Manrope © The Manrope Project (OFL). Logos de clientes/partners: marcas registradas de sus dueños, uso nominativo.
