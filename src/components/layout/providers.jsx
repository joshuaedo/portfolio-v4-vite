import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Providers(props) {
  // Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Locomotive Scroll
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //     function locomotiveHeightBug() {
  //       locomotiveScroll.start();
  //     }
  //     setInterval(locomotiveHeightBug, 3500);
  //   })();
  // }, []);

  return <>{props.children}</>;
}
