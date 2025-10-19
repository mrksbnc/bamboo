---
title: colors
---

# Colors

The library ships with a full OKLCH palette based on Tailwind v4. The tokens are defined in
the main `src/lib.css` file and are available as CSS variables on `:root`.

## Semantic variants used by components

These map to component props like

| Variant     | Color           |
| ----------- | --------------- |
| `primary`   | `--blue-600`    |
| `secondary` | `--neutral-600` |
| `success`   | `--green-600`   |
| `warning`   | `--yellow-500`  |
| `danger`    | `--red-600`     |
| `light`     | `--neutral-50`  |
| `dark`      | `--gray-950`    |

## Swatches

Each color is available as a CSS variable like `--blue-500`.

<style>
.bo-swatches { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; }
.bo-swatch { border: 1px solid var(--gray-300); border-radius: 0.5rem; overflow: hidden; background: var(--neutral-50); }
.bo-swatch__title { font-weight: 600; font-size: 0.9rem; padding: 0.5rem 0.75rem; border-bottom: 1px solid var(--gray-200); }
.bo-swatch__row { display: grid; grid-template-columns: 1fr; gap: 0.25rem; padding: 0.5rem; }
.bo-chip { height: 32px; border-radius: 0.375rem; display: flex; align-items: center; justify-content: space-between; padding: 0 0.5rem; font-size: 0.75rem; font-weight: 600; color: var(--gray-900); border: 1px solid rgba(0,0,0,.05); }
.bo-chip.-dark { color: var(--neutral-50); }
@media (prefers-color-scheme: dark) {
  .bo-swatch { border-color: var(--gray-700); background: var(--gray-800); }
  .bo-swatch__title { border-bottom-color: var(--gray-700); }
  .bo-chip { border-color: rgba(255,255,255,.08); }
}
</style>

