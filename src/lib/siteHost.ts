/** Apex host — 308-redirects to the www canonical. */
export const APEX_HOST = 'drduffysellshomes.com';

/** Google Search Console / sitemap / canonical host. */
export const CANONICAL_HOST = 'www.drduffysellshomes.com';

export const PRODUCTION_SITE_URL = `https://${CANONICAL_HOST}`;

export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;
export const OG_IMAGE_PATH = '/og/opengraph.jpg';
export const TWITTER_IMAGE_PATH = '/og/twitter.jpg';
export const OG_IMAGE_ALT =
  'Luxury Las Vegas Valley home — Dr. Jan Duffy, REALTOR® at Berkshire Hathaway HomeServices Nevada Properties. Call 702-903-1952.';

const BLOCKED_OG_HOSTS = new Set(['vercel.com', 'www.vercel.com']);

/** Vercel dashboard crawlers and preview hosts must not leak into og:url. */
export function isBlockedOgHost(hostname: string): boolean {
  const host = hostname.split(':')[0].toLowerCase();
  if (!host) return true;
  if (BLOCKED_OG_HOSTS.has(host)) return true;
  if (host.endsWith('.vercel.app')) return true;
  if (host.endsWith('.vercel.sh')) return true;
  return false;
}

function originIsSafe(origin: string): boolean {
  try {
    const url = new URL(origin);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;
    return !isBlockedOgHost(url.hostname);
  } catch {
    return false;
  }
}

/** Absolute origin for canonicals, Open Graph, and Twitter — never vercel.com. */
export function getPublicSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, '');
  if (fromEnv && originIsSafe(fromEnv)) return fromEnv;
  return PRODUCTION_SITE_URL;
}

export function hostnameFromHeader(raw: string | null | undefined): string {
  if (!raw) return CANONICAL_HOST;
  const host = raw.split(',')[0].trim().split(':')[0].toLowerCase();
  if (isBlockedOgHost(host)) return CANONICAL_HOST;
  return host;
}

/** www is canonical for this seller site; other mapped hosts stay as-is. */
export function canonicalizeHostname(hostname: string): string {
  const host = hostname.split(':')[0].toLowerCase();
  if (isBlockedOgHost(host) || host === APEX_HOST || host === CANONICAL_HOST) {
    return CANONICAL_HOST;
  }
  return host;
}

export function siteOriginFromHostname(hostname: string): string {
  const host = canonicalizeHostname(hostname);
  if (host === 'localhost' || host.startsWith('127.')) {
    return `http://${host}`;
  }
  return `https://${host}`;
}

export function isApexSellerHost(hostname: string): boolean {
  return hostname.split(':')[0].toLowerCase() === APEX_HOST;
}

/** DOMAIN_MAP keys are stored without www. */
export function configLookupHostname(hostname: string): string {
  const host = hostname.split(':')[0].toLowerCase();
  return host.startsWith('www.') ? host.slice(4) : host;
}

export function socialShareImages(origin: string) {
  const base = origin.replace(/\/+$/, '');
  const ogImage = {
    url: `${base}${OG_IMAGE_PATH}`,
    secureUrl: `${base}${OG_IMAGE_PATH}`,
    width: OG_IMAGE_SIZE.width,
    height: OG_IMAGE_SIZE.height,
    alt: OG_IMAGE_ALT,
    type: 'image/jpeg',
  };
  const twitterImage = {
    url: `${base}${TWITTER_IMAGE_PATH}`,
    width: OG_IMAGE_SIZE.width,
    height: OG_IMAGE_SIZE.height,
    alt: OG_IMAGE_ALT,
    type: 'image/jpeg',
  };
  return { ogImage, twitterImage };
}
