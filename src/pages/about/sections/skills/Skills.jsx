import { useState } from "react";
import MobileSections from "../MobileSections.jsx";

export default function Skills() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="hidden items-center justify-between lg:flex">
      <div>
        <p className="header-text text-white">SKILLS</p>
        <ul className="flex flex-col items-center text-xs">
          <li className="mb-3 text-lg">↓</li>
          <li>javascript</li>
          <li>nextjs & reactjs</li>
          <li>tailwind & css</li>
          <li>attention to detail</li>
          <li>fifa</li>
        </ul>
      </div>
      <div
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        className="relative h-[45vh] w-[30vw] rounded-lg bg-green-500 text-black shadow-2xl shadow-green-500/20"
      >
        <video
          autoPlay
          muted
          loop
          className={`h-full w-full rounded-lg object-cover ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/videos/skills-2.mp4" type="video/mp4" />
        </video>

        <p
          className={`title-text absolute left-5 top-5 text-xs ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          hover?
        </p>
      </div>
    </div>
  );
}

export function MobileSkills() {
  return (
    <MobileSections color="green">
      <video
        autoPlay
        muted
        loop
        className={`h-full w-full rounded-lg object-cover`}
      >
        <source src="/videos/skills-2.mp4" type="video/mp4" />
      </video>
    </MobileSections>
  );
}
