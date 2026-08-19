import type { Metadata } from 'next';
import { AGENT } from '@/config/agent';
import { getNeighborhoodsByRegion } from '@/config/neighborhoods';
import { getSiteUrl } from '@/lib/siteUrl';
import { buildPageMetadata } from '@/lib/pageMetadata';
import Breadcrumbs from '@/components/Breadcrumbs';
import SellerCta from '@/components/SellerCta';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getSiteUrl();
  return buildPageMetadata({
    title: 'Sell Your Home in Every Las Vegas Neighborhood',
    description: `Neighborhood-by-neighborhood listing plans for Summerlin, Skye Canyon, Centennial Hills, Henderson, Southern Highlands, and more. ${AGENT.name} sells homes across the Las Vegas Valley. Call ${AGENT.phone}.`,
    path: '/neighborhoods',
    baseUrl,
    keywords: [
      'sell home Las Vegas neighborhoods',
      'Summerlin listing agent',
      'Henderson home selling',
      'Skye Canyon realtor',
      'Las Vegas neighborhood specialist',
    ],
  });
}

export const revalidate = 3600;

export default function NeighborhoodsIndexPage() {
  const groups = getNeighborhoodsByRegion();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Sell Your Home', href: '/' },
          { name: 'Las Vegas Neighborhoods' },
        ]}
      />

      <section className="bg-gradient-to-r from-primary-900 to-bhhs-maroon section-padding py-16">
        <div className="container-wide mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-white mb-4">
            Sell Your Home in Every Las Vegas Neighborhood
          </h1>
          <p className="text-lg text-primary-200 max-w-3xl mx-auto">
            Buyers search by community — Summerlin villages, Skye Canyon, Centennial Hills,
            Henderson master plans, North Las Vegas parks. We list that way. Pick your
            neighborhood for a selling plan written to that map.
          </p>
        </div>
      </section>

      {groups.map((group) => (
        <section key={group.region} className="section-padding bg-white even:bg-primary-50">
          <div className="container-wide mx-auto">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-primary-900 mb-8">
              {group.label}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.neighborhoods.map((n) => (
                <a
                  key={n.slug}
                  href={`/neighborhoods/${n.slug}`}
                  className="block p-6 rounded-xl border border-primary-100 bg-white hover:border-bhhs-gold/40 hover:shadow-lg transition-all"
                >
                  <p className="text-xs uppercase tracking-wider text-bhhs-maroon font-semibold mb-2">
                    {n.city}, NV {n.zip}
                  </p>
                  <h3 className="text-xl font-display font-bold text-primary-900 mb-2">
                    Sell your {n.name} home
                  </h3>
                  <p className="text-sm text-primary-600 leading-relaxed">{n.subhead}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}

      <SellerCta
        neighborhood="Las Vegas Valley"
        heading="Not sure which neighborhood page to use?"
        body={`Call ${AGENT.name} at ${AGENT.phone} with your address. We will pull the right comps for your tract.`}
      />
    </>
  );
}
