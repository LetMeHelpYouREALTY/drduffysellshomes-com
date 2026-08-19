import type { MetadataRoute } from 'next';
import { getPublicSiteUrl, getSiteUrl } from '@/lib/siteUrl';
import { buildSitemapEntries } from '@/lib/sitemapEntries';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let baseUrl = getPublicSiteUrl();

  try {
    const requestUrl = await getSiteUrl();
    const host = new URL(requestUrl).hostname;
    if (host !== 'localhost' && !host.startsWith('127.')) {
      baseUrl = requestUrl;
    }
  } catch {
    baseUrl = getPublicSiteUrl();
  }

  return buildSitemapEntries(baseUrl);
}
