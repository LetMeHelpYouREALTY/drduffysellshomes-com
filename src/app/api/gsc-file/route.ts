import { NextRequest, NextResponse } from 'next/server';

/**
 * Serves Google Search Console HTML-file verification when
 * GOOGLE_HTML_VERIFICATION is set (the exact contents of the file Google
 * provides). Rewritten from /google*.html in next.config.ts.
 */
export async function GET(_request: NextRequest) {
  const body = process.env.GOOGLE_HTML_VERIFICATION;

  if (!body) {
    return new NextResponse('Not found', { status: 404 });
  }

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Robots-Tag': 'noindex',
    },
  });
}
