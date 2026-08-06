# Auditoría de feedback — qué pediste, qué está hecho, cómo se valida

> Revisión profunda de **todo** tu feedback contra el estado real de los archivos, al 5 de agosto de 2026.
> Cada punto tiene evidencia verificable (archivo:línea o comando) y un criterio de aceptación que se puede chequear sin criterio subjetivo.
> Nada acá dice "listo" sin que lo haya medido. Si dice NO HECHO, es porque lo busqué y no está.

## Cómo leer los estados

| Estado | Significa |
|---|---|
| **LISTO** | Aplicado y verificado con evidencia en este documento |
| **PARCIAL** | Está el asset o la mitad del pedido, falta la aplicación o la ficha |
| **NO HECHO** | Lo busqué en los archivos y no existe |
| **BLOQUEADO** | Depende de un insumo que no está en disco |
| **CONTRADICE** | Choca con una decisión nueva del proceso con Proteína — hay que resolverlo antes de tocar código |

---

## 0. Lo que cambia el plan: el proceso con Proteína está en marcha

Busqué en las reuniones qué pasó con la voz "hasta hoy". No hubo un ajuste de copy: hay **un proceso de estrategia de marca en curso** que este sistema todavía no refleja. Fuente: notas de reunión del 17, 20, 22, 28 y 30 de julio y del 4 de agosto de 2026.

**Diagnóstico que acordaron con Proteína (Anita Figueiredo + Estrella):** nueve años de inconsistencia narrativa; Magoya se adaptó tanto al cliente que no construyó espacio propio.

**Calendario:**

| Fecha | Hito | Qué implica para este sistema |
|---|---|---|
| 28 jul 2026 | Kickoff | Ya pasó |
| **10 ago 2026** | Presentación preliminar de Proteína — **prework obligatorio** | Faltan **5 días**. Este brand system es parte del prework |
| **13 ago 2026** | Workshop principal, jornada completa, presencial, sin tecnología | Si falta alguien clave no se hace |
| 2 sep 2026 | Segundo workshop (9–17 h) | |
| post 13/8 | Módulo 1: posicionamiento, propuesta de valor, arquitectura de marca | **Puede reescribir la §1 de este manual** |
| post 2/9 | Módulo 2: **playbook consumible por AI** + vocabulario acordado. Diseño: Nat | **Es exactamente lo que estoy construyendo** — hay que decidir si converge o compite |

**Decisión ya tomada que me condiciona:** avanzar con el mood actual **sin rediseño profundo**, esperando que Proteína defina la dirección visual antes de invertir más. Y: *sin cambios estructurales de marca hasta tener el output del módulo 1*.

Esto reordena la prioridad: **hasta el 13 de agosto conviene cerrar huecos y consistencia, no abrir capítulos nuevos.**

### Tres contradicciones nuevas que hay que resolver antes de seguir

| # | La decisión de la reunión | Lo que dice hoy el sistema | Por qué importa |
|---|---|---|---|
| C1 | *"No se usarán logos, casos de éxito ni métricas de clientes como eje de comunicación (por ahora)"* | `BRAND.md` §1: *"ninguna afirmación de valor viaja sin cifra, nombre de cliente, plazo o captura"* · `logos.html` publica 17 logos de clientes · `slides.html` tiene familia G de casos de éxito y el módulo **"Proof, not promises"** | Es la regla de voz más fuerte que escribí y podría estar apuntando al lado contrario. Mi lectura: la decisión es sobre **el eje de comunicación en redes**, no sobre el material de venta uno-a-uno — pero no lo puedo decidir yo |
| C2 | *"'Problem solver' en inglés para EE.UU. está definido. Para Argentina falta bajar voz, tono y lenguaje local — no es traducción literal"* · *"multipaís no es localización, es de raíz"* | El manual tiene **una** voz con una regla de idioma (§1). No tiene voz por territorio | Falta un capítulo: **voz por mercado**, con AR y US partiendo de lugares distintos |
| C3 | *"AI no es el claim principal, pero tiene que aparecer"* | `ai-en-campo.html` es una marca anexa completa y hay familia K de capacidades AI en slides | Hay que fijar el techo: cuánta AI antes de que se lea como claim principal |

### Un dato que corrige mi propia investigación

