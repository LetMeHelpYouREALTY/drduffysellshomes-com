import { getSiteUrl } from '@/lib/siteUrl';
import { AGENT } from '@/config/agent';
import { getDomainConfig } from '@/lib/getDomainConfig';
import { getAllNeighborhoods } from '@/config/neighborhoods';

export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = await getSiteUrl();
  const config = await getDomainConfig();
  const neighborhoods = getAllNeighborhoods();

  const neighborhoodLines = neighborhoods
    .map((n) => `- [${n.name} — sell your home](${baseUrl}/neighborhoods/${n.slug})`)
    .join('\n');

  const content = `# ${config.name}

> Listing site for selling homes in ${config.neighborhood} and every major Las Vegas Valley neighborhood.

## About
${AGENT.name} is a licensed REALTOR® (NV #${AGENT.license}) with ${AGENT.brokerage}. This site is built to sell homes — neighborhood by neighborhood — not to publish generic Las Vegas copy. Office: ${AGENT.address.full}. Phone: ${AGENT.phone}.

## What we do
- Seller representation and listing marketing
- Comparative market analysis using neighborhood comps
- MLS launch, portal syndication, and competing-inventory watch
- Luxury, 55+, production, and large-lot listing playbooks
- Probate and estate property sales

## Coverage
Las Vegas, Summerlin, Henderson, North Las Vegas, and the northwest and southwest corridors.

## Neighborhood selling pages
${neighborhoodLines}

## Key pages
- [Sell your home](${baseUrl}/)
- [All neighborhoods](${baseUrl}/neighborhoods)
- [How we sell](${baseUrl}/sell)
- [What's selling (live MLS)](${baseUrl}/listings)
- [Contact / home valuation](${baseUrl}/contact)
- [About](${baseUrl}/about)
- [Sitemap](${baseUrl}/sitemap.xml)

## Contact
- Phone: ${AGENT.phone}
- Email: ${AGENT.email}
- License: NV #${AGENT.license}
- Brokerage: ${AGENT.brokerage}
- Address: ${AGENT.address.full}

## Social
- Facebook: ${AGENT.social.facebook}
- Instagram: ${AGENT.social.instagram}
- LinkedIn: ${AGENT.social.linkedin}
- YouTube: ${AGENT.social.youtube}
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
