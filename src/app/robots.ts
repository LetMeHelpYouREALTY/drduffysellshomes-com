import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/siteUrl';
import { aiRobotsRules } from '@/lib/aiCrawlers';

export const dynamic = 'force-dynamic';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const baseUrl = await getSiteUrl();
  const host = new URL(baseUrl).host;

  return {
    rules: aiRobotsRules(),
    sitemap: `${baseUrl}/sitemap.xml`,
    host,
  };
}
