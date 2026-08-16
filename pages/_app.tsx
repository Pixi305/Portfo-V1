import "../styles/fonts.scss";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "800"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main
      id="main"
      className={`flex flex-col w-screen h-screen overflow-auto relative ${plusJakarta.variable}`}
    >
      <Head>
        <title>Abdul Lateef</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
