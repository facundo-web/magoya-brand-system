# Magoya Brand — entradas por AI

Un link por herramienta. Cada entrada se versiona por separado: cuando una AI gana capacidades, se actualiza SU archivo (con changelog) sin tocar los demás.

| AI | Link de entrada |
|---|---|
| ChatGPT (Custom GPT / Projects) | https://facundo-web.github.io/magoya-brand-system/ai/chatgpt.md |
| Claude (claude.ai / Claude Code / API) | https://facundo-web.github.io/magoya-brand-system/ai/claude.md |
| Gemini (app / AI Studio / Gems) | https://facundo-web.github.io/magoya-brand-system/ai/gemini.md |
| Cursor | https://facundo-web.github.io/magoya-brand-system/ai/cursor.md |
| GitHub Copilot | https://facundo-web.github.io/magoya-brand-system/ai/copilot.md |
| Cualquier otra AI con browsing | https://facundo-web.github.io/magoya-brand-system/ai/generic.md |

## Capa compartida (lo que todas las entradas apuntan)

- `BRAND.md` — doctrina completa.
- `tokens.json` / `tokens.css` — valores exactos con roles.
- `ai/assets.json` — manifiesto de los 247 assets con URL directa y regla de uso (incluye los 58 íconos del sistema como SVGs individuales en `assets/icons/`).
- `ai/slides.json` — los 41 módulos de presentación, machine-readable.
- `ai/metodo.md` — método de trabajo obligatorio: narrativa primero, módulos por criterio, agentes de copy/diseño/crítica.
- `.ai/checklist.md` — 15 chequeos antes de entregar.

## Cómo se regenera la capa compartida

`python3 ai/generate.py` desde la raíz del repo — re-exporta los 58 íconos desde `icons.html` y regenera `assets.json` y `slides.json` desde el árbol real. Correrlo después de cualquier cambio de assets o slides.
