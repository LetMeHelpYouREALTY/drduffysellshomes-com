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
  PRODUCTION_SITE_URL,
  canonicalizeHostname,
  configLookupHostname,
  hostnameFromHeader,
  isApexSellerHost,
  siteOriginFromHostname,
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
