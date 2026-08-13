# Magoya Brand — entrada para Gemini (gemini.google.com / AI Studio / Gems)

**Versión 1.3 · 2026-08-11** · Punto de entrada de la marca Magoya para Gemini. Se versiona por separado de las otras AIs (changelog al pie).

Si sos un modelo leyendo esto: seguí el flujo de abajo, todas las URLs son públicas.

## Flujo (en este orden)

1. **Doctrina** → https://brand.magoya.com/BRAND.md
2. **Valores exactos** → https://brand.magoya.com/tokens.json
3. **Assets** → https://brand.magoya.com/ai/assets.json — 247 archivos con URL directa y regla de uso.
4. **Presentaciones — flujo copiá-pegá-y-funciona**: (a) elegí el módulo con https://brand.magoya.com/ai/selector.json (qué querés contar → qué plantilla, sin criterio de diseño), (b) copiá la plantilla oficial TAL CUAL desde https://brand.magoya.com/ai/templates/index.json (HTML listo, geometría y colores bloqueados), (c) llená SOLO los data-slot respetando max_caracteres — si el texto no entra, acortá el texto, nunca la fuente. La geometría de referencia sigue en ai/slides.json (layout_src) para quien renderice por su cuenta.
5. **Constraints duros** → https://brand.magoya.com/ai/constraints.json — mínimos de logo, clearspace, márgenes, safe areas, límites de texto. Nada se asume: si un valor no está ahí ni en tokens.json, se pregunta.
6. **Método de trabajo (OBLIGATORIO en piezas con contenido)** → https://brand.magoya.com/ai/metodo.md — narrativa primero, módulo por criterio, pasadas de copy / diseño / crítica.
7. **Antes de entregar** → https://raw.githubusercontent.com/magoya/magoya-brand-system/main/.ai/checklist.md

## Qué podés hacer al pie de la letra (hoy)

- **Copy, HTML/CSS, código, SVG**: fidelidad total leyendo los archivos de arriba. Los SVGs son texto — el wordmark se usa tal cual, nunca se redibuja.
- **Con URL context / browsing**: fetcheá los archivos en vivo; no respondas de memoria.
- **Imagen (Imagen/gemini image)**: el generador no puede usar el SVG real ni Manrope — describí paleta y prohibiciones en el prompt y aclarale al usuario que el logo real se superpone después.

## Setup (una sola vez, para humanos)

- **Gem**: creá un Gem "Magoya Brand" con la instrucción: *"Antes de cualquier tarea de marca, leé https://brand.magoya.com/ai/gemini.md y seguí su flujo al pie de la letra. Esos archivos son la única fuente de verdad."*
- **AI Studio / API**: mismo texto como system instruction; si tu integración tiene URL context tool, dale esta URL directamente.

## Changelog

- **1.3** (2026-08-11): plantillas con slots + selector + constraints + llms-full.txt (un solo fetch con todo).

- **1.2** (2026-08-10): método de trabajo obligatorio (`ai/metodo.md`).

- **1.1** (2026-08-10): geometría exacta de slides + archivos por familia + advertencia currentColor.
- **1.0** (2026-08-10): primera versión.
