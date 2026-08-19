/** Apex host — 308-redirects to the www canonical. */
export const APEX_HOST = 'drduffysellshomes.com';

/** Google Search Console / sitemap / canonical host. */
export const CANONICAL_HOST = 'www.drduffysellshomes.com';

export const PRODUCTION_SITE_URL = `https://${CANONICAL_HOST}`;

export function hostnameFromHeader(raw: string | null | undefined): string {
  if (!raw) return CANONICAL_HOST;
  return raw.split(',')[0].trim().split(':')[0].toLowerCase();
}

/** www is canonical for this seller site; other mapped hosts stay as-is. */
export function canonicalizeHostname(hostname: string): string {
  const host = hostname.split(':')[0].toLowerCase();
  if (host === APEX_HOST || host === CANONICAL_HOST) {
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
