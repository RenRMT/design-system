# REN Data design system

REN Data is a one-person data analysis practice working for the international development, humanitarian and NGO sector: data pipelines, quality checks on aid data (IATI, HDX, ACAPS), and chart styling tools. Factual and to the point, but personal: **data work is people work.** The design system has to read like a careful analyst wrote it, and like one specific person did.

## Sources
- https://github.com/RenRMT/RenRMT.github.io — rendata.nl, Jekyll + "Getij" theme (`assets/css/getij.css`, `_layouts/`, `_includes/`, `_projects/`). Primary source for UI, tokens and copy.
- https://github.com/RenRMT/style-guide — data-visualisation style guide (just-the-docs, `_sass/color_schemes/ren.scss`, `_data/palette.json`, `docs/`). Source for colour rules, typography rules, chart icons, callouts.
- https://github.com/RenRMT/color-picker — palette viewer (`index.html`, `ren.json`). Source of truth for colour values.

Explore these repos further when building something new; the style guide's `docs/` folder in particular holds the chart and map rules this system only summarises.

## Products
- **rendata.nl** — personal hub: Home, Work, Play, Blog, About, 404. Sidebar layout, light/dark.
- **Style guide** (rendata.nl/style-guide) — docs site for charts and maps.
- **Colour picker** (rendata.nl/color-picker) — swatches, ramps, sequential and diverging builders, CSS export.

## Index
- `styles.css` — entry point; imports `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`
- `fonts/` — IBM Plex Sans, IBM Plex Mono, Newsreader (woff2, latin)
- `assets/img/avatar.png` — illustrated portrait; `assets/icons/` — chart-type and brand PNGs; `assets/examples/chart-anatomy.svg`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (below)
- `ui_kits/website/` — rendata.nl click-through
- `ui_kits/style-guide/` — style guide + colour picker click-through
- `SKILL.md`, `github.md`
- `site/` — public docs site (Overview, Tokens, Components, Patterns, Pages); `index.html` at the root redirects to it

## Publishing the docs site
Push the whole project to the `design-system` repo, then Settings → Pages → Deploy from branch → `main` / root. `.nojekyll` must stay: without it GitHub Pages hides `_ds_bundle.js`. Tokens and props are read live from `tokens/*.css` and `components/**/*.d.ts`; component examples live in `site/components.js` and `site/patterns.js`. After changing components, re-export so the committed `_ds_bundle.js` is current.

## Components
- core: **Button**, **Tag**, **Chip** (+ **ChipRow**), **Eyebrow**
- navigation: **Sidebar**, **ThemeToggle**, **SectionHead**
- content: **ProjectCard**, **PostList**, **BigNumber**, **Callout**, **RulePair**, **ProjectNote**, **Swatch**
- feedback: **Alert**, **EmptyState**, **Tide**
- forms: **Select**

All map to markup in the source repos (sidebar.html, project-card.html, post-list.html, tag-filters.html, `.ban`, `.rules`, just-the-docs callouts, colour-picker `.color-box` / `.alert` / `.select`, 404 tide SVG).

### Intentional additions / changes
- **Eyebrow** and **SectionHead** are extracted from repeated markup (`.eyebrow`, `.section__head`) so they can be reused.
- **Button `quiet`** and **`busy`**: the source has only primary and outline; a tertiary and a working state were needed for priority and loading.
- **ProjectNote** drops the source's coral left border (an overused pattern); it uses a coral square in the eyebrow instead.
- **ProjectCard** drops the `translateY(-2px)` hover lift; hover is a coral border and an underlined title.

---

## Content fundamentals

**Voice.** First person singular, always. "I build tools that make aid data work." "How I make charts and maps." Never "we", never "our team". The reader is "you" when being instructed ("Use one colour, plus grey…").

**Register.** Plain, declarative, specific. Sentences state facts and rules; they don't sell. Benefit claims are concrete ("runs the quality checks IATI's own validator doesn't make"), not adjectives.

**Casing.** Sentence case everywhere: titles, buttons, nav, chart titles. ALL CAPS only for short mono labels (eyebrows, callout keys). British spelling (colour, visualisation, organisation).

**Titles carry the message.** From the style guide: "Incidents fell by a third after the ceasefire", not "Incidents per month". Section headings are nouns ("Work", "Latest writing", "Elsewhere").

**Links name their destination.** "All work projects", "All posts", "← All posts", "Let's talk". Not "Learn more".

**Numbers are real.** Untidy, sourced, with units and period: "112 · Security incidents, March 2026 · +24% on the 12-month average". Perspective sentences: "About 1 in every 4 planned missions". Always a + or − with an arrow.

**Small humour, only in dead ends.** The 404: "This page drifted out with the tide. … It might wash up somewhere below." That's the ceiling.

