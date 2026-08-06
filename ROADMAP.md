# Magoya Brand System — Roadmap maestro

> Única lista de pendientes y decisiones del sistema. Si algo no está acá, no existe.
> **Última actualización:** 2026-08-04 · **Versión del sistema:** v1.1 (+ Ronda 4 aplicada)
> **Live:** https://facundo-web.github.io/magoya-brand-system/ · **Repo:** `facundo-web/magoya-brand-system` (público)
> **Local:** `/Users/facu/Claude/brand-system/` · **Proyecto hermano:** `/Users/facu/Claude/magoya-studio/` → facundo-web.github.io/magoya-studio

---

## Principio fundacional: el manual enseña, no solo dicta

> **Regla del dueño (2026-08-04):** *"lo que importa es CÓMO aplicamos el contenido y cómo la gente lo puede llegar a usar, porque muchos son literales con los criterios o las ideas pueden no aparecer. Este brand tiene que lograr eso educando, enseñando y compartiendo desde el mismo brand."*

Esto es **criterio de aceptación transversal**: ninguna sección se considera terminada si solo enuncia una regla. Cada una tiene que cumplir las cuatro capas:

| Capa | Qué significa | Ejemplo que ya lo cumple |
|---|---|---|
| **1. La regla** | El criterio, verificable (hex, tamaño, sí/no) | "Lima nunca como texto sobre claro (1.25:1)" |
| **2. El ejemplo aplicado** | La regla renderizada en una pieza real, no descrita | Las 3 recetas de feed 1:1 en §10 |
| **3. El contraste** | Hacer / Evitar lado a lado, sin tildes ni cruces rojas | Sistema `.dodont` en las 13 secciones |
| **4. El recurso listo** | El archivo descargable o el bloque copiable para ejecutarlo ya | Panel contextual de descargas · ZIPs por sección · íconos que se copian como PNG |

**Consecuencias operativas:**
- Si se crea algo nuevo (asset, componente, plantilla, animación), **no existe hasta que tiene su ficha de aplicación en el manual**: qué es, cuándo se usa, cuándo no, y de dónde se baja. Regla explícita del dueño.
- Preferir *mostrar* antes que *explicar*: una pieza bien hecha al lado de la regla vale más que tres párrafos.
- Escribir para el lector literal: nada de "usá la identidad de Magoya"; sí "display 800, tracking −3%, ocupa ~70% del ancho".
- Todo lo que una persona podría necesitar copiar (prompt, token, snippet, archivo) tiene que estar a un click.

**Estado de cumplimiento por sección** (auditar en cada iteración):

| Sección | Regla | Ejemplo | Hacer/Evitar | Recurso |
|---|---|---|---|---|
| Esencia · Logo · Color · Tipografía | ✅ | ✅ | ✅ | ✅ |
| Fotografía | ✅ | ✅ | ✅ | ✅ (descarga individual + ZIP) |
| Ilustración & motivos | ✅ | ✅ | ✅ | ✅ |
| Convivencia | ✅ | 🟡 piezas a rehacer | ✅ | ✅ |
| Iconografía | ✅ | ✅ (3 contextos) | ✅ | ✅ (PNG/SVG, individual y múltiple) |
| Componentes | ✅ | ✅ | ✅ | 🟡 falta snippet copiable |
| Aplicaciones | ✅ | ✅ | ✅ | 🟡 |
| Merch | ✅ | 🟡 catálogo con placeholders | ✅ | 🟡 |
| Papelería | ✅ | ✅ | ✅ | ✅ (header/footer/firma + instructivo Gmail) |
| Marca anexa AI en campo | ✅ | ✅ (pieza real del Studio) | ✅ | ✅ (kit ZIP) |
| Slides | ✅ | 🟡 en ampliación | 🟡 | 🟡 export a Google Slides en curso |
| Comerciales | ✅ | ✅ (3 modelos diferenciados) | 🟡 | 🟡 |
| **Integrar con AI** | 🔵 en construcción | 🔵 | 🔵 | 🔵 prompts + presets + llms.txt |

