# Landing-page validation

Verified October 2, 2026 against a production build served at `http://127.0.0.1:3107`.

| Page | Design | Main-content words | FAQs |
| --- | --- | ---: | ---: |
| San Jose | Dark navy/gold, full-bleed hero, serif editorial layout | 1,692 | 8 |
| Santa Clara | Ivory/teal, sans-serif typography, photo collage, ruled service rows | 1,518 | 8 |
| Milpitas | Cream/forest/terracotta, offset aerial hero, rounded modular panels | 1,586 | 8 |

Word counts include each page's FAQ answers and exclude the header and footer. All service categories are described on every page, with different organization, planning copy, and FAQ wording. Portfolio captions identify their published source properties rather than implying they are all in the target city.

## Checks passed

- `npm run build`: all three routes prerender successfully; TypeScript passes.
- Focused ESLint validation of the new pages, shared helper, business manifest, and directory component, with zero warnings. Command: `node node_modules/eslint/bin/eslint.js --config research/san-jose-real-estate-photos/eslint.config.cjs app/businesses/san-jose-real-estate-photos lib/san-jose-real-estate-photos.ts lib/businesses-manifest.ts components/businesses/business-directory.tsx --max-warnings 0`.
- Prettier checks pass for the three new pages, shared helper, and business manifest.
- All three routes return HTTP 200 with distinct titles, descriptions, canonical URLs, and social images.
- Each page has one H1 and eight FAQ entries; rendered questions and answers exactly match the FAQ JSON-LD.
- Shared business identity and contact information are consistent. Social Launchpad has a separate strategy-call offer URL.
- All three routes appear in the business directory and business sitemap; robots advertises the sitemap.
- No horizontal overflow at 320px, 768px, or 1440px on any page. Additional 390px phone checks passed.
- Actual desktop screenshots and the Milpitas phone screenshot were inspected. Desktop captures are saved beside this file.
- Native FAQ interaction opens with a click and closes with Enter on all three pages.
- Portfolio anchor navigation scrolls to its section and lazy portfolio images load.
- Keyboard focus indicators are visible on Milpitas's terracotta panel, Santa Clara's dark contact section, and San Jose's light FAQ section; computed colors were checked in the browser.
- All seven referenced local image assets exist. Images use optimized Next.js rendering and accurate alternate text.
- `git diff --check` passes.

## Existing repository limitations

The default `npm run lint` command expects a legacy ESLint configuration while the installed ESLint 9 requires a flat configuration. The focused command above uses the installed Next.js presets. The directory component already failed the current Prettier check at HEAD before these changes; its unrelated formatting was preserved.

The build reports existing middleware-convention and Sanity image-helper deprecations. The existing sitemap generator omits trailing slashes; canonical URLs follow the application's configured trailing-slash format.
