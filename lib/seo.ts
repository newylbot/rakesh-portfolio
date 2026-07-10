import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { getSiteUrl } from "@/lib/utils";

const siteUrl = getSiteUrl();

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.person.name} — ${siteConfig.person.role}`,
    template: `%s — ${siteConfig.person.name}`,
  },
  description: siteConfig.person.bio,
  applicationName: `${siteConfig.person.name} Portfolio`,
  authors: [{ name: siteConfig.person.name }],
  creator: siteConfig.person.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${siteConfig.person.name} — ${siteConfig.person.role}`,
    description: siteConfig.person.bio,
    siteName: `${siteConfig.person.name} Portfolio`,
    images: [
      {
        url: "/og/default.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.person.name} — portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.person.name} — ${siteConfig.person.role}`,
    description: siteConfig.person.bio,
    images: ["/og/default.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

/** Build per-page metadata with a title and description. */
export function pageMetadata(
  title: string,
  description: string,
  path = "/"
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} — ${siteConfig.person.name}`,
      description,
      url: `${siteUrl}${path}`,
    },
    twitter: {
      title: `${title} — ${siteConfig.person.name}`,
      description,
    },
  };
}

/** JSON-LD structured data for Person + WebSite. */
export function structuredData() {
  const person: Record<string, unknown> = {
    "@type": "Person",
    name: siteConfig.person.name,
    jobTitle: siteConfig.person.role,
    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.person.location,
    },
  };

  const sameAs = [siteConfig.person.github, siteConfig.person.linkedin].filter(
    (v) => v && v.length > 0
  );
  if (sameAs.length) person.sameAs = sameAs;
  if (siteConfig.person.email) person.email = siteConfig.person.email;

  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebSite",
        name: `${siteConfig.person.name} Portfolio`,
        url: siteUrl,
      },
    ],
  };
}
