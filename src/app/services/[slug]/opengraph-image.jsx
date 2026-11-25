import { renderOgImage, ogSize, ogContentType } from "@/lib/og-image";
import { services, getService } from "@/data/services";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "AI engineering service by Hammad Asif";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  return renderOgImage({ kicker: s.ogKicker, title: s.ogTitle, tags: s.ogTags });
}
