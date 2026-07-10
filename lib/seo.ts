import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { siteUrl } from "@/lib/utils";

interface PageSeo {
  title?: string;
  description?: string;
  path?: string;
}

export function buildMetadata({ title, description, path = "" }: PageSeo = {}): Metadata {
  const fullTitle = title ? `${title} — ${siteConfig.person.name}` : `${siteConfig.person.name} — ${siteConfig.person.role}`;
  const desc = description || siteConfig.seo.description;
  const url = siteUrl(path);

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: `${siteConfig.person.name} — Portfolio`,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
  };
}
