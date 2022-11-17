import Head from 'next/head';

import 'styles/globals.scss';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
        <meta
          name="description"
          content="EZB, a shop for gamers, creators, and PC builders, has the PC hardware and gaming gear you need to Do Your Thing."
        />
        <link rel="icon" href="/favicon.ico" />

        <title>PC Components | Gaming Gear | EZB</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
