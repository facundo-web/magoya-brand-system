# Método de trabajo — obligatorio para cualquier pieza con contenido

**Versión 1.0 · 2026-08-10** · Este archivo es parte del flujo de todas las entradas por AI. No es opcional: cumplir la marca al pie de la letra es la mitad del trabajo — la otra mitad es buscar la excelencia en cómo se cuenta. Una pieza on-brand con la historia mal contada es una pieza fallida.

## Fase 1 — Entender antes de elegir

Antes de mirar un solo template, respondé por escrito (para vos):

1. **Audiencia**: ¿quién lo va a ver y qué sabe ya?
2. **Objetivo**: ¿qué tiene que pasar después de ver la pieza?
3. **LA idea**: la única frase que la audiencia se tiene que llevar. Si no podés escribirla, no estás listo para elegir módulos.
4. **Datos reales disponibles**: qué cifras, casos y nombres tenés de verdad. Los placeholders del sistema (`[DATE]`, cifras de ejemplo) NUNCA se entregan como contenido final — si falta un dato, pedilo o marcalo explícitamente.

Después armá la **narrativa primero**: un outline donde cada slide/bloque es una frase de la historia. La historia manda; los módulos sirven a la historia, nunca al revés.

## Fase 2 — Elegir cada módulo por criterio, no por defecto

- Para cada beat de la historia, leé el `cuando_usarlo` de **todos** los módulos candidatos (en `ai/slides.json` o los archivos por familia) — no tomes el primero que encaje más o menos. Elegí y **justificá**: por qué ESTE módulo cuenta mejor ESTE beat.
- Buscá la oportunidad de contar mejor: ¿ese dato rinde más como cifra gigante (familia C) que como bullet (familia E)? ¿eso que parece una lista es en realidad un caso de éxito (familia G)? ¿ese párrafo largo es un statement (A1) esperando a ser una sola frase?
- El deck más corto que cuente la historia completa, gana. Prohibido rellenar con módulos porque existen.
- Una idea por slide. Si un slide necesita dos ideas, son dos slides.

## Fase 3 — Agentes especializados (o pasadas por rol)

Si tu plataforma soporta subagentes (Claude Code, workflows, etc.), **desplegalos**; si no, hacé las mismas pasadas de forma secuencial actuando cada rol por separado. Nunca entregues la primera versión.

1. **Agente de copy**: reescribe cada texto al estándar de voz de `BRAND.md` — claridad ante todo, números concretos, cero jerga inflada, cero superlativo vacío. Título por título: ¿esta frase carga sentido o es relleno?
2. **Agente de diseño**: valida cada slide contra su `layout_src` exacto y contra `.ai/checklist.md` — una dosis de lima, 75/25, máximo dos recursos, tipografía por escala.
3. **Agente crítico (el que refuta)**: recibe la pieza terminada con una sola consigna — *encontrá el slide más débil y proponé cómo contarlo mejor*. La ronda que refuta encuentra más que la que construye. Si el crítico no encuentra nada, no estaba criticando.

## Fase 4 — Criterio de entrega

Antes de entregar, verificá los dos niveles:

- **Técnico**: los 13 chequeos de `.ai/checklist.md`.
- **Narrativo**: ¿la historia se entiende leyendo SOLO los títulos, en orden? ¿el dato más fuerte tiene el slide más fuerte? ¿hay algún slide que, si se borra, la historia no pierde nada? (Si sí: borralo.)

Entregá junto con la pieza una nota corta de decisiones: qué módulos elegiste y por qué, y qué encontró el crítico.

## Changelog

- **1.0** (2026-08-10): primera versión — entender antes de elegir, módulos por criterio, agentes de copy/diseño/crítica, doble checklist de entrega.
