import NameMarquee from "../../components/name-marquee/NameMarquee.jsx";
import HeroSection from "../../components/hero-section/HeroSection.jsx";
import ProjectsSection from "../../components/projects-section/ProjectsSection.jsx";

export function Home() {
  return (
    <>
      <div className="container-padding">
        <div className="section-padding">
          <section className="relative">
            <HeroSection />
          </section>
        </div>

        <div className="">
          <section className="relative">
            <NameMarquee />
          </section>
        </div>

        <div className="section-padding">
          <section className="relative">
            <ProjectsSection />
          </section>
        </div>
      </div>
    </>
  );
}