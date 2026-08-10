#!/usr/bin/env python3
"""Genera la capa machine-readable del brand system.
Correr desde la raíz del repo: python3 ai/generate.py
Regenera: assets/icons/*.svg, ai/assets.json, ai/slides.json
Es idempotente — correrlo después de cada cambio de assets o slides."""
import re, os, json

BASE = 'https://facundo-web.github.io/magoya-brand-system'

# ---------- 1. iconos: de <symbol> inline a archivos ----------
s = open('icons.html').read()
symbols = re.findall(r'<symbol id="i-([a-z-]+)" viewBox="0 0 24 24">(.*?)</symbol>', s, re.S)
cats_raw = re.search(r'const CATS = \[(.*?)\n\];', s, re.S).group(1)
cat_of = {}
cat_desc = {}
for name, sub, icons in re.findall(r'\["([^"]+)", "([^"]+)", \[([^\]]+)\]\]', cats_raw):
    cat_desc[name] = sub
    for ic in re.findall(r'"([a-z-]+)"', icons):
        cat_of[ic] = name
WRAP = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" '
        'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">{}</svg>\n')
icon_entries = []
for name, inner in symbols:
    open(f'assets/icons/{name}.svg', 'w').write(WRAP.format(inner.strip()))
    icon_entries.append({'nombre': name, 'categoria': cat_of.get(name, '?'),
                         'url': f'{BASE}/assets/icons/{name}.svg'})
print(f'iconos exportados: {len(icon_entries)}')

# ---------- 2. slides.json ----------
s = open('slides.html').read()
fams = []
for fid in 'ABCDEFGHIJKLM':
    m = re.search(rf'id="fam-{fid.lower()}"[^>]*><h2>([^<]+)</h2><span class="sub">([^<]+)</span>', s)
    if m: fams.append({'id': fid, 'nombre': m.group(1).replace('&amp;','&'), 'que_cubre': m.group(2)})
mods = []
for m in re.finditer(r'data-mod="([A-M]\d+)".*?<span class="nm">([^<]+)</span>.*?<b>Cuándo usarlo:</b>\s*([^<]+)<', s, re.S):
    mods.append({'id': m.group(1), 'nombre': m.group(2).replace('&amp;','&'),
                 'cuando_usarlo': ' '.join(m.group(3).split())})

# ---------- 2b. layouts exactos: extraer el DSL del exportador ----------
i0 = s.find('var C=')
i1 = s.find('window.magoyaBuildDeck')
dsl_src = s[i0:i1] if (i0 > -1 and i1 > i0) else ''
import re as _re
mod_srcs = {}
for _m in _re.finditer(r'SPEC\.([A-M]\d+)\s*=\s*function', dsl_src):
    start = _m.start()
    nxt = _re.search(r'SPEC\.[A-M]\d+\s*=\s*function', dsl_src[_m.end():])
    end = _m.end() + (nxt.start() if nxt else len(dsl_src) - _m.end())
    mod_srcs[_m.group(1)] = dsl_src[start:end].rstrip().rstrip(';') + ';'
for mod in mods:
    if mod['id'] in mod_srcs:
        mod['layout_src'] = mod_srcs[mod['id']]

slides = {
  'que_es': 'Spec machine-readable de los 41 módulos de presentación de Magoya. El deck kit navegable (con export .pptx) vive en slides.html — esta es la receta para que una AI reconstruya cualquier módulo.',
  'lienzo': {'ancho_px': 1920, 'alto_px': 1080, 'margen_interior': '7%',
             'fondos': ['blanco #FFFFFF', 'sage #EFF3EE', 'oscuro #133825 (solo apertura/cierre/citas)'],
             'escala_tipografica_pt': [126, 84, 56, 42],
             'conversion': '1pt = 1.333px sobre el lienzo de 1920x1080 (126pt = 168px). La unidad s del DSL se convierte a pt en la funcion paint() incluida en dsl_src.',
             'reglas': ['un golpe de lima #A2FF00 por slide como máximo',
                        'máximo dos recursos gráficos además de la tipografía',
                        'wordmark chico arriba-izquierda en slides interiores']},
  'layouts': {
    'como_leer': 'Cada modulo trae layout_src: la funcion JS literal del exportador .pptx con la geometria exacta. Coordenadas en % de un lienzo de 100 de ancho x 56.25 de alto (16:9). Helpers: T(texto,{x,y,w,h,s,b,c,al,lh,...})=texto, IMG({src,x,y,w,h,fit,...})=imagen (src relativo a la raiz del sitio), R(...)=rectangulo, bg(fill)=fondo full-bleed, chrome(pg,dark)=wordmark chico arriba-izquierda + numero de pagina. Constantes de color y conversion de unidades: ver dsl_src (la funcion paint() muestra como s se convierte a puntos).',
    'dsl_src': dsl_src},
  'familias': fams, 'modulos': mods,
  'fuente_de_verdad': f'{BASE}/slides.html'}
