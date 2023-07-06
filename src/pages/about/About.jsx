import { MobileLabels } from "./sections/labels/Labels.jsx";
import { MobileLikes } from "./sections/likes/Likes.jsx";
import { MobileSkills } from "./sections/skills/Skills.jsx";
import { MobileServices } from "./sections/services/Services.jsx";
import AboutHero from "./sections/aboutHero/AboutHero.jsx";
export function About() {
  return (
    <div className="container-padding">
      <section className="md:section-padding mb-24 mt-10 text-center text-xs md:mt-0 md:text-start">
        <AboutHero />
      </section>
      <section className="md:section-padding mb-24">
        <MobileLabels />
      </section>
      <section className="md:section-padding mb-24">
        <MobileSkills />
      </section>
      <section className="md:section-padding mb-24">
        <MobileLikes />
      </section>
      <section className="md:section-padding mb-24">
        <MobileServices />
      </section>
    </div>
  );
}
