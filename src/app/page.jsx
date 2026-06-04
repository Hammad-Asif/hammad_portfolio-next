"use client"
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import SideProjects from "@/components/SideProjects";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ExperienceTimeline />
      <Process />
      <FAQ />
      <Testimonials/>
      <Projects />
      <SideProjects />
      <Publications />
      <Contact />
      {/* <FloatingCTA/> */}
      <Footer />
    </>
  );
}