import { useState } from "react";
import MobileSections from "../MobileSections.jsx";
import { MobileCover } from "../MobileSections.jsx";

export default function Likes() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="hidden lg:block">
      <div className="flex items-center justify-around">
        <div
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          className="relative h-[40vh] w-[70vw] rounded-lg bg-blue-500 text-black shadow-2xl shadow-blue-500/20 md:w-[30vw]"
        >
          <video
            autoPlay
            muted
            loop
            className={`h-full w-full rounded-lg object-cover ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src="/videos/likes.mp4" type="video/mp4" />
          </video>
          <p
            className={`title-text absolute right-5 top-5 text-xs ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            hover?
          </p>
        </div>
        <div>
          <p className="header-text text-7xl text-white">STUFF I LIKE</p>
          <ul className="flex flex-col items-center text-xs">
            <li className="mb-3 text-lg">↓</li>
            <li>chess</li>
            <li>pizza</li>
            <li>chelsea</li>
            <li>how i met your mother</li>
            <li>dan brown</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function MobileLikes() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <MobileSections
      color="blue"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? (
        <video
          autoPlay
          muted
          loop
          className={`h-full w-full rounded-lg object-cover`}
        >
          <source src="/videos/likes.mp4" type="video/mp4" />
        </video>
      ) : (
        <MobileCover
          title="Stuff I Like"
          items="chess • pizza • chelsea • how i met your mother • dan brown"
        />
      )}
    </MobileSections>
  );
}
