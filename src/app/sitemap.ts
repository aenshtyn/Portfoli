import type { MetadataRoute } from "next";
import { projectsData } from "@/lib/data";

const baseUrl = "https://mohamed.co.ke";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/#about",
    "/#websites",
    "/#webapps",
    "/#mobile",
    "/#contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.6,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projectsData
    .filter((project) => project.liveUrl)
    .map((project) => ({
      url: project.liveUrl!,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    }));

  return [...staticRoutes, ...projectRoutes];
}
