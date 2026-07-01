// ============================================================
// FILE 1: app/sitemap.ts  (replaces any existing sitemap)
// ============================================================
// Next.js generates sitemap.xml automatically from this file.
// Visit: https://yourdomain.com/sitemap.xml to verify it works.

import { MetadataRoute } from "next";

const BASE_URL = "https://hammad-portfolio.recursivedata.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Home page
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    // Case study index (optional — create this page later)
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // TenderML
    {
      url: `${BASE_URL}/case-studies/tenderml-ai-document-classification`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    // Add your next case studies below as you build them:
    // {
    //   url: `${BASE_URL}/case-studies/gcp-insightdocs`,
    //   lastModified: new Date(),
    //   changeFrequency: "yearly",
    //   priority: 0.9,
    // },
    // {
    //   url: `${BASE_URL}/case-studies/gemini-ai-trainer`,
    //   lastModified: new Date(),
    //   changeFrequency: "yearly",
    //   priority: 0.8,
    // },
    // {
    //   url: `${BASE_URL}/case-studies/shopify-ai-theme-generator`,
    //   lastModified: new Date(),
    //   changeFrequency: "yearly",
    //   priority: 0.8,
    // },
  ];
}


// ============================================================
// FILE 2: app/robots.ts  (allow crawlers to find your sitemap)
// ============================================================

// import { MetadataRoute } from "next";
//
// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: { userAgent: "*", allow: "/" },
//     sitemap: "https://hammad-portfolio.recursivedata.com/sitemap.xml",
//   };
// }


// ============================================================
// FOLDER STRUCTURE — what to create in your project
// ============================================================
//
// app/
// ├── page.tsx                          ← your existing home page
// ├── sitemap.ts                        ← FILE 1 above
// ├── robots.ts                         ← FILE 2 above
// └── case-studies/
//     ├── page.tsx                      ← optional index listing all case studies
//     └── tenderml-ai-document-classification/
//         └── page.tsx                  ← the case study file (tenderml-case-study.tsx)
//
// That's it. Next.js App Router handles the routing automatically.
// No additional config needed.


// ============================================================
// GOOGLE SEARCH CONSOLE — steps after deploying
// ============================================================
//
// 1. Deploy your changes to production.
//
// 2. Go to: https://search.google.com/search-console
//
// 3. In the left sidebar → "Sitemaps"
//    Submit: https://hammad-portfolio.recursivedata.com/sitemap.xml
//    (If you already submitted before, remove the old one first, then re-add.)
//
// 4. In the left sidebar → "URL Inspection"
//    Paste: https://hammad-portfolio.recursivedata.com/case-studies/tenderml-ai-document-classification
//    Click "Request Indexing" — this fast-tracks Google crawling the new page.
//
// 5. Repeat step 4 for each new case study URL as you add them.
//
// Typical indexing time: 1–7 days for a new page on an existing domain.