---

## Lo primero: el live está desincronizado

Último commit pusheado: `afc116e` (Ronda 4). El working tree tiene **cambios sin commitear** — o sea, lo que se ve publicado **no** es lo último que se hizo:

| Archivo | Estado git | Qué trae |
|---|---|---|
| `brand-book.html` | modificado | ajustes de Ronda 4 + pieza real del Studio |
| `ai-en-campo.html` | modificado | reescritura de secciones + iconos de IA reales |
| `assets/pieces/` | sin trackear | 5 piezas reales del Studio (fecha-marcada, mito-vs-realidad, impacto-pregunta) |
| `assets/magoya-wordmark-animado.svg` | sin trackear | logo animado |
| `assets/downloads/magoya-firma-animada.gif` | sin trackear | firma de email animada |
| `assets/downloads/magoya-firma-estatica.png` | sin trackear | firma de email estática |
| `assets/downloads/doc-header.svg` · `doc-footer.svg` | sin trackear | membrete |
| `assets/photos/pieza-ai-campo-real.jpg` | sin trackear | referencia AI en campo |

Ver **A1** en el backlog.

---

## 1. Estado actual

### Páginas publicadas

| Página | Contenido | Estado |
|---|---|---|
| [`brand-book.html`](brand-book.html) | Brand book — 13 secciones (esencia · logo & avatares · color · tipografía · fotografía · ilustración & motivos · **convivencia** · iconografía · componentes · aplicaciones · merch · papelería · reglas de oro) + §14 marca anexa | ✅ Completo, con 2 huecos: merch en placeholders, firma sin los assets nuevos |
| [`ai-en-campo.html`](ai-en-campo.html) | Sub-manual de la marca anexa — 7 secciones (esencia/cuándo-no · color & voz · ruido con inventario · kit de 6 componentes · 28 plantillas del Studio · 13 formatos · reglas vs core) | ✅ Completo (cambios sin pushear) |
| [`slides.html`](slides.html) | 16 módulos en 7 familias (A títulos · B cards · C datos · D listas · E personas · F proceso · G portadas), escala 126/84/56/42pt | 🟡 Base sólida, falta ampliar (ver S1) |
| [`pieces.html`](pieces.html) | 3 plantillas comerciales con anatomía numerada + mockup A4: T1 one-pager institucional · T2 flyer de servicio · T3 flyer Staff Augmentation | 🟡 T3 pendiente de validación; bios/nombres placeholder |
| [`icons.html`](icons.html) | 58 iconos línea 2px redondeada en 7 categorías, click para copiar SVG | ✅ Completo |
| [`library.html`](library.html) | Todos los assets con descarga directa (formato + peso + dimensiones) + 8 ZIPs por sección | 🟡 Falta sumar los assets nuevos de papelería/firma |
| [`logos.html`](logos.html) | 31 logos (17 clientes + 14 partners) con botón de descarga | 🟡 Faltan 3 en vector (ver S2) |

### Capa consumible por AI

| Archivo | Estado |
|---|---|
| [`BRAND.md`](BRAND.md) | ✅ Doctrina completa, 12 secciones. **Gap:** no tiene la sección "Convivencia" (matriz de combinación de recursos) que sí está en el manual visual |
| [`tokens.json`](tokens.json) | ✅ Valores + roles + reglas de accesibilidad + rutas de assets |
| [`tokens.css`](tokens.css) | ✅ 4 temas (`default` verde profundo · `light` · `paper` · `studio`). **Gap menor:** comentarios que todavía hablan de "motivo camino / estratos" (retirados) |
| [`README.md`](README.md) | 🟡 Desactualizado: dice "12 secciones" y no lista `convivencia` ni `ai-en-campo.html` |

### Assets en disco

