# APP-SPEC — Magoya Deck Studio (C1: modelo de datos + arquitectura) · v2 (auditado)

> App para que **ventas arme, gestione y publique presentaciones dinámicas por cliente**. Es el sistema que rompe el loop del deck (PLAN §1c): núcleo narrativo fijo con un dueño (DRI) + módulos por audiencia + variantes por cliente, separando *leave-behind* de *apoyo en vivo*.
> v2 resuelve los 7 must-fix de la auditoría (Case entity, logoWall fuente única, versionado/snapshot, semántica de `locked`, Slide-4 interactivo, `visibleIf` en todos los bloques, guarda de slide vacía).

## 1. Principios anti-fracaso (Granola) → cómo se codifican
| Causa del fracaso | Mecanismo en el modelo |
|---|---|
| Dos founders sin convergencia, veto infinito | `Deck.owner` (DRI). `Deck.locked=true` → el builder NO permite editar slides/bloques con `core:true`; founders dan input solo en módulos por audiencia |
| Un deck con objetivos contradictorios | `Deck.mode: 'live' \| 'leavebehind'` → dos artefactos desde un mismo core; `Slide.presenterNotes` solo se renderiza en `live` |
| Multi-audiencia sin narrativa única | `AudiencePreset` (IT/Business/Product) selecciona módulos sobre el núcleo fijo |
| No hay contenido que "venda solo" | `Case` + `metric.anonymized` + `quote.anonymized` + proof-stats |
| Logos bloqueados por clientes | `ClientConfig.showClientLogos` → única fuente de `logoWall` (PRIMARY/ALTERNATE) |
| Feedback sin sign-off / mutar lo publicado | `Publication.snapshot` = copia inmutable; editar el deck NO altera lo ya publicado |

## 2. Entidades (TypeScript)
```ts
type Archetype =
  | 'cover' | 'index' | 'pillars' | 'proofLogos' | 'dataHero'
  | 'splitMedia' | 'process' | 'caseStudy' | 'quote' | 'map' | 'cta'; // 11

type Audience = 'IT' | 'Business' | 'Product';
type Theme = 'dark' | 'studio' | 'paper';
type Cond = { audience?: Audience[]; requiresClientLogos?: boolean; requiresPlatformName?: boolean };
// Precedencia: Cond solo ESTRECHA dentro de una slide ya incluida; nunca amplía.

interface Deck {
  id; name; owner;                 // owner = DRI, dueño de la narrativa
  mode: 'live' | 'leavebehind';
  theme: Theme;
  status: 'draft' | 'published';
  locked: boolean;                 // true → builder bloquea edición de slides/bloques core
  version: number;                 // sube en cada publish
  slides: Slide[];
  createdAt; updatedAt;
}

interface Slide {
  id; archetype: Archetype; order: number;   // order GLOBAL; se recompacta denso tras filtrar
  core: boolean;                              // true = siempre incluida (núcleo fijo)
  audiences: Audience[];                      // si !core, en qué presets aparece
  presenterNotes?: string;                    // solo render en mode 'live'
  blocks: Block[];
}

interface BlockBase { id: string; visibleIf?: Cond; }   // TODOS los bloques pueden gatearse
type Block = BlockBase & (
  | { type:'heading'; text }
  | { type:'body'; text }                                 // soporta tokens {{platformName}}, {{clientName}}
  | { type:'metric'; hero:{value;label}; supporting:{value;label}[]; anonymized?:boolean;
      interactive?:boolean; expandable?:{summary;detail}[] }   // Slide-4 drill-down
  | { type:'pills'; items:string[] }
  | { type:'logoWall'; logos:LogoRef[]; proofStats:string[] }  // mode lo decide el resolver
  | { type:'quote'; quote; author; role; org; anonymized:boolean }
  | { type:'map'; regions:string[]; markers:{city;country}[]; style:'estratos' }
  | { type:'process'; steps:{name;output}[] }
  | { type:'media'; src; treatment:'bw'; caption }            // foto B&N (split-media)
  | { type:'caseStudy'; caseIds:string[] }                    // referencia a Case[]
  | { type:'kicker'; text }                                   // etiqueta sobre el título
  | { type:'cta'; label }                                     // botón de acción
  | { type:'index'; items:string[] }                          // agenda
  | { type:'pillars'; items:{title;body}[] }                  // columnas (≠ 'pills' = chips)
  | { type:'pill'; text }                                     // chip individual
);
// Nota: el resolver decide el tema (cover→dark, resto→deck.theme); las slides no llevan theme propio.

// --- C6: templates + énfasis + foto (overrides por-publicación) ---
// Slide.template?: TemplateId         (variante de layout; fallback al default del arquetipo)
// Block.emphasis?: 'amplify'          (el bloque "más importante"; ≤1 por slide, garantizado por el dropdown)
// MediaBlock.src? puede estar vacío   (slot de foto a llenar antes de publicar)
// ClientConfig.slideOverrides?: { [slideId]: { template?, emphasisBlockId?, media?:{[blockId]:{src,treatment}} } }
// applyOverrides() corre AL FINAL de resolveSlides → todo queda horneado en el snapshot inmutable (foto incluida, como dataURL o URL).
// UX: selección guiada en studio ("Diseño por slide": cards de plantilla + dropdown Destacar + URL/archivo de foto). Sin canvas.
// Composición/aires: márgenes 8%, grilla 12-col splits 7+5/8+4, titular en tercio superior, ley de contrapeso, topes de densidad, 1 bleed por slide. Ver perfil de composición.

interface Case {                       // proof que "vende solo"
  id; clientType: string;              // p.ej. "Ag Retailer", "OEM", "Global Input Company"
  challenge; solution; resultMetric;   // "−70% tickets", "25,000+ recs"
  anonymized: boolean;                 // si true, nunca muestra nombre de cliente
}

interface AudiencePreset { id; audience: Audience; label; emphasis: string }

interface ClientConfig {
  clientName: string;
  showClientLogos: boolean;            // ÚNICA fuente del modo de logoWall
  showPlatformName: boolean;
  platformName?: string;               // sustituye {{platformName}}; si off → neutraliza
  includedCaseIds: string[];           // qué Case mostrar
  accentTheme?: Theme;
}

interface Publication {
  id; presetId; clientConfig;
  snapshot: ResolvedDeck;              // COPIA INMUTABLE del deck resuelto al publicar
  deckId; deckVersion: number;         // trazabilidad
  slug: string;                        // /p/:slug
  published: boolean; publishedAt; expiresAt?; passwordProtected?: boolean;
}
```

