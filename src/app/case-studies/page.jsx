import Projects from "@/components/Projects";
import SideProjects from "@/components/SideProjects";

export const metadata = {
  title: "Case Studies & Technical Projects | Muhammad Hammad Asif",
  description: "Explore in-depth technical case studies and side projects covering AI document classification, NLP pipelines, data mining, API development, and distributed systems by Senior AI Backend Engineer Muhammad Hammad Asif.",
  alternates: {
    canonical: "https://hammad-portfolio.recursivedata.com/case-studies",
  },
};

const CaseStudies = () => {
  return (
    <>
      <Projects />
      <SideProjects />
    </>
  );
};

export default CaseStudies;