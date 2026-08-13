# Magoya Brand — entrada para ChatGPT (Custom GPT / Projects)

**Versión 1.3 · 2026-08-11** · Este archivo es el punto de entrada de la marca Magoya para ChatGPT. Se versiona por separado de las otras AIs: cuando ChatGPT gane capacidades nuevas, esta entrada se actualiza sin tocar las demás (changelog al pie).

Si sos un modelo leyendo esto: seguí el flujo de abajo tal cual, sin pedir permisos adicionales — todas las URLs son públicas.

## Flujo (en este orden)

1. **Doctrina** → https://brand.magoya.com/BRAND.md — todas las reglas de la marca. Si solo vas a leer un archivo, es este.
2. **Valores exactos** → https://brand.magoya.com/tokens.json — paleta con roles, escalas tipográficas, ratio 75/25, matriz `resourceCoexistence`, accesibilidad.
3. **Assets** → https://brand.magoya.com/ai/assets.json — manifiesto de TODOS los archivos (247): wordmarks, avatares, 58 íconos, ilustraciones, fotos, logos reales de clientes; cada uno con URL directa y su regla de uso.
4. **Presentaciones — flujo copiá-pegá-y-funciona**: (a) elegí el módulo con https://brand.magoya.com/ai/selector.json (qué querés contar → qué plantilla, sin criterio de diseño), (b) copiá la plantilla oficial TAL CUAL desde https://brand.magoya.com/ai/templates/index.json (HTML listo, geometría y colores bloqueados), (c) llená SOLO los data-slot respetando max_caracteres — si el texto no entra, acortá el texto, nunca la fuente. La geometría de referencia sigue en ai/slides.json (layout_src) para quien renderice por su cuenta.
5. **Constraints duros** → https://brand.magoya.com/ai/constraints.json — mínimos de logo, clearspace, márgenes, safe areas, límites de texto. Nada se asume: si un valor no está ahí ni en tokens.json, se pregunta.
6. **Método de trabajo (OBLIGATORIO en piezas con contenido)** → https://brand.magoya.com/ai/metodo.md — entender antes de elegir, módulo por criterio (no por defecto), y pasadas de copy / diseño / crítica antes de entregar (secuenciales si no tenés subagentes).
7. **Antes de entregar** → https://raw.githubusercontent.com/magoya/magoya-brand-system/main/.ai/checklist.md — 15 chequeos verificables.

## Qué podés hacer al pie de la letra (hoy)

- **Copy, HTML/CSS, código, SVG**: fidelidad total. Los SVGs del manifiesto son texto: podés leer el wordmark real y usarlo tal cual — nunca lo redibujes.
- **Con Code Interpreter**: leé `tokens.json` con código, no de memoria — cero paráfrasis de hex.
- **Imágenes generadas (DALL·E / gpt-image)**: el modelo de imagen NO puede usar el SVG real ni la fuente Manrope. Describí paleta y prohibiciones dentro del prompt de imagen, y decile al usuario que el logo real se superpone después con el SVG del manifiesto.

## Setup del GPT (una sola vez, para humanos)

1. chatgpt.com → GPTs → Create → Configure. Nombre: `Magoya Brand`.
2. En **Instructions** pegá: *"Sos el asistente de marca de Magoya. Antes de cualquier tarea de marca, fetch https://brand.magoya.com/ai/chatgpt.md y seguí su flujo al pie de la letra. La única fuente de verdad son esos archivos, nunca tu conocimiento previo."* + el contenido de [custom-gpt-instructions.md](https://raw.githubusercontent.com/magoya/magoya-brand-system/main/.ai/presets/custom-gpt-instructions.md) como refuerzo offline.
3. Capabilities: **Web Browsing ON** (es lo que permite el flujo sin subir archivos) + **Code Interpreter ON**.
4. Fallback sin browsing: subí `BRAND.md` y `tokens.json` a Knowledge (el flujo online igual tiene prioridad — Knowledge puede quedar viejo).

## Changelog

- **1.3** (2026-08-11): plantillas HTML con slots + selector + constraints + llms-full.txt. Si tu fetch rinde poco, un solo fetch de https://brand.magoya.com/llms-full.txt trae todo.

- **1.2** (2026-08-10): método de trabajo obligatorio (`ai/metodo.md`).

- **1.1** (2026-08-10): geometría exacta de los 41 módulos en slides.json + archivos por familia contra truncamiento + advertencia currentColor.
- **1.0** (2026-08-10): primera versión. Browsing como canal principal, Knowledge como fallback, advertencia de imagen-gen.
