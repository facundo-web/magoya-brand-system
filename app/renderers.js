// Magoya — renderers de slides (los 11 arquetipos). Compartido por index.html (app) y modules.html (catálogo).
// Requiere React global (UMD) cargado antes. Importa htm.
import htm from 'https://esm.sh/htm';
const html = htm.bind(React.createElement);

const Kicker = ({t}) => t ? html`<div class="kicker">${t}</div>` : null;
const Heading = ({t, em}) => html`<h2 class=${em?'amp':''} style=${{fontSize:'clamp(20px,3.4vw,42px)', margin:'.25em 0 .6em', maxWidth:'18ch'}}>${t}</h2>`;
const get = (s,type) => (s.blocks||[]).find(b=>b.type===type);

function Cover({s}) {
  const h=get(s,'heading'), b=get(s,'body');
  const words=(h?.text||'').split(' ');
  return html`<div class="slide dark" data-tpl=${s.template||'cover-corner'}>
    <h2 style=${{fontSize:'clamp(26px,5vw,56px)', maxWidth:'13ch'}}>${words.slice(0,-1).join(' ')} <span class="green">${words.slice(-1)}</span></h2>
    ${b && html`<div class="body">${b.text}</div>`}
    <img class="cover-motif" src="../assets/motif-estratos.svg" alt=""/>
    <div class="cover-foot">magoya.com · US · AR · BR</div>
  </div>`;
}
function Pillars({s}) {
  const k=get(s,'kicker'), h=get(s,'heading')||{}, p=get(s,'pillars')||{items:[]}, b=get(s,'body');
  const n=p.items.length||1;
  return html`<div class="slide" data-tpl=${s.template||'pillars-cols'}>
    <${Kicker} t=${k?.text}/><${Heading} t=${h.text} em=${h.emphasis}/>
    ${b && html`<div class="body ${b.emphasis?'amp':''}" style=${{marginBottom:'var(--space-4)'}}>${b.text}</div>`}
    <div class="cols" style=${{gridTemplateColumns:`repeat(${n},1fr)`}}>
      ${p.items.map((it,i)=>html`<div class="col" key=${i}><h4>${it.title}</h4><p>${it.body}</p></div>`)}
    </div>
  </div>`;
}
function ProofLogos({s,cfg={}}) {
  const k=get(s,'kicker'), h=get(s,'heading')||{}, lw=get(s,'logoWall')||{logos:[],proofStats:[]};
  const showLogos = cfg.showClientLogos;
  return html`<div class="slide">
    <${Kicker} t=${k?.text}/><${Heading} t=${h.text}/>
    ${showLogos
      ? html`<div class="logos">${lw.logos.map((l,i)=>html`<div class="cell" key=${i}><img src=${l.src} alt=${l.name}/></div>`)}</div>`
      : html`<div class="proofstats">${lw.proofStats.map((t,i)=>html`<div key=${i}>${t}</div>`)}</div>`}
  </div>`;
}
function DataHero({s}) {
  const k=get(s,'kicker'), h=get(s,'heading')||{}, m=get(s,'metric')||{hero:{},supporting:[]};
  return html`<div class="slide" data-tpl=${s.template||'dataHero-left'}>
    <${Kicker} t=${k?.text}/><${Heading} t=${h.text} em=${h.emphasis}/>
    <div class="metric">
      <div class="hero ${m.emphasis?'amp':''}">${m.hero.value} <span class="dot">·</span></div>
      <div class="hlabel">${m.hero.label}</div>
      <div class="sup">${m.supporting.map((x,i)=>html`<div key=${i}><b>${x.value}</b><span>${x.label}</span></div>`)}</div>
    </div>
  </div>`;
}
function Process({s}) {
  const k=get(s,'kicker'), h=get(s,'heading')||{}, pr=get(s,'process')||{steps:[]};
  return html`<div class="slide">
    <${Kicker} t=${k?.text}/><${Heading} t=${h.text}/>
    <div class="process">
      ${pr.steps.map((st,i)=>html`
        ${i>0 && html`<div class="arrow" key=${'a'+i}>→</div>`}
        <div class="step" key=${i}><h4>${st.name}</h4><div class="out">${st.output}</div></div>`)}
    </div>
  </div>`;
}
function CaseStudy({s,deck={},cfg={}}) {
  const k=get(s,'kicker'), h=get(s,'heading')||{}, cs=get(s,'caseStudy')||{caseIds:[]};
  const inc=cfg.includedCaseIds;
  const cases=(deck.cases||[]).filter(c=>cs.caseIds.includes(c.id) && (!inc || inc.includes(c.id)));
  return html`<div class="slide">
    <${Kicker} t=${k?.text}/><${Heading} t=${h.text}/>
    <div class="cases">
      ${cases.map(c=>html`<div class="case" key=${c.id}>
        <div class="ct">${c.clientType}</div>
        <p>${c.challenge} ${c.solution}</p>
        <div class="res">${c.resultMetric}</div>
      </div>`)}
    </div>
  </div>`;
}
function CTA({s}) {
  const k=get(s,'kicker'), h=get(s,'heading')||{}, b=get(s,'body'), cta=get(s,'cta');
  const w=(h.text||'').split(' ');
  return html`<div class="slide" data-tpl=${s.template||'cta-centered'} style=${{justifyContent:'center'}}>
    <${Kicker} t=${k?.text}/>
    <h2 style=${{fontSize:'clamp(24px,4.2vw,48px)'}}>${w.slice(0,-1).join(' ')} <span class="green">${w.slice(-1)}</span></h2>
    ${b && html`<div class="body">${b.text}</div>`}
    <div class="cta-btn">${cta?.label||'Book a call'}</div>
  </div>`;
}
function IndexSlide({s}) {
  const h=get(s,'heading')||{}, idx=get(s,'index')||{items:[]};
  return html`<div class="slide">
    <${Heading} t=${h.text}/>
    <ol class="agenda">${idx.items.map((t,i)=>html`<li key=${i}><span>${String(i+1).padStart(2,'0')}</span>${t}</li>`)}</ol>
  </div>`;
}
function SplitMedia({s}) {
  const k=get(s,'kicker'), h=get(s,'heading')||{}, b=get(s,'body'), pill=get(s,'pill'), m=get(s,'media');
  const tpl=s.template||'split-left';
  const photoStyle = (m&&m.src) ? {backgroundImage:`url(${m.src})`, backgroundSize:'cover', backgroundPosition:'center', filter:(m.treatment==='color'?'none':'grayscale(1)')} : {};
  return html`<div class="slide split" data-tpl=${tpl}>
    <div class="photo" style=${photoStyle}>${(m&&m.src)?'':((m&&m.caption)||'Foto · B&N')}</div>
    <div class="splitbody">
      <${Kicker} t=${k?.text}/><${Heading} t=${h.text} em=${h.emphasis}/>
      ${b && html`<div class="body ${b.emphasis?'amp':''}">${b.text}</div>`}
      ${pill && html`<span class="pill">${pill.text}</span>`}
    </div>
  </div>`;
}
function Quote({s}) {
  const q=get(s,'quote')||{};
  return html`<div class="slide" style=${{justifyContent:'center'}}>
    <div class="bigquote ${q.emphasis?'amp':''}">“${q.quote}”</div>
    <div class="qauthor">${q.author} <span>· ${[q.role,q.org].filter(Boolean).join(', ')}</span></div>
  </div>`;
}
function MapSlide({s}) {
  const k=get(s,'kicker'), h=get(s,'heading')||{}, m=get(s,'map')||{regions:[],markers:[]};
  return html`<div class="slide">
    <${Kicker} t=${k?.text}/><${Heading} t=${h.text}/>
    <div class="mapwrap">
      <div class="regions">${m.regions.map((r,i)=>html`<div class="region" key=${i} style=${{width:`${58+i*9}%`}}>${r}</div>`)}</div>
      <div class="markers">${m.markers.map((mk,i)=>html`<span key=${i}>● ${mk.city}</span>`)}</div>
    </div>
  </div>`;
}

export const RENDERERS = { cover:Cover, index:IndexSlide, pillars:Pillars, proofLogos:ProofLogos, dataHero:DataHero, splitMedia:SplitMedia, process:Process, caseStudy:CaseStudy, quote:Quote, map:MapSlide, cta:CTA };

export function SlideView({s,deck,cfg}) {
  const C = RENDERERS[s.archetype];
  if(!C) return html`<div class="slide"><div class="kicker">archetype: ${s.archetype}</div><${Heading} t="(sin renderer aún)"/></div>`;
  return html`<${C} s=${s} deck=${deck} cfg=${cfg}/>`;
}
