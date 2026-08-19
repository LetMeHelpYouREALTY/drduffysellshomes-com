import { getDomainConfig } from '@/lib/getDomainConfig';
import { AGENT } from '@/config/agent';
import {
  findNeighborhoodForName,
  getAllNeighborhoods,
} from '@/config/neighborhoods';
import Hero from '@/components/Hero';
import { RealScoutListings } from '@/components/RealScoutWidget';
import NeighborhoodGrid from '@/components/NeighborhoodGrid';
import SellerProcess from '@/components/SellerProcess';
import SellerCta from '@/components/SellerCta';
import FaqSection from '@/components/FaqSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getSellerFaqs } from '@/lib/sellerCopy';
import {
  competingListingsH2,
  faqH2,
  sellerH1,
  SELLER_FEATURE_H3,
  whatBuyersPayH2,
  whoListsH2,
  whySellersH2,
  otherNeighborhoodsH2,
} from '@/lib/headings';

export const revalidate = 3600;

export default async function HomePage() {
  const config = await getDomainConfig();
  const neighborhood = findNeighborhoodForName(config.neighborhood);
  const place = neighborhood?.name ?? config.neighborhood;
  const allNeighborhoods = getAllNeighborhoods();

  return (
    <>
      <SchemaMarkup
        entities="page"
        config={config}
        pageTitle={sellerH1(place, config.city)}
        pageDescription={
          neighborhood?.intro ??
          `Sell your home in ${place} with ${AGENT.name}. Neighborhood comps, listing marketing, and seller representation across the Las Vegas Valley. ${AGENT.address.full}. Call ${AGENT.phone}.`
        }
      />
      <Hero config={config} neighborhood={neighborhood} />

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-900 mb-4">
            {whySellersH2(place)}
          </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              {neighborhood
                ? neighborhood.sellingAngle
                : `Selling in ${place} is not the same as selling “a Las Vegas home.” We list to the buyers already filtering for your community.`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: SELLER_FEATURE_H3[0].title,
                desc: `We pull closed ${place} sales that match your plan, lot, and condition. A valley median is not a list price.`,
              },
              {
                title: SELLER_FEATURE_H3[1].title,
                desc: `Photos, remarks, and ads name ${place} amenities and commute — the filters buyers already use.`,
              },
              {
                title: SELLER_FEATURE_H3[2].title,
                desc: `While you are on the market we track new ${place} listings so you are not blindsided by a price cut next door.`,
              },
              {
                title: SELLER_FEATURE_H3[3].title,
                desc: 'Guard-gated estates and tract homes do not share a flyer. We pick the playbook your address actually needs.',
              },
              {
                title: SELLER_FEATURE_H3[4].title,
                desc: 'You see estimated closing costs, payoff, and net before the listing agreement — then we update it with every offer.',
              },
              {
                title: SELLER_FEATURE_H3[5].title,
                desc: `${AGENT.brokerage} tools plus a listing agent who sells ${place} every week. Call ${AGENT.phone}.`,
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-primary-100 hover:border-bhhs-gold/30 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-display font-bold text-primary-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-primary-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {neighborhood && (
        <section className="section-padding bg-bhhs-cream">
          <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-primary-900 mb-4">
                {whatBuyersPayH2(neighborhood.name)}
              </h2>
              <p className="text-primary-700 leading-relaxed mb-6">{neighborhood.intro}</p>
              <p className="text-primary-700 leading-relaxed mb-6">{neighborhood.marketingPlan}</p>
              <p className="text-sm text-primary-600">
                <span className="font-semibold">Commute:</span> {neighborhood.commute}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-primary-900 mb-4">
                Which {neighborhood.name} amenities belong in the listing remarks?
              </h3>
              <ul className="space-y-3 mb-8">
                {neighborhood.amenities.map((item) => (
                  <li key={item} className="flex gap-3 text-primary-700">
                    <span className="text-bhhs-gold font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="text-xl font-display font-bold text-primary-900 mb-4">
                How should a {neighborhood.name} seller prepare to list?
              </h3>
              <ul className="space-y-3">
                {neighborhood.listingTips.map((tip) => (
                  <li key={tip} className="text-sm text-primary-700 leading-relaxed">
                    {tip}
                  </li>
                ))}
              </ul>
              <a
                href={`/neighborhoods/${neighborhood.slug}`}
                className="inline-block mt-8 btn-primary"
              >
                Full {neighborhood.name} selling guide
              </a>
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-primary-50">
        <div className="container-wide mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-900 mb-4">
              {competingListingsH2(place)}
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Buyers touring this weekend will open these homes next. We price and stage yours
              against this set. MLS data from the Greater Las Vegas Association of REALTORS®.
            </p>
          </div>
          <RealScoutListings status="active" numResults="6" />
          <div className="mt-8 text-center">
            <a href="/listings" className="btn-primary">
              See every {place} active
            </a>
          </div>
        </div>
      </section>

      <SellerProcess neighborhood={place} />

      <NeighborhoodGrid
        neighborhoods={allNeighborhoods}
        heading={otherNeighborhoodsH2()}
        intro="Each community has its own buyer pool, HOA facts, and comparable set. Pick your neighborhood for a listing plan written for that map — not a generic Las Vegas flyer."
      />

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-900 mb-6">
                {whoListsH2(place)}
              </h2>
              <p className="text-lg text-primary-600 leading-relaxed mb-6">
                {AGENT.shortBio} {AGENT.name} lists homes in {place} and across Summerlin,
                Henderson, North Las Vegas, and the northwest and southwest corridors.
              </p>
              <ul className="space-y-3 mb-8">
                {AGENT.credentials.slice(0, 4).map((cred) => (
                  <li key={cred} className="flex items-start gap-3 text-primary-700">
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
                    <span className="text-sm">{cred}</span>
                  </li>
                ))}
              </ul>
              <a href="/about" className="btn-secondary">
                Why sellers hire Dr. Duffy
              </a>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-bhhs-cream to-primary-100 overflow-hidden">
                {AGENT.headshotUrl ? (
                  <img
                    src={AGENT.headshotUrl}
                    alt={`${AGENT.name}, listing agent selling homes in ${place}, Las Vegas`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-primary-400">
                    <span className="text-6xl font-display font-bold">JD</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SellerCta neighborhood={place} />

      <FaqSection
        heading={faqH2(place)}
        faqs={getSellerFaqs(place, config.city)}
      />
    </>
  );
}
