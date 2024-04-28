import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {NextUIProvider} from "@nextui-org/react";
import Layout from "@/components/Layout";
import Head from "next/head";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Head>
        <title>Medium</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}
