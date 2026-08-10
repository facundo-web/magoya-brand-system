# Magoya Brand — entrada para Gemini (gemini.google.com / AI Studio / Gems)

**Versión 1.1 · 2026-08-10** · Punto de entrada de la marca Magoya para Gemini. Se versiona por separado de las otras AIs (changelog al pie).

Si sos un modelo leyendo esto: seguí el flujo de abajo, todas las URLs son públicas.

## Flujo (en este orden)

1. **Doctrina** → https://facundo-web.github.io/magoya-brand-system/BRAND.md
2. **Valores exactos** → https://facundo-web.github.io/magoya-brand-system/tokens.json
3. **Assets** → https://facundo-web.github.io/magoya-brand-system/ai/assets.json — 247 archivos con URL directa y regla de uso.
4. **Presentaciones** → https://facundo-web.github.io/magoya-brand-system/ai/slides.json — con `layout_src` (geometría exacta por módulo). Si el fetch trunca, archivos por familia: `ai/slides/A.json` … `M.json`.
5. **Antes de entregar** → https://raw.githubusercontent.com/facundo-web/magoya-brand-system/main/.ai/checklist.md

## Qué podés hacer al pie de la letra (hoy)

- **Copy, HTML/CSS, código, SVG**: fidelidad total leyendo los archivos de arriba. Los SVGs son texto — el wordmark se usa tal cual, nunca se redibuja.
- **Con URL context / browsing**: fetcheá los archivos en vivo; no respondas de memoria.
- **Imagen (Imagen/gemini image)**: el generador no puede usar el SVG real ni Manrope — describí paleta y prohibiciones en el prompt y aclarale al usuario que el logo real se superpone después.

## Setup (una sola vez, para humanos)

- **Gem**: creá un Gem "Magoya Brand" con la instrucción: *"Antes de cualquier tarea de marca, leé https://facundo-web.github.io/magoya-brand-system/ai/gemini.md y seguí su flujo al pie de la letra. Esos archivos son la única fuente de verdad."*
- **AI Studio / API**: mismo texto como system instruction; si tu integración tiene URL context tool, dale esta URL directamente.

## Changelog

- **1.1** (2026-08-10): geometría exacta de slides + archivos por familia + advertencia currentColor.
- **1.0** (2026-08-10): primera versión.