<div class="bo-swatches">
  <div class="bo-swatch">
    <div class="bo-swatch__title">Blue</div>
    <div class="bo-swatch__row">
      <div class="bo-chip" style="background: var(--blue-50)">50</div>
      <div class="bo-chip" style="background: var(--blue-100)">100</div>
      <div class="bo-chip" style="background: var(--blue-200)">200</div>
      <div class="bo-chip" style="background: var(--blue-300)">300</div>
      <div class="bo-chip -dark" style="background: var(--blue-400)">400</div>
      <div class="bo-chip -dark" style="background: var(--blue-500)">500</div>
      <div class="bo-chip -dark" style="background: var(--blue-600)">600</div>
      <div class="bo-chip -dark" style="background: var(--blue-700)">700</div>
      <div class="bo-chip -dark" style="background: var(--blue-800)">800</div>
      <div class="bo-chip -dark" style="background: var(--blue-900)">900</div>
      <div class="bo-chip -dark" style="background: var(--blue-950)">950</div>
    </div>
  </div>

  <div class="bo-swatch">
    <div class="bo-swatch__title">Neutral</div>
    <div class="bo-swatch__row">
      <div class="bo-chip" style="background: var(--neutral-50)">50</div>
      <div class="bo-chip" style="background: var(--neutral-100)">100</div>
      <div class="bo-chip" style="background: var(--neutral-200)">200</div>
      <div class="bo-chip" style="background: var(--neutral-300)">300</div>
      <div class="bo-chip" style="background: var(--neutral-400)">400</div>
      <div class="bo-chip -dark" style="background: var(--neutral-500)">500</div>
      <div class="bo-chip -dark" style="background: var(--neutral-600)">600</div>
      <div class="bo-chip -dark" style="background: var(--neutral-700)">700</div>
      <div class="bo-chip -dark" style="background: var(--neutral-800)">800</div>
      <div class="bo-chip -dark" style="background: var(--neutral-900)">900</div>
      <div class="bo-chip -dark" style="background: var(--neutral-950)">950</div>
    </div>
  </div>

  <div class="bo-swatch">
    <div class="bo-swatch__title">Gray</div>
    <div class="bo-swatch__row">
      <div class="bo-chip" style="background: var(--gray-50)">50</div>
      <div class="bo-chip" style="background: var(--gray-100)">100</div>
      <div class="bo-chip" style="background: var(--gray-200)">200</div>
      <div class="bo-chip" style="background: var(--gray-300)">300</div>
      <div class="bo-chip" style="background: var(--gray-400)">400</div>
      <div class="bo-chip -dark" style="background: var(--gray-500)">500</div>
      <div class="bo-chip -dark" style="background: var(--gray-600)">600</div>
      <div class="bo-chip -dark" style="background: var(--gray-700)">700</div>
      <div class="bo-chip -dark" style="background: var(--gray-800)">800</div>
      <div class="bo-chip -dark" style="background: var(--gray-900)">900</div>
      <div class="bo-chip -dark" style="background: var(--gray-950)">950</div>
    </div>
  </div>

  <div class="bo-swatch">
    <div class="bo-swatch__title">Green</div>
    <div class="bo-swatch__row">
      <div class="bo-chip" style="background: var(--green-50)">50</div>
      <div class="bo-chip" style="background: var(--green-100)">100</div>
      <div class="bo-chip" style="background: var(--green-200)">200</div>
      <div class="bo-chip" style="background: var(--green-300)">300</div>
      <div class="bo-chip" style="background: var(--green-400)">400</div>
      <div class="bo-chip -dark" style="background: var(--green-500)">500</div>
      <div class="bo-chip -dark" style="background: var(--green-600)">600</div>
      <div class="bo-chip -dark" style="background: var(--green-700)">700</div>
      <div class="bo-chip -dark" style="background: var(--green-800)">800</div>
      <div class="bo-chip -dark" style="background: var(--green-900)">900</div>
      <div class="bo-chip -dark" style="background: var(--green-950)">950</div>
    </div>
  </div>

  <div class="bo-swatch">
    <div class="bo-swatch__title">Yellow</div>
    <div class="bo-swatch__row">
      <div class="bo-chip" style="background: var(--yellow-50)">50</div>
      <div class="bo-chip" style="background: var(--yellow-100)">100</div>
      <div class="bo-chip" style="background: var(--yellow-200)">200</div>
      <div class="bo-chip" style="background: var(--yellow-300)">300</div>
      <div class="bo-chip" style="background: var(--yellow-400)">400</div>
      <div class="bo-chip -dark" style="background: var(--yellow-500)">500</div>
      <div class="bo-chip -dark" style="background: var(--yellow-600)">600</div>
      <div class="bo-chip -dark" style="background: var(--yellow-700)">700</div>
      <div class="bo-chip -dark" style="background: var(--yellow-800)">800</div>
      <div class="bo-chip -dark" style="background: var(--yellow-900)">900</div>
      <div class="bo-chip -dark" style="background: var(--yellow-950)">950</div>
    </div>
  </div>

  <div class="bo-swatch">
    <div class="bo-swatch__title">Red</div>
    <div class="bo-swatch__row">
      <div class="bo-chip" style="background: var(--red-50)">50</div>
      <div class="bo-chip" style="background: var(--red-100)">100</div>
      <div class="bo-chip" style="background: var(--red-200)">200</div>
      <div class="bo-chip" style="background: var(--red-300)">300</div>
      <div class="bo-chip -dark" style="background: var(--red-400)">400</div>
      <div class="bo-chip -dark" style="background: var(--red-500)">500</div>
      <div class="bo-chip -dark" style="background: var(--red-600)">600</div>
      <div class="bo-chip -dark" style="background: var(--red-700)">700</div>
      <div class="bo-chip -dark" style="background: var(--red-800)">800</div>
      <div class="bo-chip -dark" style="background: var(--red-900)">900</div>
      <div class="bo-chip -dark" style="background: var(--red-950)">950</div>
    </div>
  </div>
