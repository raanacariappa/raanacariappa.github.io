import { Loader } from "@/components/Loader";
import { Nav } from "@/components/Nav";
import { AutoScroll } from "@/components/AutoScroll";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { About } from "@/components/About";
import { PitStop } from "@/components/PitStop";
import { Experience } from "@/components/Experience";
import { OnTrack } from "@/components/OnTrack";
import { Apps } from "@/components/Apps";
import { Research } from "@/components/Research";
import { Skills } from "@/components/Skills";
import { Gallery } from "@/components/Gallery";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <About />
        <PitStop />
        <Experience />
        <OnTrack />
        <Apps />
        <Research />
        <Skills />
        <Gallery />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <AutoScroll />
    </>
  );
}
