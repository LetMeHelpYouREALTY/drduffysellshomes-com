import { headers } from 'next/headers';

const FALLBACK_HOST = 'drduffysellshomes.com';

/**
 * Absolute origin for the current hostname.
 * Required so canonicals, Open Graph URLs, and sitemap entries
 * resolve correctly for Google Search Console on every domain.
 */
export async function getSiteUrl(): Promise<string> {
  const headersList = await headers();
  const raw =
    headersList.get('x-forwarded-host') ||
    headersList.get('host') ||
    FALLBACK_HOST;
  const host = raw.split(':')[0].toLowerCase();

  if (host === 'localhost' || host.startsWith('127.')) {
    return `http://${host}`;
  }

  return `https://${host}`;
}

export async function getHost(): Promise<string> {
  const headersList = await headers();
  const raw =
    headersList.get('x-forwarded-host') ||
    headersList.get('host') ||
    FALLBACK_HOST;
  return raw.split(':')[0].toLowerCase();
}
