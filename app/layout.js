import { meta } from "@/utils/meta";
import { dmSans, nunito, openSans, poppins } from "@/utils/fonts";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import Script from "next/script";

export const metadata = meta;

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Halan Halal",
      url: "https://halanhalal.com",
      description:
        "Discover authentic Halal food across the United States - Your trusted Halal food finder app",
      publisher: {
        "@type": "Organization",
        name: "Halan Halal",
        logo: {
          "@type": "ImageObject",
          url: "https://halanhalal.com/logo.png",
        },
        foundingDate: "2024",
        foundingLocation: "United States",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          email: "support@halanhalal.com",
        },
      },
    },
    {
      "@type": "WebPage",
      name: "Halan Halal",
      operatingSystem: "iOS, Android",
      applicationCategory: "Halal Food",
      about: {
        "@type": "MobileApplication",
        name: "Halan Halal",
        operatingSystem: "iOS, Android",
        applicationCategory: "Food & Dining",
        applicationSubCategory: "Halal Food",
        description:
          "Find certified Halal restaurants and food options across the United States with ease",
        featureList: [
          "Real-time Halal restaurant finder",
          "Verified Halal certification tracking",
          "Comprehensive user reviews and ratings",
          "Location-based restaurant search",
          "Advanced dietary preferences filter",
          "Restaurant menu details",
          "Reservation capabilities",
        ],
        keywords: [
          "Halal food",
          "Halal restaurants",
          "Muslim dining",
          "Halal food finder",
          "USA Halal food",
        ],
        downloadUrl: {
          iOS: "https://apps.apple.com/us/app/halan-halal/id123456789",
          Android:
            "https://play.google.com/store/apps/details?id=com.halanhalal.app",
        },
      },
      description:
        "Find certified Halal restaurants and food options across the United States with ease.",
      featureList: [
        "Halal restaurant finder",
        "Verified Halal certification",
        "User reviews and ratings",
        "Location-based search",
        "Dietary preferences filter",
      ],
      keywords: [
        "Halal food",
        "Halal restaurants",
        "Muslim dining",
        "Halal food finder",
        "USA Halal food",
      ],
    },
    {
      "@type": "LocalBusiness",
      name: "Halan Halal",
      image: "https://halanhalal.com/brand-image.jpg",
      priceRange: "$",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={` ${poppins.variable} ${dmSans.variable} ${openSans.variable} ${nunito.variable} bg-background antialiased`}
      >
        <Script
          id="jsonLdSchema"
          strategy="beforeInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
