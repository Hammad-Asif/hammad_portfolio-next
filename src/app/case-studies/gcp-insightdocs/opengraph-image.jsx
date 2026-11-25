import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "GCP InsightDocs document extraction case study";

export default function Image() {
  return renderOgImage({
    kicker: "Case study",
    title: "GCP InsightDocs: CRA Tax Form Extraction with Document AI",
    tags: "Google Document AI · OCR · Flask · React",
  });
}
