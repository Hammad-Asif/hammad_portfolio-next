import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "LightDesign AI roof measurement and Christmas light design case study";

export default function Image() {
  return renderOgImage({
    kicker: "Case study",
    title: "LightDesign: AI Roof Measurement From a Single Photo",
    tags: "SAM 3 + vision LLM · 0.88 F1 · FastAPI + React",
  });
}