| Carpeta | Contenido | Peso |
|---|---|---|
| `assets/` (raíz) | 5 wordmarks + animado, 2 motivos (semis + estratos legacy), doodles, flourishes, badge | ~90 KB |
| `assets/avatars/` | go · o · cara · m (SVG recreados) | 16 KB |
| `assets/illus/` | 4 personajes planos + 3 caminos (legacy) | 116 KB |
| `assets/logos/` | 17 clientes + 14 partners + 5 raíz | 544 KB |
| `assets/studio/` | Espejo de los assets del Studio: 16 iconos agro, 10 logos IA, 13 redes, doodles, devices | 252 KB |
| `assets/pieces/` | 5 piezas reales producidas en el Studio | 600 KB |
| `assets/photos/` | 4 aéreas + 3 retratos B&N + merch-buzo + `merch/` (solo `LEEME.txt`) | 8.2 MB |
| `assets/downloads/` | 8 ZIPs + firma animada/estática + doc-header/footer | 7.4 MB |
| `assets/font/manrope/` | Manrope variable 200–800 (OFL) | 172 KB |
| `assets/refs/` | 25 MB de material fuente del diseñador — **gitignored, solo local** | 25 MB |

Repo: 60 MB en disco, `.git` 17 MB. `archive/` = versiones previas (no usar). `app/` = Deck Studio, fuera de la nav pública.

---

## 2. Backlog priorizado

Esfuerzo: **S** ≤1 h · **M** media jornada · **L** 1 día o más.
Desbloquea: quién tiene que producir algo o decidir para que el ítem avance. **nadie** = se puede hacer ya.

### AHORA — cierra huecos visibles en un sistema que ya se compartió

| # | Qué | Por qué importa | Desbloquea | Esf. |
|---|---|---|---|---|
| **A1** | Commitear y pushear el trabajo pendiente (`brand-book.html`, `ai-en-campo.html`, `assets/pieces/`, wordmark animado, firma GIF/PNG, doc-header/footer, `pieza-ai-campo-real.jpg`) | El live está atrás del local. Cualquiera que abra el link hoy ve una versión vieja, y los assets nuevos no se pueden descargar | nadie | S |
| **A2** | Guardar los renders de merch en `assets/photos/merch/` con los nombres exactos del `LEEME.txt`: `remera-blanca.jpg`, `remera-negra.jpg`, `gorra.jpg`, `medias.jpg`, `mochila.jpg`, `termo.jpg`, `cuaderno.jpg`, `stickers.jpg`, `equipo-merch.jpg` (JPG, lado largo ≥1600px, calidad 80-85) | Los renders ya existen (generados hoy con AI) pero **no están en disco** — la §11 muestra 9 slots con badge de placeholder. El manual las levanta solas al recargar, no hay que tocar código | **Facu** (bajar los archivos del chat) | S |
| **A3** | Integrar los assets de papelería en §12 del manual: firma animada (GIF) + firma estática (PNG) + `doc-header.svg`/`doc-footer.svg` + logo animado, con **instructivo de cómo se sube la firma a Gmail** (Configuración → Firma → pegar imagen → link a magoya.com), y **sacar la carita del ejemplo de firma → va siempre el logo** (`brand-book.html:1203` usa `avatars/avatar-face.svg`) | Hoy los archivos existen en `assets/downloads/` pero **no están linkeados desde ninguna página**: nadie los va a encontrar. Y el ejemplo de firma enseña lo contrario de la regla (avatar de persona en lugar de logo) | nadie | M |
| **A4** | Unificar el contacto a `info@magoya.com` (hay 4 usos de `people@magoya.com` y 3 de `info@`) y arreglar las bios del one-pager EN | Un manual que muestra dos emails distintos no es fuente de verdad. El one-pager 2024 tiene bios desactualizadas | **Varu** (confirmar cuál es el email correcto y pasar bios al día) | S |
| **A5** | Roster real del equipo: fotos B&N + nombres + roles reales en `slides.html` E2 (5 figuras "Subtitle bold"), `pieces.html:175-179` (5 × "Nombre Apellido") e `brand-book.html:583` | Es el placeholder más caro: el módulo E2 lleva un cartel escrito que dice "reemplazar antes de usar". Si alguien arma un deck de cliente hoy, sale con nombres falsos | **Facu + Varu** (roster) / **fotos** del equipo en B&N | M |
| **A6** | Cita completa de Camila López Colmano (`brand-book.html:960`, `slides.html:321` — hoy es una versión corta/parcial y el rol "AgTech Expert" está a confirmar) | Es la única cita de cliente del sistema y aparece en dos módulos (E1 quote + card de mosaico). Si es incorrecta, se propaga a todo deck comercial | **Facu** (conseguir la cita textual y el rol/empresa exactos) | S |
| **A7** | Validar con Varu si **Staff Augmentation** sigue en la oferta 2026 antes de producir el flyer T3 | T3 ya está como plantilla en `pieces.html`. Si el servicio salió de la oferta, hay que retirar la plantilla, no producirla | **Varu** (decisión de oferta) | S (decisión) |

