import { NextResponse } from 'next/server';

export async function middleware() {
  const headers = new Headers({
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
    'Surrogate-Control': 'no-store',
  });

  const response = NextResponse.next();

  headers.forEach((value, key) => {
    response.headers.set(key, value);
  });

  return response;
}

// Define matcher to ensure middleware runs for all routes
export const config = {
  matcher: '/api/:path*',
};