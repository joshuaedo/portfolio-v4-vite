import { MobileLabels } from "./sections/labels/Labels.jsx";
import { MobileLikes } from "./sections/likes/Likes.jsx";
import { MobileSkills } from "./sections/skills/Skills.jsx";
import { MobileServices } from "./sections/services/Services.jsx";
import AboutHero from "./sections/aboutHero/AboutHero.jsx";
import gsap from "gsap";
import { useEffect } from "react";
import AboutMeta from "../../components/meta-tags/AboutMeta.jsx";

export function About() {
  useEffect(() => {
    gsap.to(".text-reveal", {
      y: 0,
      stagger: 0.1,
      delay: 0.5,
      duration: 0.2,
    });
  }, []);
  return (
    <>
      <AboutMeta />

      <div className="container-padding">
        <section className="md:section-padding mb-24 mt-10 text-center text-xs md:min-h-[1vh] md:text-start">
          <AboutHero />
        </section>
        <section className="text-reveal md:section-padding mb-24">
          <MobileLabels />
        </section>
        <section className="text-reveal md:section-padding mb-24">
          <MobileSkills />
        </section>
        <section className="text-reveal md:section-padding mb-24">
          <MobileLikes />
        </section>
        <section className="text-reveal md:section-padding mb-24">
          <MobileServices />
        </section>
      </div>
    </>
  );
}