### SIGUIENTE — profundiza el sistema

| # | Qué | Por qué importa | Desbloquea | Esf. |
|---|---|---|---|---|
| **S1** | Ampliar `slides.html` con los módulos que faltan del manual: **tabla**, **gráfico** (más allá del C3 de barras), **foto + texto**, **ilustración de persona + texto grande**, **porcentajes gigantes ("al palo")** | Los 16 módulos actuales no cubren lo que el equipo realmente necesita para armar decks; se conversó bastante con Varu sobre esto. Sin estos módulos, cada deck se improvisa y el sistema se degrada | nadie para construir · **Varu** para validar la lista final. **Nota:** la conversación está en Granola — recuperar el transcript antes de definir el alcance (Granola no está autorizado en esta sesión) | L |
| **S2** | Conseguir en vector los 3 logos de clientes faltantes: **ProducePay**, **HabiTerre**, **IntelinAir** (declarados como pendientes en `logos.html:101`) | Regla de oro nº5: logos de clientes SIEMPRE reales, jamás placeholders. Sin vector no se pueden usar en print ni en piezas grandes | **Facu** (pedir a los clientes o al diseñador) | M |
| **S3** | Sumar el merch extendido: **indumentaria deportiva** (remera dry fit, jersey de bici, colección mujer) y las **3 opciones de gorra** (M oficial · logo completo tipo MLB · isotipo circular) | Los renders ya existen. La deportiva abre una línea nueva (¿aplica la regla "sin lima en textil"?) y hay que **elegir una gorra oficial**, no publicar tres | **Facu** (archivos) + **Varu** (decidir gorra oficial y si la deportiva es línea aprobada) | M |
| **S4** | Recolorear las **tramas `.ai`** del brand viejo al mapping nuevo (verdes oficiales) y sumarlas como recurso · **Ubicación del archivo a confirmar** (no verificada en disco; lo único encontrado es `Copia de Avatares.ai` en `/Users/facu/Desktop/Sistema de diseño/Logo Magoya/`) | Veredicto del triage del brand viejo: las tramas son el ancestro del motivo actual y valen la adaptación. Suma textura sin inventar lenguaje nuevo | **Facu** (localizar el `.ai`) + **diseñador** si hay que retrazar | M |
| **S5** | Rescatar los **iconos monoline sobre chip** del brand viejo, adaptados a la gramática actual (línea 2px, esquinas redondeadas) | Otro veredicto "rescatar" del triage. Da un componente de icono con fondo que hoy el sistema no tiene | nadie | M |
| **S6** | Sincronizar `BRAND.md` y `README.md` con el manual visual: agregar la sección **Convivencia de recursos** (matriz de combinación) a `BRAND.md`, y en `README.md` corregir "12 secciones" → 13 + sumar `ai-en-campo.html` a la tabla de páginas | `BRAND.md` es lo que lee una AI para generar piezas. Si le falta la matriz de convivencia, va a combinar recursos que el manual prohíbe combinar | nadie | S |
| **S7** | Recibir y triagear el **listado de mejoras de Aye para Magoya Studio** | El Studio es donde el equipo produce de verdad. Si no mejora, el brand system queda como documento y no como práctica | **Aye** (pasar el listado) · esfuerzo real a estimar cuando llegue | ? |
| **S8** | Limpiar comentarios obsoletos en `tokens.css` (líneas 38, 41, 101, 104 hablan de "motivo camino / estratos", ambos retirados) y decidir qué hacer con los assets legacy que siguen en disco (`motif-estratos.svg`, `illus/camino-*.svg`) — ninguna página los referencia | Un token que dice "motivo camino" invita a usar un recurso retirado. Riesgo directo de que una AI o un diseñador lo reviva | nadie | S |

