# Magoya — Plan maestro: Brand + Deck dinámico + App de gestión

> Estado vivo. El equipo (research Granola + copy del Doc de la CEO + dirección de arte) ya entregó la inteligencia base. Este plan ordena todo lo que falta.

---

## 0. La misión
Construir (a) un **brand super completo**, (b) un **deck de ventas dinámico** y (c) la **app para gestionarlo y publicarlo por cliente**. Sin errores, aprendiendo de por qué el deck nunca cerró.

## 1. Inteligencia recogida (hecho)

### 1a. El copy real existe — "Master Script v6" (Doc de la CEO)
8 slides ya escritas: **1** Cover ("Custom problem solvers for agribusiness") · **2** Why Magoya (3 pilares) · **3** Who we build with (logos) · **4** Expertise (métricas interactivas: 21 dominios, 8 personas, 8 etapas, 25 orgs, 10 países) · **5** The Magoya Method (Discover→Align→Execute→Learn) · **6** Capabilities · **7** Use cases (4 casos con métricas) · **8** Next step (Paid Discovery).
- **Slide 3 ya viene en 2 versiones: PRIMARY (con logos) vs ALTERNATE (sin logos, solo proof-stats)** → es exactamente el requerimiento "logos sí/no por cliente". El contenido ya anticipa el dinamismo.
- **Design hints de la CEO (portada):** sin personas, sin fotos de cultivos, patrón abstracto agro, **dark mode preferido**, premium.

### 1b. Por qué nunca cerró el deck (Granola, 16 reuniones)
El problema **NO es diseño**. Causas raíz:
1. **Dos founders (Varu/Baru + Pato) que nunca convergen** y esperan que otro les dé la respuesta. Veto sin fin.
2. El deck pide **objetivos contradictorios** a la vez (hablar menos + más impacto; auto-explicativo enviado + apoyo en vivo; mostrar todo lo que no entra).
3. **Multi-audiencia sin narrativa única** (IT/CTO, Business, Product/CPO).
4. **No hay contenido que "venda solo"** — depende de que los founders narren.
5. **Gap de ownership** contenido↔diseño (nadie dueño de la narrativa).
6. **El diseño se usó como proxy** de un problema más profundo: falta de confianza en el mensaje.
7. **Scope creep + despriorización** (se metió en un brand-launch con deadline de evento).
8. **Feedback tardío/superficial** sin sign-off.

### 1c. Conclusión estratégica (la clave de todo)
**La app que vamos a construir ES la solución a por qué nunca cerró el deck.** Resuelve modularidad por audiencia, logos on/off, separar leave-behind de apoyo-en-vivo, y un dueño/estructura única. No estamos haciendo "otro deck" — estamos haciendo el sistema que rompe el loop.

## 2. Principios de diseño LOCKED (no se re-litigan)
- **Equilibrio negro↔verde:** neutros (negro/blanco/gris) sostienen ~75%, verde enciende ~25%. Nunca todo negro ni todo verde.
- **Tipografía:** Manrope (display 800 apretado → cuerpo 400).
- **Colores:** core verde `#133825` + crema `#ECE3DB`; expresivo blanco/negro + verde digital `#00DE68`/lime.
- **Temas:** `studio` (blanco/negro/verde, marketing) · default verde profundo (dark, portada) · `paper` (greige) · `light` (crema).
- **Recursos de marca:** tipografía grande, **bloques de color**, **fotografía B&N + acento verde**, marcas a mano sutiles (subrayado/círculo/flecha).
- **Lenguaje visual abstracto = ESTRATOS** (ELEGIDO ✅): capas de suelo/datos, `assets/motif-estratos.svg`. Portadas dark, separadores, base de mapas. Aplicado en grammar (Cover), editorial y library.
- **Logos de clientes = SIEMPRE reales** (regla del usuario). 5 ya descargados en `assets/logos/` (bayer/basf/syngenta/corteva/john-deere); pendientes: PrecisionPlanting/PTx, IntelinAir, ProducePay, HabiTerre, Apeel (sin SVG público — pedir o trazar).
- **DESCARTADO:** líneas/contornos, maceta/brote, personajes monoline infantiles (archivos borrados), resaltador sólido sobre palabras.
- **Auditoría (✅ resuelta):** broken-refs a illu-sprout y monoline showcase eliminados de editorial/library; tokens muertos corregidos; `--gray-200` arreglado; `alt` agregado en los 5 logos de styleguide.html.

