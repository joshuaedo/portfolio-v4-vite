import Labels from "./sections/labels/Labels.jsx";
import Skills from "./sections/skills/Skills.jsx";
import Likes from "./sections/likes/Likes.jsx";
import Services from "./sections/services/Services.jsx";

export function About() {
  return (
    <div className="container-padding">
      <section className=""></section>
      <section className="section-padding">
        <Labels />
      </section>
      <section className="section-padding">
        <Skills />
      </section>
      <section className="section-padding">
        <Likes />
      </section>
      <section className="section-padding">
        <Services />
      </section>
    </div>
  );
}
