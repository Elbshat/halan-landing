export default function sitemap() {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(2025, 0, 1),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contactUS`,
      lastModified: new Date(2025, 0, 1),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/faqs`,
      lastModified: new Date(2025, 0, 1),
      priority: 0.5,
    },
  ];
}
