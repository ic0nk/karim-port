import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/ProjectsSection";
import UserExperience from "@/components/UserExperience";
import Contact from "@/components/ContactSection";



export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <UserExperience />
      <Projects />
      <Contact />
    </main>
  );
}


