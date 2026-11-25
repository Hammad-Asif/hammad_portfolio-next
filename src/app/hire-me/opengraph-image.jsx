import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Hire Hammad Asif, AI engineer and full-stack developer";

export default function Image() {
  return renderOgImage({
    kicker: "Hire me",
    title: "Hire an AI Engineer & Full-Stack Developer",
    tags: "Remote · US, UK & EU overlap · Contract-ready via Deel",
  });
}
