/**
 * RealScout widget placeholders.
 * The Cloudflare Worker (realscout-global-injector) injects the actual
 * RealScout script at the edge — these just render the custom elements
 * that the script targets.
 */

export function RealScoutSearch() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html:
          '<realscout-search data-agent-encoded-id="QWdlbnQtMjI1MDUw" data-search-type="buy"></realscout-search>',
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
        __html: `<realscout-simple-search data-agent-encoded-id="QWdlbnQtMjI1MDUw" data-search-type="buy" data-listing-status="${status}" data-num-results="${numResults}"></realscout-simple-search>`,
      }}
    />
  );
}
