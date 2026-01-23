import AboutMe from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Project from "@/components/Project";
import Skills from "@/components/skills";

function HomePage() {
    return (
        <div>
            <Hero />
            <AboutMe />
            <Skills />
            <Project />
            <Contact />
        </div>
    );
}

export default HomePage;