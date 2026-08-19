import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = readFileSync(join(root, 'src/config/neighborhoods.ts'), 'utf8');
const slugs = [...source.matchAll(/^\s*slug: '([a-z0-9-]+)',$/gm)].map((match) => match[1]);

if (slugs.length < 20) {
  throw new Error(`Expected neighborhood slugs, found ${slugs.length}`);
}

console.log(
  `Sitemap is generated live from src/app/sitemap.ts (${slugs.length} neighborhoods). Do not write public/sitemap.xml — it would freeze lastmod.`,
);
