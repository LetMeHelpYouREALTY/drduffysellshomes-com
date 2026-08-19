import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/siteUrl';
import { getAllNeighborhoods } from '@/config/neighborhoods';

export const dynamic = 'force-dynamic';

/** Content last updated — do not stamp "now" on every request (Google may ignore noisy lastmod). */
const LASTMOD = new Date('2026-08-19');

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = await getSiteUrl();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: LASTMOD,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/neighborhoods`,
      lastModified: LASTMOD,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/sell`,
      lastModified: LASTMOD,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/listings`,
      lastModified: LASTMOD,
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: LASTMOD,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: LASTMOD,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const neighborhoodPages: MetadataRoute.Sitemap = getAllNeighborhoods().map((n) => ({
    url: `${baseUrl}/neighborhoods/${n.slug}`,
    lastModified: LASTMOD,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...neighborhoodPages];
}
