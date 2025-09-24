"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="jp">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
        <Script
          src="https://staging-widget.guidy.net/v1/assets/static-pages/injector.js"
          type="module"
          data-account="mct0cu52og"
        ></Script>
        {/* <Script
          src="http://127.0.0.1:5500/test-live/injector.js"
          type="module"
          data-account="m6ertwhy4i"
          strategy="beforeInteractive"
        ></Script> */}
        {/* <Script
          src="https://staging-widget.custama.com/scripts/injector.js"
          type="module"
          data-bot-id="mfus9g0l4n"
        ></Script> */}
        {/* <Script
          type="module"
          data-bot-id="mfuzulm480"
          src="http://localhost:5500/scripts/injector.js"
        ></Script> */}
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import Script from "next/script";