## 3. Resolución de render — `resolveDeck(deck, preset, clientConfig) → ResolvedDeck`
1. `slides = deck.slides.filter(s => s.core || s.audiences.includes(preset.audience))`
2. por slide: `blocks = blocks.filter(b => passesCond(b.visibleIf, preset, clientConfig))`
3. **logoWall (fuente única):** `mode = clientConfig.showClientLogos ? 'logos' : 'proofstats'` (se ignora cualquier otro origen)
4. **tokens:** reemplazar `{{platformName}}`/`{{clientName}}`; si `!showPlatformName` → neutralizar a genérico ("la plataforma")
5. **cases:** `caseStudy.caseIds ∩ clientConfig.includedCaseIds`; si un `Case.anonymized` → ocultar nombre
6. **guarda de slide vacía:** si tras filtrar `slide.blocks.length === 0` → se descarta la slide (un core nunca debe quedar vacío: validar en publish)
7. **orden:** recompactar `order` denso tras filtrar
8. **tema:** `cover` → dark + Estratos; resto → `deck.theme` (studio por defecto)
9. **mode:** `live` incluye `presenterNotes` y copy mínimo; `leavebehind` = auto-explicativo, sin notas
→ El resultado (`ResolvedDeck`) es lo que se snapshotea en `Publication.snapshot`.

## 4. Arquitectura (Next.js App Router)
- `/studio` — admin: decks, presets, client configs, publicaciones.
- `/studio/:deckId/edit` — **builder** (respeta `locked` en bloques core).
- `/studio/:deckId/publish` — preset + client config → crea `Publication` con `snapshot`.
- `/p/:slug` — **presentación publicada** read-only, navegable (←/→), por cliente. Lee `snapshot` (inmutable).
- **11 componentes por arquetipo** que leen `tokens.css` + `motif-estratos.svg`; reusan la gramática de `grammar.html`. `pillars` soporta N columnas (2–6), no solo 3.
- **Export leave-behind:** print-CSS sobre `/p/:slug`.

## 5. Datos seed (contenido real)
- `Deck` "Master v6" = 8 slides del Master Script → arquetipos (cover · pillars×3 [why/method/capabilities] · proofLogos · dataHero[+interactive] · caseStudy · cta) + `index`.
- 3 `AudiencePreset`: IT, Business, Product.
- 4 `Case` (Slide 7: Ag Retailer field-adoption −70% · Ag Retailer validate 2-months · OEM pipeline −50% · Global Input 25k+ recs).
- Logos: `assets/logos/` (5 reales + 5 pendientes).

## 6. Forks
**Decididos en v2 (correctness, sin controversia):**
- **Versionado = snapshot inmutable** en `Publication` (auditoría #4): editar el deck no muta páginas publicadas. ✅
- **Estilos = `tokens.css` actual** (no Tailwind; ya tenemos el sistema de tokens). ✅
- **Slide-4 interactivo = campo de datos** (`metric.interactive/expandable`) + comportamiento en C2. ✅

**Abiertos → traer OPCIONES al usuario (afectan el build de C2):**
- **Persistencia:** JSON en repo (MVP, sin backend) · Supabase/DB (multiusuario real) · archivos MD.
- **Auth de `/p/:slug`:** público por slug no-adivinable · password por publicación.
- **Export:** print-CSS (ahora) · librería PDF (después).

## 7. Estado
C1 v2 = auditado y revisado (7/7 must-fix resueltos). Build-ready una vez elegidos los 3 forks abiertos → C2 scaffold.
