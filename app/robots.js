export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: ["/"],
      },
      {
        userAgent: ["bingBot", "copilot"],
        allow: ["/"],
      },
    ],
    sitemap: "https://halanhalal.com/sitemap.xml",
  };
}
