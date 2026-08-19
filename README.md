# Dr. Duffy Sells Homes

Next.js 15 site that lists and sells homes **neighborhood by neighborhood** across the Las Vegas Valley. One deployment serves multiple hostnames; each request resolves the community, then every page and section is written as seller representation — CMA, listing launch, competing inventory — not a generic buyer search template.

## Google Search Console

The site is built so GSC can verify, crawl, and index without extra plugins.

1. **Verify the property**
   - Preferred: add `GOOGLE_SITE_VERIFICATION` in Vercel env (the content value from Search Console’s HTML-tag method). The root layout emits `<meta name="google-site-verification">`.
   - Alternate: paste Google’s HTML-file contents into `GOOGLE_HTML_VERIFICATION`. Requests to `/google*.html` are rewritten to that file.
   - Optional: `BING_SITE_VERIFICATION` for Bing Webmaster Tools (`msvalidate.01`).
2. **Submit the sitemap** after the production domain is verified: `https://drduffysellshomes.com/sitemap.xml` (48 URLs: core pages plus every neighborhood selling page). Regenerate with `npm run sitemap`.
3. **Confirm robots** at `https://<host>/robots.txt` — it allows Googlebot and points at the sitemap. Do not disallow CSS/JS.
4. **Inspect URLs** in GSC: home, `/neighborhoods`, a neighborhood slug, `/sell`, `/listings`, `/contact`. Canonicals are absolute per hostname.
5. **Request indexing** on those URLs once verification succeeds.

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
- 9406 Del Webb Blvd, Las Vegas, NV 89134
- 702-903-1952

JSON-LD `RealEstateAgent` + `LocalBusiness` is on every page. FAQ schema is on seller FAQs.

## Development

```bash
npm install
npm run dev
```

```bash
curl -H "Host: drduffysellshomes.com" http://localhost:3000
curl -H "Host: drduffysellshomes.com" http://localhost:3000/sitemap.xml
```

## Deploy

Push to the production branch. Add env vars in Vercel, then complete GSC verification and sitemap submit.
