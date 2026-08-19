import { AGENT } from '@/config/agent';

/**
 * Visible H1 / H2 / H3 copy for SEO, GEO, AEO, and Schema.org alignment.
 *
 * H1 = one topic: service + place + named listing agent (entity).
 * H2 = the questions people (and answer engines) actually ask.
 * H3 = supporting sub-questions or named steps that match HowTo / Offer names.
 */
export function sellerH1(place: string, city = 'Las Vegas'): string {
  return `Sell Your ${place} Home with ${AGENT.name}, REALTOR® in ${city}, NV`;
}

export function aboutH1(place: string): string {
  return `${AGENT.name}, REALTOR® — Las Vegas listing agent selling ${place} homes`;
}

export function contactH1(place: string): string {
  return `Contact ${AGENT.name} to list your ${place} home in Las Vegas, NV`;
}

export function sellProcessH1(place: string): string {
  return `How does ${AGENT.name} sell homes in ${place}?`;
}

export function listingsH1(place: string): string {
  return `What homes are selling in ${place}? Live Las Vegas MLS inventory`;
}

export function neighborhoodsIndexH1(): string {
  return `Where can I sell a home in the Las Vegas Valley? Neighborhood listing plans`;
}

export function notFoundH1(): string {
  return `Page not found — sell your Las Vegas Valley home with ${AGENT.name}`;
}

export function whySellersH2(place: string): string {
  return `Why do ${place} sellers list with ${AGENT.name}?`;
}

export function whatBuyersPayH2(place: string): string {
  return `What do buyers pay for in ${place}?`;
}

export function competingListingsH2(place: string): string {
  return `Which ${place} homes compete with my listing this week?`;
}

export function whoListsH2(place: string): string {
  return `Who is ${AGENT.name}, the listing agent for ${place}?`;
}

export function howWeSellH2(place: string): string {
  return `How does ${AGENT.name} sell a home in ${place}?`;
}

export function scheduleH2(): string {
  return `How do I schedule a listing consultation with ${AGENT.name} in Las Vegas?`;
}

export function ctaH2(place: string): string {
  return `Ready to sell your ${place} home with ${AGENT.name}?`;
}

export function faqH2(place: string): string {
  return `What are the most common questions about selling a home in ${place}?`;
}

export function officeH2(): string {
  return `${AGENT.brokerage} office at ${AGENT.address.full}`;
}

export function regionSellH2(regionLabel: string): string {
  return `How do I sell a home in ${regionLabel}?`;
}

export function neighborhoodCardH3(name: string, city: string): string {
  return `Sell your ${name} home in ${city}, NV`;
}

export const SELLER_FEATURE_H3 = [
  {
    title: 'How do we set a street-level list price?',
    descKey: 'Street-level pricing',
  },
  {
    title: 'How is neighborhood marketing different from a valley flyer?',
    descKey: 'Neighborhood marketing',
  },
  {
    title: 'How do we watch live listing competition?',
    descKey: 'Live competition watch',
  },
  {
    title: 'Which listing playbook does my address need?',
    descKey: 'Luxury & production playbooks',
  },
  {
    title: 'What net proceeds should I expect before I sign?',
    descKey: 'Net-sheet before you sign',
  },
  {
    title: 'What does Berkshire Hathaway add to a local listing?',
    descKey: 'BHHS reach, local listing',
  },
] as const;

export const PROCESS_STEP_H3 = [
  {
    name: 'How do we price a home with a neighborhood CMA?',
    desc: 'Closed sales on your street and plan — not a valley average — before we talk list price.',
  },
  {
    name: 'What repairs and photos come before listing?',
    desc: 'We rank repairs by return, then shoot the home so buyers touring this weekend pick yours.',
  },
  {
    name: 'How is the home marketed on the MLS and in the neighborhood?',
    desc: 'Remarks name your community, amenities, and commute. Ads target people already searching that ZIP.',
  },
  {
    name: 'How do offers and closing work after you list?',
    desc: 'We negotiate inspection and credits with the same comps we used to list, then manage the file to recordation.',
  },
] as const;
