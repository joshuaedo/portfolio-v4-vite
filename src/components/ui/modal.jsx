import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import styles from '@/styles/modal.module.css';
import Image from './image.jsx';

const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Modal({ modal, projects }) {
  const { active, index } = modal;

  const modalContainer = useRef(null);

  useEffect(() => {
    //Move Container

    let xMoveContainer = gsap.quickTo(modalContainer.current, 'left', {
      duration: 0.8,
      ease: 'power3',
    });

    let yMoveContainer = gsap.quickTo(modalContainer.current, 'top', {
      duration: 0.8,
      ease: 'power3',
    });

    window.addEventListener('mousemove', (e) => {
      const { pageX, pageY } = e;

      xMoveContainer(pageX);

      yMoveContainer(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
        className={`hidden md:flex ${styles.modalContainer}`}
      >
        <div
          style={{ top: index * -100 + '%' }}
          className={`${styles.modalSlider}`}
        >
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                className={styles.modal}
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <Image
                  webpSrc={`/images/webp/projects/${src}.webp`}
                  orgSrc={`/images/original/projects/${src}.png`}
                  width={300}
                  height={0}
                  alt='image'
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
