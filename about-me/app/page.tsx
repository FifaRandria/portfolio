import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { ExperienceEducation } from "@/components/experience-education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { DownloadCV } from "@/components/download-cv";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <ExperienceEducation />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <DownloadCV />
    </>
  );
}
