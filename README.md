# NearbyBizFinder (Next.js)

## Prerequisites
- Node 18+
- npm 9+

## Setup
1. Install dependencies:
   - Windows: `npm install`
   - CI/Unix: `npm ci`
2. Create `.env.local` with:
   - `NEXT_PUBLIC_SUPABASE_URL=`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY=`

## Scripts
- `npm run dev` – Start dev server
- `npm run build` – Build static export to `out/`
- `npm run preview` – Serve `out/` locally at :3000
- `npm run type-check` – TypeScript check
- `npm run lint` – ESLint check
- `npm run format` – Prettier check
- `npm run format:write` – Prettier write
- `npm run check` – Type-check + lint + format

## Production build
```
npm run build
```
Artifacts in `out/` are static and can be hosted on any static host.
## CI
GitHub Actions runs lint, type-check, and build on PRs to `main`.

## Notes
- Next `output: 'export'` with `images.unoptimized: true` is configured for static hosting.
- If you add dynamic data, ensure it’s built-time or use client-side fetching.