En `VOICE-RESEARCH.md` inferí que **Proteína era la agencia del rebranding 2022**. Las reuniones muestran que Proteína arrancó el **28 de julio de 2026**. La atribución del `Manual de Marca` 2022 queda **sin fuente** — y **Nat es la diseñadora original de Magoya**, que ahora hace el diseño del playbook. Corregido en el documento.

---

## 1. Navegación y entrada al sistema

| ID | Pedido | Estado | Evidencia / qué hice |
|---|---|---|---|
| F01 | *"no veo el mood"* — la portada moodboard | **LISTO hoy** | Estaba **huérfana**: `grep -l intro.html *.html` devolvía solo intro.html. Ninguna página la linkeaba, por eso no existía para vos. Ahora el moodboard **es la raíz** (`index.html`) y el brand book pasó a `brand-book.html`; "Inicio" es el primer ítem del topbar en las 8 páginas internas |
| F02 | *"si estoy en la home no debería poder hacer click en el logo para volver a la home"* | **LISTO hoy** | En la home el logo es `<span class="brandmark">`, no `<a>`. En las otras 8 el logo lleva a `index.html` |
| F03 | *"y lo pondría más grande, debería estar más destacado"* (el logo) | **LISTO hoy** | `.mg-topbar img` de 28px → **34px** en las 9 páginas |
| F04 | *"la sección piezas le cambiaría el nombre… y logos tampoco es auto-explicativa"* | **LISTO** | Topbar dice **"Comerciales"** y **"Clientes"**, no "Piezas" ni "Logos" |
| F05 | *"todo lo que es para descargar te saca de la navegación"* | **LISTO** | Panel de descarga contextual, sin salto de página |
| F06 | *"la animación de popup solo si se cambia de sección, y si esa sección no tiene nada tiene que desaparecer"* | **LISTO** | Scroll-spy por posición (IntersectionObserver fallaba con anclas cortas); verificado: Convivencia y Componentes muestran el panel oculto |
| F07 | *"el menú de Aladino… si entro al espacio verde disminuye el tamaño de la sección actual"* | **LISTO** | `:has(a:hover) a.act:not(:hover)` en vez de `:hover` del contenedor, en las 9 páginas |
| F08 | *"las animaciones se traban y parecen poco fluidas"* | **LISTO** | `transform:scale()` (compositor) en vez de `font-size`, y scroll-spy con `requestAnimationFrame` que no toca el DOM si no cambió |
| F09 | *"la flechita de AI en campo ponela del lado derecho, que sea toda el área clickeable"* | **LISTO** | `.side a.anx` con `display:flex;justify-content:space-between`; medido en el navegador: la flecha queda a 8px del borde derecho del `<a>`, que ya ocupa el ancho completo del dock (heredado del flex del sidebar) |

## 2. Ilustración, motivos y marcas a mano

| ID | Pedido | Estado | Evidencia / qué falta |
|---|---|---|---|
| F10 | *"las que tienen caminos están mal cortadas"* / *"los motivos está bien que estén al corte pero nunca que se vean cortados"* | **LISTO** | Regla de sangrado documentada (`BRAND.md` §6); motivos de líneas retirados |
| F11 | *"en motivos las líneas no son algo que caracteriza la marca"* | **LISTO** | `motif-estratos.svg` y `camino-*.svg` retirados de la doctrina, sin ficha |
| F12 | *"esto no lo quiero como motivo"* (banda festoneada) | **LISTO** | Asset borrado; único motivo = paño de semicírculos |
| F13 | *"les faltan las zapatillas"* | **LISTO** | Verifiqué las 4 piezas por separado: `char-chart-duo` ya tenía un zapato real (personaje izquierdo) y el resto de sus piernas se recortan por el borde del artboard (regla válida, no falta nada); `char-experts-talking` tiene las dos piernas recortadas por el borde (regla válida). Los dos casos reales de pierna flotante sin calzado eran `char-jumping` y `char-laptop` — a ambos les agregué una suela en `#161616` (paleta cerrada) siguiendo el borde inferior del cuff existente, verificado renderizando el SVG a 1800px |
| F14 | *"la sección de marcas a mano: el título es malo, y cómo están aplicadas también; no cubre toda la palabra, no repetán lo que dicen, y el stroke parece que da vergüenza — quiero una marca fuerte de principio a fin"* | **LISTO** | Resuelto de raíz: en vez de seguir parchando el subrayado débil, se retiró (ver F15) — ya no hay una versión débil que mostrar |
| F15 | *"el subrayado quedó fuera"* (implícito en F14: solo círculo y flecha) | **LISTO** | `grep -rn flourish-underline *.html` → cero coincidencias (el asset y sus 4 usos migrados: `brand-book.html` sacó la tarjeta, `slides.html` A1/J2 pasan la frase a lima con `<em>`, `library.html` sacó la ficha). Doctrina actualizada en `BRAND.md`, `README.md`, `ROADMAP.md`, `tokens.json` |
| F16 | *"un patito en motivos semicirculares está deformado"* | **LISTO** | Era `preserveAspectRatio="none"`; el asset se retiró después |
| F17 | *"la regla es cubrir los espacios, no que quede algo chiquito como detalle; si hay algo es para que se vea"* | **LISTO** | Regla "ocupar el espacio" en `BRAND.md` §6 con números (gráfico = ancho de columna, cifra ~70%, personaje 40–55%, paño al corte); gráficos de slides agrandados (`.bars` 26cqw → 42cqw, `.donut` 20 → 34cqw) |
| F18 | *"rehacer las piezas de convivencia — los fondos son raros y la persona, los chips no están bien"* + *"no sé qué significa área mosaico"* | **LISTO** | El motivo pasó de `<img object-fit:cover>` (una sola instancia recortada, se veía sparse/rota) a `background-repeat` en tile continuo — verificado visualmente en los dos ejemplos. El retítulo ya había pasado a "Cards — siempre en mosaico" en una ronda anterior. La persona (task previa) y los chips (pill + tags) ya estaban bien |

