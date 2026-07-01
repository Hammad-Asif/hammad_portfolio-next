import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import Publications from "@/components/Publications";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Expertise />
      <Skills />
      <FeaturedProjects />
      <ExperienceTimeline />
      <Process />
      <FAQ />
      <Testimonials/>
      <Publications />
      {/* <Contact /> */}
      {/* <FloatingCTA/> */}
      {/* <Footer /> */}
    </>
  );
}