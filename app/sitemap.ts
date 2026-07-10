import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { siteConfig } from "@/content/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/about", "/experience", "/projects", "/skills", "/now", "/resume", "/contact"];
  const base = routes.map((r) => ({ url: `${siteUrl}${r}`, lastModified: now }));
  const projects = siteConfig.projects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    lastModified: now,
  }));
  return [...base, ...projects];
}
