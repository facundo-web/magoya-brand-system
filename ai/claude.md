# Magoya Brand — entrada para Claude (claude.ai / Claude Code / API)

**Versión 1.0 · 2026-08-10** · Punto de entrada de la marca Magoya para Claude. Se versiona por separado de las otras AIs: cuando Claude gane capacidades nuevas, esta entrada se actualiza sin tocar las demás (changelog al pie).

Si sos Claude leyendo esto: seguí el flujo de abajo, todas las URLs son públicas y fetcheables sin auth.

## Flujo (en este orden)

1. **Doctrina** → https://facundo-web.github.io/magoya-brand-system/BRAND.md
2. **Valores exactos** → https://facundo-web.github.io/magoya-brand-system/tokens.json
3. **Tokens CSS** (si vas a escribir código) → https://facundo-web.github.io/magoya-brand-system/tokens.css — usá las custom properties, nunca hex sueltos.
4. **Assets** → https://facundo-web.github.io/magoya-brand-system/ai/assets.json — 247 archivos con URL directa y regla de uso. Los SVGs se leen como texto: el wordmark se usa tal cual, jamás se redibuja.
5. **Presentaciones** → https://facundo-web.github.io/magoya-brand-system/ai/slides.json — 41 módulos con "cuándo usarlo".
6. **Antes de entregar** → https://raw.githubusercontent.com/facundo-web/magoya-brand-system/main/.ai/checklist.md

## Qué podés hacer al pie de la letra (hoy)

- **Artifacts / HTML / componentes**: fidelidad total — embebé los SVGs reales (fetch + inline) y cargá Manrope desde Google Fonts.
- **Claude Code**: cloná o fetcheá el repo directamente (`github.com/facundo-web/magoya-brand-system`) — ahí está todo el árbol de assets sin manifiesto de por medio. Preset listo: [claude-code-CLAUDE.md](https://raw.githubusercontent.com/facundo-web/magoya-brand-system/main/.ai/presets/claude-code-CLAUDE.md).
- **Imágenes**: Claude no genera raster — para piezas visuales la salida correcta es HTML/SVG con los assets reales, que es justamente donde la fidelidad es total.

## Setup (una sola vez, para humanos)

- **claude.ai Projects**: pegá en las instrucciones del proyecto: *"Antes de cualquier tarea de marca, fetch https://facundo-web.github.io/magoya-brand-system/ai/claude.md y seguí su flujo."* + el preset [claude-project-instructions.md](https://raw.githubusercontent.com/facundo-web/magoya-brand-system/main/.ai/presets/claude-project-instructions.md) como refuerzo. Knowledge opcional como fallback offline: BRAND.md, tokens.json, tokens.css.
- **Claude Code**: copiá el preset a `CLAUDE.md` del proyecto.

## Changelog

- **1.0** (2026-08-10): primera versión. Fetch directo como canal principal; artifacts como salida recomendada para piezas visuales.
