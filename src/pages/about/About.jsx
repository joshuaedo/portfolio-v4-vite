import Labels from "./sections/labels/Labels.jsx";
import { MobileLabels } from "./sections/labels/Labels.jsx";
import { MobileLikes } from "./sections/likes/Likes.jsx";
import { MobileSkills } from "./sections/skills/Skills.jsx";
import { MobileServices } from "./sections/services/Services.jsx";
import Skills from "./sections/skills/Skills.jsx";
import Likes from "./sections/likes/Likes.jsx";
import Services from "./sections/services/Services.jsx";
import AboutHero from "./sections/aboutHero/AboutHero.jsx";
export function About() {
  return (
    <div className="container-padding">
      <section className="lg:section-padding mb-24 text-center text-xs lg:text-start">
        <AboutHero />
      </section>
      <section className="lg:section-padding mb-24 lg:mb-[88vh]">
        <Labels />
        <MobileLabels />
      </section>
      <section className="xl:section-padding mb-24 lg:mb-[58vh]">
        <Skills />
        <MobileSkills />
      </section>
      <section className="xl:section-padding mb-24 lg:mb-[38vh]">
        <Likes />
        <MobileLikes />
      </section>
      <section className="lg:section-padding mb-24">
        <Services />
        <MobileServices />
      </section>
    </div>
  );
}
