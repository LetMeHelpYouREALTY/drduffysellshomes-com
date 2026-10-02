import { execSync } from 'node:child_process';
import type { NextConfig } from 'next';

/**
 * Sitemap lastmod / og:updated_time: the deployed commit's date, baked in at
 * build so it stays stable between requests. Falls back to build time.
 */
function contentUpdatedAtBuild(): string {
  try {
    const iso = execSync('git log -1 --format=%cI', { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim();
    if (iso && !Number.isNaN(new Date(iso).getTime())) return new Date(iso).toISOString();
  } catch {
    // no git in build environment
  }
  return new Date().toISOString();
}

const nextConfig: NextConfig = {
  env: {
    CONTENT_UPDATED_AT: contentUpdatedAtBuild(),
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'imagedelivery.net' },
      { protocol: 'https', hostname: '**.cloudflare.com' },
    ],
  },
  poweredByHeader: false,
  trailingSlash: false,
  async redirects() {
    return [
      ...['painteddesertestates.com', 'drduffysellshomes.com', 'www.drduffysellshomes.com'].map(
        (value) => ({
          source: '/:path*',
          has: [{ type: 'host' as const, value }],
          destination: 'https://www.painteddesertestates.com/:path*',
          permanent: true,
        }),
      ),
    ];
  },
  async rewrites() {
    return [
      {
        source: '/google:file.html',
        destination: '/api/gsc-file',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://*.realscout.com https://assets.calendly.com https://calendly.com https://*.calendly.com https://vercel.live",
              "connect-src 'self' https://em.realscout.com https://www.realscout.com https://*.realscout.com wss://*.realscout.com https://calendly.com https://*.calendly.com https://vercel.live",
              "img-src 'self' data: blob: https:",
              "style-src 'self' 'unsafe-inline' https://em.realscout.com https://assets.calendly.com",
              "font-src 'self' data: https:",
              "frame-src https://www.google.com https://maps.google.com https://calendly.com https://*.calendly.com",
              "frame-ancestors 'self'",
            ].join('; '),
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600' },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600' },
        ],
      },
      {
        source: '/llms.txt',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600' },
        ],
      },
      {
        source: '/llms-full.txt',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600' },
        ],
      },
      {
        source: '/og/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