## 3. Iconografía

| ID | Pedido | Estado | Evidencia |
|---|---|---|---|
| F19 | *"quiero tener suficientes para poder hablar de cualquier tema, incluso redes sociales, AI o plataformas"* | **LISTO** | 58 íconos línea redondeada |
| F20 | *"si lo pego me pega un código, me gustaría que sea el ícono en PNG"* | **LISTO** | `toPngBlob()` + `ClipboardItem`; pega como imagen |
| F21 | *"que se puedan descargar todos, algunos o uno"* | **LISTO** | Descarga individual + ⌘-click múltiple con barra de selección |
| F22 | *"mostrá cómo se aplica en cada sección — slide, piezas, ícono — pensá en la persona que viene de la nada"* | **LISTO** | 3 ejemplos por contexto de uso, distintos de la home |
| F23 | *"hay ejemplos de íconos grandes que me gustaron mucho en los slides — llevá más referencias de ahí al brand"* | **LISTO** | 3 ejemplos reales agregados al capítulo de iconografía, cada uno con link al módulo de origen: ícono protagonista de statement (slides A5), ícono en badge circular (slides B3), ícono líder de fila en capacidades de AI (slides K2). De paso, encontrado y corregido un bug real: la clase nueva `.icm.hero` colisionaba con `.hero` (el header de la página, `min-height:88vh`) e inflaba el ícono a 335px de alto — renombrada a `.icm.xl` |

## 4. Logos, descargas y aplicación web

| ID | Pedido | Estado | Evidencia |
|---|---|---|---|
| F24 | *"los logos de AI + los de redes deberían poder descargarse en PNG o SVG, a color o negro, con contenedor o solo el isologo"* | **LISTO** | Los logos de AI y redes viven en `ai-en-campo.html` (no en `logos.html`, que es para clientes/partners). Cada uno tiene 4 variantes reales: SVG color, SVG negro, PNG con contenedor, PNG negro con contenedor — generadas client-side, sin pre-generar 92 archivos. De paso se corrigieron 4 colores mal atribuidos (Meta, Ollama, OpenAI, Perplexity) verificados contra fuentes independientes |
| F25 | *"deberíamos tener cómo se aplica en web, el favicon y demás"* | **LISTO** | `assets/favicon/` tiene los 4 PNG + SVG generados desde el avatar "m" (rasterizado con QuickLook, sin instalar librerías). Las 9 páginas cargan los 4 `<link>` (icon SVG, PNG 32, PNG 16, apple-touch-icon 180) — verificado por página. Ficha completa con las 5 descargas en `library.html` |
| F26 | *"las fotos se debería poder bajar una"* | **LISTO** | 6 fotos con descarga individual en `library.html` |
| F27 | *"los textos no son referenciales"* (descargas) | **LISTO** | Auditadas las fichas de `library.html`, `brand-book.html` y `logos.html` contra `ls -la` real. La mayoría ya coincidía; se corrigieron 3 bugs reales: `varu-ceo-bw.jpg` decía PNG·55KB·290×290 (es JPG·15KB·400×400), 4 SVG mostraban "0 KB" en vez de precisión sub-KB, y 2 menciones a "loop" quedaron obsoletas tras sacarle el loop a la firma animada |
| F28 | *"el hacer y evitar en la foto parece que corresponde a las fotos de arriba"* | **LISTO** | Reordenado |
| F29 | *"el hacer y evitar lo dejaría en algún contenedor que lo separe más, pero que se note que es contexto"* | **LISTO** | Bloque `.dodont` universal agregado en `slides.html` (antes de la familia A) y en `pieces.html` (antes de los tabs) — `grep -c dodont slides.html pieces.html` = 3 en ambos |

