import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const origin = 'https://www.drduffysellshomes.com';

function read(rel) {
  return readFileSync(join(root, rel), 'utf8');
}

const robots = read('src/lib/aiCrawlers.ts');
const requiredAgents = [
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Google-Extended',
  'Applebot-Extended',
];

const missingAgents = requiredAgents.filter((agent) => !robots.includes(`'${agent}'`));
if (missingAgents.length) {
  throw new Error(`robots allowlist missing AI crawlers: ${missingAgents.join(', ')}`);
}

const requiredFiles = [
  'src/lib/headings.ts',
  'src/lib/contentFreshness.ts',
  'src/lib/aiCrawlers.ts',
  'src/app/llms.txt/route.ts',
  'src/app/llms-full.txt/route.ts',
  'src/app/robots.ts',
  'src/app/sitemap.ts',
  'src/app/opengraph-image.jpg',
  'src/app/twitter-image.jpg',
  'public/og/opengraph.jpg',
  'public/og/twitter.jpg',
];

const missingFiles = requiredFiles.filter((rel) => !existsSync(join(root, rel)));
if (missingFiles.length) {
  throw new Error(`Live SEO files missing: ${missingFiles.join(', ')}`);
}

if (existsSync(join(root, 'public/sitemap.xml'))) {
  throw new Error(
    'public/sitemap.xml would override app/sitemap.ts. Delete it so lastmod stays tied to the live deploy.',
  );
}

const schema = read('src/components/SchemaMarkup.tsx');
for (const token of [
  "'Person'",
  'SpeakableSpecification',
  'contentUpdatedIsoDate',
  'RealEstateAgent',
  'LocalBusiness',
]) {
  if (!schema.includes(token)) {
    throw new Error(`SchemaMarkup is missing ${token}`);
  }
}

if (schema.includes('aggregateRating') || schema.includes('AggregateRating')) {
  throw new Error('Do not emit AggregateRating without a verified live review count.');
}

const headings = read('src/lib/headings.ts');
if (!headings.includes('sellerH1') || !headings.includes('REALTOR®')) {
  throw new Error('headings.ts must keep entity-complete seller H1s');
}

const sitemapSrc = read('src/lib/sitemapEntries.ts');
if (!sitemapSrc.includes(origin.replace('https://', '')) && !read('src/lib/siteHost.ts').includes('www.drduffysellshomes.com')) {
  throw new Error('Canonical host www.drduffysellshomes.com missing from siteHost');
}

console.log(`OK: live SEO/GEO/AEO contract (${requiredAgents.length} AI crawlers, no fake ratings)`);
