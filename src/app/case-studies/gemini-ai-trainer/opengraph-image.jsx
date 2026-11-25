import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Gemini AI Trainer case study";

export default function Image() {
  return renderOgImage({
    kicker: "Case study",
    title: "Gemini AI Trainer: SFT Data & RLHF Evaluation",
    tags: "Google × Turing · Structured data reasoning · Python",
  });
}
