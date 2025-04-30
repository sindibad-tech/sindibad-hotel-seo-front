import {
  NextFetchEvent,
  NextRequest,
  NextResponse,
  NextMiddleware,
} from 'next/server';

const allowedOriginRegex =
  /^https?:\/\/((([a-z0-9-]+\.)*sindibad\.iq)|localhost|(sindibad-assistant(-[a-z0-9-]+)*\.vercel\.app))(:\d+)?$/i;

export function corsMiddleware(next: NextMiddleware) {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const origin = request.headers.get('origin');

    console.log('Request received from origin:', origin);

    if (!origin) {
      return NextResponse.next();
    }

    const res = await next(request, _next);

    if (allowedOriginRegex.test(origin) && res) {
      res.headers.set('Access-Control-Allow-Origin', origin);
      res.headers.set('Access-Control-Allow-Credentials', 'true');
      res.headers.set(
        'Access-Control-Allow-Methods',
        'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
      );
      res.headers.set('Access-Control-Allow-Headers', '*');
    } else {
      return new NextResponse('Not allowed by CORS', { status: 403 });
    }
    return res;
  };
}

export const config = {
  matcher: '/api/hello',
};
