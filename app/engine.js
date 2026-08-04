// Magoya Deck Studio — motor compartido (renderer + studio). Sin dependencias.

export function passesCond(c, aud, cfg){
  if(!c) return true;
  if(c.audience && !c.audience.includes(aud)) return false;
  if(c.requiresClientLogos && !cfg.showClientLogos) return false;
  if(c.requiresPlatformName && !cfg.showPlatformName) return false;
  return true;
}

export function tok(t, cfg){
  if(typeof t!=='string') return t;
  const plat = (cfg.showPlatformName && cfg.platformName) ? cfg.platformName : 'the platform';
  return t.replace(/\{\{\s*platformName\s*\}\}/g, plat).replace(/\{\{\s*clientName\s*\}\}/g, cfg.clientName||'');
}

// overrides por-publicación (template / énfasis / foto) → se aplican al final, antes de la guarda
function applyOverrides(s, cfg){
  const ov = (cfg.slideOverrides||{})[s.id];
  if(!ov) return s;
  const out = {...s};
  if(ov.template) out.template = ov.template;
  out.blocks = out.blocks.map(b => {
    let nb = b;
    if(ov.emphasisBlockId !== undefined) nb = {...nb, emphasis: ov.emphasisBlockId === b.id ? 'amplify' : undefined};
    if(b.type==='media' && ov.media && ov.media[b.id]) nb = {...nb, src: ov.media[b.id].src, treatment: ov.media[b.id].treatment || nb.treatment || 'bw'};
    return nb;
  });
  return out;
}

// §3: núcleo + audiencia → visibleIf → tokens → overrides → guarda de slide vacía
export function resolveSlides(deck, aud, cfg){
  return (deck.slides||[])
    .filter(s => s.core || (s.audiences||[]).includes(aud))
    .map(s => ({...s, blocks: (s.blocks||[])
      .filter(b => passesCond(b.visibleIf, aud, cfg))
      .map(b => {
        if(b.type==='heading' || b.type==='body') return {...b, text: tok(b.text, cfg)};
        if(b.type==='logoWall') return cfg.showClientLogos ? {...b, proofStats:[]} : {...b, logos:[]}; // §3.3 colapsar al resolver
        if(b.type==='caseStudy') return {...b, caseIds:(b.caseIds||[]).filter(id=> !cfg.includedCaseIds || cfg.includedCaseIds.includes(id))}; // §3.5
        return b;
      })
    }))
    .map(s => applyOverrides(s, cfg))
    .filter(s => s.blocks.length > 0);
}

// snapshot inmutable de una publicación (APP-SPEC: editar el deck no muta lo publicado)
export function buildSnapshot(deck, cfg){
  const slides = resolveSlides(deck, cfg.audience || 'Business', cfg);
  const cases = cfg.includedCaseIds ? (deck.cases||[]).filter(c=>cfg.includedCaseIds.includes(c.id)) : (deck.cases||[]); // §3.5 no guardar casos excluidos
  return { name: deck.name, cases, slides, cfg };
}

export function makeSlug(name){
  const base = (name||'cliente').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'')
    .replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,24) || 'cliente';
  let r;
  if(self.crypto && self.crypto.getRandomValues){
    r = Array.from(self.crypto.getRandomValues(new Uint8Array(4))).map(b=>b.toString(16).padStart(2,'0')).join('');
  } else { r = Math.random().toString(36).slice(2,10); }
  return base + '-' + r;   // slug no-adivinable
}

export const STORE_KEY = 'magoya_publications';
export function loadPubs(){ try { return JSON.parse(localStorage.getItem(STORE_KEY) || '[]'); } catch(e){ return []; } }
export function savePubs(pubs){ try { localStorage.setItem(STORE_KEY, JSON.stringify(pubs)); return true; } catch(e){ return false; } }
