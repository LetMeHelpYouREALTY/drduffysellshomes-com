/**
 * RealScout widgets.
 * Load the web-components script once in the root layout (`<Script>`).
 * Render custom elements with dangerouslySetInnerHTML — do not hydrate with React state.
 */

export const REALSCOUT_AGENT_ENCODED_ID = 'QWdlbnQtMjI1MDUw';
export const REALSCOUT_SCRIPT_SRC =
  'https://em.realscout.com/widgets/realscout-web-components.umd.js';

export function RealScoutSearch() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<realscout-search data-agent-encoded-id="${REALSCOUT_AGENT_ENCODED_ID}" data-search-type="buy"></realscout-search>`,
      }}
    />
  );
}

export function RealScoutListings({
  status = 'active',
  numResults = '12',
}: {
  status?: string;
  numResults?: string;
}) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<realscout-simple-search data-agent-encoded-id="${REALSCOUT_AGENT_ENCODED_ID}" data-search-type="buy" data-listing-status="${status}" data-num-results="${numResults}"></realscout-simple-search>`,
      }}
    />
  );
}

/**
 * Horizontal office-listings carousel (live MLS cards).
 * Place immediately below the page hero on every route.
 */
export function RealScoutCarousel({ neighborhood }: { neighborhood?: string }) {
  const place = neighborhood?.trim() || 'Las Vegas';

  return (
    <section
      className="bg-white border-b border-primary-100 py-10 sm:py-12"
      aria-label={`${place} listing carousel`}
    >
      <div className="container-wide mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-wider text-bhhs-maroon font-semibold mb-2">
            Live MLS carousel
          </p>
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-primary-900 mb-2">
            Which {place} homes are buyers touring this week?
          </h2>
          <p className="text-sm text-primary-600 max-w-2xl mx-auto">
            This is the inventory a buyer will open next to yours. We price and market your{' '}
            {place} listing against this set — not a valley-wide average.
          </p>
        </div>
        <div
          className="realscout-carousel below-fold-embed"
          dangerouslySetInnerHTML={{
            __html: `<realscout-office-listings agent-encoded-id="${REALSCOUT_AGENT_ENCODED_ID}" sort-order="STATUS_AND_SIGNIFICANT_CHANGE" listing-status="For Sale" property-types="SFR,MF"></realscout-office-listings>`,
          }}
        />
        <p className="mt-4 text-xs text-primary-700 text-center">
          Listing data from the Greater Las Vegas Association of REALTORS® MLS. Information
          deemed reliable but not guaranteed. Equal Housing Opportunity.
        </p>
      </div>
    </section>
  );
}
