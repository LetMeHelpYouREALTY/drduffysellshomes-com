import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware — passes the hostname to server components via x-forwarded-host.
 * Vercel sets this automatically, but we ensure it's always present.
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const host = request.headers.get('host') || 'localhost';

  // Ensure x-forwarded-host is set for getDomainConfig()
  response.headers.set('x-forwarded-host', host);

  return response;
}

export const config = {
  // Run on all routes except static files and API
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'],
};
