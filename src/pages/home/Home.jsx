import NameMarquee from "../../components/name-marquee/NameMarquee.jsx";
import HeroSection from "../../components/hero-section/HeroSection.jsx";
import ProjectsSection from "../../components/projects-section/ProjectsSection.jsx";
import HomeMeta from "../../components/meta-tags/HomeMeta.jsx";

export function Home() {
  return (
    <>
      <HomeMeta />

      <div data-nosnippet className="container-padding home">
        <div className="section-padding pb-12 md:pb-0">
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
