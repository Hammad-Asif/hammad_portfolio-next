import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Case studies by Hammad Asif";

export default function Image() {
  return renderOgImage({
    kicker: "Case studies",
    title: "AI & Full-Stack Projects in Production",
    tags: "Document AI · LLM pipelines · SaaS platforms",
  });
}
