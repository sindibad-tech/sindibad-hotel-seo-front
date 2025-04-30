import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from 'next/server';

export function assetMiddleware(next: NextMiddleware) {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    if (request.nextUrl.href.includes('/hotel/_next')) {
      const path = request.nextUrl.href.replace('/hotel/_next', '/_next');
      console.log('Rewriting URL:', request.nextUrl.href, '->', path);
      return NextResponse.rewrite(path);
    }

    return next(request, _next);
  };
}

export const config = {
  matcher: '/hotel/_next',
};
