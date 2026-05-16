import { CursorGlow } from "@/components/effects/cursor-glow";
import { PageLoader } from "@/components/effects/page-loader";
import { ParticleField } from "@/components/effects/particle-field";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <div className="mesh-bg" aria-hidden />
      <ParticleField />
      <CursorGlow />
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
