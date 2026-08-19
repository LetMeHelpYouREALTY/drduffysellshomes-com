import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AGENT } from '@/config/agent';
import {
  getAllNeighborhoods,
  getNeighborhoodBySlug,
  getRelatedNeighborhoods,
} from '@/config/neighborhoods';
import { getSiteUrl } from '@/lib/siteUrl';
import { buildPageMetadata } from '@/lib/pageMetadata';
import { getSellerFaqs } from '@/lib/sellerCopy';
import { RealScoutListings } from '@/components/RealScoutWidget';
import Breadcrumbs from '@/components/Breadcrumbs';
import SellerProcess from '@/components/SellerProcess';
import SellerCta from '@/components/SellerCta';
import FaqSection from '@/components/FaqSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getDomainConfig } from '@/lib/getDomainConfig';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllNeighborhoods().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const neighborhood = getNeighborhoodBySlug(slug);
  if (!neighborhood) {
    return { title: 'Neighborhood not found', robots: { index: false, follow: true } };
  }

  const baseUrl = await getSiteUrl();
  return buildPageMetadata({
    title: `Sell Your ${neighborhood.name} Home | ${neighborhood.city}, NV ${neighborhood.zip}`,
    description: `${neighborhood.headline}. ${neighborhood.subhead} ${AGENT.name}, ${AGENT.brokerage}, lists homes in ${neighborhood.name}. Call ${AGENT.phone}. Office: ${AGENT.address.full}.`,
    path: `/neighborhoods/${neighborhood.slug}`,
    baseUrl,
    keywords: [
      `sell home ${neighborhood.name}`,
      `${neighborhood.name} listing agent`,
      `${neighborhood.name} home value`,
      `homes selling in ${neighborhood.name}`,
      `${neighborhood.city} real estate`,
    ],
  });
}

export const revalidate = 3600;

export default async function NeighborhoodPage({ params }: PageProps) {
  const { slug } = await params;
  const neighborhood = getNeighborhoodBySlug(slug);
  if (!neighborhood) notFound();

  const config = await getDomainConfig();
  const related = getRelatedNeighborhoods(neighborhood);
  const faqs = [
    ...getSellerFaqs(neighborhood.name, neighborhood.city),
    {
      question: `What should I highlight when selling in ${neighborhood.name}?`,
      answer: neighborhood.listingTips.join(' '),
    },
  ];

  return (
    <>
      <SchemaMarkup
        entities="page"
        config={{
          ...config,
          neighborhood: neighborhood.name,
          city: neighborhood.city,
          zip: neighborhood.zip,
        }}
        pageTitle={`Sell Your ${neighborhood.name} Home`}
        pageDescription={neighborhood.intro}
        path={`/neighborhoods/${neighborhood.slug}`}
        breadcrumbs={[
          { name: 'Sell Your Home', path: '/' },
          { name: 'Las Vegas Neighborhoods', path: '/neighborhoods' },
          { name: neighborhood.name, path: `/neighborhoods/${neighborhood.slug}` },
        ]}
      />

      <Breadcrumbs
        items={[
          { name: 'Sell Your Home', href: '/' },
          { name: 'Neighborhoods', href: '/neighborhoods' },
          { name: neighborhood.name },
        ]}
      />

      <section className="bg-gradient-to-r from-primary-900 to-bhhs-maroon section-padding py-16">
        <div className="container-wide mx-auto">
          <p className="text-bhhs-gold text-sm font-semibold uppercase tracking-wider mb-3">
            {neighborhood.city}, NV {neighborhood.zip} · Listing plan
          </p>
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-white mb-4">
            {neighborhood.headline}
          </h1>
          <p className="text-lg text-primary-200 max-w-3xl">{neighborhood.subhead}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="/contact#valuation" className="btn-gold">
              Get my {neighborhood.name} home value
            </a>
            <a
              href={`tel:${AGENT.phoneTel}`}
              className="btn-secondary !text-white !border-white/30 hover:!bg-white/10"
            >
              Call {AGENT.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-display font-bold text-primary-900">
              Selling in {neighborhood.name}
            </h2>
            <p className="text-primary-700 leading-relaxed">{neighborhood.intro}</p>
            <p className="text-primary-700 leading-relaxed">{neighborhood.sellingAngle}</p>
            <p className="text-primary-700 leading-relaxed">{neighborhood.marketingPlan}</p>
            <p className="text-sm text-primary-600">
              <span className="font-semibold">Commute from this area:</span> {neighborhood.commute}
            </p>
          </div>
          <aside className="p-6 rounded-xl bg-primary-50 border border-primary-100 h-fit">
            <h2 className="font-display font-bold text-primary-900 mb-4">List with Dr. Duffy</h2>
            <p className="text-sm text-primary-700 mb-4">
              {AGENT.name} · {AGENT.brokerage}
            </p>
            <address className="not-italic text-sm text-primary-700 space-y-2 mb-6">
              <p>{AGENT.address.full}</p>
              <p>
                <a href={`tel:${AGENT.phoneTel}`} className="text-bhhs-maroon font-semibold">
                  {AGENT.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${AGENT.email}`}>{AGENT.email}</a>
              </p>
            </address>
            <a href="/contact#valuation" className="btn-primary w-full text-center">
              Request CMA
            </a>
          </aside>
        </div>
      </section>

      <section className="section-padding bg-bhhs-cream">
        <div className="container-wide mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
              Amenities buyers search in {neighborhood.name}
            </h2>
            <ul className="space-y-3">
              {neighborhood.amenities.map((item) => (
                <li key={item} className="flex gap-3 text-primary-700">
                  <span className="text-bhhs-gold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
              How we list a {neighborhood.name} home
            </h2>
            <ol className="space-y-3">
              {neighborhood.listingTips.map((tip, index) => (
                <li key={tip} className="text-primary-700">
                  <span className="font-semibold text-bhhs-maroon">{index + 1}.</span> {tip}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-50">
        <div className="container-wide mx-auto">
          <h2 className="text-3xl font-display font-bold text-primary-900 mb-4 text-center">
            Homes currently listed in and around {neighborhood.name}
          </h2>
          <p className="text-center text-primary-600 mb-8 max-w-2xl mx-auto">
            This is the inventory buyers will compare to yours. We use it to set your list price
            the week you go live.
          </p>
          <RealScoutListings status="active" numResults="6" />
        </div>
      </section>

      <SellerProcess neighborhood={neighborhood.name} />

      {related.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-wide mx-auto">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-8 text-center">
              Nearby neighborhoods we also sell
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((n) => (
                <a
                  key={n.slug}
                  href={`/neighborhoods/${n.slug}`}
                  className="p-5 rounded-xl border border-primary-100 hover:border-bhhs-gold/40 hover:shadow-md transition-all"
                >
                  <h3 className="font-display font-bold text-primary-900 mb-2">
                    Sell your {n.name} home
                  </h3>
                  <p className="text-sm text-primary-600">{n.subhead}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <SellerCta neighborhood={neighborhood.name} />
      <FaqSection heading={`${neighborhood.name} seller questions`} faqs={faqs} />
    </>
  );
}
