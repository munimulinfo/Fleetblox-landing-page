import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/", // Protect API routes
        "/admin/", // Protect admin routes if any
        "/collections/checkout/", // Protect checkout routes
        "/result/paymentSuccess", // Protect payment results
        "/result/paymentFaild", // Protect payment results
      ],
    },
    sitemap: "https://fleetblox.com/sitemap.xml", // Update with your actual domain
    host: "https://fleetblox.com", // Update with your actual domain
  };
}