</div>
<div class="bo-swatches" style="margin-top: .75rem;">
  <div class="bo-swatch"><div class="bo-swatch__title">Slate</div><div class="bo-swatch__row">
    <div class="bo-chip" style="background: var(--slate-50)">50</div><div class="bo-chip" style="background: var(--slate-100)">100</div><div class="bo-chip" style="background: var(--slate-200)">200</div><div class="bo-chip" style="background: var(--slate-300)">300</div><div class="bo-chip" style="background: var(--slate-400)">400</div><div class="bo-chip -dark" style="background: var(--slate-500)">500</div><div class="bo-chip -dark" style="background: var(--slate-600)">600</div><div class="bo-chip -dark" style="background: var(--slate-700)">700</div><div class="bo-chip -dark" style="background: var(--slate-800)">800</div><div class="bo-chip -dark" style="background: var(--slate-900)">900</div><div class="bo-chip -dark" style="background: var(--slate-950)">950</div>
  </div></div>
  <div class="bo-swatch"><div class="bo-swatch__title">Zinc</div><div class="bo-swatch__row">
    <div class="bo-chip" style="background: var(--zinc-50)">50</div><div class="bo-chip" style="background: var(--zinc-100)">100</div><div class="bo-chip" style="background: var(--zinc-200)">200</div><div class="bo-chip" style="background: var(--zinc-300)">300</div><div class="bo-chip" style="background: var(--zinc-400)">400</div><div class="bo-chip -dark" style="background: var(--zinc-500)">500</div><div class="bo-chip -dark" style="background: var(--zinc-600)">600</div><div class="bo-chip -dark" style="background: var(--zinc-700)">700</div><div class="bo-chip -dark" style="background: var(--zinc-800)">800</div><div class="bo-chip -dark" style="background: var(--zinc-900)">900</div><div class="bo-chip -dark" style="background: var(--zinc-950)">950</div>
  </div></div>
  <div class="bo-swatch"><div class="bo-swatch__title">Stone</div><div class="bo-swatch__row">
    <div class="bo-chip" style="background: var(--stone-50)">50</div><div class="bo-chip" style="background: var(--stone-100)">100</div><div class="bo-chip" style="background: var(--stone-200)">200</div><div class="bo-chip" style="background: var(--stone-300)">300</div><div class="bo-chip" style="background: var(--stone-400)">400</div><div class="bo-chip -dark" style="background: var(--stone-500)">500</div><div class="bo-chip -dark" style="background: var(--stone-600)">600</div><div class="bo-chip -dark" style="background: var(--stone-700)">700</div><div class="bo-chip -dark" style="background: var(--stone-800)">800</div><div class="bo-chip -dark" style="background: var(--stone-900)">900</div><div class="bo-chip -dark" style="background: var(--stone-950)">950</div>
  </div></div>

  <div class="bo-swatch"><div class="bo-swatch__title">Cyan</div><div class="bo-swatch__row">
    <div class="bo-chip" style="background: var(--cyan-50)">50</div><div class="bo-chip" style="background: var(--cyan-100)">100</div><div class="bo-chip" style="background: var(--cyan-200)">200</div><div class="bo-chip" style="background: var(--cyan-300)">300</div><div class="bo-chip" style="background: var(--cyan-400)">400</div><div class="bo-chip -dark" style="background: var(--cyan-500)">500</div><div class="bo-chip -dark" style="background: var(--cyan-600)">600</div><div class="bo-chip -dark" style="background: var(--cyan-700)">700</div><div class="bo-chip -dark" style="background: var(--cyan-800)">800</div><div class="bo-chip -dark" style="background: var(--cyan-900)">900</div><div class="bo-chip -dark" style="background: var(--cyan-950)">950</div>
  </div></div>
  <div class="bo-swatch"><div class="bo-swatch__title">Sky</div><div class="bo-swatch__row">
    <div class="bo-chip" style="background: var(--sky-50)">50</div><div class="bo-chip" style="background: var(--sky-100)">100</div><div class="bo-chip" style="background: var(--sky-200)">200</div><div class="bo-chip" style="background: var(--sky-300)">300</div><div class="bo-chip" style="background: var(--sky-400)">400</div><div class="bo-chip -dark" style="background: var(--sky-500)">500</div><div class="bo-chip -dark" style="background: var(--sky-600)">600</div><div class="bo-chip -dark" style="background: var(--sky-700)">700</div><div class="bo-chip -dark" style="background: var(--sky-800)">800</div><div class="bo-chip -dark" style="background: var(--sky-900)">900</div><div class="bo-chip -dark" style="background: var(--sky-950)">950</div>
  </div></div>
  <div class="bo-swatch"><div class="bo-swatch__title">Indigo</div><div class="bo-swatch__row">
    <div class="bo-chip" style="background: var(--indigo-50)">50</div><div class="bo-chip" style="background: var(--indigo-100)">100</div><div class="bo-chip" style="background: var(--indigo-200)">200</div><div class="bo-chip" style="background: var(--indigo-300)">300</div><div class="bo-chip" style="background: var(--indigo-400)">400</div><div class="bo-chip -dark" style="background: var(--indigo-500)">500</div><div class="bo-chip -dark" style="background: var(--indigo-600)">600</div><div class="bo-chip -dark" style="background: var(--indigo-700)">700</div><div class="bo-chip -dark" style="background: var(--indigo-800)">800</div><div class="bo-chip -dark" style="background: var(--indigo-900)">900</div><div class="bo-chip -dark" style="background: var(--indigo-950)">950</div>
  </div></div>
  <div class="bo-swatch"><div class="bo-swatch__title">Violet</div><div class="bo-swatch__row">
    <div class="bo-chip" style="background: var(--violet-50)">50</div><div class="bo-chip" style="background: var(--violet-100)">100</div><div class="bo-chip" style="background: var(--violet-200)">200</div><div class="bo-chip" style="background: var(--violet-300)">300</div><div class="bo-chip" style="background: var(--violet-400)">400</div><div class="bo-chip -dark" style="background: var(--violet-500)">500</div><div class="bo-chip -dark" style="background: var(--violet-600)">600</div><div class="bo-chip -dark" style="background: var(--violet-700)">700</div><div class="bo-chip -dark" style="background: var(--violet-800)">800</div><div class="bo-chip -dark" style="background: var(--violet-900)">900</div><div class="bo-chip -dark" style="background: var(--violet-950)">950</div>
  </div></div>
  <div class="bo-swatch"><div class="bo-swatch__title">Purple</div><div class="bo-swatch__row">
    <div class="bo-chip" style="background: var(--purple-50)">50</div><div class="bo-chip" style="background: var(--purple-100)">100</div><div class="bo-chip" style="background: var(--purple-200)">200</div><div class="bo-chip" style="background: var(--purple-300)">300</div><div class="bo-chip" style="background: var(--purple-400)">400</div><div class="bo-chip -dark" style="background: var(--purple-500)">500</div><div class="bo-chip -dark" style="background: var(--purple-600)">600</div><div class="bo-chip -dark" style="background: var(--purple-700)">700</div><div class="bo-chip -dark" style="background: var(--purple-800)">800</div><div class="bo-chip -dark" style="background: var(--purple-900)">900</div><div class="bo-chip -dark" style="background: var(--purple-950)">950</div>
  </div></div>
  <div class="bo-swatch"><div class="bo-swatch__title">Fuchsia</div><div class="bo-swatch__row">
    <div class="bo-chip" style="background: var(--fuchsia-50)">50</div><div class="bo-chip" style="background: var(--fuchsia-100)">100</div><div class="bo-chip" style="background: var(--fuchsia-200)">200</div><div class="bo-chip" style="background: var(--fuchsia-300)">300</div><div class="bo-chip" style="background: var(--fuchsia-400)">400</div><div class="bo-chip -dark" style="background: var(--fuchsia-500)">500</div><div class="bo-chip -dark" style="background: var(--fuchsia-600)">600</div><div class="bo-chip -dark" style="background: var(--fuchsia-700)">700</div><div class="bo-chip -dark" style="background: var(--fuchsia-800)">800</div><div class="bo-chip -dark" style="background: var(--fuchsia-900)">900</div><div class="bo-chip -dark" style="background: var(--fuchsia-950)">950</div>
  </div></div>
  <div class="bo-swatch"><div class="bo-swatch__title">Pink</div><div class="bo-swatch__row">
    <div class="bo-chip" style="background: var(--pink-50)">50</div><div class="bo-chip" style="background: var(--pink-100)">100</div><div class="bo-chip" style="background: var(--pink-200)">200</div><div class="bo-chip" style="background: var(--pink-300)">300</div><div class="bo-chip -dark" style="background: var(--pink-400)">400</div><div class="bo-chip -dark" style="background: var(--pink-500)">500</div><div class="bo-chip -dark" style="background: var(--pink-600)">600</div><div class="bo-chip -dark" style="background: var(--pink-700)">700</div><div class="bo-chip -dark" style="background: var(--pink-800)">800</div><div class="bo-chip -dark" style="background: var(--pink-900)">900</div><div class="bo-chip -dark" style="background: var(--pink-950)">950</div>
  </div></div>
  <div class="bo-swatch"><div class="bo-swatch__title">Rose</div><div class="bo-swatch__row">
    <div class="bo-chip" style="background: var(--rose-50)">50</div><div class="bo-chip" style="background: var(--rose-100)">100</div><div class="bo-chip" style="background: var(--rose-200)">200</div><div class="bo-chip" style="background: var(--rose-300)">300</div><div class="bo-chip -dark" style="background: var(--rose-400)">400</div><div class="bo-chip -dark" style="background: var(--rose-500)">500</div><div class="bo-chip -dark" style="background: var(--rose-600)">600</div><div class="bo-chip -dark" style="background: var(--rose-700)">700</div><div class="bo-chip -dark" style="background: var(--rose-800)">800</div><div class="bo-chip -dark" style="background: var(--rose-900)">900</div><div class="bo-chip -dark" style="background: var(--rose-950)">950</div>
  </div></div>
  <div class="bo-swatch"><div class="bo-swatch__title">Amber</div><div class="bo-swatch__row">
    <div class="bo-chip" style="background: var(--amber-50)">50</div><div class="bo-chip" style="background: var(--amber-100)">100</div><div class="bo-chip" style="background: var(--amber-200)">200</div><div class="bo-chip" style="background: var(--amber-300)">300</div><div class="bo-chip" style="background: var(--amber-400)">400</div><div class="bo-chip -dark" style="background: var(--amber-500)">500</div><div class="bo-chip -dark" style="background: var(--amber-600)">600</div><div class="bo-chip -dark" style="background: var(--amber-700)">700</div><div class="bo-chip -dark" style="background: var(--amber-800)">800</div><div class="bo-chip -dark" style="background: var(--amber-900)">900</div><div class="bo-chip -dark" style="background: var(--amber-950)">950</div>
  </div></div>
  <div class="bo-swatch"><div class="bo-swatch__title">Lime</div><div class="bo-swatch__row">
    <div class="bo-chip" style="background: var(--lime-50)">50</div><div class="bo-chip" style="background: var(--lime-100)">100</div><div class="bo-chip" style="background: var(--lime-200)">200</div><div class="bo-chip" style="background: var(--lime-300)">300</div><div class="bo-chip" style="background: var(--lime-400)">400</div><div class="bo-chip -dark" style="background: var(--lime-500)">500</div><div class="bo-chip -dark" style="background: var(--lime-600)">600</div><div class="bo-chip -dark" style="background: var(--lime-700)">700</div><div class="bo-chip -dark" style="background: var(--lime-800)">800</div><div class="bo-chip -dark" style="background: var(--lime-900)">900</div><div class="bo-chip -dark" style="background: var(--lime-950)">950</div>
  </div></div>
  <div class="bo-swatch"><div class="bo-swatch__title">Teal</div><div class="bo-swatch__row">
    <div class="bo-chip" style="background: var(--teal-50)">50</div><div class="bo-chip" style="background: var(--teal-100)">100</div><div class="bo-chip" style="background: var(--teal-200)">200</div><div class="bo-chip" style="background: var(--teal-300)">300</div><div class="bo-chip" style="background: var(--teal-400)">400</div><div class="bo-chip -dark" style="background: var(--teal-500)">500</div><div class="bo-chip -dark" style="background: var(--teal-600)">600</div><div class="bo-chip -dark" style="background: var(--teal-700)">700</div><div class="bo-chip -dark" style="background: var(--teal-800)">800</div><div class="bo-chip -dark" style="background: var(--teal-900)">900</div><div class="bo-chip -dark" style="background: var(--teal-950)">950</div>
  </div></div>
  <div class="bo-swatch"><div class="bo-swatch__title">Emerald</div><div class="bo-swatch__row">
    <div class="bo-chip" style="background: var(--emerald-50)">50</div><div class="bo-chip" style="background: var(--emerald-100)">100</div><div class="bo-chip" style="background: var(--emerald-200)">200</div><div class="bo-chip" style="background: var(--emerald-300)">300</div><div class="bo-chip" style="background: var(--emerald-400)">400</div><div class="bo-chip -dark" style="background: var(--emerald-500)">500</div><div class="bo-chip -dark" style="background: var(--emerald-600)">600</div><div class="bo-chip -dark" style="background: var(--emerald-700)">700</div><div class="bo-chip -dark" style="background: var(--emerald-800)">800</div><div class="bo-chip -dark" style="background: var(--emerald-900)">900</div><div class="bo-chip -dark" style="background: var(--emerald-950)">950</div>
  </div></div>
</div>
