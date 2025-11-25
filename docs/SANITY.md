Setup for Sanity CMS

1) Environment variables
- SANITY_PROJECT_ID
- SANITY_DATASET (e.g. production)
- SANITY_API_READ_TOKEN (read)
- SANITY_API_WRITE_TOKEN (optional for import tool)
- SANITY_REVALIDATE_SECRET (optional for webhook auth)
- NEXT_PUBLIC_ADMIN_EMAILS (optional; not required if relying on Sanity access control)

2) Run Studio
- Visit /studio (access is controlled by your Sanity project permissions)

3) Import one-time from Supabase
- Go to /admin/import and click Import on your listing

4) Webhooks
- Configure a Sanity webhook to POST to /api/revalidate with header x-revalidate-secret = SANITY_REVALIDATE_SECRET

5) Queries
- Home and category pages read from Sanity with fallback to Supabase/mock


