import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('auth')
  const { pathname } = request.nextUrl

  // Allow access to login page and static assets
  if (
    pathname === '/login' ||
    pathname.startsWith('/_next') ||
    pathname.includes('.') || // Files like favicon.ico, images, etc.
    pathname.startsWith('/api') // Allow API routes if needed
  ) {
    return NextResponse.next()
  }

  // Check for auth cookie
  if (!authCookie || authCookie.value !== 'true') {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
