import ProjectsCard from "./ProjectsCard.jsx";
import { Link } from "react-router-dom";

export default function ProjectsSection() {
  return (
    <>
      <div className="mt-24 text-center md:text-start">
        <p className="section-text">PROJECTS</p>
        <p className="title-text inline">A SELECTION OF MY WORK</p>
      </div>
      <div className="mb-16 mt-20 md:mt-40">
        <div className="inline items-center justify-around space-y-32 md:flex md:space-y-1">
          {" "}
          <div className="space-y-32">
            <ProjectsCard i={3} name="spotify" slug="spotify" />
            <ProjectsCard i={2} name="netflix" slug="netflix" />
            <ProjectsCard i={2} name="apple" slug="apple" />
          </div>
          <div className="space-y-32">
            <ProjectsCard i={5} name="joshuaGPT" slug="joshua-gpt" />
            <ProjectsCard i={2} name="google" slug="google" />
          </div>
        </div>
      </div>
      <div className="line-height title-text link absolute bottom-10 right-10 hidden max-w-[7rem] text-right text-sm md:right-3 md:flex md:max-w-[10rem]">
        <Link to="/projects">VIEW THE REST OF MY WORK ↗</Link>
      </div>
      <div className="title-text link flex items-center justify-center pt-10 text-xs md:hidden">
        <Link to="/projects">VIEW THE REST OF MY WORK ↗</Link>
      </div>
    </>
  );
}
