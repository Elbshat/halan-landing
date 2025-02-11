export default function sitemap() {
  return [
    {
      url: "https://halanhalal.com",
      lastModified: new Date(2025, 0, 1),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://halanhalal.com/contactUS",
      lastModified: new Date(2025, 0, 1),
      priority: 0.8,
    },
    {
      url: "https://halanhalal.com/faqs",
      lastModified: new Date(2025, 0, 1),
      priority: 0.5,
    },
  ];
}
