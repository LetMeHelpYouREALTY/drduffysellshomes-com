/**
 * Honest freshness for sitemap lastmod and WebPage.dateModified.
 * Uses the git commit that Vercel deployed. Never invent a market statistic.
 */
export function contentUpdatedAt(): Date {
  const fromVercel = process.env.VERCEL_GIT_COMMIT_DATE?.trim();
  if (fromVercel) {
    const parsed = new Date(fromVercel);
    if (!Number.isNaN(parsed.getTime())) return parsed;
  }
  return new Date();
}

export function contentUpdatedIsoDate(): string {
  return contentUpdatedAt().toISOString().slice(0, 10);
}
