# Magoya Brand — entrada para GitHub Copilot

**Versión 1.0 · 2026-08-10** · Punto de entrada de la marca Magoya para Copilot. Se versiona por separado de las otras AIs (changelog al pie).

## Flujo (en este orden)

1. **Instrucciones del repo**: guardá [copilot-instructions.md](https://raw.githubusercontent.com/magoya/magoya-brand-system/main/.ai/presets/copilot-instructions.md) como `.github/copilot-instructions.md` en el proyecto donde trabajás.
2. **Tokens en el código**: bajá https://magoya.github.io/magoya-brand-system/tokens.css al proyecto — Copilot autocompleta con las custom properties que ve en el árbol.
3. **Doctrina completa**: https://magoya.github.io/magoya-brand-system/BRAND.md (Copilot Chat puede leerla si se la pegás o si está en el workspace).
4. **Assets**: https://magoya.github.io/magoya-brand-system/ai/assets.json — bajá al repo los SVGs que la UI necesite.

## Qué podés hacer al pie de la letra (hoy)

- **Autocompletado on-brand**: depende de que tokens.css y los assets estén EN el workspace — Copilot no navega URLs por sí solo. Por eso el flujo acá es "bajar al repo" en vez de "fetch en vivo".
- Verificación rápida: pedí un card oscuro en Copilot Chat — tiene que salir `#133825` o `#161616`, sin gradiente.

## Changelog

- **1.0** (2026-08-10): primera versión.
