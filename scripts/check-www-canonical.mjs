import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const origin = 'https://www.drduffysellshomes.com';
const apex = 'https://drduffysellshomes.com';
const xml = readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'sitemap.xml'),
  'utf8',
);

const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

if (locs.length < 40) {
  throw new Error(`Expected 40+ sitemap URLs, found ${locs.length}`);
}

const bad = locs.filter((loc) => !loc.startsWith(`${origin}/`) && loc !== origin);
if (bad.length) {
  throw new Error(`Sitemap locs must use ${origin}. Offenders: ${bad.join(', ')}`);
}

if (xml.includes(apex + '/') || xml.includes(`<loc>${apex}</loc>`)) {
  throw new Error('Sitemap still lists the apex host. Use www only.');
}

console.log(`OK: ${locs.length} www sitemap URLs`);
