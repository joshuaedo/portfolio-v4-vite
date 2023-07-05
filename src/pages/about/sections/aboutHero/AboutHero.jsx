import gsap from "gsap";
import { useEffect } from "react";

export default function AboutHero() {
  useEffect(() => {
    gsap.to(".text-reveal", {
      y: 0,
      stagger: 0.1,
      delay: 0.5,
      duration: 0.2,
    });
  }, []);
  return (
    <div className="text-reveal__container">
      <p className="text-reveal text-reveal__negative">who is joshua edo?</p>
    </div>
  );
}
