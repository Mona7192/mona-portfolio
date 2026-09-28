
import type { MetadataRoute } from "next";

const siteUrl = process.env.SITE_URL
  ? new URL(process.env.SITE_URL).origin
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}