// Generated at build time → /sitemap.xml
// Update a page's `lastModified` when its content changes meaningfully.
import { services } from "@/data/services";
import { absoluteUrl } from "@/lib/seo";

const pages = [
  { path: "/", lastModified: "2026-11-26" },
  { path: "/hire-me", lastModified: "2026-11-26" },
  { path: "/case-studies", lastModified: "2026-11-26" },
  { path: "/case-studies/tenderml-ai-document-classification", lastModified: "2026-11-26" },
  { path: "/case-studies/gcp-insightdocs", lastModified: "2026-11-26" },
  { path: "/case-studies/gemini-ai-trainer", lastModified: "2026-11-26" },
  { path: "/case-studies/lightdesign-ai-roof-measurement", lastModified: "2026-11-26" },
  { path: "/contact", lastModified: "2026-11-26" },
];

export default function sitemap() {
  return [
    ...pages,
    ...services.map((s) => ({ path: `/services/${s.slug}`, lastModified: s.updated })),
  ].map((p) => ({ url: absoluteUrl(p.path), lastModified: p.lastModified }));
}
