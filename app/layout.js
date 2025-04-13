import { jsonLdSchema, meta } from "@/utils/headData";
import { dmSans, nunito, openSans, poppins } from "@/utils/fonts";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import Script from "next/script";

const GA_MEASUREMENT_ID = "GA_MEASUREMENT_ID";
export const metadata = meta;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={` ${poppins.variable} ${dmSans.variable} ${openSans.variable} ${nunito.variable} flex min-h-screen flex-col justify-between bg-background font-dmSans text-black antialiased`}
      >
        <Script
          id="jsonLdSchema"
          strategy="beforeInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
        <Script
          id="googletagmanager"
          strategy="beforeInteractive"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="dataLayer"
          strategy="beforeInteractive"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GA_MEASUREMENT_ID');
          `,
          }}
        />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
