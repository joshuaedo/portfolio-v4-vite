import { useState } from "react";

export default function Likes() {
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
        <div
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          className="relative h-[40vh] w-[70vw] rounded-lg bg-blue-500 text-black shadow-2xl shadow-green-500/20 md:w-[30vw]"
        >
          {isHovered ? (
            <video
              autoPlay
              muted
              loop
              className="h-full w-full rounded-lg object-cover"
            >
              <source src="/videos/likes.mp4" type="video/mp4" />
            </video>
          ) : (
            <p className="title-text p-5 text-xs">hover?</p>
          )}
        </div>
        <div>
          <p className="header-text text-7xl text-white">STUFF I LIKE</p>
          <ul className="flex flex-col items-center text-xs">
            <li className="mb-3 text-lg">↓</li>
            <li>pizza</li>
            <li>dan brown</li>
            <li>chess</li>
            <li>how i met your mother</li>
            <li>chelsea</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
