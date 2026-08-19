import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const origin = 'https://drduffysellshomes.com';
const lastmod = '2026-08-19';

const staticPages = [
  { path: '', changefreq: 'weekly', priority: '1.0' },
  { path: '/neighborhoods', changefreq: 'weekly', priority: '0.9' },
  { path: '/sell', changefreq: 'monthly', priority: '0.9' },
  { path: '/listings', changefreq: 'daily', priority: '0.9' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
];

const source = readFileSync(join(root, 'src/config/neighborhoods.ts'), 'utf8');
const slugs = [...source.matchAll(/^\s*slug: '([a-z0-9-]+)',$/gm)].map((match) => match[1]);

if (slugs.length < 20) {
  throw new Error(`Expected neighborhood slugs, found ${slugs.length}`);
}

function urlXml(loc, changefreq, priority) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const urls = [
  ...staticPages.map((page) => urlXml(`${origin}${page.path}`, page.changefreq, page.priority)),
  ...slugs.map((slug) =>
    urlXml(`${origin}/neighborhoods/${slug}`, 'weekly', '0.9'),
  ),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

const publicDir = join(root, 'public');
mkdirSync(publicDir, { recursive: true });
writeFileSync(join(publicDir, 'sitemap.xml'), xml, 'utf8');
console.log(`Wrote public/sitemap.xml (${urls.length} URLs, ${slugs.length} neighborhoods)`);
