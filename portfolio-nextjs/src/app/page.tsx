import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Competencies from "@/components/Competencies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Stack usa requestAnimationFrame e matchMedia — renderiza só no cliente.
const Stack = dynamic(() => import("@/components/Stack"), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Competencies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
