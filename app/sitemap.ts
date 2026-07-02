import type { MetadataRoute } from "next";

const SITE_URL = "https://www.vikingtx.com";

// Public, indexable routes. /thank-you is intentionally excluded (noindex).
const routes = ["", "/products", "/services", "/about", "/contact", "/privacy-policy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
