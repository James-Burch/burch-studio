/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://burch-studio.co.uk",
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  outDir: "./public",
  exclude: ["/icon.svg", "/apple-icon.png", "/admin/*"],
  additionalPaths: async () => [
    { loc: "/", changefreq: "daily", priority: 1.0 },
    { loc: "/about", changefreq: "weekly", priority: 0.8 },
    { loc: "/services", changefreq: "weekly", priority: 0.8 },
    { loc: "/services/web-design", changefreq: "weekly", priority: 0.7 },
    { loc: "/services/seo", changefreq: "weekly", priority: 0.7 },
    { loc: "/services/branding", changefreq: "weekly", priority: 0.7 },
    { loc: "/services/web-apps", changefreq: "weekly", priority: 0.7 },
    { loc: "/portfolio", changefreq: "weekly", priority: 0.7 },
    { loc: "/contact", changefreq: "monthly", priority: 0.7 },
    { loc: "/blog", changefreq: "daily", priority: 0.8 },
  ],
};
