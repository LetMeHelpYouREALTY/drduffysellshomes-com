import type { MetadataRoute } from 'next';

/**
 * AI search/citation + training crawlers that must stay allowed.
 * Google Search still uses Googlebot; Google-Extended is Gemini/other Google AI.
 * @see https://developers.google.com/search/docs/appearance/ai-features
 * @see https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
 */
export const AI_SEARCH_USER_AGENTS = [
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'Google-Extended',
  'Applebot-Extended',
  'Amazonbot',
] as const;

export const SEARCH_ENGINE_USER_AGENTS = [
  'Googlebot',
  'Googlebot-Image',
  'Bingbot',
] as const;

export function aiRobotsRules(): MetadataRoute.Robots['rules'] {
  return [
    {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/google-verification'],
    },
    {
      userAgent: [...SEARCH_ENGINE_USER_AGENTS],
      allow: '/',
    },
    {
      userAgent: [...AI_SEARCH_USER_AGENTS],
      allow: '/',
    },
  ];
}
