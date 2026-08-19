# Dr. Duffy Sells Homes

Next.js 15 site that lists and sells homes **neighborhood by neighborhood** across the Las Vegas Valley. One deployment serves multiple hostnames; each request resolves the community, then every page and section is written as seller representation — CMA, listing launch, competing inventory — not a generic buyer search template.

**Canonical site:** `https://www.drduffysellshomes.com`  
The apex `https://drduffysellshomes.com` permanently redirects (308) to the www host so Google Search Console indexes one version.

## Google Search Console

The site is built so GSC can verify, crawl, and index without extra plugins.

1. **Add the property**
   - Preferred: Domain property `sc-domain:drduffysellshomes.com` (covers www and apex).
   - Also add the URL-prefix property `https://www.drduffysellshomes.com/` — this is the canonical host.
2. **Verify**
   - Preferred: add `GOOGLE_SITE_VERIFICATION` in Vercel env (the content value from Search Console’s HTML-tag method). The root layout emits `<meta name="google-site-verification">`.
   - Alternate: paste Google’s HTML-file contents into `GOOGLE_HTML_VERIFICATION`. Requests to `/google*.html` are rewritten to that file on the **www** host (apex requests 308 to www first).
   - Optional: `BING_SITE_VERIFICATION` for Bing Webmaster Tools (`msvalidate.01`).
3. **Submit the sitemap** after the www property is verified: `https://www.drduffysellshomes.com/sitemap.xml` (48 URLs: core pages plus every neighborhood selling page, all on www). Regenerate with `npm run sitemap`.
4. **Confirm robots** at `https://www.drduffysellshomes.com/robots.txt` — it allows Googlebot, sets `host` to www, and points at the sitemap. Do not disallow CSS/JS.
5. **Inspect URLs** in GSC on the www host: home, `/neighborhoods`, a neighborhood slug, `/sell`, `/listings`, `/contact`. Canonicals, Open Graph, and JSON-LD use `https://www.drduffysellshomes.com`.
6. **Request indexing** on those www URLs once verification succeeds.

Set `NEXT_PUBLIC_SITE_URL=https://www.drduffysellshomes.com` in Vercel Production.

Do not guess sold prices or days-on-market in copy. Listing pages send sellers to a current CMA.

## Neighborhood selling pages

`src/config/neighborhoods.ts` is the catalog. Each slug has unique listing copy (amenities, commute, tips). Routes:

- `/` — sell in the hostname’s community, plus the full valley grid
- `/neighborhoods` — hub
- `/neighborhoods/[slug]` — sell-your-home page for that community
- `/sell` — listing process
- `/listings` — live MLS as seller competition
- `/about` — listing agent
- `/contact` — list / valuation

## Local SEO / NAP

Must match Google Business Profile:

- Dr. Jan Duffy
- Berkshire Hathaway HomeServices Nevada Properties
- 5550 Painted Mirage Rd Ste 140A, Las Vegas, NV 89149
- 702-903-1952

JSON-LD `RealEstateAgent` + `LocalBusiness` is on every page. FAQ schema is on seller FAQs.

## Development

```bash
npm install
npm run dev
```

```bash
curl -H "Host: www.drduffysellshomes.com" http://localhost:3000
curl -H "Host: drduffysellshomes.com" http://localhost:3000
curl -H "Host: www.drduffysellshomes.com" http://localhost:3000/sitemap.xml
```

The apex Host header should 308 to `https://www.drduffysellshomes.com/`.

## Deploy

Production Git branch is **`master`**. Push or merge there so Vercel production rebuilds.

- Keep both `drduffysellshomes.com` and `www.drduffysellshomes.com` on the Vercel project.
- Cloudflare DNS for this domain must be **DNS only (gray cloud)** — do not proxy (orange cloud) in front of Vercel.
- Add env vars in Vercel, then complete GSC verification and sitemap submit on the www property.
