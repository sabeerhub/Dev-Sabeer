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
    "/blog/how-i-built-zero-bank-fintech-system",
    "/blog/building-secure-vtu-platform-nodejs",
    "/blog/real-time-webrtc-architecture-explained",
    "/blog/how-i-think-as-frontend-developer-2026",
    "/blog/ai-prompt-engineering-for-developers",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/projects/") ? 0.9 : 0.8,
  }));
}
