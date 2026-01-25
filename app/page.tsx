// app/page.tsx
import Hero from "@/components/hero";
import AboutMe from "@/components/about";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Projects from "@/components/Project";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
