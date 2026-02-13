# Dr. Jan Duffy — Multi-Domain Real Estate Template

One Next.js 15 deployment that serves **multiple domains** with hostname-based content. Each domain gets unique SEO, hero text, and neighborhood focus while sharing the same codebase, branding, and RealScout integration.

## Architecture

```
Browser → Cloudflare DNS → Vercel (this app) → hostname detection → domain-specific content
                ↓
     Cloudflare Worker (realscout-global-injector)
     injects RealScout widgets + schema at the edge
```

**Key files:**
- `src/config/domains.ts` — Domain-to-content mapping (add new domains here)
- `src/config/agent.ts` — Dr. Jan Duffy NAP, credentials, branding
- `src/lib/getDomainConfig.ts` — Resolves hostname → config at request time
- `src/middleware.ts` — Ensures hostname is available to server components

## Adding a New Domain

1. **Add config** in `src/config/domains.ts`:
   ```typescript
   'newdomain.com': {
     name: 'New Domain Name',
     neighborhood: 'Area Name',
     heroTitle: 'Homes for Sale in Area',
     heroSubtitle: 'Your tagline here.',
     // ... other overrides
   },
   ```

2. **Push to Vercel** — the build deploys automatically.

3. **Add domain in Vercel Dashboard:**
   - Project Settings → Domains → Add `newdomain.com`

4. **Point DNS** (in Cloudflare):
   - Add CNAME: `newdomain.com` → `cname.vercel-dns.com` (DNS only, gray cloud)

5. **Add Worker route** (for RealScout injection):
   ```bash
   node scripts/deploy-worker-routes.js <worker-token> --domain newdomain.com
   ```

## Development

```bash
npm install
npm run dev     # http://localhost:3000
```

Test different domains locally by editing `/etc/hosts` or using the `Host` header:
```bash
curl -H "Host: skyecanyonhomesforsale.com" http://localhost:3000
```

## Build & Deploy

```bash
npm run build   # Verify production build
vercel --prod   # Deploy to Vercel
```

## Template Domains (6 confirmed safe)

These domains are error/empty pages — safe to deploy:

| Domain | Current Status |
|---|---|
| `californiaforeverrealty.com` | 404 error |
| `drduffysellshomes.com` | 403 error |
| `findahomeinlasvegas.com` | 404 on Vercel |
| `searchforhomeslasvegas.com` | 403 error |
| `zoomintohomes.com` | 403 error |
| `skyecanyonhomesforsale.com` | Empty page |

## Tech Stack

- **Next.js 15** App Router + TypeScript
- **Tailwind CSS** v3
- **Cloudflare Worker** for RealScout injection (no per-site config needed)
- **Vercel** deployment with multi-domain support
- **SEO**: JSON-LD (LocalBusiness, WebPage, FAQPage), dynamic sitemap/robots, E-E-A-T optimized
