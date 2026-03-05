import { headers } from 'next/headers';
import { AGENT } from '@/config/agent';
import { getDomainConfig } from '@/lib/getDomainConfig';

export const dynamic = 'force-dynamic';

export async function GET() {
  const headersList = await headers();
  const host = headersList.get('x-forwarded-host') || headersList.get('host') || 'localhost';
  const baseUrl = `https://${host.split(':')[0]}`;
  const config = await getDomainConfig();

  const content = `# ${config.name}

> ${config.description}

## About
${AGENT.name} is a licensed REALTOR® (NV #${AGENT.license}) with ${AGENT.brokerage}, specializing in ${config.neighborhood} real estate in the Las Vegas Valley. With a PhD in Business Administration and over 20 years of experience, Dr. Duffy provides expert guidance for buyers, sellers, investors, and 55+ community seekers.

## Services
- Residential home sales (buying and selling)
- Luxury home specialist (guard-gated communities, custom estates)
- 55+ active adult communities (Sun City Summerlin, Del Webb, Trilogy)
- New construction and builder inventory
- Investment property analysis and Opportunity Zones
- Relocation services (California to Las Vegas)
- Probate and divorce real estate sales
- First-time buyer programs
- Home valuation and market analysis

## Coverage Area
Las Vegas Valley including: Summerlin, Henderson, North Las Vegas, Centennial Hills, Skye Canyon, The Ridges, Red Rock Country Club, Stonebridge, Tournament Hills, and all master-planned communities.

## Contact
- Phone: ${AGENT.phone}
- Email: ${AGENT.email}
- Website: ${baseUrl}
- License: NV #${AGENT.license}
- Brokerage: ${AGENT.brokerage}
- Address: ${AGENT.address.full}

## Key Pages
- [Home](${baseUrl}/)
- [About Dr. Jan Duffy](${baseUrl}/about)
- [Search Listings](${baseUrl}/listings)
- [Contact](${baseUrl}/contact)

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
