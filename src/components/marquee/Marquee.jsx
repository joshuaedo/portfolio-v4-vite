import styles from "./Marquee.module.css";
import { useState } from "react";
import { Arrow } from "../image/Image";
import Marquee from "react-fast-marquee";

export default function FooterMarquee({ text, bgColor }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleStopHover = () => {
    setIsHovered(false);
  };

  const MarqueeFooter = Array.from({ length: 99 }, (_, index) => (
    <div
      key={index}
      className={`mr-[1rem] flex w-full items-center text-black ${bgColor}`}
    >
      <span className="">{text}</span>
      <Arrow className="ml-[7.8px] h-6 w-6 md:ml-[12px] md:mt-[9px] md:h-12 md:w-12" />
    </div>
  ));

  const StagnantFooter = () => (
    <div
      className={`flex w-full items-center ${
        !isHovered ? "z-[2] opacity-100" : "z-[-2] opacity-0"
      }`}
    >
      <span className="">{text}</span>
      <Arrow className="ml-[7.8px] h-6 w-6 md:ml-[12px] md:mt-[9px] md:h-12 md:w-12" />
    </div>
  );

  return (
    <main
      className={`${styles.main} ${!isHovered ? "bg-black" : bgColor}`}
      onMouseOver={handleHover}
      onMouseLeave={handleStopHover}
    >
      <StagnantFooter />
      <div
        className={`absolute ${
          isHovered ? "z-[2] opacity-100" : "z-[-2] opacity-0"
        }`}
      >
        <Marquee>{MarqueeFooter}</Marquee>
      </div>
    </main>
  );
}
