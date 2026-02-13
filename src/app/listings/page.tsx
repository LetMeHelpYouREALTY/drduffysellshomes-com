import type { Metadata } from 'next';
import { getDomainConfig } from '@/lib/getDomainConfig';
import { AGENT } from '@/config/agent';
import { RealScoutSearch, RealScoutListings } from '@/components/RealScoutWidget';

export async function generateMetadata(): Promise<Metadata> {
  const config = await getDomainConfig();
  return {
    title: `Homes for Sale in ${config.neighborhood} — Search All MLS Listings`,
    description: `Search every home for sale in ${config.neighborhood}, ${config.city}. Updated MLS listings with photos, prices, and virtual tours. Contact ${AGENT.name} at ${AGENT.phone}.`,
  };
}

export default async function ListingsPage() {
  const config = await getDomainConfig();

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-900 to-bhhs-maroon section-padding py-16">
        <div className="container-wide mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-white mb-4">
            {config.neighborhood} Homes for Sale
          </h1>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            Browse every active listing in {config.neighborhood}, {config.city}. Updated in real
            time from the MLS.
          </p>
        </div>
      </section>

      {/* RealScout Search Widget — Worker injects the actual widget */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
              Search Properties
            </h2>
            <p className="text-primary-600">
              Use the filters below to find your perfect {config.neighborhood} home.
            </p>
          </div>

          {/* RealScout search widget — the Worker auto-injects the script */}
          <div className="mb-12">
            <RealScoutSearch />
          </div>

          {/* RealScout listings grid */}
          <div className="mb-8">
            <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
              Active Listings
            </h2>
            <p className="text-primary-600 mb-6">
              Showing homes currently for sale in {config.neighborhood} and surrounding areas.
            </p>
          </div>

          <RealScoutListings status="active" numResults="12" />
        </div>
      </section>

      {/* Why Search Here */}
      <section className="section-padding bg-primary-50">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="font-display font-bold text-primary-900 mb-2">Real-Time MLS Data</h3>
              <p className="text-sm text-primary-600">
                Listings update directly from the Greater Las Vegas Association of REALTORS® MLS.
                No stale data.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-3">🏷️</div>
              <h3 className="font-display font-bold text-primary-900 mb-2">Save & Compare</h3>
              <p className="text-sm text-primary-600">
                Create a free account to save favorites, set up alerts, and compare properties
                side by side.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-display font-bold text-primary-900 mb-2">Tour Scheduling</h3>
              <p className="text-sm text-primary-600">
                Schedule tours directly from any listing. Virtual and in-person options available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-bhhs-maroon to-primary-900">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-lg text-primary-200 mb-8 max-w-xl mx-auto">
            Dr. Duffy has access to off-market listings, pocket listings, and new construction
            not yet on the MLS. Call for exclusive opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-gold text-base px-8 py-4">
              Contact Dr. Duffy
            </a>
            <a
              href={`tel:${AGENT.phoneTel}`}
              className="btn-secondary !text-white !border-white/30 hover:!bg-white/10 text-base px-8 py-4"
            >
              Call {AGENT.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
