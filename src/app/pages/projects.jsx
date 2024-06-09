import styles from '@/styles/projects.module.css';
import { useState } from 'react';
import Modal from '@/components/ui/modal.jsx';
import { projects } from '@/db/projects.js';
import { Link } from 'react-router-dom';
import { ProjectsMeta } from '@/components/layout/meta.jsx';
import useAnimation from '@/hooks/use-animation';
import { textReveal } from '@/lib/anim';

function Project({ index, title, setModal, year, slug }) {
  useAnimation(textReveal);

  return (
    <Link
      to={`/projects/${slug}`}
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={`${styles.project} text-reveal`}
    >
      <h2 className='section-text truncate'>{title}</h2>
      <p className='text-xs md:text-sm'>{year}</p>
    </Link>
  );
}

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
          <div className='w-[90%]'>
            <div className='title-text'>Archive</div>
            <Link
              to='https://joshuaedo.notion.site/joshuaedo/Joshua-s-Archive-a1118438aa1b4b6d8836004599e18308'
              className='relative flex h-[220px] w-fit cursor-pointer items-center'
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            >
              <img
                loading='lazy'
                decoding='async'
                src='https://joshuaedo.sirv.com/joshuaedo/public/images/archive/closed.png'
                alt='click icon'
                height='210px'
                width='210px'
                className={`${
                  isHovered ? 'opacity-0' : 'opacity-100'
                } -mb-5 -ml-3 transition ease-in`}
              />
              <img
                loading='lazy'
                decoding='async'
                src='https://media0.giphy.com/media/3FvaG9XbBRbLtdaUUP/giphy.gif'
                alt='click icon'
                height='200px'
                width='200px'
                className={`${
                  !isHovered ? 'z-2 opacity-0' : '-z-2 opacity-100'
                } absolute -ml-2.5 transition ease-in`}
              />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
