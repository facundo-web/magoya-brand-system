# Magoya Brand — entrada para Cursor

**Versión 1.0 · 2026-08-10** · Punto de entrada de la marca Magoya para Cursor. Se versiona por separado de las otras AIs (changelog al pie).

## Flujo (en este orden)

1. **Regla del proyecto**: guardá [cursor-rule.mdc](https://raw.githubusercontent.com/facundo-web/magoya-brand-system/main/.ai/presets/cursor-rule.mdc) como `.cursor/rules/magoya-brand.mdc` — es la doctrina condensada que el agente aplica en cada edición.
2. **Tokens en el código**: bajá https://facundo-web.github.io/magoya-brand-system/tokens.css al proyecto y usá SIEMPRE las custom properties (`var(--color-energy)`), nunca hex sueltos.
3. **Doctrina completa** (cuando el agente necesite contexto): https://facundo-web.github.io/magoya-brand-system/BRAND.md
4. **Assets** → https://facundo-web.github.io/magoya-brand-system/ai/assets.json — URL directa de cada SVG/foto para embeber o bajar al repo.
5. **Antes de mergear UI nueva** → https://raw.githubusercontent.com/facundo-web/magoya-brand-system/main/.ai/checklist.md

## Qué podés hacer al pie de la letra (hoy)

- **Componentes y páginas**: fidelidad total — tokens.css + SVGs reales del manifiesto. Verificación rápida: un card oscuro tiene que salir `#133825` o `#161616`, sin gradientes.
- El agente de Cursor puede fetchear las URLs de arriba en vivo (@web o fetch del agente) — preferí eso a copiar valores a mano.

## Changelog

- **1.0** (2026-08-10): primera versión.
