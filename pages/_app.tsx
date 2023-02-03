import Layout from "@src/components/layout";
import theme from "@src/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/styles/globalstyles";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="3M1ifLSu7U9sfH-wisDZK0icR3JG87xhxqtPtv3nQSs"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <SessionProvider session={session}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}
