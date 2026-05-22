import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sabeer-ai.vercel.app";

  const routes = [
    "",
    "/about",
    "/projects",
    "/projects/zero-bank",
    "/projects/virtual-topup",
    "/projects/connect-call",
    "/projects/icall-pro",
    "/projects/sabeer-xpress",
    "/blog",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/projects/") ? 0.9 : 0.8,
  }));
}
