# Terry AI Lab — AI Agent Repositioning V2 QA

source visual truth: `SPEC_AI_AGENT_REPOSITIONING_V2.md` (written product/design specification)
implementation: `http://127.0.0.1:4173/?v=spec-v2`
implementation screenshots:

- `design-qa/mobile-home-final.png`
- `design-qa/mobile-cases-final.png`
- `design-qa/mobile-comparison-final.png`

## Capture details

- CSS viewport: 390 × 844
- Browser screenshot pixels: 375 × 812
- Device pixel ratio: 1
- Density normalization: none required for the captured browser output; the in-app browser capture is 375 × 812 while the responsive CSS viewport reports 390 × 844.
- State: Traditional Chinese homepage, mobile breakpoint; problem 01 initially selected. A separate English switch and Marketing problem state were tested.
- Full-view evidence: `mobile-home-final.png` verifies the centered Hero, six-option selector and prominent yellow CTA. `mobile-cases-final.png` verifies the product panels and evidence-led section transition.
- Focused evidence: `mobile-comparison-final.png` verifies the stacked comparison cards with「我們」first and visually featured. Case assets and video were also checked through DOM/media state after scrolling into view.

## Spec checks

- Hero now states business diagnosis first and AI Agent execution second.
- Hero problem selector contains six visible options, including Marketing, and the Marketing state points to the sample section.
- Product section sits between Hero and cases/comparison and presents two connected parts: consultant diagnosis and AI Agent build.
- Case evidence includes the supplied before/after Meta dashboard captures (`marketing-before-cost-92.png` and `marketing-after-cost-34.png`), `$92.52 → $34.58`, `62.6%`, a campaign disclaimer, three redacted operations images, and a labelled 9:16 sample video.
- Comparison uses 企業教練 / AI 公司 / 我們, with「方向 + 工具 + 成果」and the featured route first on mobile.
- Delivery method is one connected four-step flow: 釐清 / 設計 / 建置 / 交付.
- Five supplied Instagram covers render as non-linked editorial cards with no fake play controls or profile link.
- Offer is `USD 500` for `1 個 Workflow`; old `USD 3,500`, `HK$6,800`, `3–4 星期` and `14 日試行` strings are absent from rendered homepage copy.
- English toggle switches the complete homepage copy and keeps `USD 500` consistent.
- Mobile body width does not exceed the viewport; the six problem options and stacked comparison cards are visible without horizontal scrolling.
- All operations captions state that private data is redacted. No customer names, phone numbers, lead IDs or job IDs are rendered as copy.

## Required fidelity surfaces

- Fonts and typography: display hierarchy uses the existing Noto Sans TC / Manrope system; hero, section titles, metric values and monospace labels retain the established weight and tracking contrast. Mobile wrapping was checked visually.
- Spacing and layout rhythm: sections follow the specified order and use a deliberate dark/light alternation. The product panels stack on mobile, and the comparison no longer relies on a hidden horizontal table.
- Colors and visual tokens: the existing navy/cyan/yellow system is preserved; consultant is restrained blue, Agent is cyan/navy, and「我們」has the strongest cyan contrast and badge.
- Image quality and asset fidelity: the five supplied covers and three privacy-safe evidence images are used as raster assets; the sample video loads metadata and reports a 30.08s duration with controls, inline playback and a poster.
- Copy and content: rendered Traditional Chinese and English were checked for missing values, stale prices, untranslated fragments and `undefined` output.

## Interaction and technical checks

- Problem tab interaction: clicking 06 updates the current/improved result and exposes `#marketing-sample`.
- Language switch: `zh-Hant` ↔ `en` verified; no `undefined`, stale pricing or accidental Chinese fragments in English state.
- Mobile menu: opens with five navigation links and correct `aria-expanded` state.
- Browser console: no error or warning entries during the checked states.
- Source syntax: `node --check src/main.js` passed; `git diff --check` passed.
- Vinext build generated `dist/client` and `dist/server` assets, but the local Vinext/Cloudflare build process did not terminate within the available wait window. This is an environment/tooling warning, not a rendered spec mismatch; the static local preview and browser checks completed.

## Comparison history

1. Initial implementation review found the old five-option horizontal mobile selector and horizontal comparison table still present in the inherited CSS. The implementation was changed to a 3 × 2 mobile problem grid and dedicated stacked comparison cards.
2. A first asset check showed the Python-only preview did not map `public/` to root URLs. Temporary preview aliases were used for verification, all three redacted images and the video were then confirmed loaded, and the aliases were removed from the source tree.
3. Final browser pass showed six problem tabs, no mobile overflow, featured「我們」first, accurate metrics, USD 500, five non-linked covers, and no console errors.

## Findings

No actionable P0, P1 or P2 findings remain against the written V2 spec.

## Follow-up polish

- The in-app browser capture backend stayed at a 390 × 844 CSS viewport / 375 × 812 screenshot surface, so a wider desktop screenshot should be captured in a full desktop browser before a production release review.
- The third historical ad capture was not retained by the temporary upload path, so the card intentionally shows the two primary before/after captures only; the evidence copy remains conservative and source-disclosed.

final result: passed
