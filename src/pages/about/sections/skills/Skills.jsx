import { useState } from "react";

export default function Skills() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div>
          <p className="header-text text-white">SKILLS</p>
          <ul className="flex flex-col items-center text-xs">
            <li className="mb-3 text-lg">↓</li>
            <li>nextjs & reactjs</li>
            <li>tailwind & css</li>
            <li>javascript</li>
            <li>attention to detail</li>
            <li>fifa</li>
          </ul>
        </div>
        <div
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          className="relative h-[45vh] w-[70vw] rounded-lg bg-green-500 text-black shadow-2xl shadow-green-500/20 md:w-[30vw]"
        >
          {isHovered ? (
            <video
              autoPlay
              muted
              loop
              className="h-full w-full rounded-lg object-cover"
            >
              <source src="/videos/next-logo.mp4" type="video/mp4" />
            </video>
          ) : (
            <p className="title-text p-5 text-xs">hover?</p>
          )}
        </div>
      </div>
    </div>
  );
}
