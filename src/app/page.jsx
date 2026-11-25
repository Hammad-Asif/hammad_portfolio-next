import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import Publications from "@/components/Publications";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import { pageMetadata, jsonLdProps, absoluteUrl, PERSON_ID, WEBSITE_ID } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Hammad Asif | Freelance AI Engineer & Full-Stack Developer",
  absoluteTitle: true,
  description:
    "Muhammad Hammad Asif is a freelance AI engineer and full-stack developer: LLM integration, document AI and PDF data extraction, FastAPI backends and React apps.",
  path: "/",
  type: "profile",
});

const profilePageLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${absoluteUrl("/")}#profilepage`,
  url: absoluteUrl("/"),
  name: "Hammad Asif | Freelance AI Engineer & Full-Stack Developer",
  isPartOf: { "@id": WEBSITE_ID },
  mainEntity: { "@id": PERSON_ID },
  inLanguage: "en",
};

export default function Home() {
  return (
    <main id="main-content">
      <script {...jsonLdProps(profilePageLd)} />
      <Hero />
      <Expertise />
      <Skills />
      <FeaturedProjects />
      <ExperienceTimeline />
      <Process />
      <FAQ />
      <Testimonials />
      <Publications />
    </main>
  );
}
