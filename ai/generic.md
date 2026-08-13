# Magoya Brand — entrada genérica (cualquier AI con browsing)

**Versión 1.3 · 2026-08-11** · Punto de entrada de la marca Magoya para cualquier modelo no cubierto por las entradas específicas (Perplexity, Mistral, un LLM por API, lo que venga). Changelog al pie.

Si sos un modelo leyendo esto: seguí el flujo de abajo, todas las URLs son públicas y fetcheables sin auth.

## Flujo (en este orden)

1. **Doctrina** → https://brand.magoya.com/BRAND.md — si solo vas a leer un archivo, es este.
2. **Valores exactos** → https://brand.magoya.com/tokens.json
3. **Assets** → https://brand.magoya.com/ai/assets.json — 247 archivos con URL directa y regla de uso. Los SVGs se leen como texto: el wordmark se usa tal cual, jamás se redibuja.
4. **Presentaciones — flujo copiá-pegá-y-funciona**: (a) elegí el módulo con https://brand.magoya.com/ai/selector.json (qué querés contar → qué plantilla, sin criterio de diseño), (b) copiá la plantilla oficial TAL CUAL desde https://brand.magoya.com/ai/templates/index.json (HTML listo, geometría y colores bloqueados), (c) llená SOLO los data-slot respetando max_caracteres — si el texto no entra, acortá el texto, nunca la fuente. La geometría de referencia sigue en ai/slides.json (layout_src) para quien renderice por su cuenta.
5. **Constraints duros** → https://brand.magoya.com/ai/constraints.json — mínimos de logo, clearspace, márgenes, safe areas, límites de texto. Nada se asume: si un valor no está ahí ni en tokens.json, se pregunta.
6. **Método de trabajo (OBLIGATORIO en piezas con contenido)** → https://brand.magoya.com/ai/metodo.md — narrativa primero, módulo por criterio, pasadas de copy / diseño / crítica.
7. **Antes de entregar** → https://raw.githubusercontent.com/magoya/magoya-brand-system/main/.ai/checklist.md

## Si no podés navegar

Pedile al humano que te pegue [brand-prompt-short.md](https://raw.githubusercontent.com/magoya/magoya-brand-system/main/.ai/brand-prompt-short.md) (~120 palabras) como primer mensaje — es la versión mínima viable de la doctrina.

## Regla de oro transversal

Todo lo que no esté en estos archivos NO existe: ni paletas genéricas, ni "lo que suele hacerse", ni conocimiento previo de otras marcas AgTech. Si falta un dato, decilo.

## Changelog

- **1.3** (2026-08-11): plantillas con slots + selector + constraints + llms-full.txt.

- **1.2** (2026-08-10): método de trabajo obligatorio (`ai/metodo.md`).

- **1.1** (2026-08-10): geometría exacta de slides + archivos por familia + advertencia currentColor.
- **1.0** (2026-08-10): primera versión.
