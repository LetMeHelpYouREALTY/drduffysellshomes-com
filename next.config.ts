import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'drduffysellshomes.com' }],
        destination: 'https://www.drduffysellshomes.com/:path*',
        permanent: true,
      },
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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://*.realscout.com https://vercel.live",
              "connect-src 'self' https://em.realscout.com https://www.realscout.com https://*.realscout.com wss://*.realscout.com https://vercel.live",
              "img-src 'self' data: blob: https:",
              "style-src 'self' 'unsafe-inline' https://em.realscout.com",
              "font-src 'self' data: https:",
              "frame-src https://www.google.com https://maps.google.com https://calendly.com",
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
    ];
  },
};

export default nextConfig;