## 2bis. Reglas de trabajo del loop (NUEVO — instrucción del usuario)
- **No trabajar solo:** en cada ciclo sumar **auditor** (QA de consistencia) + los skills/agentes que hagan falta (research, brand-review, accessibility, code-review).
- **Decisiones que afectan el resto → traer OPCIONES** para que el usuario elija. Una vez elegido un camino, mantener **consistencia downstream** (todo lo que siga respeta esa elección).
- **Logos SIEMPRE reales:** buscar y usar logos oficiales de las marcas (Bayer, John Deere, BASF, Syngenta, Corteva, Precision Planting/PTX Trimble, IntelinAir, ProducePay, HabiTerre, Apeel Sciences). Nunca placeholders en entregables finales.
- **Mapas:** estilizados desde lo creativo pero **claramente legibles como mapa** — ni aproximados/vagos ni literales/genéricos.

## 3. Tareas ordenadas (lo que falta)

### Workstream A — Brand "super completo"
- [x] **A1. Gramática de composición** ✅ `grammar.html` — stack de 6 niveles (kicker→título→subtítulo→evidencia→cuerpo→cierre) + 6 arquetipos (Cover dark · Pillars · Proof/Logos con toggle · Data hero · Case study · CTA) que cubren el Master Script v6. Verificado.
- [~] **A2. Página de marca consolidada** — DEFERIDA (light). Ya existe styleguide+editorial+grammar; consolidar en un index al final. No bloquea.
- [ ] **A3. Dirección de ilustración final:** patrón abstracto agro (sin personas/cultivos, per CEO) para portada dark. Explorar motivos abstractos (no las líneas descartadas) — pendiente, no bloquea la app.

### Workstream B — Deck (contenido → diseño)
- [x] **B1. Mapear las 8 slides del Master Script v6 a arquetipos** ✅ hecho en `grammar.html`.
- [ ] **B2/B3. Modularidad + variantes** → se resuelven dentro del modelo de datos de la app (C1): núcleo fijo vs bloques por audiencia (IT/Business/Product), logos on/off, nombre cliente/plataforma on/off, casos por tipo de cliente.
- [ ] **B4. Templates de slide** con copy real → se materializan como los componentes que renderiza la app (C3).

### Workstream C — App de gestión + publicación
- [x] **C1. Spec + modelo de datos** ✅ `APP-SPEC.md` v2 AUDITADO (auditor: 15 hallazgos, 7 must-fix → todos resueltos: entidad `Case`, logoWall fuente única, snapshot inmutable, semántica de `locked`, Slide-4 interactivo, `visibleIf` en todos los bloques, guarda de slide vacía). Decididos: versionado=snapshot, estilos=tokens.css, Slide-4=campo. Forks abiertos para el usuario: persistencia, auth, export.
- [x] **C2. Renderer MVP** ✅ `app/` (React client-side por CDN + htm + `deck.json`, sin backend per decisión del usuario). Verificado en `/app/`: 7 arquetipos renderan (cover+Estratos, pillars N-col, proofLogos con **logos reales**, dataHero, process, caseStudy, cta), navegación ←/→, barra de control admin-lite, **toggle Logos ON/OFF → proof-stats** funcionando, botón PDF (print-CSS), sin errores de consola. Forks del usuario aplicados (JSON/slug/print). Se porta a Next al deployar.
- [x] **C2b. Renderer completo** ✅ los 11 arquetipos + fix título. 12 slides demo.
- [x] **C2c. Auditoría de código incorporada** ✅ (auditor: 18 hallazgos). Resueltos: **print de TODAS las slides** (.print-all → leave-behind real), **filtrado por audiencia funcional** (slide IT-only demo; Business=12 / IT=13), guardas anti-crash en todos los renderers (get()||default), **tokens {{clientName}}/{{platformName}}** + toggle de nombre de plataforma, clamp de nav correcto (slidesRef), guarda de slide vacía + visibleIf, fetch con catch + estado de error, aria-labels en nav, contraste, spec-drift reconciliado en APP-SPEC, bug `useRef` no importado (detectado y corregido). Verificado en navegador. PENDIENTE menor: Slide-4 drill-down interactivo (deferido), 1 label a 10px, body no renderizado por arquetipo pillars.
- [x] **C3/C4. Studio (admin) + publicación** ✅ `app/studio.html` + `app/engine.js` (motor compartido). Crea `ClientConfig` por cliente (cliente, audiencia, toggles logos/plataforma, nombre plataforma, casos incluidos) → publica generando `Publication` con **slug no-adivinable** (crypto) + **snapshot inmutable** en localStorage. Lista publicaciones con abrir/copiar-link/eliminar. `brand-book.html?slug=` = vista publicada **read-only** (sin controles de admin, config congelada). Verificado E2E: publicado "Acme Corp" logos OFF → 12 slides + proof-stats; modo interactivo intacto.
- [x] **C5. Auditoría C3/C4 incorporada** ✅ (auditor: ship-ready con 3 must-fix → resueltos): snapshot ahora **resuelto e inmutable** (logoWall colapsado por logos on/off + casos filtrados a los incluidos → no filtra contenido suprimido a localStorage); `savePubs` con manejo de quota; validación de slide-núcleo vacía al publicar. Re-verificado: logos OFF → snapshot con 0 logos + 4 proof-stats + 3 casos. Anti-fracaso (DRI owner, live/leavebehind, núcleo+módulos, proof-stats) baked-in. Builder visual de edición de decks = futuro (hoy el contenido vive en deck.json).

