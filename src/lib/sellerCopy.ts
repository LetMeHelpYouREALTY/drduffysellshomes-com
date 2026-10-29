import type { DomainConfig } from '@/config/domains';
import type { Neighborhood } from '@/config/neighborhoods';
import { sellerH1 } from '@/lib/headings';

export function getSellerHero(
  config: DomainConfig,
  neighborhood?: Neighborhood,
): { title: string; subtitle: string } {
  if (neighborhood) {
    return {
      title: sellerH1(neighborhood.name, neighborhood.city),
      subtitle: neighborhood.subhead,
    };
  }

  return {
    title: sellerH1(config.neighborhood, config.city),
    subtitle: `A listing plan for ${config.neighborhood} — street-level comps, marketing that names the community, and a launch built to get offers.`,
  };
}

export function getSellerFaqs(
  neighborhoodName: string,
  city: string,
): { question: string; answer: string }[] {
  return [
    {
      question: `How do I price my ${neighborhoodName} home to sell?`,
      answer: `Price from recent closed sales on comparable ${neighborhoodName} streets — same plan, same lot type, same condition — not from a Las Vegas Valley average. Dr. Jan Duffy prepares a current comparative market analysis before you list. Market numbers move; we verify them against the MLS the week you go live.`,
    },
    {
      question: `How long does it take to sell a home in ${neighborhoodName}?`,
      answer: `Days on market in ${city} change by neighborhood, price band, and season. Well-priced ${neighborhoodName} listings that launch with complete photos and disclosures typically see their strongest traffic in the first 7–14 days. Ask for a current time-on-market read for your tract before you set a date.`,
    },
    {
      question: `What does it cost to list my ${neighborhoodName} home?`,
      answer: `Sellers pay a listing commission agreed in writing. Buyers do not pay Dr. Duffy to represent them as listing agent. You receive a marketing plan, MLS exposure, and negotiation through closing. Call 702-903-1952 for a listing consultation with net-sheet numbers for your address.`,
    },
    {
      question: `Should I make repairs before listing in ${neighborhoodName}?`,
      answer: `Buyers touring ${neighborhoodName} this week will compare your home to other actives on the same weekend. Paint, landscape, and obvious mechanical issues are usually cheaper to fix before photos than as inspection credits. We walk the property and give you a punch-list ranked by return.`,
    },
    {
      question: `How do you market a ${neighborhoodName} listing differently from the rest of Las Vegas?`,
      answer: `Portal uploads that say “Las Vegas home” get lost. We name ${neighborhoodName}, the amenities buyers already filter for, and the commute from your lot. Photography, remarks, and ads target people searching this community — then we watch competing ${neighborhoodName} inventory every week you are live.`,
    },
  ];
}
