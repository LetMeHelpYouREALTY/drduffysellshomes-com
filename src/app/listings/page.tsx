import type { Metadata } from 'next';
import { getDomainConfig } from '@/lib/getDomainConfig';
import { AGENT } from '@/config/agent';
import { findNeighborhoodForName, getAllNeighborhoods } from '@/config/neighborhoods';
import { RealScoutSearch, RealScoutListings } from '@/components/RealScoutWidget';
import { getSiteUrl } from '@/lib/siteUrl';
import { buildPageMetadata } from '@/lib/pageMetadata';
import Breadcrumbs from '@/components/Breadcrumbs';
import SellerCta from '@/components/SellerCta';

export async function generateMetadata(): Promise<Metadata> {
  const config = await getDomainConfig();
  const baseUrl = await getSiteUrl();
  const place = findNeighborhoodForName(config.neighborhood)?.name ?? config.neighborhood;
  return buildPageMetadata({
    title: `What's Selling in ${place} — Live MLS Inventory`,
    description: `See the ${place} homes buyers are touring this week. ${AGENT.name} uses this live MLS set to price and market your listing. Call ${AGENT.phone}.`,
    path: '/listings',
    baseUrl,
    keywords: [
      `${place} homes for sale`,
      `selling in ${place}`,
      'Las Vegas MLS listings',
      `${place} listing competition`,
    ],
  });
}

export const revalidate = 3600;

export default async function ListingsPage() {
  const config = await getDomainConfig();
  const place = findNeighborhoodForName(config.neighborhood)?.name ?? config.neighborhood;
  const neighborhoods = getAllNeighborhoods().slice(0, 9);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Sell Your Home', href: '/' },
          { name: "What's Selling" },
        ]}
      />

      <section className="bg-gradient-to-r from-primary-900 to-bhhs-maroon section-padding py-16">
        <div className="container-wide mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-white mb-4">
            What&apos;s Selling in {place}
          </h1>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            Live MLS inventory is the set buyers will compare to your {place} home. We use it
            for your list price, not a Las Vegas Valley average.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
              Filter {place} competition
            </h2>
            <p className="text-primary-600">
              Same beds, baths, and plan as your home — that is the comparable set that matters
              when we list.
            </p>
          </div>
          <div className="mb-12">
            <RealScoutSearch />
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
              Active listings buyers will tour
            </h2>
            <p className="text-primary-600 mb-6">
              Greater Las Vegas Association of REALTORS® MLS. Updated as the feed refreshes.
            </p>
          </div>
          <RealScoutListings status="active" numResults="12" />
        </div>
      </section>

      <section className="section-padding bg-primary-50">
        <div className="container-wide mx-auto">
          <h2 className="text-2xl font-display font-bold text-primary-900 mb-6 text-center">
            Why sellers watch this page
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="font-display font-bold text-primary-900 mb-2">Real-time MLS</h3>
              <p className="text-sm text-primary-600">
                New {place} listings can steal your showing weekend. We watch the same feed.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-display font-bold text-primary-900 mb-2">Price position</h3>
              <p className="text-sm text-primary-600">
                If three similar homes are live, the best-presented, best-priced listing gets
                the first offer.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-display font-bold text-primary-900 mb-2">Neighborhood, not ZIP</h3>
              <p className="text-sm text-primary-600">
                We still list to {place} streets and plans. Browse other communities below if
                your home sits on a border.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
            Selling in a different Las Vegas neighborhood?
          </h2>
          <div className="flex flex-wrap gap-3">
            {neighborhoods.map((n) => (
              <a
                key={n.slug}
                href={`/neighborhoods/${n.slug}`}
                className="px-4 py-2 text-sm bg-primary-50 text-primary-800 rounded-full border border-primary-100 hover:border-bhhs-maroon"
              >
                Sell in {n.name}
              </a>
            ))}
            <a
              href="/neighborhoods"
              className="px-4 py-2 text-sm bg-bhhs-maroon text-white rounded-full"
            >
              All neighborhoods
            </a>
          </div>
        </div>
      </section>

      <SellerCta
        neighborhood={place}
        heading={`List your ${place} home before this inventory grows`}
        body={`A current CMA uses these actives plus closed sales. Call ${AGENT.phone}.`}
      />
    </>
  );
}
