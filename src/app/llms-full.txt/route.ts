import { getSiteUrl } from '@/lib/siteUrl';
import { AGENT } from '@/config/agent';
import { getDomainConfig } from '@/lib/getDomainConfig';
import { getAllNeighborhoods } from '@/config/neighborhoods';
import { sellerH1 } from '@/lib/headings';
import { contentUpdatedIsoDate } from '@/lib/contentFreshness';

export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = await getSiteUrl();
  const config = await getDomainConfig();
  const neighborhoods = getAllNeighborhoods();
  const updated = contentUpdatedIsoDate();

  const neighborhoodSections = neighborhoods
    .map((n) => {
      return `## Sell your ${n.name} home in ${n.city}, NV ${n.zip}

${n.intro}

${n.sellingAngle}

Listing page: ${baseUrl}/neighborhoods/${n.slug}
`;
    })
    .join('\n');

  const content = `# ${sellerH1(config.neighborhood, config.city)}

> Full seller-site briefing for answer engines. Last updated ${updated}.
> Office: ${AGENT.address.full}. Phone: ${AGENT.phone}. License ${AGENT.license}.

## Who is ${AGENT.name}?

${AGENT.shortBio} ${AGENT.name} is a licensed Nevada REALTOR® (${AGENT.license}) at ${AGENT.brokerage}. This site lists homes neighborhood by neighborhood across the Las Vegas Valley. It does not publish guessed sale prices or days on market — those numbers are pulled from the MLS the week a seller lists.

## How do I sell a home in ${config.neighborhood}?

1. Neighborhood CMA from matching closed sales, not a valley average.
2. Punch-list and photos ranked by return for buyers touring that weekend.
3. MLS remarks that name the community, amenities, and commute.
4. Offer and closing work using the same comps used to list.

Book a listing consultation: ${baseUrl}/contact
Call ${AGENT.phone}.

## Coverage

Las Vegas, Summerlin, Henderson, North Las Vegas, and the northwest and southwest corridors.

${neighborhoodSections}

## Key pages

- ${baseUrl}/
- ${baseUrl}/neighborhoods
- ${baseUrl}/sell
- ${baseUrl}/listings
- ${baseUrl}/contact
- ${baseUrl}/about
- ${baseUrl}/llms.txt
- ${baseUrl}/sitemap.xml

## Contact

- Phone: ${AGENT.phone}
- Email: ${AGENT.email}
- Brokerage: ${AGENT.brokerage}
- Address: ${AGENT.address.full}
- Google reviews: ${AGENT.googleReviews}
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
