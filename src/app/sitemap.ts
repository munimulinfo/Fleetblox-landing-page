import { MetadataRoute } from "next";
const baseUrl = "https://www.fleetblox.com";

export default function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base URL of your website

  return Promise.resolve([
    {
      url: `${baseUrl}/`,
      changefreq: "weekly",
      priority: 1,
      lastModified: new Date().toISOString(),
    },
  ]);
}
