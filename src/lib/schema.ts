import { services } from "../data/services";
import { GITHUB_URL, SITE_EMAIL, SITE_NAME, SITE_URL } from "../data/site";
import type { Post } from "./posts";

const personId = `${SITE_URL}/#person`;

const person = {
  "@type": "Person",
  "@id": personId,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  jobTitle: "Full-stack Developer",
  description:
    "Full-stack developer in Patagonia, Argentina. Builds web and mobile products in Elixir, TypeScript and Go, and open source tools for AI agents.",
  email: SITE_EMAIL,
  worksFor: { "@type": "Organization", name: "Magma Labs", url: "https://magmalabs.io" },
  address: { "@type": "PostalAddress", addressRegion: "Patagonia", addressCountry: "AR" },
  knowsAbout: [
    "Elixir",
    "Phoenix",
    "TypeScript",
    "Go",
    "Ruby on Rails",
    "Model Context Protocol",
    "AI agents",
    "Software engineering",
  ],
  sameAs: [GITHUB_URL],
  makesOffer: services.map(({ title, description }) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: title, description, provider: { "@id": personId } },
  })),
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  inLanguage: "en",
  publisher: { "@id": personId },
};

export const homeSchema = { "@context": "https://schema.org", "@graph": [person, website] };

export const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/about#profile`,
      url: `${SITE_URL}/about`,
      name: `About ${SITE_NAME}`,
      inLanguage: "en",
      mainEntity: { "@id": personId },
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    person,
    website,
  ],
};

export const postSchema = (post: Post) => {
  const url = `${SITE_URL}/blog/${post.id}`;
  const { title, excerpt, publishedAt, updatedAt, tags, category } = post.data;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        headline: title,
        description: excerpt,
        datePublished: publishedAt.toISOString(),
        dateModified: (updatedAt ?? publishedAt).toISOString(),
        keywords: tags.join(", "),
        articleSection: category,
        inLanguage: "en",
        image: `${SITE_URL}/og-image.png`,
        mainEntityOfPage: url,
        author: { "@id": personId },
        publisher: { "@id": personId },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: title, item: url },
        ],
      },
      person,
    ],
  };
};
