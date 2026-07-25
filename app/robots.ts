import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.deemat.co.zw/sitemap.xml",
    host: "https://www.deemat.co.zw",
  };
}
