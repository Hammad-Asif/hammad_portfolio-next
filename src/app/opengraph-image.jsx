import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Hammad Asif, freelance AI engineer and full-stack developer";

export default function Image() {
  return renderOgImage({
    kicker: "Portfolio",
    title: "Freelance AI Engineer & Full-Stack Developer",
    tags: "LLM integration · Document AI · FastAPI · React",
  });
}
