// Shared SEO helpers: one source of truth for URLs, page metadata and JSON-LD.

export const SITE_URL = "https://www.hammadasif.dev";
export const SITE_NAME = "Hammad Asif";
export const PERSON_NAME = "Muhammad Hammad Asif";
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const absoluteUrl = (path = "/") => new URL(path, SITE_URL).toString();

/**
 * Build a page's metadata so the canonical URL, Open Graph and Twitter tags
 * always agree. Social images come from each route's opengraph-image file.
 *
 * @param {object}  opts
 * @param {string}  opts.title        Page title (the layout template appends "| Hammad Asif")
 * @param {boolean} [opts.absoluteTitle] Use the title as-is, without the template
 * @param {string}  opts.description  ~150–160 characters
 * @param {string}  opts.path         Route path, e.g. "/hire-me"
 * @param {"website"|"article"|"profile"} [opts.type]
 * @param {object}  [opts.article]    { publishedTime, modifiedTime, tags }
 */
export function pageMetadata({ title, absoluteTitle = false, description, path = "/", type = "website", article }) {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  const url = absoluteUrl(path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      title: fullTitle,
      description,
      ...(type === "article" && article
        ? {
            publishedTime: article.publishedTime,
            modifiedTime: article.modifiedTime,
            authors: [absoluteUrl("/")],
            tags: article.tags,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

/** BreadcrumbList JSON-LD from [{ name, path }] (first item should be Home). */
export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Site-wide entity graph: the Person and the WebSite, linked by @id. */
export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: PERSON_NAME,
        alternateName: ["Hammad Asif", "Hammad", "hammadasif"],
        url: absoluteUrl("/"),
        image: absoluteUrl("/profile_pic.jpg"),
        jobTitle: "AI Engineer & Full-Stack Developer",
        description:
          "AI engineer and full-stack developer with about five years of experience building Python LLM, generative AI and document-AI systems end to end.",
        email: "mailto:hammadcto786@gmail.com",
        telephone: "+923087724490",
        address: { "@type": "PostalAddress", addressCountry: "PK" },
        alumniOf: { "@type": "CollegeOrUniversity", name: "Air University" },
        knowsAbout: [
          "Large language models",
          "Generative AI",
          "OpenAI API",
          "Google Gemini API",
          "Document AI",
          "PDF data extraction",
          "OCR",
          "Text classification",
          "Computer vision",
          "Python",
          "FastAPI",
          "React",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "MongoDB",
          "AWS EC2",
          "Google Cloud",
          "Web scraping",
          "Workflow automation",
        ],
        sameAs: [
          "https://github.com/Hammad-Asif",
          "https://www.linkedin.com/in/hammad-asif/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: absoluteUrl("/"),
        name: SITE_NAME,
        alternateName: [PERSON_NAME, "hammadasif.dev"],
        inLanguage: "en",
        publisher: { "@id": PERSON_ID },
      },
    ],
  };
}

/** Render a JSON-LD object as a script tag body. */
export const jsonLdProps = (data) => ({
  type: "application/ld+json",
  dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
});
