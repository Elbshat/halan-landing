import { data } from "@/utils/headData";
import Script from "next/script";

/* eslint-disable @next/next/no-head-element */
const SEO = () => {
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

  return (
    <head>
      <title>{"title"}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="lang" content="en" />
      <meta name="application-name" content={data.title} />
      <meta name="author" content="Halan Halal" />
      <meta
        name="description"
        content={data.content + ". " + data.description + ". "}
      />
      <meta
        name="keywords"
        content={data.content + ", " + data.description + ", " + data.keywords}
      />
      <meta name="msapplication-starturl" content={"https://halanhalal.com"} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="news_keywords" content="Relevant, Specific, Keywords" />
      <meta httpEquiv="Content-Type" content="charset=utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta itemProp="name" content={data.content + " , " + data.description} />
      <meta
        itemProp="description"
        content={data.content + ". " + data.description + ". "}
      />
      <meta property="og:locale" content="en" />
      <meta property="og:url" content={"https://halanhalal.com"} />
      <meta property="og:title" content={data.content + " - " + data.title} />
      <meta property="og:site_name" content={data.title} />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content={data.content + ". " + data.description}
      />
      <meta property="og:image" content="/favicon.ico" />
      <meta name="twitter:title" content={data.content + " - " + data.title} />
      <meta
        name="twitter:description"
        content={data.content + ". " + data.description + ". " + data.title}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content="/favicon.ico" />
      <meta
        name="msapplication-tooltip"
        content={data.title + ", " + data.content + ", " + data.description}
      />
      <meta name="language" content="en" />
      <meta name="title" content={data.content + " - " + data.title} />
      <link rel="canonical" href={"https://halanhalal.com"}></link>
      <link
        rel="icon"
        // type="image/svg+xml"
        // href="/favicon.svg"
        href="https://halanhalal.com/favicon.ico"
      />
      <link
        rel="alternate"
        hrefLang={"en"}
        href={"https://halanhalal.com"}
      ></link>

      <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_MEASUREMENT_ID"
      ></Script>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GA_MEASUREMENT_ID');
          `,
        }}
      ></script>
    </head>
  );
};
export default SEO;
