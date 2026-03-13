/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://festivities.io",
  generateRobotsTxt: true,
  exclude: [
    "/account",
    "/account/*",
    "/checkout",
    "/api/*",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/account", "/checkout", "/api/"],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || "https://festivities.io"}/sitemap.xml`,
    ],
  },
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  transform: async (config, path) => {
    // Higher priority for key marketing pages
    const priorities = {
      "/": 1.0,
      "/pricing": 0.9,
      "/about": 0.8,
      "/download": 0.9,
      "/blog": 0.8,
    };

    if (path.startsWith("/languages/")) return { ...config, loc: path, priority: 0.9 };
    if (path.startsWith("/blog/")) return { ...config, loc: path, priority: 0.75 };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] ?? config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
