import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Contact Hammad Asif";

export default function Image() {
  return renderOgImage({
    kicker: "Contact",
    title: "Let's talk about your AI or web project",
    tags: "Replies within 24 hours",
  });
}
