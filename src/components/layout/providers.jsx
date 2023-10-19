/* eslint-disable no-unused-vars */
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import { useLocation, useInRouterContext } from 'react-router';
import { createContext, useState } from 'react';

export const HeaderContext = createContext();

function HeaderProvider({ children }) {
  const [isActive, setIsActive] = useState(false);
  const [show, handleShow] = useState(false);

  return (
    <HeaderContext.Provider value={{ isActive, setIsActive, show, handleShow }}>
      {children}
    </HeaderContext.Provider>
  );
}

export default function Providers(props) {
  const location = useLocation();
  const routerContext = useInRouterContext();

  // Lenis Smooth Scroll
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //   });

  //   lenis.on('scroll', (e) => {
  //     console.log(e);
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  // Locomotive Scroll
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import('locomotive-scroll')).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //     function locomotiveHeightBug() {
  //       locomotiveScroll.start();
  //     }
  //     setInterval(locomotiveHeightBug, 3500);
  //   })();
  // }, []);

  // Scroll to top of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location, routerContext]);

  return <HeaderProvider>{props.children} </HeaderProvider>;
}
