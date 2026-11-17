import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import CurrentlyLearning from "../components/CurrentlyLearning";
import WhatICanDo from "../components/WhatICanDo";
import Internship from "../components/Internship";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <main role="main">
      <Hero />
      <About />
      <Education />
      <Skills />
      <CurrentlyLearning />
      <WhatICanDo />
      <Internship />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
    </main>
  );
}
