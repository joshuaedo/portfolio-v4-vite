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
          className="relative h-[45vh] w-[70vw] rounded-lg bg-blue-500 text-black shadow-2xl shadow-green-500/20 md:w-[20vw]"
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
            <div className="flex h-full w-full items-center justify-center">
              <ul className="title-text flex flex-col items-center text-xs">
                <li>pizza</li>
                <li>dan brown</li>
                <li>chess</li>
                <li>how i met your mother</li>
                <li>chelsea</li>
              </ul>
            </div>
          )}
        </div>
        <div>
          <p className="header-text text-7xl text-white">← STUFF I LIKE</p>
        </div>
      </div>
    </div>
  );
}