## 5. Firma, papelería y merch

| ID | Pedido | Estado | Evidencia |
|---|---|---|---|
| F30 | *"no va la carita, siempre el logo"* (firma) | **LISTO** | Firma = wordmark |
| F31 | *"la firma quiero que sea el logo animado — animalo y ponelo descargable, y también el header del doc, el footer, la firma estática"* | **LISTO** | GIF 200×70 / 26 frames + PNG + `doc-header.svg` + `doc-footer.svg` + instructivo de Gmail |
| F32 | *"mostrar si lo tiene que aplicar en un Excel u otro documento"* | **LISTO** | Membrete A4 + pie con avatar "m" (uso permitido de papelería) |
| F33 | *"le falta lo de LinkedIn — AI en campo, qué puede aportar a la firma más datos"* | **LISTO** | Firma de email suma ícono de LinkedIn (16px, linkeado al perfil) y link a AI en campo bajo el contacto — instructivo de Gmail actualizado con el paso para sumarlos |
| F34 | *"la referencia real — Buzo Propuesta 1 no es una referencia para llevar al frente; primero va el catálogo de merch con aplicación"* | **LISTO** (foto real, F35 sigue pendiente) | Catálogo de 10 productos ahora abre la sección; el buzo pasó a "Especificación de producción" después, retitulado para no leerse como la pieza a mostrar primero |
| F35 | *"las fotos no son reales; si querés poné 'a modo ilustrativo', pero tomá todas las que te pasé, recortalas y ponelas bien"* | **BLOQUEADO** | `assets/photos/merch/` tiene **solo `LEEME.txt`**. Busqué en Desktop, Downloads y Claude por remera/gorra/mochila/vaso/medias/cuaderno/sticker/hoodie: no están en disco. Las veo en el chat, no las puedo extraer de una imagen pegada — necesito los archivos |
| F36 | *"aplicación en branding: remeras, buzos, gorra, vaso térmico, cuaderno, lapiceras"* | **PARCIAL** | Especificación de los 9 productos escrita; falta la foto de cada uno (F35) |

## 6. Slides y piezas comerciales

| ID | Pedido | Estado | Evidencia |
|---|---|---|---|
| F37 | *"le falta más componentes, más template: una tabla, un gráfico, una foto y texto, una ilustración de persona y un texto al palo"* | **LISTO** | 41 módulos en 13 familias |
| F38 | *"esto debería poder abrirte en Google Slides con el template full y que selecciones cuáles querés"* | **LISTO** | Exportador `.pptx` real con selección por checkbox (PptxGenJS, gráficos y tablas nativas) |
| F39 | *"la bajada del 95% casi tocando los números"* | **LISTO** | `.stat-d` margin-top .5cqw → **1.5cqw** |
| F40 | *"el 10 5+ parece una escalera, no están alineados"* | **LISTO** | `.big3` con `align-items:end` + columnas flex justificadas al fondo |
| F41 | *"los gráficos no cubren"* | **LISTO** | Ver F17 |
| F42 | *"en las piezas me gusta cómo lo armaste pero tienen modelo distinto cada una — lo haría más notorio"* | **LISTO** | Grid comparativo de 3 modelos + badge por modelo |
| F43 | *"el T2 y T3 no dicen nadaaaaaaaa, y prefiero que estén en solapas y no uno debajo del otro"* | **LISTO** | Solapas (`.tab`/`.tpanel`) + contenido real en las 3 |
| F44 | *"el one pager está ok"* | **LISTO** | Sin cambios |

## 7. Reglas transversales

