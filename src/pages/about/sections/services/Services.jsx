import { useState } from "react";
import MobileSections from "../MobileSections.jsx";
import { MobileCover } from "../MobileSections.jsx";

export function MobileServices() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <MobileSections
      color="yellow"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`absolute flex h-full w-full items-center justify-center text-center ${
          isHovered ? "z-[2] opacity-100" : "z-[-2] opacity-0"
        }`}
      >
        <div className="max-w-[70%]">
          <div className="section-text text-4xl text-black">HAVE AN IDEA?</div>
          <a href="mailto:joshua.edo01@gmail.com">
            <p className="title-text link mt-2 text-black decoration-black ">
              Get In Touch ↗
            </p>
          </a>
        </div>
      </div>

      <MobileCover
        className={`${isHovered ? "opacity-0" : "opacity-100"}`}
        h="40px"
        w="40px"
        title="Services"
        items="blogs • portfolios • entertainment websites • e-commerce websites • custom websites"
        src="https://media2.giphy.com/media/eTQu5MrqHgo2dF9Y3q/giphy.gif"
      />
    </MobileSections>
  );
}