### DESPUÉS — sostenibilidad del sistema

| # | Qué | Por qué importa | Desbloquea | Esf. |
|---|---|---|---|---|
| **D1** | Kit descargable de merch (ZIP con renders + especificación de producción) desde `library.html` | Cierra el ciclo: quien tiene que cotizar merch se lleva todo en un click | depende de **A2** y **S3** | S |
| **D2** | Versión **editable** de los 16+ módulos de slides (PPT o Google Slides) para que el equipo arme decks sin tocar HTML · **propuesta, a confirmar con Varu** | Riesgo R1: hoy los módulos solo existen como HTML. Si el equipo no puede usarlos en su herramienta, va a improvisar en Canva y el sistema se rompe | **Varu** (confirmar que hace falta y en qué herramienta) | L |
| **D3** | Alivianar el repo: `assets/photos` 8.2 MB + `assets/downloads` 7.4 MB, `.git` ya en 17 MB — comprimir fotos, regenerar ZIPs, evaluar si los ZIPs deben versionarse o generarse en release | Riesgo R2. Con 9 renders de merch más (≥1600px), el repo crece rápido y GitHub Pages se pone lento | nadie | M |
| **D4** | Definir **gobernanza**: quién aprueba un cambio de marca, cómo se versiona (v1.1 → v1.2), dónde se registran las decisiones (¿este archivo?) | Sin esto, el sistema se bifurca en cuanto haya dos personas editando | **Varu** (owner de marca) | S |
| **D5** | Decidir el destino del **Deck Studio** (`app/`) y de `archive/`: retomar, documentar o sacar del repo público | Hoy están en un repo público sin estar en la nav — confunden a quien clona | **Facu** | S |
| **D6** | Resolver la **duplicación de assets** entre `brand-system/assets/studio/` y `magoya-studio/` (iconos, doodles, badge están copiados en los dos) — definir cuál es la fuente y cómo se sincroniza | Riesgo R5: dos copias divergen sin que nadie se entere. Hoy el manual promete "los mismos archivos que usa el Studio" | nadie (decisión técnica) | M |
| **D7** | Backup del material fuente del diseñador: `assets/refs/` (25 MB) está gitignored — existe **solo** en la máquina de Facu | Si se pierde ese disco, se pierde el material original del diseñador | **Facu** | S |

---

## 3. Decisiones tomadas (no re-litigar)

Reglas cerradas. Si alguien las cuestiona, la respuesta es este bloque.

### Identidad

| Decisión | Detalle |
|---|---|
| Tipografía | **Manrope** variable 200–800, self-hosted, OFL. Fallback **Arial**. Una sola familia |
| Wordmark | Redondeado, 4 versiones (verde digital sobre blanco · crema sobre verde profundo · negro sobre blanco · verde profundo sobre crema). Nunca reconstruir ni alterar espaciado. Aire mínimo = altura de la "m". Mínimo 90px pantalla / 24mm print |
| Avatares | Círculo `#00DE68` + marca blanca, 4 variantes. **cara** = redes de comunidad · **m** = monograma funcional (favicon, app icon, corporativo). No recolorear |
| Firma | El wordmark es la firma. En documentos y firma de email va **el logo**, no la cara |

