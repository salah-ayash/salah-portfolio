
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://salahayash.vercel.app/sitemap.xml",

    host: "https://salahayash.vercel.app",
  };
}
