/**
 * Honest freshness for sitemap lastmod and WebPage.dateModified.
 * CONTENT_UPDATED_AT is inlined at build (next.config.ts) from the deployed
 * commit date, so lastmod only moves when content ships. Never request time.
 */
const BUILD_STAMP = process.env.CONTENT_UPDATED_AT?.trim();
const FALLBACK = new Date();

export function contentUpdatedAt(): Date {
  if (BUILD_STAMP) {
    const parsed = new Date(BUILD_STAMP);
    if (!Number.isNaN(parsed.getTime())) return parsed;
  }
  return FALLBACK;
}

export function contentUpdatedIsoDate(): string {
  return contentUpdatedAt().toISOString().slice(0, 10);
}
