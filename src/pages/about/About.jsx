import Labels from "./sections/labels/Labels.jsx";
import Skills from "./sections/skills/Skills.jsx";
import Likes from "./sections/likes/Likes.jsx";
import Services from "./sections/services/Services.jsx";

export function About() {
  return (
    <div className="container-padding">
      <section className="section-padding text-xs">who is joshua edo?</section>
      <section className="section-padding mb-[78vh]">
        <Labels />
      </section>
      <section className="section-padding mb-[58vh]">
        <Skills />
      </section>
      <section className="section-padding mb-[58vh]">
        <Likes />
      </section>
      <section className="section-padding mb-[18vh]">
        <Services />
      </section>
    </div>
  );
}