**Errors say exactly what's wrong.** `Section "Data colours": no colour called "Corall".`

**No emoji.** Unicode used functionally only: ▲ ▼ for trends, · as a separator, ← for back, — in summaries.

---

## Visual foundations

**Colour.** Primary Teal `#1C6758` is the brand; Coral `#FF9779` is the single accent and means "look here" (primary button, active nav square, focus ring, selection, link hover underline). Everything else is neutral: page `#F9F9F9`, surface white, sidebar teal-tint `#EEF4F2`, hairlines `#D6E7E4`. Data colours (Teal, Jasmine, Baltic, Coral, Sky, Cherry, Blush, Violet + Steel) are a separate, colour-blind-checked set; used only on data, in a fixed order. Default chart: one Teal, everything else Steel. Dark mode is deep teal (`#0F2723`) with the same coral.

**Type.** Three families, each with one job:
- *Newsreader* (serif) — the voice: hero, h1, h2, pull quotes, sign-offs. Weight 500, slight negative tracking. This is the personal layer added over the source site.
- *IBM Plex Sans* — reading, UI and charts. Tabular figures on. h3 and UI labels are Plex Sans 600.
- *IBM Plex Mono* — metadata: dates, years, tags, eyebrows, units, sources.
Hierarchy goes serif → sans semibold → mono, so levels look different, not just smaller.

**Spacing.** Rhythmic. Eyebrow→title 6–10px, title→lead 18px, inside cards 6px, card gap 20px, section head→content 16px, between sections 56px, page padding 64/72/96. Values are the source's exact numbers, not snapped to a grid.

**Layout.** 272px sticky sidebar + content column capped at 1100px; text measure 66ch. Deliberate imbalance: hero text sits in a 640px column with a narrow margin note beside it; About pairs prose with a small portrait. Under 860px the sidebar becomes a top bar.

**Backgrounds & imagery.** Flat colour only. No gradients, no textures, no full-bleed photography. The one illustration is the avatar (flat, coral and peach). Missing images show diagonal teal hatching (`repeating-linear-gradient 135deg`), errors show cherry hatching. Project images, when real, are screenshots of the work.

**Corners.** 3px is the maximum anywhere. Square-cornered markers, 3px for cards, figures, swatches, code, selects, alerts and the theme toggle, 0 for buttons, filter tabs and tag keys. Only the avatar is round.

**Borders & shadows.** 1px hairlines in `--line`; `--line-strong` for rules above callouts. No drop shadows anywhere (the style guide forbids them on charts; the UI follows). Swatches use a 6% inset hairline so light colours hold their edge. BAN cards carry a 4px top rule in teal.

**Cards.** Only for things that are discrete objects (projects, BANs). White surface, 1px line, 3px radius, no shadow. Lists, posts, callouts and rules are ruled lines, not cards.

**Hover.** Links: underline thickens to 2px and turns coral. Buttons: primary goes lighter coral; outline buttons never fill, the outline thickens from 1.5px to 2px. Cards: border turns coral and title underlines. Non-interactive things never react.

**Press / focus.** No shrink. Focus is a 2px coral outline with 2px offset.

**Motion.** Almost none: 0.15s colour/border transitions, 0.2s theme toggle. The 404 tide waves and bobbing bottle are the only animation. `prefers-reduced-motion` turns everything off.

**Transparency & blur.** Not used.

**Filters and tags.** Filters are underline tabs (Plex Sans, coral 3px underline on the active one, 1px baseline rule under the row). Tags are legend entries: a 6px Teal 4 square plus mono text, no container.

**Signature motifs.** The coral square (one highlighted data point among grey ones), mono metadata, hatching for absence, the tide.

---

## Iconography

There is no UI icon set and none should be added. Navigation and headings use the coral square, not icons. The only icons are the style guide's **chart-type PNGs** (`assets/icons/i_chart_*.png`: vbar, hbar, line, area, stacked, 100% area, scatter, bubble, lollipop, box-whisker, pie, donut, treemap) and four brand-colour swatches (`i_brand_*.png`), used to label chart types in docs and the Excel add-in. The style guide repo also holds ~50 `i_div_*` / sequential PNGs that preview diverging and sequential ramps; they weren't copied (pull them from `style-guide/assets/icons/` if needed). No emoji. Unicode arrows ▲ ▼ ← only where they carry meaning.

## Logo

No logo exists in the sources. The mark is the name **REN Data** set in Newsreader 600 in Primary Teal, optionally with the avatar above it. Don't draw one.

## Fonts

All three families are Google Fonts, copied in as woff2 (latin subset). The live site uses IBM Plex only; **Newsreader is a new addition** for the personal voice. Office work uses Calibri or Aptos per the style guide.
