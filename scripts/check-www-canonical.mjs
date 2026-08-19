import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const origin = 'https://www.drduffysellshomes.com';
const apex = 'https://drduffysellshomes.com';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const neighborhoods = readFileSync(join(root, 'src/config/neighborhoods.ts'), 'utf8');
const slugs = [...neighborhoods.matchAll(/^\s*slug: '([a-z0-9-]+)',$/gm)].map((match) => match[1]);

if (slugs.length < 20) {
  throw new Error(`Expected 20+ neighborhood slugs, found ${slugs.length}`);
}

const staticPaths = ['', '/neighborhoods', '/sell', '/listings', '/contact', '/about'];
const locs = [
  ...staticPaths.map((path) => `${origin}${path}`),
  ...slugs.map((slug) => `${origin}/neighborhoods/${slug}`),
];

if (locs.length < 40) {
  throw new Error(`Expected 40+ sitemap URLs, found ${locs.length}`);
}

const bad = locs.filter((loc) => !loc.startsWith(`${origin}/`) && loc !== origin);
if (bad.length) {
  throw new Error(`Sitemap locs must use ${origin}. Offenders: ${bad.join(', ')}`);
}

const sitemapModule = readFileSync(join(root, 'src/lib/sitemapEntries.ts'), 'utf8');
if (sitemapModule.includes(apex)) {
  throw new Error('Sitemap module still lists the apex host. Use www only.');
}

console.log(`OK: ${locs.length} www sitemap URLs (${slugs.length} neighborhoods)`);
