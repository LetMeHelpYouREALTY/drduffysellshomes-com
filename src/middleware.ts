import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  CANONICAL_HOST,
  hostnameFromHeader,
  shouldRedirectToCanonical,
} from '@/lib/siteHost';

/**
 * 1. 308 apex and the former drduffysellshomes.com host → www.painteddesertestates.com,
 *    path and query preserved, so Google consolidates on one host.
 * 2. Pass hostname to server components via x-forwarded-host.
 */
export function middleware(request: NextRequest) {
  const host = hostnameFromHeader(
    request.headers.get('x-forwarded-host') || request.headers.get('host'),
  );

  if (shouldRedirectToCanonical(host)) {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    url.hostname = CANONICAL_HOST;
    url.port = '';
    return NextResponse.redirect(url, 308);
  }

  const response = NextResponse.next();
  response.headers.set('x-forwarded-host', host);
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
