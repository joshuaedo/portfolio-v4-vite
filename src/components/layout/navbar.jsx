/* eslint-disable */
import styles from '@/styles/navbar.module.scss';
import { useEffect, useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link as NavLink, useLocation } from 'react-router-dom';
import { HeaderContext } from './providers';
import { menuSlide, scale, slide } from '@/lib/anim';
import { socialLinks } from '@/db/socials';

function usePathname() {
  const location = useLocation();
  return location.pathname;
}

function Curve() {
  const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
    window.innerHeight
  } Q-100 ${window.innerHeight / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${
    window.innerHeight
  } Q100 ${window.innerHeight / 2} 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className={styles.svgCurve}>
      <motion.path
        variants={curve}
        initial='initial'
        animate='enter'
        exit='exit'
      ></motion.path>
    </svg>
  );
}

function Footer() {
  return (
    <div className={styles.footer}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          <link.icon />
        </a>
      ))}
    </div>
  );
}

const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Contact',
    href: 'mailto:joshua.edo01@gmail.com',
  },
];

function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial='initial'
      animate='enter'
      exit='exit'
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}

function Link({ data, isActive, setSelectedIndicator }) {
  const { title, href, index } = data || {};

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className={styles.indicator}
      ></motion.div>
      <NavLink to={href}>{title || ''}</NavLink>
    </motion.div>
  );
}

export default function Navbar() {
  const { isActive, setIsActive, show, handleShow } = useContext(HeaderContext);
  const pathname = usePathname();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div className={styles.main}>
        <div
          className={`${styles.header} ${
            show || isActive ? 'z-[20]' : 'z-[6]'
          }`}
        >
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={`${styles.button} ${
              show ? 'scale-100' : 'scale-0'
            } transition ease-in-out`}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ''
              } `}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode='wait'>{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