| ID | Pedido | Estado | Evidencia |
|---|---|---|---|
| F45 | *"nunca pongas emoji en los títulos; solo manitos para señalar o banderas de países"* | **LISTO** | `grep -nP '[emoji]' *.md` en títulos → cero coincidencias. Los 5 casos violados (`ROADMAP.md`, `PLAN.md`, `VOICE-RESEARCH.md`) están corregidos |
| F46 | *"quedaron textos centrados y títulos a la derecha — sé consistente"* | **LISTO** | Contenedor `.inner` único anclado a la izquierda; verificado un solo left (294px) en 13 secciones |
| F47 | *"grand full responsive"* | **LISTO** | Breakpoint 880px en las 9 páginas |
| F48 | *"si creas algo nuevo que puede ir, tiene que estar en el brand"* (regla madre) | **LISTO como regla, PARCIAL en cumplimiento** | Escrita en `README.md` y `BRAND.md`. Pero F24, F25 y F13 son casos abiertos: hay especificación sin asset, o asset sin aplicación |
| F49 | *"el cómo aplicamos el contenido es cómo la gente lo puede llegar a usar — muchos son literales con los criterios; este brand tiene que educar, enseñar y compartir desde el mismo brand"* | **LISTO** | Criterio transversal en el `ROADMAP.md` con tabla de 4 capas por sección. Los dos huecos pedagógicos concretos que se habían identificado (F29: slides y comerciales sin Hacer/Evitar · F23: íconos sin ejemplo a escala) ya están cerrados — es un criterio transversal, así que vale seguir vigilándolo en piezas nuevas |
| F50 | *"validá que integrar con AI sea algo que las AI hoy estén usando — no se inventa, se tiene que validar"* | **LISTO** | Convenciones verificadas contra documentación vigente: `llms.txt`, `CLAUDE.md` + `.claude/rules/`, knowledge de Custom GPT, `.cursor/rules/*.mdc` (renombrado al formato vigente), `.github/copilot-instructions.md` |
| F51 | *"revisá si algo nos falta del brand que no consideramos y deberíamos, algo esencial que no supimos"* | **PARCIAL** | `VOICE-RESEARCH.md` §6 lista 8 ausencias. Falta el hallazgo mayor: **no hay capítulo de voz por mercado** (C2) y **no hay arquitectura de marca** — que es justamente un entregable del módulo 1 de Proteína |

---

## Roadmap de ejecución

Ordenado por la fecha real que manda: **10 de agosto**, prework de Proteína.

### Ola 1 — antes del 10 de agosto: que el sistema cumpla sus propias reglas

**Completa — los 12 puntos cerrados.** Todo acá era cerrar huecos, no abrir capítulos. Ninguno dependía de Proteína.

Nota sobre el punto 2: el criterio original pedía agrandar el óvalo del subrayado; la resolución real fue retirarlo del sistema (decisión F15, "el subrayado quedó fuera"), que es la que efectivamente cierra F14 sin dejar una versión débil que seguir parchando.

| # | Tarea | Criterio de aceptación verificable |
|---|---|---|
| 1 | **F45** Sacar emojis de títulos en mis 3 archivos | `grep -n "^#.*[emoji]" *.md` devuelve vacío |
| 2 | **F14 + F15** Cerrar marcas a mano: solo círculo y flecha, stroke que cubre la palabra completa, título nuevo, subrayado fuera y sus 4 usos migrados | `grep -c flourish-underline *.html` = 0 · el óvalo mide ≥100% del ancho de la palabra medido en el navegador · la columna Evitar dice que el subrayado salió del sistema |
| 3 | **F25** Favicon real en las 9 páginas + set 16/32/180/512 + ejemplo de aplicación web | `grep -c 'rel="icon"' *.html` = 9 · los 4 PNG existen en `assets/favicon/` con ficha en `library.html` |
| 4 | **F24** Logos de AI y redes descargables: PNG/SVG × color/negro × con contenedor/isologo | Cada logo ofrece 4 variantes reales · los archivos existen · ficha en la librería |
| 5 | **F29** Hacer/Evitar en `slides.html` y `pieces.html` | `grep -c dodont slides.html pieces.html` > 0 en ambos |
| 6 | **F23** Íconos a escala grande: llevar al capítulo de iconografía las aplicaciones que funcionan en slides | El capítulo muestra ≥3 usos a escala grande con link al módulo de origen |
| 7 | **F09** Flecha de AI en campo a la derecha, área completa clickeable | El `<a>` mide el ancho del dock y la flecha queda pegada al borde derecho, medido en el navegador |
| 8 | **F34** Catálogo de merch primero, render del buzo después como especificación | El catálogo aparece antes en el orden del DOM |
| 9 | **F27** Textos de descarga con formato, peso y dimensiones reales | Ningún texto de ficha es genérico; los pesos coinciden con `ls -la` |
| 10 | **F13** Dibujar el calzado en los 4 personajes | Los 4 SVG tienen calzado visible, no solo `viewBox` corregido |
| 11 | **F18** Rehacer las piezas de convivencia y retitular "área mosaico" | Fondos y chips consistentes con los tokens · el título dice qué es sin necesidad de explicación |
| 12 | **F33** LinkedIn y AI en campo en la firma | La firma incluye el ícono y la línea, con instructivo actualizado |

