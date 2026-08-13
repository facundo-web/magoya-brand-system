# Magoya Brand — entrada para Claude (claude.ai / Claude Code / API)

**Versión 1.3 · 2026-08-11** · Punto de entrada de la marca Magoya para Claude. Se versiona por separado de las otras AIs: cuando Claude gane capacidades nuevas, esta entrada se actualiza sin tocar las demás (changelog al pie).

Si sos Claude leyendo esto: seguí el flujo de abajo, todas las URLs son públicas y fetcheables sin auth.

## Flujo (en este orden)

1. **Doctrina** → https://brand.magoya.com/BRAND.md
2. **Valores exactos** → https://brand.magoya.com/tokens.json
3. **Tokens CSS** (si vas a escribir código) → https://brand.magoya.com/tokens.css — usá las custom properties, nunca hex sueltos.
4. **Assets** → https://brand.magoya.com/ai/assets.json — 247 archivos con URL directa y regla de uso. Los SVGs se leen como texto: el wordmark se usa tal cual, jamás se redibuja.
5. **Presentaciones — flujo copiá-pegá-y-funciona**: (a) elegí el módulo con https://brand.magoya.com/ai/selector.json (qué querés contar → qué plantilla, sin criterio de diseño), (b) copiá la plantilla oficial TAL CUAL desde https://brand.magoya.com/ai/templates/index.json (HTML listo, geometría y colores bloqueados), (c) llená SOLO los data-slot respetando max_caracteres — si el texto no entra, acortá el texto, nunca la fuente. La geometría de referencia sigue en ai/slides.json (layout_src) para quien renderice por su cuenta.
6. **Constraints duros** → https://brand.magoya.com/ai/constraints.json — mínimos de logo, clearspace, márgenes, safe areas, límites de texto. Nada se asume: si un valor no está ahí ni en tokens.json, se pregunta.
7. **Método de trabajo (OBLIGATORIO en piezas con contenido)** → https://brand.magoya.com/ai/metodo.md — entender antes de elegir, módulo por criterio (no por defecto), y agentes de copy / diseño / crítica antes de entregar. Si tu plataforma soporta subagentes, desplegalos; si no, hacé las pasadas por rol.
8. **Antes de entregar** → https://raw.githubusercontent.com/magoya/magoya-brand-system/main/.ai/checklist.md

## Qué podés hacer al pie de la letra (hoy)

- **Artifacts / HTML / componentes**: fidelidad total — embebé los SVGs reales (fetch + inline) y cargá Manrope desde Google Fonts.
- **Claude Code**: cloná o fetcheá el repo directamente (`github.com/magoya/magoya-brand-system`) — ahí está todo el árbol de assets sin manifiesto de por medio. Preset listo: [claude-code-CLAUDE.md](https://raw.githubusercontent.com/magoya/magoya-brand-system/main/.ai/presets/claude-code-CLAUDE.md).
- **Imágenes**: Claude no genera raster — para piezas visuales la salida correcta es HTML/SVG con los assets reales, que es justamente donde la fidelidad es total.

## Setup (una sola vez, para humanos)

- **claude.ai Projects**: pegá en las instrucciones del proyecto: *"Antes de cualquier tarea de marca, fetch https://brand.magoya.com/ai/claude.md y seguí su flujo."* + el preset [claude-project-instructions.md](https://raw.githubusercontent.com/magoya/magoya-brand-system/main/.ai/presets/claude-project-instructions.md) como refuerzo. Knowledge opcional como fallback offline: BRAND.md, tokens.json, tokens.css.
- **Claude Code**: copiá el preset a `CLAUDE.md` del proyecto.

## Changelog

- **1.3** (2026-08-11): flujo copiá-pegá-y-funciona — 41 plantillas HTML con slots (`ai/templates/`), selector de módulos (`ai/selector.json`), constraints duros (`ai/constraints.json`) y `llms-full.txt` (todo en un fetch). El LLM ya no interpreta geometría: llena slots.

- **1.2** (2026-08-10): método de trabajo obligatorio (`ai/metodo.md`): narrativa primero, módulos por criterio, agentes de copy/diseño/crítica.

- **1.1** (2026-08-10): slides.json ahora trae la geometría exacta de los 41 módulos (`layout_src`) + archivos por familia contra truncamiento de fetch + advertencia currentColor en íconos.
- **1.0** (2026-08-10): primera versión. Fetch directo como canal principal; artifacts como salida recomendada para piezas visuales.
