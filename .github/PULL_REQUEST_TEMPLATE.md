## Summary

- What changed and why (seller copy, SEO/GEO/AEO, GSC, www canonical, bugfix).

## Live SEO / GEO / AEO

- [ ] Canonicals / Open Graph / JSON-LD stay on `https://www.drduffysellshomes.com`
- [ ] Sitemap locs use www only (`src/app/sitemap.ts` is live — do not add `public/sitemap.xml`)
- [ ] Apex still 308-redirects to www (path + query preserved)
- [ ] `robots.txt` still allows GPTBot, OAI-SearchBot, ChatGPT-User, Claude*, Perplexity*, Google-Extended, Applebot-Extended
- [ ] No guessed sale prices, days-on-market, or fake AggregateRating
- [ ] H1 still names the place + Dr. Jan Duffy, REALTOR®

## Test

- [ ] `npm run check:live`
- [ ] `npx tsc --noEmit`