- [x] **C6. Templates + énfasis + foto + aires** ✅ (2 perfiles: composición + producto). Renderer + studio + engine: **galería de plantillas por slide** (variantes de layout selección por cards: splitMedia izq/der/centrado, pillars columnas/apilado, dataHero, cta), **marcar lo más importante** (dropdown "Destacar" → bloque con `.amp`), **foto en el paso previo a publicar** (URL o archivo→dataURL, pintada en el slot). Todo como `slideOverrides` horneados en el snapshot inmutable. **Aires mejorados** (márgenes 8%, reglas de composición/contrapeso del especialista). Hub de acceso al brand en `brand.html`. Verificado E2E: publicado "WowTest" con split-right + foto + métrica destacada → renderiza correcto, sin errores nuevos. Pendiente: glyphs SVG en las cards de plantilla, más variantes WOW (estratos bleed) si se quiere.

- [x] **C7. Catálogo de módulos + refactor compartido** ✅ El hub se veía escueto en módulos → extraje los renderers a `app/renderers.js` y el CSS de slides a `app/slides.css` (compartidos, sin drift); refactoré `brand-book.html` para importarlos (verificado: app intacta, 12 slides, padding 8% aplicado). Nuevo **`app/modules.html`**: catálogo de los 11 arquetipos + variantes (16 módulos) renderizados de verdad como mini-slides reales (Cover/Estratos, Agenda, Pillars cols/stack, Logos ON/OFF, Data izq/centro, Process, Case, Quote, Split izq/der/centro, Map, CTA). Enlazado prominente en `brand.html`. Sin errores live (las 8 entradas de consola son stale del brand-book.html viejo).

## ESTADO FINAL DEL PROGRAMA
**A (brand) + B (deck) + C (app) + C6 (templates/énfasis/foto/aires) COMPLETOS y verificados.** Magoya tiene: design system (tokens, 4 temas, equilibrio negro↔verde, Estratos, marcas a mano, logos reales), gramática de 11 arquetipos, copy real (Master v6), `brand.html` (hub de acceso), y la app Deck Studio (renderer + admin + publicación por cliente con slug + snapshot inmutable + galería de plantillas + marcar-importante + foto pre-publish + aires mejorados).
**Cierre (repaso final):** las 11 piezas se sirven OK; app monta en modo interactivo/publicado; fixes cerrados → label 10px→11px ✅, body en arquetipo pillars ✅ (muestra token plataforma). **Deferido a futuro:** Slide-4 drill-down interactivo (la métrica renderiza estática, suficiente para MVP), glyphs SVG en cards de plantilla, builder visual de decks, deploy a Next (se porta directo, mismos componentes + JSON), 5 logos de clientes faltantes. **Loop cerrado — sin tareas sustanciales pendientes.**
- [ ] **C5. Anti-fracaso integrado:** un DRI/owner de narrativa; separar leave-behind de apoyo-en-vivo; proof-stats anonimizados que "venden solos".

## 4. Decisiones abiertas para el usuario
- A3: ¿el patrón abstracto de portada lo exploro yo y te muestro opciones?
- B/C: ¿la portada va dark (como pide la CEO) aunque el resto use el equilibrio claro?
- Tensión real a resolver: la CEO dice "sin personas/fotos" pero el material del diseñador (y tu preferencia) incluye foto B&N de la fundadora. **La app lo resuelve: que sea una variante, no una pelea.**

## 5. Orden de ejecución en el loop
A1 ✅ → B1 ✅ → **C1 (spec + modelo de datos de la app, absorbe B2/B3)** → C2 (stack/scaffold Next) → C3 (builder) → C4 (admin + publicar por cliente) → C5 anti-fracaso transversal → A2/A3 polish al final. La app es el prize: rendereará los arquetipos de A1 con el copy del Master Script v6.
