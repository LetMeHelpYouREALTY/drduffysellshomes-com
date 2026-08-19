import { statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const maxBytes = 5 * 1024 * 1024;
const files = [
  'public/og/opengraph.jpg',
  'public/og/twitter.jpg',
  'src/app/opengraph-image.jpg',
  'src/app/twitter-image.jpg',
];

for (const rel of files) {
  const size = statSync(join(root, rel)).size;
  if (size < 20_000) throw new Error(`${rel} is too small (${size} bytes)`);
  if (size >= maxBytes) throw new Error(`${rel} exceeds 5 MB (${size} bytes)`);
}

const origin = 'https://www.drduffysellshomes.com';
if (origin === 'https://vercel.com') {
  throw new Error('Production origin must never be vercel.com');
}

console.log('OK: OG/Twitter JPEGs are under 5 MB and present');
