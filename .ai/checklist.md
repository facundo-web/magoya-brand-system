# Checklist de validación — piezas, código o copy generados por IA

Trece chequeos verificables. Todos tienen que dar **sí** antes de publicar. Si alguno falla, corregí y volvé a correr la lista completa.

| # | Chequeo | Cómo se verifica | Falla si… |
|---|---|---|---|
| 1 | **Solo hex de la paleta** | Extraé todos los colores de la pieza o del CSS y comparalos contra `tokens.json` | Aparece un hex que no está en `tokens.json` (típico: un verde "parecido", `#4CAF50`, `#2ECC71`) |
| 2 | **Cero naranja y cero amarillo** | Buscá cualquier tono con hue 20–65° | Hay naranja o amarillo del brand viejo. Excepción única: `#FFC67B`, y solo como piel de personaje |
| 3 | **Lima no es texto sobre claro** | Buscá `#A2FF00` aplicado a `color:` sobre blanco, sage, crema o papel | Hay texto lima sobre fondo claro (1.25:1). Sobre claro el verde-texto es `#009145` y solo ≥24px bold |
| 4 | **`#00DE68` como texto solo sobre oscuro** | Revisá cada uso de `#00DE68` en `color:` | Se usa como texto sobre blanco o crema en vez de `#009145` |
| 5 | **Un solo golpe de lima** | Contá los elementos en lima: CTA, display, motivo, ícono destacado, marca a mano | Hay dos o más elementos lima compitiendo en la misma pieza |
| 6 | **Balance 75/25** | Estimá superficie: neutros (blanco/sage/negro/crema) vs. verdes | Los verdes pasan de ~25%, o la pieza es 100% negra o 100% verde |
| 7 | **Manrope y 3 niveles** | Revisá `font-family` y contá tamaños/pesos distintos | Aparece otra tipografía (Inter, Poppins, system-ui suelto) o hay 4+ niveles tipográficos |
| 8 | **Cero emojis** | Buscá caracteres emoji en títulos, cuerpo, bullets y labels | Hay cualquier emoji que no sea 👈 👉 👇 apuntando a un CTA, o una bandera de país |
| 9 | **Cero gradientes** | Buscá `gradient`, `blur`, `box-shadow` de brillo, glass, 3D | Hay algún gradiente que no sea el scrim verde profundo 55–86% sobre foto aérea |
| 10 | **Máximo 2 recursos gráficos** | Contá: foto aérea, foto B&N, personaje, paño de semicírculos, marca a mano, ícono. La cifra gigante y la tipografía no cuentan — son la voz | Hay 3 o más además de la tipografía, o convive un par prohibido: dos fotos, foto + personaje, foto aérea + paño, personaje + ícono (matriz completa en `resourceCoexistence` de `tokens.json`) |
| 11 | **Motivo al corte** | Mirá los bordes del paño de semicírculos | El motivo se ve cortado flotando en el aire en vez de nacer de un borde o de detrás de un objeto. Si convive con un personaje: el paño va al fondo en franja, el personaje al borde opuesto en primer plano, nunca superpuestos |
| 12 | **Personajes sin rostro y al borde** | Mirá cada personaje ilustrado | Tiene rostro, es monoline o stock, está centrado como clipart, flota entero, está sobre una foto, o usa un color fuera de `#33DB4E` `#A2FF00` `#DFDFDF` `#FFC67B` `#161616` |
| 13 | **Botón vs. chip, y assets reales** | Revisá radios y logos | Un botón es pill o un chip tiene fondo sólido (botón = rect radio 10px, chip = pill outline), o hay logos de clientes inventados/placeholder, o hay un resaltador sólido detrás de texto |

## Extras según el formato

- **Slides**: margen interior 7% del ancho, escala 126/84/56/42pt sobre 1920px, un golpe de lima por slide, lienzo blanco o sage `#EEF2EC`.
- **Redes**: display y cifras al ~70% del ancho. Story 1080×1920 con zona segura de 96px arriba y abajo. Feed 1080×1080.
- **Logo**: mínimo 90px en pantalla / 24mm impreso; por debajo va el avatar "m". Clearspace = altura de la letra "m". Nunca estirado, rotado, sombreado ni en lima.
- **Copy**: sin superlativos ni frases grandilocuentes; labels de botón en sentence case; kickers en MAYÚSCULAS con tracking +0.12em.
- **Merch**: siempre foto o render real del producto, nunca ilustración ni esquema vectorial. Sin lima en textil.
- **Fotos de personas**: siempre B&N con un acento verde o lima.

## Si la pieza es de "AI en campo"

Es una **marca anexa con manual propio** (`ai-en-campo.html`), no el core. Ahí sí valen el lienzo verde digital `#00DE68` pleno, la placa negra de dato clave y los doodles del Studio (2–4 por pieza, ±5–15°). Nada de eso es válido en una pieza de Magoya core, y nada del core aplica tal cual a "AI en campo".
