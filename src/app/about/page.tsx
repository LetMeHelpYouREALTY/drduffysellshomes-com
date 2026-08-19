import type { Metadata } from 'next';
import { getDomainConfig } from '@/lib/getDomainConfig';
import { AGENT } from '@/config/agent';
import { findNeighborhoodForName, getAllNeighborhoods } from '@/config/neighborhoods';
import { getSiteUrl } from '@/lib/siteUrl';
import { buildPageMetadata } from '@/lib/pageMetadata';
import Breadcrumbs from '@/components/Breadcrumbs';
import SellerCta from '@/components/SellerCta';

export async function generateMetadata(): Promise<Metadata> {
  const config = await getDomainConfig();
  const baseUrl = await getSiteUrl();
  const place = findNeighborhoodForName(config.neighborhood)?.name ?? config.neighborhood;
  return buildPageMetadata({
    title: `${AGENT.name} — Listing Agent Selling ${place} Homes`,
    description: `${AGENT.shortBio} ${AGENT.name} sells homes in ${place} and across Las Vegas neighborhoods. ${AGENT.brokerage}, ${AGENT.address.full}. Call ${AGENT.phone}.`,
    path: '/about',
    baseUrl,
    keywords: [
      `${AGENT.name} listing agent`,
      `sell home ${place}`,
      'Las Vegas REALTOR',
    ],
  });
}

export const revalidate = 86400;

export default async function AboutPage() {
  const config = await getDomainConfig();
  const place = findNeighborhoodForName(config.neighborhood)?.name ?? config.neighborhood;
  const neighborhoods = getAllNeighborhoods();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Sell Your Home', href: '/' },
          { name: 'About' },
        ]}
      />

      <section className="bg-gradient-to-r from-primary-900 to-bhhs-maroon section-padding py-16">
        <div className="container-wide mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-white mb-4">
            {AGENT.name} Sells {place} Homes
          </h1>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            Listing representation for {place} and every major Las Vegas Valley neighborhood —
            Summerlin villages to Henderson master plans.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-bhhs-cream to-primary-100 overflow-hidden mb-6">
                  {AGENT.headshotUrl ? (
                    <img
                      src={AGENT.headshotUrl}
                      alt={`${AGENT.name}, ${AGENT.title}, selling homes in ${place}, Las Vegas`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-8xl font-display font-bold text-primary-300">JD</span>
                    </div>
                  )}
                </div>
                <div className="bg-primary-50 rounded-xl p-6">
                  <h2 className="font-display font-bold text-primary-900 mb-3">Office</h2>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="text-primary-500">Phone:</span>{' '}
                      <a href={`tel:${AGENT.phoneTel}`} className="text-bhhs-maroon font-semibold">
                        {AGENT.phone}
                      </a>
                    </p>
                    <p>
                      <span className="text-primary-500">Email:</span>{' '}
                      <a href={`mailto:${AGENT.email}`} className="text-bhhs-maroon">
                        {AGENT.email}
                      </a>
                    </p>
                    <p>
                      <span className="text-primary-500">Address:</span>{' '}
                      <span className="text-primary-700">{AGENT.address.full}</span>
                    </p>
                    <p>
                      <span className="text-primary-500">License:</span>{' '}
                      <span className="text-primary-700">{AGENT.license}</span>
                    </p>
                    <p>
                      <span className="text-primary-500">Brokerage:</span>{' '}
                      <span className="text-primary-700">{AGENT.brokerage}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                {AGENT.fullName}
              </h2>
              <p className="text-sm text-bhhs-maroon font-semibold mb-6">
                {AGENT.title} | {AGENT.brokerage}
              </p>

              <div className="space-y-4 text-primary-700">
                <p>{AGENT.shortBio}</p>
                <p>
                  Sellers in {place} do not need a valley-wide slogan. They need a list price
                  from matching closed sales, remarks that name the community buyers already
                  search, and a listing agent who watches competing {place} inventory while the
                  home is live.
                </p>
                <p>
                  As a member of {AGENT.brokerage}, Dr. Duffy pairs that neighborhood listing
                  work with a national referral network — useful when the buyer for your{' '}
                  {place} home is relocating, not already on your street.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-display font-bold text-primary-900 mb-4">
                  Credentials
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {AGENT.credentials.map((cred) => (
                    <div
                      key={cred}
                      className="flex items-start gap-3 p-3 rounded-lg bg-bhhs-cream"
                    >
                      <svg
                        className="w-5 h-5 text-bhhs-gold mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-primary-800">{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-display font-bold text-primary-900 mb-4">
                  Neighborhoods we sell
                </h3>
                <p className="text-primary-600 mb-4">
                  Every name below is a dedicated selling page — not a tag on a generic bio.
                </p>
                <div className="flex flex-wrap gap-2">
                  {neighborhoods.map((n) => (
                    <a
                      key={n.slug}
                      href={`/neighborhoods/${n.slug}`}
                      className="px-3 py-1 text-sm bg-primary-50 text-primary-700 rounded-full border border-primary-100 hover:border-bhhs-maroon"
                    >
                      {n.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SellerCta neighborhood={place} heading={`List your ${place} home with ${AGENT.name}`} />
    </>
  );
}
