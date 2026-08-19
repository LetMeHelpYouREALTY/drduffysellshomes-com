import { headers } from 'next/headers';
import {
  CANONICAL_HOST,
  canonicalizeHostname,
  hostnameFromHeader,
  siteOriginFromHostname,
} from '@/lib/siteHost';

export {
  APEX_HOST,
  CANONICAL_HOST,
  OG_IMAGE_ALT,
  OG_IMAGE_PATH,
  OG_IMAGE_SIZE,
  PRODUCTION_SITE_URL,
  TWITTER_IMAGE_PATH,
  canonicalizeHostname,
  configLookupHostname,
  getPublicSiteUrl,
  hostnameFromHeader,
  isApexSellerHost,
  isBlockedOgHost,
  siteOriginFromHostname,
  socialShareImages,
} from '@/lib/siteHost';

/**
 * Absolute origin for the current hostname.
 * Canonicals, Open Graph URLs, JSON-LD, and sitemap entries must agree
 * on https://www.drduffysellshomes.com for this production site.
 */
export async function getSiteUrl(): Promise<string> {
  const headersList = await headers();
  const host = hostnameFromHeader(
    headersList.get('x-forwarded-host') || headersList.get('host'),
  );

  return siteOriginFromHostname(host);
}

export async function getHost(): Promise<string> {
  const headersList = await headers();
  return canonicalizeHostname(
    hostnameFromHeader(
      headersList.get('x-forwarded-host') ||
        headersList.get('host') ||
        CANONICAL_HOST,
    ),
  );
}
