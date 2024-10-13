import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  // If the user is not authenticated, restrict access to the /create and /blog pages
  if (!token && (pathname === '/create' || pathname === '/blog')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If the user is authenticated, prevent access to the /signup and /login pages
  if (token && (pathname === '/signup' || pathname === '/login')) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  // Allow the request to continue for all other cases
  return NextResponse.next();
}

// Configure the paths where the middleware should apply
export const config = {
  matcher: ['/create', '/blog', '/signup', '/login'],
};
