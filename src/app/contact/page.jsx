import Contact from "@/components/Contact";
import { pageMetadata, breadcrumbJsonLd, jsonLdProps } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Muhammad Hammad Asif, freelance AI engineer and full-stack developer. Email, phone or the project form; replies within 24 hours. Open to remote roles.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <script
        {...jsonLdProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ])
        )}
      />
      <Contact />
    </>
  );
}
