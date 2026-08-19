## Summary

- What changed and why (seller copy, SEO/GSC, www canonical, bugfix).

## Google Search Console

- [ ] Canonicals / Open Graph / JSON-LD stay on `https://www.drduffysellshomes.com`
- [ ] Sitemap locs use www only (`npm run sitemap` if neighborhood slugs changed)
- [ ] Apex still 308-redirects to www (path + query preserved)
- [ ] No guessed sale prices or days-on-market

## Test

- [ ] `npx tsc --noEmit`
- [ ] Apex Host header redirects to www
- [ ] `/sitemap.xml` and `/robots.txt` on www
