# Método de trabajo — obligatorio para cualquier pieza con contenido

**Versión 1.3 · 2026-08-11** · Este archivo es parte del flujo de todas las entradas por AI. No es opcional: cumplir la marca al pie de la letra es la mitad del trabajo — la otra mitad es buscar la excelencia en cómo se cuenta. Una pieza on-brand con la historia mal contada es una pieza fallida.

## Fase 1 — Entender antes de elegir

Antes de mirar un solo template, respondé por escrito (para vos):

1. **Audiencia**: ¿quién lo va a ver y qué sabe ya?
2. **Objetivo**: ¿qué tiene que pasar después de ver la pieza?
3. **LA idea**: la única frase que la audiencia se tiene que llevar. Si no podés escribirla, no estás listo para elegir módulos.
4. **Datos reales disponibles**: leé `ai/facts.json` — ahí están las cifras aprobadas, los clientes y el equipo nombrables. Los placeholders y cifras de ejemplo de las plantillas NUNCA se entregan como contenido final. Si el dato que necesitás no está en `facts.json`, pedíselo al usuario; no lo completes con algo verosímil.

Después armá la **narrativa primero**: un outline donde cada slide/bloque es una frase de la historia. La historia manda; los módulos sirven a la historia, nunca al revés.

## Fase 2 — Elegir cada módulo por criterio, no por defecto

- Para cada beat de la historia, usá el **selector** (`ai/selector.json`): mapea qué querés contar → qué módulo, sin criterio de diseño. Ante dos candidatos, leé el `cuando_usarlo` de ambos y justificá. Elegí y **justificá**: por qué ESTE módulo cuenta mejor ESTE beat.
- Buscá la oportunidad de contar mejor: ¿ese dato rinde más como cifra gigante (familia C) que como bullet (familia E)? ¿eso que parece una lista es en realidad un caso de éxito (familia G)? ¿ese párrafo largo es un statement (A1) esperando a ser una sola frase?
- El deck más corto que cuente la historia completa, gana. Prohibido rellenar con módulos porque existen.
- Una idea por slide. Si un slide necesita dos ideas, son dos slides.

## Fase 3 — Agentes especializados (o pasadas por rol)

Si tu plataforma soporta subagentes (Claude Code, workflows, etc.), **desplegalos**; si no, hacé las mismas pasadas de forma secuencial actuando cada rol por separado. Nunca entregues la primera versión.

1. **Agente de copy**: reescribe cada texto al estándar de voz de `BRAND.md` — claridad ante todo, números concretos, cero jerga inflada, cero superlativo vacío. Título por título: ¿esta frase carga sentido o es relleno?
2. **Agente de diseño**: valida que cada slide use la plantilla oficial de `ai/templates/` SIN modificaciones de geometría (solo slots llenos, dentro de max_caracteres) y contra `ai/constraints.json` + `.ai/checklist.md` — una dosis de lima, 75/25, máximo dos recursos, tipografía por escala.
3. **Agente crítico (el que refuta)**: recibe la pieza terminada con una sola consigna — *encontrá el slide más débil y proponé cómo contarlo mejor*. La ronda que refuta encuentra más que la que construye. Si el crítico no encuentra nada, no estaba criticando.

## Fase 4 — Criterio de entrega

Antes de entregar, verificá los dos niveles:

- **Técnico**: los 15 chequeos de `.ai/checklist.md`.
- **Narrativo**: ¿la historia se entiende leyendo SOLO los títulos, en orden? ¿el dato más fuerte tiene el slide más fuerte? ¿hay algún slide que, si se borra, la historia no pierde nada? (Si sí: borralo.)

Entregá junto con la pieza una nota corta de decisiones: qué módulos elegiste y por qué, y qué encontró el crítico.

## Changelog

- **1.3** (2026-08-11): fase 1 exige `ai/facts.json` como única fuente de datos de la empresa.

- **1.2** (2026-08-11): fase 2 usa el selector; el agente de diseño valida plantilla-sin-cambios + constraints.

- **1.1** (2026-08-10): el checklist técnico pasa a 15 chequeos (chips solo texto sin punto · espaciado en escala y un eje de alineación).

- **1.0** (2026-08-10): primera versión — entender antes de elegir, módulos por criterio, agentes de copy/diseño/crítica, doble checklist de entrega.