### Color

| Rol | HEX | Regla |
|---|---|---|
| Verde Magoya | `#133825` | Core institucional: fondos oscuros, overlays, texto sobre claro |
| Verde digital | `#00DE68` | Identidad (logo/avatares). Como texto **solo sobre oscuro** |
| Lima energía | `#A2FF00` | CTA/display/motivo. **Dosis única por pieza.** Nunca texto sobre blanco (1.25:1) |
| Verde ilustración | `#33DB4E` | Ropa de personajes, soporte, data-viz |
| Crema Magoya | `#ECE3DB` | Neutro cálido firma; texto sobre verde profundo |
| Sage | `#EEF2EC` | Superficie clara de slides |
| Negro Magoya | `#161616` | Texto, titulares, cards dark |

- **Regla central: "El negro construye, el verde hace crecer."** Neutros ≈75%, verde ≈25%, **un solo movimiento verde dominante por pieza**. Nunca pieza 100% negra ni 100% verde.
- Verde sobre blanco como texto = `#009145` y solo ≥24px bold. Captions sobre claro: mínimo `#6E756D`. **Accesibilidad no negociable.**
- Lima ≠ logo. El logo es siempre verde digital.

### Composición y recursos

| Decisión | Detalle |
|---|---|
| Motivo de marca | **Semicírculos** (`motif-semis.svg` + banda festoneada). La banda festoneada se reserva para la composición con personaje |
| Sangrado de motivos | Van al corte y **siempre nacen de un borde o de detrás de un objeto** — nunca cortados flotando al aire |
| Personajes | Planos redondeados, **sin rostro**, paleta CERRADA de 5 colores (`#33DB4E` · `#A2FF00` · `#DFDFDF` · `#FFC67B` piel · `#161616`). Siempre **recortados por un borde**, del lado opuesto al texto |
| Marcas a mano | Una sola por pieza. **Círculo** = fecha o dato puntual · **flecha** = señala el CTA (nace del texto, la punta cae sobre el botón). Verde digital sobre claro / lima sobre oscuro, nunca negro. Siempre sobre texto compuesto. **El subrayado quedó retirado** (no cubría bien la palabra completa, trazo débil) — para enfatizar una palabra o frase de un titular, el color hace el trabajo |
| Resaltador sólido | **PROHIBIDO** el bloque marcador detrás de palabras. Sí color, círculo, flecha |
| Fotografía | Aérea de campo en color natural + **scrim verde profundo 55–86%** cuando lleva texto (el scrim es el único gradiente permitido). **Personas siempre B&N** con acento verde o lima |
| Iconografía | Línea 2px, terminaciones y esquinas redondeadas, grid 24×24, `currentColor`. Lima solo en el ícono destacado (uno por pieza). Nunca relleno sólido ni 3D. Completar volumen con Lucide |
| Botón ≠ chip | **Botón** = rectángulo radio 10px, fondo sólido. **Chip** = pill outline (borde y texto del mismo color, fondo transparente). Nunca chip sólido ni botón pill |
| Tipografía en pieza | Máximo **3 niveles por pieza**. El peso hace la jerarquía. En redes, display y cifras al ~70% del ancho: grande o nada |
| Logos de clientes | **SIEMPRE reales**, en gris, grilla pareja. Jamás placeholders |
| Merch | Verde profundo + crema. Bordado > estampa. **Sin lima en textil.** Se muestra **SIEMPRE con foto o render real** — nunca ilustración ni esquema vectorial |
| Hero canónico | La pieza que define la marca: foto aérea + scrim verde + wordmark crema arriba-izq + CTA lima arriba-der + display ExtraBold abajo-izq con una frase en lima |
| Estética | **Que no se vea hecho por IA**: sin gradientes, 3D, glossy ni simetría perfecta |

