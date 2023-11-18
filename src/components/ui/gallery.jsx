import { gallery } from "@/db/gallery";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import styles from "@/styles/card.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import Image from "@/components/ui/image";

export default function Gallery() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main ref={container} className="relative mt-[25vh]">
      {gallery.map((project, i) => {
        const targetScale = 1 - (gallery.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}

const Card = ({ i, title, src, color, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={`md:h-screen ${styles.cardContainer}`}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`${styles.card} h-[390px] w-[360px] lg:h-[500px] lg:w-[500px]`}
      >
        <h2>
          {title}
          <span className="text-lg">ans.</span>
        </h2>
        <div className={styles.body}>
          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <Image
                webpSrc={`/images/webp/${src}.webp`}
                orgSrc={`/images/org/${src}.jpg`}
                height={1000}
                width={1000}
                alt={title}
                className="h-[190px] w-[190px] object-cover md:h-[300px] md:w-[300px]"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
