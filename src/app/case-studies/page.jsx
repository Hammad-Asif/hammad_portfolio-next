import Projects from "@/components/Projects";
import SideProjects from "@/components/SideProjects";
import { pageMetadata, breadcrumbJsonLd, jsonLdProps } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI & Full-Stack Case Studies",
  description:
    "Case studies in AI document classification, PDF data extraction, LLM pipelines and full-stack SaaS platforms, built for clients by Muhammad Hammad Asif.",
  path: "/case-studies",
});

const CaseStudies = () => {
  return (
    <main id="main-content">
      <script
        {...jsonLdProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
          ])
        )}
      />
      <Projects />
      <SideProjects />
    </main>
  );
};

export default CaseStudies;
