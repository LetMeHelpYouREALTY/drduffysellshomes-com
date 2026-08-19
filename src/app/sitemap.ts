import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/siteUrl';
import { PRODUCTION_SITE_URL } from '@/lib/siteHost';
import { buildSitemapEntries } from '@/lib/sitemapEntries';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let baseUrl = process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_SITE_URL;

  try {
    const requestUrl = await getSiteUrl();
    const host = new URL(requestUrl).hostname;
    if (host !== 'localhost' && !host.startsWith('127.')) {
      baseUrl = requestUrl;
    }
  } catch {
    baseUrl = process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_SITE_URL;
  }

  return buildSitemapEntries(baseUrl);
}
