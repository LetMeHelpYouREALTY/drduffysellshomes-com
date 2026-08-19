import { headers } from 'next/headers';
import { DOMAIN_MAP, DEFAULT_CONFIG, type DomainConfig } from '@/config/domains';
import { configLookupHostname, hostnameFromHeader } from '@/lib/siteHost';

/**
 * Resolve the full DomainConfig for the current request hostname.
 * Merges domain-specific overrides on top of DEFAULT_CONFIG.
 * www.drduffysellshomes.com looks up the same config as the apex host.
 */
export async function getDomainConfig(): Promise<DomainConfig> {
  const headersList = await headers();
  const host = hostnameFromHeader(
    headersList.get('x-forwarded-host') || headersList.get('host'),
  );
  const hostname = configLookupHostname(host);
  const overrides = DOMAIN_MAP[hostname] || {};

  return { ...DEFAULT_CONFIG, ...overrides };
}

/**
 * Synchronous version for client components — pass hostname from middleware.
 */
export function getDomainConfigByHost(hostname: string): DomainConfig {
  const overrides = DOMAIN_MAP[configLookupHostname(hostname)] || {};
  return { ...DEFAULT_CONFIG, ...overrides };
}