### Ola 2 — 10 al 13 de agosto: llevar el sistema al workshop

| # | Tarea | Criterio |
|---|---|---|
| 13 | **C1** Resolver con Varu si "no logos ni métricas ni casos" aplica al material de venta o solo al eje de redes | La regla de §1 queda confirmada o reescrita, con la fuente citada |
| 14 | **C3** Fijar el techo de AI en el discurso | Regla escrita: cuánta AI antes de leerse como claim principal |
| 15 | Preparar el sistema como prework: qué preguntas del workshop ya tienen respuesta acá y cuáles no | Una hoja de 1 página que Proteína pueda leer antes del 13 |

### Ola 3 — post módulo 1 (después del 13 de agosto)

| # | Tarea | Criterio |
|---|---|---|
| 16 | **C2 / F51** Capítulo de voz por mercado: AR y US desde lugares distintos, no traducción | Cada mercado tiene ejemplos propios de copy, no versiones traducidas |
| 17 | Arquitectura de marca (core, AI en campo, y lo que defina Proteína) | Diagrama + regla de cuándo usar cada marca |
| 18 | Converger con el playbook del módulo 2 en vez de duplicarlo | Decisión explícita: este repo es la capa técnica del playbook, o se fusiona |
| 19 | **F35** Catálogo de merch con las fotos reales | 9 productos con foto, recortadas, con "a modo ilustrativo" |

---

## Revisión de Luca Cantarelli (5 de agosto de 2026)

Feedback de una llamada mostrándole el sistema en vivo. Separado en dos partes desde el principio: lo que es de este repo, y lo que es de la app de Magoya Studio (esa parte no se toca acá — queda para el otro proyecto).

### Aplicado en este repo

| # | Lo que vio Luca | Causa real (verificada, no a ojo) | Fix |
|---|---|---|---|
| L1 | En AI en campo, una flecha "pisa" la palabra "vende" — en su resolución nada más | Medido en el navegador a 1280px: la flecha (52px) empezaba 52px arriba de las cifras, pero el margen debajo del párrafo era de solo 30px — 22px de la flecha caían dentro del texto | Flecha reducida a 26px, margen del párrafo a 36px. Verificado sin superposición en 1100/1280/1440px — ya no depende del ancho de pantalla |
| L2 | El índice lateral (dock): al hacer hover, el texto se corta — "Ilustración & motivos" queda en "Ilustración & motivo" | `.side{overflow-y:auto}` sin `overflow-x` declarado — el spec de CSS fuerza `overflow-x` a `auto` también cuando solo se fija un eje, así que el texto agrandado por el hover se recortaba en el borde del dock en vez de desbordar visible | `overflow-x:visible` explícito en las 8 páginas que comparten el dock. Reproducido el bug, aplicado el fix, confirmado que ya no corta |
| L3 | Tipografía "de card generada por IA" en Clientes — pensó que era output crudo sin estilo | Era un zócalo técnico intencional (mono + tag SVG) pero sin separación visual del resto de la card, por eso se leía como un accidente | Hairline + padding-top separando el zócalo del cuerpo de la card en `logos.html` |
| L4 | Nombres de sección inconsistentes entre el dock, el título y el panel de descarga (ej. "Identidad" vs "Logo & avatares"; "Fotografía" vs "Banco de fotos") | El kicker de la sección de logo decía "Identidad" mientras el dock y el H2 ya decían "Logo & avatares" — desalineado dentro de la misma sección. Y el panel de descarga siempre nombra el *producto* (correcto), pero nunca decía de qué *sección* venía | Kicker corregido. El panel de descarga ahora muestra el nombre real de la sección (tomado del propio dock) además del producto — ej. "Fotografía · descarga" arriba de "Banco de fotos" |
| L5 | En la portada, "la pieza canónica" y otros títulos se leen poco contra el fondo de la card al hacer hover | El degradé del hover (`rgba(13,12,12,.82)` solo en el 18% final) dejaba el título en una zona casi transparente del degradé | Degradé reforzado (42% de opacidad ya al 30% de la altura) + text-shadow en título y subtítulo — funciona sobre cualquier color de card, no solo fotos |
| L6 | Una card de "AI en campo" se leía como si fuera una pieza genérica de redes de Magoya — la sub-marca no se notaba hasta pasar el mouse | El único indicador era el `.lb` que solo aparece en hover — en reposo la card no decía nada | Badge "AI en campo" visible siempre, no solo al hover |

