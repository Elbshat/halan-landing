export const data = {
  title: "Halan Halal",
  author: "Halan Halal",
  url: "https://halanhalal.com",
  newsKeywords: "Relevant, Specific, Keywords",
  description:
    "Welcome to Halan Halal - Your trusted source for premium halal food. Discover our wide range of delicious and authentic halal products, crafted with care and quality.",
  content: "rrr",
  keywords:
    "halal, food, halal food, halal products, halal meat, halal spices, halal recipes, halal nutrition, halal cooking, halal sourcing, halal certification, halal certified, halal farmers, halal farming, halal market, halal marketplace, halal supply chain, halal grocery, halal grocery store, halal meat market",
};

export const meta = {
  title: {
    default: "Halan Halal",
    template: "%s - Halan Halal",
  },
  author: data.author,
  applicationName: data.title,
  description: data.description,
  keywords: data.keywords + ", " + data.content + ", " + data.keywords,
  twitter: {
    card: "summary_large_image",
    title: data.content + " - " + data.title,
    description: data.content + ". " + data.description,
  },
  openGraph: {
    title: data.content + " - " + data.title,
    description: data.content + ". " + data.description,
    url: data.url,
    siteName: data.title,
    locale: "en",
    type: "website",
  },
  icons: {
    icon: `/favicon.ico`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
    bingbot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: data.url,
    languages: {
      "en-US": data.url,
    },
  },

  other: {
    bingbot: "index, follow",
    lang: "en",
    news_keywords: data.newsKeywords,
    "application-name": data.title,
    "msapplication-starturl": data.url,
    "msapplication-tooltip":
      data.title + ", " + data.content + ", " + data.description,
  },
};

export const jsonLdSchema = {
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
