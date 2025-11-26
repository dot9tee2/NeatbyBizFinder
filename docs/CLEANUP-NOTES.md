Post‑migration cleanup (Supabase → Sanity)

What changed
- Listings source of truth moved to Sanity
- Supabase remains for auth only
- Import tool removed; you can create/publish directly in Studio

Environment
- NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET
- SANITY_API_READ_TOKEN (for server fetches if needed)
- SANITY_REVALIDATE_SECRET (for /api/revalidate webhook)
- NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY (auth only)

Recommended DB tasks (Supabase)
- Export businesses table (backup)
- Set RLS deny‑all on businesses; plan deletion later
- Keep profiles/roles; ensure admin users flagged
- If adding reviews later: create reviews table with RLS (approved‑only readable)

Sanity hygiene
- Keep category and business slugs unique
- Optional: add Studio action to geocode address → geopoint
- Webhook: POST /api/revalidate with x-revalidate-secret

Code
- All pages now read from Sanity
- /business pages are noindex
- /studio mounted; access controlled by Sanity


