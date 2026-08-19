import type { Metadata } from 'next';
import { AGENT } from '@/config/agent';
import { getDomainConfig } from '@/lib/getDomainConfig';
import { findNeighborhoodForName } from '@/config/neighborhoods';
import { getSiteUrl } from '@/lib/siteUrl';
import { buildPageMetadata } from '@/lib/pageMetadata';
import Breadcrumbs from '@/components/Breadcrumbs';
import SellerProcess from '@/components/SellerProcess';
import SellerCta from '@/components/SellerCta';
import FaqSection from '@/components/FaqSection';
import { getSellerFaqs } from '@/lib/sellerCopy';

export async function generateMetadata(): Promise<Metadata> {
  const config = await getDomainConfig();
  const baseUrl = await getSiteUrl();
  const place = findNeighborhoodForName(config.neighborhood)?.name ?? config.neighborhood;
  return buildPageMetadata({
    title: `How We Sell ${place} Homes — Listing Process`,
    description: `The listing process ${AGENT.name} uses to sell homes in ${place} and across Las Vegas neighborhoods: CMA, prep, MLS marketing, offers, and closing. Call ${AGENT.phone}.`,
    path: '/sell',
    baseUrl,
    keywords: [
      `how to sell a home in ${place}`,
      'Las Vegas listing process',
      'home selling steps Las Vegas',
    ],
  });
}

export const revalidate = 3600;

export default async function SellPage() {
  const config = await getDomainConfig();
  const place = findNeighborhoodForName(config.neighborhood)?.name ?? config.neighborhood;

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Sell Your Home', href: '/' },
          { name: 'How We Sell' },
        ]}
      />

      <section className="bg-gradient-to-r from-primary-900 to-bhhs-maroon section-padding py-16">
        <div className="container-wide mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-white mb-4">
            How We Sell Homes in {place}
          </h1>
          <p className="text-lg text-primary-200 max-w-3xl mx-auto">
            A listing is a neighborhood campaign. We price to {place} comps, market to buyers
            already searching that community, and negotiate with the same numbers we used to list.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto space-y-8 text-primary-700 leading-relaxed">
          <h2 className="text-2xl font-display font-bold text-primary-900">
            What “done” looks like
          </h2>
          <p>
            You close. The recorded sale matches the net-sheet we showed you at listing — or we
            explain every variance. Until then, your {place} home is priced against live
            competition, photographed for the filters buyers use, and watched weekly for new
            listings that could steal your showing.
          </p>
          <h2 className="text-2xl font-display font-bold text-primary-900">
            What we do not do
          </h2>
          <p>
            We do not list at a valley-wide average. We do not upload a generic “Las Vegas luxury
            living” remark when your buyer is searching {place}. We do not guess a price — if the
            MLS has not confirmed a number, we say so and pull the file.
          </p>
        </div>
      </section>

      <SellerProcess neighborhood={place} />

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Before photos',
              desc: `Punch-list ranked by return: paint, landscape, and mechanical items ${place} buyers will flag on the first tour.`,
            },
            {
              title: 'Launch week',
              desc: 'MLS, portals, neighborhood ads, and broker preview when the product warrants it. Strongest traffic is usually days 1–14.',
            },
            {
              title: 'Under contract',
              desc: 'Inspection credits negotiated with the same comps. We manage the file with the title company through recordation.',
            },
          ].map((block) => (
            <div key={block.title} className="p-6 rounded-xl border border-primary-100">
              <h2 className="text-xl font-display font-bold text-primary-900 mb-3">
                {block.title}
              </h2>
              <p className="text-sm text-primary-600">{block.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <SellerCta neighborhood={place} />
      <FaqSection heading={`${place} listing questions`} faqs={getSellerFaqs(place, config.city)} />
    </>
  );
}
