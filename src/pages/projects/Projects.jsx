import styles from "./Projects.module.css";
import { useState } from "react";
import Project from "./components/project/Project.jsx";
import Modal from "./components/modal/Modal.jsx";
import { projects } from "../../database/ProjectData.jsx";
import ProjectsMeta from "../../components/meta-tags/ProjectsMeta";
import { Link } from "react-router-dom";

export function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <ProjectsMeta />

      <main className={`${styles.main}`}>
        <div className={styles.body}>
          {projects.map((project, index) => {
            return (
              <Project
                index={index}
                title={project.title}
                setModal={setModal}
                key={index}
                year={project.year}
                slug={project.slug}
              />
            );
          })}
        </div>
        <Modal modal={modal} projects={projects} />

        <div
          className={`flex items-center justify-center bg-black pt-4 md:pt-10`}
        >
          <div className="w-[90%] cursor-pointer">
            <div className="title-text">Archive</div>

            <Link
              to="https://joshuaedo.notion.site/joshuaedo/Joshua-s-Archive-a1118438aa1b4b6d8836004599e18308"
              className="flex h-[220px] w-fit items-center"
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            >
              {!isHovered ? (
                <img
                  loading="lazy"
                  decoding="async"
                  src="https://joshuaedo.sirv.com/joshuaedo/public/images/archive/closed.png"
                  alt="click icon"
                  height="210px"
                  width="210px"
                  className="-mb-5 -ml-3"
                />
              ) : (
                <img
                  loading="lazy"
                  decoding="async"
                  src="https://media0.giphy.com/media/3FvaG9XbBRbLtdaUUP/giphy.gif"
                  alt="click icon"
                  height="200px"
                  width="200px"
                  className="-ml-2"
                />
              )}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
