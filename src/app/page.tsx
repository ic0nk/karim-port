import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/ProjectsSection";
import UserExperience from "@/components/UserExperience";
import ContactClient from '@/components/ContactClient';



export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <UserExperience />
      <Projects />
      <ContactClient />
    </main>
  );
}


