import type { Metadata } from 'next';
import { AGENT } from '@/config/agent';
import { getNeighborhoodsByRegion } from '@/config/neighborhoods';
import { getSiteUrl } from '@/lib/siteUrl';
import { buildPageMetadata } from '@/lib/pageMetadata';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';
import SellerCta from '@/components/SellerCta';
import { neighborhoodCardH3, neighborhoodsIndexH1, regionSellH2 } from '@/lib/headings';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getSiteUrl();
  return buildPageMetadata({
    title: neighborhoodsIndexH1(),
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

      <PageHero
        title={neighborhoodsIndexH1()}
        subtitle="Buyers search by community — Summerlin villages, Skye Canyon, Centennial Hills, Henderson master plans, North Las Vegas parks. We list that way. Pick your neighborhood for a selling plan written to that map."
        neighborhood="Las Vegas Valley"
      />

      {groups.map((group) => (
        <section key={group.region} className="section-padding bg-white even:bg-primary-50">
          <div className="container-wide mx-auto">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-primary-900 mb-8">
              {regionSellH2(group.label)}
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
                    {neighborhoodCardH3(n.name, n.city)}
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
        heading="Not sure which Las Vegas neighborhood listing page to use?"
        body={`Call ${AGENT.name} at ${AGENT.phone} with your address. We will pull the right comps for your tract.`}
      />
    </>
  );
}
