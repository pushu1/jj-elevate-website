import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Protect all /admin routes
  if (path.startsWith('/admin')) {
    const session = request.cookies.get('admin_session')?.value;

    // If there is no session cookie, redirect to the login page
    if (!session) {
      return NextResponse.redirect(new URL('/admin-login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
