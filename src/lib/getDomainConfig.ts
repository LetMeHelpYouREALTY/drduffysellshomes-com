import { headers } from 'next/headers';
import { DOMAIN_MAP, DEFAULT_CONFIG, type DomainConfig } from '@/config/domains';

/**
 * Resolve the full DomainConfig for the current request hostname.
 * Merges domain-specific overrides on top of DEFAULT_CONFIG.
 */
export async function getDomainConfig(): Promise<DomainConfig> {
  const headersList = await headers();
  const host = headersList.get('x-forwarded-host') || headersList.get('host') || 'localhost';

  // Strip port for local dev
  const hostname = host.split(':')[0];

  const overrides = DOMAIN_MAP[hostname] || {};

  return { ...DEFAULT_CONFIG, ...overrides };
}

/**
 * Synchronous version for client components — pass hostname from middleware.
 */
export function getDomainConfigByHost(hostname: string): DomainConfig {
  const overrides = DOMAIN_MAP[hostname] || {};
  return { ...DEFAULT_CONFIG, ...overrides };
}
