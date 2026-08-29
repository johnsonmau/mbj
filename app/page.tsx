import About from "@/components/About";
import Contact from "@/components/Contact";
import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeLab from "@/components/HomeLab";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import ResumeSection from "@/components/ResumeSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <ResumeSection />
        <Projects />
        <HomeLab />
        <ContentSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