slides['si_tu_fetch_trunca'] = f'Este archivo es grande. Si tu fetch llega cortado, usa los archivos por familia (2-10KB cada uno): {BASE}/ai/slides/A.json ... M.json — mismo formato, una familia por archivo.'
json.dump(slides, open('ai/slides.json','w'), ensure_ascii=False, indent=1)
os.makedirs('ai/slides', exist_ok=True)
for fam in fams:
    fmods = [m for m in mods if m['id'].startswith(fam['id'])]
    json.dump({'familia': fam, 'lienzo': slides['lienzo'], 'layouts_como_leer': slides['layouts']['como_leer'],
               'modulos': fmods, 'dsl_completo_en': f'{BASE}/ai/slides.json'},
              open(f"ai/slides/{fam['id']}.json",'w'), ensure_ascii=False, indent=1)
print(f'slides.json: {len(fams)} familias, {len(mods)} módulos + {len(fams)} archivos por familia')

# ---------- 3. assets.json ----------
CATDOC = {
 'assets': ('Raíz: wordmarks del logo y motivo de semicírculos', 'El wordmark es LA firma de la marca. Nunca redibujarlo: usar el SVG tal cual. Variantes por fondo: cream sobre oscuro, dark sobre claro.'),
 'assets/avatars': ('4 avatares oficiales derivados del wordmark', 'La cara = redes de comunidad (IG, X). La m = canales corporativos (LinkedIn, favicon). Nunca usar el monograma m dentro de cards. No inventar avatares nuevos.'),
 'assets/icons': ('Los 58 íconos de línea del sistema (export de icons.html)', 'Trazo 2px redondeado, grid 24×24, stroke=currentColor (recoloreables). ATENCION: embebido como <img> currentColor renderiza NEGRO — inlinear el SVG y setear color por CSS, o reemplazar currentColor por el hex. Sobre oscuro: crema #F6F1EB con UNO destacado en lima. Sobre claro: #161616, el destacado va #009145.'),
 'assets/illus': ('Personajes ilustrados y caminos', 'Personajes planos sin rostro, paleta cerrada, zapatillas verdes. Siempre recortados por un borde, lado opuesto al texto. Nunca sobre foto ni junto a un ícono.'),
 'assets/photos': ('Fotografía real del equipo y de campo', 'Personas SIEMPRE en B&N + un acento de color. Foto aérea con scrim verde profundo. Nunca stock.'),
 'assets/photos/merch': ('Fotos reales de merch', 'Verde profundo + crema, bordado discreto.'),
 'assets/logos': ('Wordmarks propios en variantes', 'Ver reglas del logo en BRAND.md sección 2.'),
 'assets/logos/clients': ('Logos REALES de clientes', 'Los únicos logos permitidos en un logo wall. En grilla: escala de grises, tamaño óptico parejo.'),
 'assets/logos/partners': ('Logos reales del stack tecnológico', 'Se muestran en su color oficial.'),
 'assets/motif': ('', ''),
 'assets/downloads': ('Entregables listos: firma de email animada/estática, membrete', 'La firma de email lleva SIEMPRE el wordmark, nunca los avatares.'),
 'assets/font': ('Manrope variable (única tipografía)', 'Pesos 200–800. Display 800 tracking −3%. También en Google Fonts como "Manrope".'),
 'assets/font/manrope': ('Archivos de la fuente', ''),
 'assets/favicon': ('Favicons oficiales', 'Avatar m al corte, sin padding extra.'),
 'assets/pieces': ('Piezas reales exportadas (referencia de calidad)', 'fecha-marcada-ig-portrait es LA pieza canónica de AI en campo (formato madre 4:5).'),
 'assets/studio': ('Kit de la sub-marca AI en campo + logos de terceros', 'Los doodles/flourishes del Studio son SOLO para piezas de AI en campo, no para Magoya core.'),
 'assets/studio/icons/agro': ('Íconos agro del Studio', ''),
 'assets/studio/icons/ai': ('Logos oficiales de plataformas de AI', 'Usar la variante correcta según fondo (-black sobre claro).'),
 'assets/studio/icons/social': ('Logos oficiales de redes', 'Idem variantes por fondo.'),
 'assets/studio/devices': ('Mockups de dispositivos', ''),
 'assets/refs': ('REFERENCIAS del diseñador original', 'NO son assets finales — no usar en piezas. Solo contexto histórico.'),
}
tree = {}
for root, dirs, files in os.walk('assets'):
    fs = sorted(f for f in files if not f.startswith('.'))
    if fs: tree[root] = fs
carpetas = []
total = 0
for root in sorted(tree):
    desc, reglas = CATDOC.get(root, ('', ''))
    entry = {'carpeta': root, 'descripcion': desc}
    if reglas: entry['reglas'] = reglas
    entry['archivos'] = [f'{BASE}/{root}/{f}' for f in tree[root]]
    total += len(tree[root])
    carpetas.append(entry)
manifest = {
 'que_es': 'Manifiesto completo de assets del brand system de Magoya. Cada URL es pública y fetcheable sin auth. Antes de usar cualquier asset, leer BRAND.md (reglas) y tokens.json (valores).',
 'doctrina': f'{BASE}/BRAND.md',
 'tokens': f'{BASE}/tokens.json',
 'total_archivos': total,
 'iconos_sistema': icon_entries,
 'carpetas': carpetas}
json.dump(manifest, open('ai/assets.json','w'), ensure_ascii=False, indent=1)
print(f'assets.json: {total} archivos en {len(carpetas)} carpetas')
