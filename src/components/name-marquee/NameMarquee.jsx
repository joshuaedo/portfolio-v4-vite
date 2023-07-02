/* eslint-disable */
import styles from "./NameMarquee.module.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function NameMarquee() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
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
    xPercent += 0.1 * direction;
  };

  return (
    <main className={styles.main}>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>
            <b>Edo</b> • Joshua • <i>THOMAS</i> • Akpan •{" "}
            <span className="">ANIEKAN</span> • =) •
          </p>
          <p ref={secondText}>
            <b>Edo</b> • Joshua • <i>THOMAS</i> • Akpan •{" "}
            <span className="">ANIEKAN</span> • =) •
          </p>
        </div>
      </div>
    </main>
  );
}
