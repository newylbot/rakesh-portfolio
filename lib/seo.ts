import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://example.com";

interface MetaInput {
  title?: string;
  description?: string;
  path?: string;
}

export function createMetadata({ title, description, path = "/" }: MetaInput = {}): Metadata {
  const pageTitle = title
    ? `${title} \u00b7 ${siteConfig.person.name}`
    : `${siteConfig.person.name} \u00b7 ${siteConfig.person.role}`;
  const desc = description || siteConfig.seo.defaultDescription;
  const url = `${siteUrl}${path}`;

  return {
    title: pageTitle,
    description: desc,
    keywords: siteConfig.seo.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description: desc,
      url,
      siteName: siteConfig.person.name,
      locale: "en_US",
      type: "website",
      images: [{ url: "/og/default.svg", width: 1200, height: 630, alt: siteConfig.person.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: desc,
      images: ["/og/default.svg"],
    },
  };
}

export function personJsonLd() {
  const p = siteConfig.person;
  const sameAs = [p.github, p.linkedin].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: p.name,
    jobTitle: p.role,
    address: { "@type": "PostalAddress", addressCountry: p.location },
    url: siteUrl,
    ...(p.email ? { email: p.email } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.person.name,
    url: siteUrl,
  };
}
