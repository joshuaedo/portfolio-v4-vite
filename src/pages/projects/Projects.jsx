import styles from "./Projects.module.css";
import { useState } from "react";
import Project from "./components/project/Project.jsx";
import Modal from "./components/modal/Modal.jsx";
import { projects } from "../../database/ProjectData.jsx";

export function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
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
    </main>
  );
}
