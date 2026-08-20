# Validación de la fusión IA ↔ brand system

Registro de las corridas del agente semanal. Protocolo:
[`agente-validacion-ia.md`](agente-validacion-ia.md). Lo más nuevo arriba.

La métrica que se sigue corrida a corrida es **la prueba a ciegas**: cuántos de los 16 chequeos
pasa una pieza hecha por una IA que solo recibió un link. Todo lo demás es diagnóstico de por qué.

---

## 2026-08-19 · línea de base

**Validador:** 0 fallas · 3 huecos · 7 ok — primera corrida, con los arreglos de abajo ya aplicados.

**Prueba a ciegas:** pendiente — la corre el agente en su primera pasada (2026-08-24).

**Arreglado en esta pasada:**

- `ai/assets.json` publicaba 8 URLs a `assets/refs/`, que está **gitignored**: eran 404 servidos a
  cualquier IA que leyera el manifiesto. `BRAND.md` ya decía que esa carpeta no se publica ni se
  enlaza, así que el manifiesto contradecía la doctrina. `generate.py` ahora la excluye del walk.
- Las cifras de ejemplo se convertían en `[XX]` solo si el texto era grande (≥2.4cqw). Los captions
  de D4 mostraban `68%`, `44%`, `31%` en tamaño chico: una IA podía entregarlas como datos reales.
  Ahora **toda cifra con unidad** (`%`, `x`, `k`, `M`, `+`, `hs`, `min`) va a `[XX]` sin importar el
  tamaño. La numeración de pasos (`1`, `01`) se deja, que no es un dato.

**Necesita tu decisión** (el validador las detecta y no las inventa):

1. `constraints.json` declara 3 definiciones pendientes: mínimos tipográficos para web/app en px
   (hoy solo existe la escala de slides), clearspace numérico de los avatares (hoy solo lo tiene el
   wordmark) y margen mínimo en mm para piezas impresas. Mientras estén pendientes, una IA que arme
   una landing o un one-pager tiene que asumir.
2. `facts.json` tiene 3 datos sin aprobar (retención, la métrica de un caso puntual, y volumen de
   proyectos/equipo/mercados). Hasta que los confirmes no se publican, así que una IA que necesite
   una cifra de escala se queda sin dato.
3. El slot `E3/tabla3` no dice qué va adentro de la tabla. Los demás slots de gráfico sí lo dicen.

**Estado de la capa:** 352 URLs publicadas y todas con archivo en el repo · 344 slots y todos con
límite de texto · 31 filas de selector y todos los módulos citados existen · `llms-full.txt` 56KB
(lejos del techo donde las IA truncan) · regenerar no cambia nada · ningún "AI" en copy español.
