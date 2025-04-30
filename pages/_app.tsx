import '@/styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import { PlasmicQueryDataProvider } from "@plasmicapp/react-web/lib/query";
import Link from "next/link";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { queryCache } = pageProps;

  return (
    <PlasmicRootProvider Head={Head} Link={Link}>
      {queryCache && !queryCache.error ? (
        <PlasmicQueryDataProvider prefetchedCache={queryCache}>
          <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-L9C9BT12S2" defer={true}></script>
            <script defer={true}
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-L9C9BT12S2');
                `,
              }}
            />
            <link rel="icon" href="/favicon.ico"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
          </Head>
          <Component {...pageProps} />
        </PlasmicQueryDataProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </PlasmicRootProvider>
  );
}
