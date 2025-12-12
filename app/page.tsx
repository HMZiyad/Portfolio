import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Leadership from "@/components/Leadership";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0a0a1f] min-h-screen text-white">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Leadership />
      <Achievements />
      <Projects />
      <Contact />
    </main>
  );
}
