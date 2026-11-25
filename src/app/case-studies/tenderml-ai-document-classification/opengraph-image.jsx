import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "TenderML AI document classification case study";

export default function Image() {
  return renderOgImage({
    kicker: "Case study",
    title: "TenderML: AI Classification of Construction Tender PDFs",
    tags: "95% accuracy · SVM + CRF · FastAPI on AWS",
  });
}