### Arquitectura del sistema

| Decisión | Detalle |
|---|---|
| Dos marcas, dos manuales | El core (`brand-book.html`) y **"AI en campo"** (`ai-en-campo.html`) son **marcas separadas**. AI en campo rompe 3 reglas del core **a propósito** (fondo verde digital pleno · placa negra con crema para el dato clave · ruido controlado 2–4 doodles ±5–15°). **Nada de eso vuelve al core** |
| Producción | Las piezas de redes se producen **siempre desde plantillas de Magoya Studio** (28 plantillas, 13 formatos) y la receta queda en un `.magoya.json` — esa es la fuente para reproducir una pieza, no el ojo |
| Piezas comerciales | Se capturan las **estructuras** como plantillas del sistema (`pieces.html`), no se producen los flyers uno por uno |
| Capa para AI | `BRAND.md` (doctrina) + `tokens.json` (valores) + `tokens.css` (4 temas). Orden de lectura documentado en `README.md` |
| Deck Studio | Fuera de la nav pública (confunde); vive en `app/` |
| Navegación | Topbar sticky compartida + índice lateral en las 7 páginas (el "volver" enterrado no funcionaba) |
| Material fuente | `assets/refs/` (25 MB del diseñador) **excluido del repo** vía `.gitignore` |

---

## 4. Descartado y por qué

| Descartado | Por qué |
|---|---|
| **Personajes monoline sin rostro** | Quedaban infantiles. Magoya es expertise senior + partnership maduro, **no whimsical**. Reemplazo: personajes de relleno plano redondeado |
| **Personajes con rostro / stock corporativo** | Rompen el sistema y contradicen la voz. Del brand viejo se conservó solo el brief de escenas |
| **Metáfora del puzzle** | Símbolo del brand viejo, retirado. Su reemplazo narrativo es el crecimiento / los semicírculos |
| **Naranja y amarillo** | Colores del brand viejo, fuera de la paleta |
| **Motivos de líneas** (caminos concéntricos, estratos) | "Las líneas no caracterizan la marca". Retirados en v1.1 a favor de los semicírculos. Los archivos siguen en disco pero **ninguna página los usa** (ver S8) |
| **Resaltador / marcador sólido detrás de texto** | Regla de dirección de arte. Se usa color, círculo o flecha |
| **Subrayado a mano** (`flourish-underline.svg`) | No cubría bien la palabra completa y el trazo no tenía la fuerza que pide una marca. Reemplazo: el color hace el trabajo (texto en lima) — solo quedan círculo y flecha como marcas a mano |
| **Esquemas SVG de merch** | Degradados a "especificación de producción" y luego eliminados del manual: el merch se muestra con foto/render real |
| **Lima como color primario** | El lime del moodboard **no** se descartó pero **no es primario**: vive como energía/marcador (CTA, display, motivo), dosis única |
| **Wordmark en lima** | Uso incorrecto. El logo es verde digital `#00DE68` |
| **Librerías de ilustración Streamline / Icons8 free** | Piden atribución. Alternativas CC0 verificadas: Open Doodles, Open Peeps, Lukasz Adam |
| **Banda festoneada como remate genérico** | Se reserva para la composición con personaje; usarla en cada pieza la vaciaba de sentido |
| **Firma de email con banners y legales eternos** | Firma = logo + filete verde + nombre 700 + rol gris. Nada más |
| **"Facundo Baldi"** como nombre de ejemplo | Nombre inventado en un ejemplo de firma. Se usa "Nombre Apellido" hasta tener el roster real (ver A5) |

---

## 5. Riesgos