### Verificado y descartado (busqué el problema, no está)

- **Botones ≠ chips mezclados**: revisé la sección "Componentes" de `brand-book.html`, que es literalmente la página sobre esta regla. `.btn` usa `border-radius:var(--radius-btn)` (10px, rectángulo) y `.pill` usa `border-radius:var(--radius-full)` (pill completo) — están bien diferenciados. Si Luca lo vio en otro lado (algún mockup con estilo inline), falta que señale la card exacta.

### Documentado para más adelante (real, pero grande para tocar en esta pasada)

- **Escala tipográfica con decimales fuera de múltiplos de 4** (Luca marcó 13.5px como ejemplo): confirmado — hay 5 instancias de 13.5px y decenas más de 9.5/10.5/11.5/12.5/14.5px, repartidas en las 9 páginas. No es un accidente: es una micro-escala deliberada y usada consistentemente para captions/kickers/specs desde el arranque del sistema. Normalizarla a múltiplos de 4 (o a un mínimo de 14px como sugiere Luca) es un cambio real de escala tipográfica que tocaría cientos de instancias — no algo para hacer a ciegas en una pasada. Queda anotado para una revisión dedicada.
- **Rediseño del dock con lógica tipo Notion** (rieles minimalistas que se expanden en hover, con la sección activa siempre en texto y el resto como barritas — la sugerencia concreta de Luca): buena idea, pero es un cambio de interacción completo, no un fix. Se banca hasta una pasada dedicada a navegación.

### Excluido — es feedback de Magoya Studio, no de este repo

Todo esto lo vio en el editor de piezas (canvas, capas, zoom), no en el brand system. Facundo ya lo separó explícitamente: va al otro proyecto, no acá.

- Etiqueta "Detrás" mal traducida (debería ser "Fondo"/"Encima"/"Contenido") — bug de la traducción automática del editor
- Ícono de "Marca" que se confunde con el de Gmail — icono del editor
- Doble barra de navegación horizontal + botón "Volver al inicio" redundante — UI del editor
- Zoom con Ctrl/Cmd+rueda y paneo con clic-rueda — controles del canvas
- Área fuera del artboard para tirar elementos sueltos — feature del canvas
- Mockups de dispositivo de mala calidad — Luca ofreció pasar mejores SVG de la comunidad de Figma; cuando lleguen, revisar si además reemplazan a los que usa este repo en `assets/studio/devices/`

## Bloqueado por un insumo tuyo

1. **Fotos de merch** (F35) — dejar los archivos en `assets/photos/merch/` con los nombres que pide cada slot. Se muestran solas al recargar. Los veo en el chat pero no los puedo extraer de una imagen pegada.
2. **Foto de Varu en alta** — la que tengo es 200×200; el retrato B&N se ve blando a tamaño grande.
3. **Cuenta de GitHub conectada** — sin eso no puedo dejar la revisión agendada (falla con 401).

## Preguntas que solo vos podés responder

1. **C1** — ¿"sin logos ni casos ni métricas" aplica a los decks de venta, o solo al eje de comunicación en redes?
2. **C2** — ¿La voz argentina la definimos nosotros ahora o esperamos el módulo 1?
3. ¿Este repo **converge** con el playbook de Proteína o queda como sistema técnico paralelo? Nat hace el diseño del playbook — conviene hablarle antes del 13.
4. Verde para texto chico: `#009145` da 4.09:1, no llega a 4.5:1 para cuerpo. ¿Lo restringimos a ≥24px bold o buscamos un verde más oscuro?
5. Email oficial en papelería: `info@magoya.com` o nominal por persona.
