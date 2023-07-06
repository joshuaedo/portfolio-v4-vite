/* eslint-disable */
import styles from "./Marquee.module.css";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Marquee({ text, bgColor, stagnantText }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleStopHover = () => {
    setIsHovered(false);
  };

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.05 * direction;
  };

  return (
    <main
      className={`${styles.main} ${isHovered ? bgColor : "bg-black"}`}
      onMouseOver={handleHover}
      onMouseLeave={handleStopHover}
    >
      {isHovered ? (
        <>
          <div className={styles.sliderContainer}>
            <div ref={slider} className={styles.slider}>
              <p className="text-black" ref={firstText}>
                {text}
              </p>
              <p className="text-black" ref={secondText}>
                {text}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="text-white">{stagnantText}</p>
        </>
      )}
    </main>
  );
}
