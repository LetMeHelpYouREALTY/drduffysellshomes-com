import type { MetadataRoute } from 'next';
import { getAllNeighborhoods } from '@/config/neighborhoods';
import { PRODUCTION_SITE_URL } from '@/lib/siteHost';
import { contentUpdatedAt } from '@/lib/contentFreshness';

export { PRODUCTION_SITE_URL };

// Google ignores changefreq and priority; only loc and an honest lastmod matter.
const STATIC_PAGES = ['/', '/neighborhoods', '/sell', '/listings', '/contact', '/about'];

function originFromBase(baseUrl: string): string {
  return baseUrl.replace(/\/+$/, '');
}

function loc(baseUrl: string, path: string): string {
  const origin = originFromBase(baseUrl);
  if (path === '/') return origin;
  return `${origin}${path}`;
}

/**
 * Absolute sitemap entries for Google Search Console.
 * Homepage loc has no trailing slash so it matches page canonicals
 * (`trailingSlash: false` in next.config.ts). Production locs use
 * https://www.painteddesertestates.com only.
 */
export function buildSitemapEntries(baseUrl: string): MetadataRoute.Sitemap {
  const lastModified = contentUpdatedAt();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((path) => ({
    url: loc(baseUrl, path),
    lastModified,
  }));

  const neighborhoodEntries: MetadataRoute.Sitemap = getAllNeighborhoods().map(
    (neighborhood) => ({
      url: loc(baseUrl, `/neighborhoods/${neighborhood.slug}`),
      lastModified,
    }),
  );

  return [...staticEntries, ...neighborhoodEntries];
}

export function sitemapToXml(entries: MetadataRoute.Sitemap): string {
  const urls = entries
    .map((entry) => {
      const lastmod =
        entry.lastModified instanceof Date
          ? entry.lastModified.toISOString().slice(0, 10)
          : contentUpdatedAt().toISOString().slice(0, 10);
      const changefreq = entry.changeFrequency
        ? `\n    <changefreq>${entry.changeFrequency}</changefreq>`
        : '';
      const priority =
        typeof entry.priority === 'number'
          ? `\n    <priority>${entry.priority}</priority>`
          : '';

      return `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${lastmod}</lastmod>${changefreq}${priority}
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
