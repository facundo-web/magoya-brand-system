# Magoya Brand — entrada para ChatGPT (Custom GPT / Projects)

**Versión 1.2 · 2026-08-10** · Este archivo es el punto de entrada de la marca Magoya para ChatGPT. Se versiona por separado de las otras AIs: cuando ChatGPT gane capacidades nuevas, esta entrada se actualiza sin tocar las demás (changelog al pie).

Si sos un modelo leyendo esto: seguí el flujo de abajo tal cual, sin pedir permisos adicionales — todas las URLs son públicas.

## Flujo (en este orden)

1. **Doctrina** → https://facundo-web.github.io/magoya-brand-system/BRAND.md — todas las reglas de la marca. Si solo vas a leer un archivo, es este.
2. **Valores exactos** → https://facundo-web.github.io/magoya-brand-system/tokens.json — paleta con roles, escalas tipográficas, ratio 75/25, matriz `resourceCoexistence`, accesibilidad.
3. **Assets** → https://facundo-web.github.io/magoya-brand-system/ai/assets.json — manifiesto de TODOS los archivos (247): wordmarks, avatares, 58 íconos, ilustraciones, fotos, logos reales de clientes; cada uno con URL directa y su regla de uso.
4. **Si la pieza es una presentación** → https://facundo-web.github.io/magoya-brand-system/ai/slides.json — los 41 módulos con su "cuándo usarlo" y `layout_src`: la geometría EXACTA de cada módulo. Reproducí el layout, no lo improvises. Si tu fetch trunca el archivo (~86KB), usá los archivos por familia: `ai/slides/A.json` … `M.json`.
5. **Método de trabajo (OBLIGATORIO en piezas con contenido)** → https://facundo-web.github.io/magoya-brand-system/ai/metodo.md — entender antes de elegir, módulo por criterio (no por defecto), y pasadas de copy / diseño / crítica antes de entregar (secuenciales si no tenés subagentes).
6. **Antes de entregar** → https://raw.githubusercontent.com/facundo-web/magoya-brand-system/main/.ai/checklist.md — 13 chequeos verificables.

## Qué podés hacer al pie de la letra (hoy)

- **Copy, HTML/CSS, código, SVG**: fidelidad total. Los SVGs del manifiesto son texto: podés leer el wordmark real y usarlo tal cual — nunca lo redibujes.
- **Con Code Interpreter**: leé `tokens.json` con código, no de memoria — cero paráfrasis de hex.
- **Imágenes generadas (DALL·E / gpt-image)**: el modelo de imagen NO puede usar el SVG real ni la fuente Manrope. Describí paleta y prohibiciones dentro del prompt de imagen, y decile al usuario que el logo real se superpone después con el SVG del manifiesto.

## Setup del GPT (una sola vez, para humanos)

1. chatgpt.com → GPTs → Create → Configure. Nombre: `Magoya Brand`.
2. En **Instructions** pegá: *"Sos el asistente de marca de Magoya. Antes de cualquier tarea de marca, fetch https://facundo-web.github.io/magoya-brand-system/ai/chatgpt.md y seguí su flujo al pie de la letra. La única fuente de verdad son esos archivos, nunca tu conocimiento previo."* + el contenido de [custom-gpt-instructions.md](https://raw.githubusercontent.com/facundo-web/magoya-brand-system/main/.ai/presets/custom-gpt-instructions.md) como refuerzo offline.
3. Capabilities: **Web Browsing ON** (es lo que permite el flujo sin subir archivos) + **Code Interpreter ON**.
4. Fallback sin browsing: subí `BRAND.md` y `tokens.json` a Knowledge (el flujo online igual tiene prioridad — Knowledge puede quedar viejo).

## Changelog

- **1.2** (2026-08-10): método de trabajo obligatorio (`ai/metodo.md`).

- **1.1** (2026-08-10): geometría exacta de los 41 módulos en slides.json + archivos por familia contra truncamiento + advertencia currentColor.
- **1.0** (2026-08-10): primera versión. Browsing como canal principal, Knowledge como fallback, advertencia de imagen-gen.
