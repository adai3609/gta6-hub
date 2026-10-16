# GTA 6 Hub

Unofficial fan-made GTA 6 data + tools site. Static Next.js build targeting
Google organic search for GTA 6 long-tail keywords. English content only.

## Stack

- Next.js 15 (App Router, `output: 'export'` — fully static)
- TypeScript (strict, `noUncheckedIndexedAccess`)
- Tailwind CSS 3.4
- lucide-react icons
- Zero copyrighted assets — CSS-only art direction

## Run

```bash
pnpm install
pnpm dev        # local dev
pnpm build      # static export to ./out
pnpm typecheck  # tsc --noEmit
```

## Deploy (Vercel)

1. Push this folder to a GitHub repo.
2. Import the repo in Vercel — framework preset auto-detects Next.js.
3. Set env var `NEXT_PUBLIC_SITE_URL` to the production domain
   (e.g. `https://yourdomain.com`). Rebuild. Done.

`NEXT_PUBLIC_SITE_URL` defaults to a placeholder if unset — always set it in
production so canonical URLs, sitemap and JSON-LD point at the real domain.

## Where things live

| Path | Purpose |
| --- | --- |
| `src/data/*.ts` | All content — facts, FAQs, database entries, checklist items |
| `src/lib/seo.ts` | Site URL config + per-page metadata helper |
| `src/components/seo/` | JSON-LD, breadcrumbs, FAQ sections |
| `src/components/site/AdSlot.tsx` | AdSense placeholder — replace inner markup with real unit code after approval |
| `src/components/site/AffiliateCard.tsx` | Affiliate link stub — wire `rel="sponsored"` links when a program is approved |
| `src/app/sitemap.ts` | Sitemap enumerating all routes incl. data-driven slugs |

## Adding database entries

Append a typed object to the matching array in `src/data/vehicles.ts`,
`src/data/locations.ts`, `src/data/weapons.ts` or `src/data/missions.ts`.
Detail pages, sitemap entries and generateStaticParams pick it up
automatically on the next build.

## Content policy

Only officially confirmed facts (Rockstar/Take-Two announcements) and items
unambiguously visible in official trailers are listed, always labeled.
No leaked content, no invented stats, no rumor dates. This policy is the
site's trust differentiator — keep it.