| # | Riesgo | Impacto | Mitigación |
|---|---|---|---|
| **R1** | **El sistema depende de que el equipo produzca desde el Studio.** Si el equipo sigue armando piezas en Canva o PowerPoint a mano, el brand system queda como documento decorativo y la marca se degrada igual | Alto — es el riesgo principal del proyecto | S1 (módulos que el equipo realmente necesita) + S7 (mejoras del Studio de Aye) + D2 (formato editable). Medir: ¿cuántas piezas del mes salieron del Studio? |
| **R2** | **Assets pesados en el repo.** `photos` 8.2 MB + `downloads` 7.4 MB, `.git` ya 17 MB. Los 9 renders de merch pendientes suman más | Medio — Pages lento, clones pesados, historial que no se puede achicar después | D3. Comprimir antes de commitear (A2 ya especifica calidad 80-85) |
| **R3** | **Trabajo sin commitear.** El live muestra una versión vieja y no hay señal de eso en el sitio | Alto y activo hoy | A1. Regla: no cerrar sesión con cambios sin pushear |
| **R4** | **Placeholders visibles en un sistema ya compartido** (9 slots de merch, 5 nombres "Nombre Apellido", 5 "Subtitle bold", cita parcial). El sistema se compartió a Varu y diseñadores para feedback | Medio-alto — erosiona la autoridad del manual justo cuando se está pidiendo aprobación | A2, A5, A6. Mientras tanto, los placeholders llevan cartel explícito (ya implementado en E2 y en merch) |
| **R5** | **Doble fuente de verdad brand-system ↔ magoya-studio.** Iconos, doodles y badge están **copiados** en los dos repos. El manual afirma que son "los mismos archivos" | Medio — divergencia silenciosa: el manual documenta un icono que el Studio ya cambió | D6. Definir fuente única y proceso de sync |
| **R6** | **Bus factor = 1.** Facu es el único que produce, decide la ejecución y tiene el material fuente (`assets/refs/` está gitignored, solo local) | Alto para continuidad | D4 (gobernanza) + D7 (backup de refs) |
| **R7** | **Renders de merch generados con AI presentados como producto real.** La regla dice "foto o render real"; un render AI cumple la letra pero puede prometer un producto que el proveedor no puede fabricar igual | Medio — expectativa vs. producción | Al cotizar, comparar contra los vectores de producción (`/Users/facu/Desktop/Diseño buzos/`). Marcar en el manual qué es render y qué es producto fotografiado |
| **R8** | **Logos de terceros en repo público** (17 clientes + 14 partners). Hay nota de uso nominativo en `README.md` | Bajo, pero real | Mantener la nota; retirar cualquier logo ante pedido del titular |
| **R9** | **Documentos desincronizados entre sí.** `BRAND.md` no tiene "Convivencia", `README.md` dice 12 secciones y no lista `ai-en-campo.html`, `tokens.css` comenta motivos retirados | Medio — la capa para AI es justo la que se lee sin criterio propio | S6 + S8. Al agregar una sección al manual visual, actualizar `BRAND.md` en el mismo commit |
| **R10** | **`app/` y `archive/` en el repo público** sin estar en la navegación | Bajo — confunde a quien clona | D5 |

---

## 6. A confirmar (no verificado)

| Qué | Cómo se resuelve |
|---|---|
| Ubicación del archivo de **tramas `.ai`** del brand viejo | Búsqueda en Desktop solo encontró `Copia de Avatares.ai` y `04_trama_capucha_tile_...pdf`. Facu tiene que señalar el archivo |
| Contenido exacto de la **conversación con Varu sobre módulos de slides** (S1) | Está en Granola; el conector no está autorizado en esta sesión. Recuperar el transcript antes de definir alcance |
| **Rol y empresa** de Camila López Colmano ("AgTech Expert" es lo que dice el manual hoy) | A6 |
| Si `info@magoya.com` o `people@magoya.com` es el contacto oficial | A4, con Varu |
| Si la **indumentaria deportiva** es una línea aprobada y qué gorra es la oficial | S3, con Varu |
| Si hace falta una versión **editable** de los slides y en qué herramienta | D2, con Varu |
| Alcance del **listado de mejoras del Studio** de Aye | S7, cuando llegue |
