import { useState } from "react";
import MobileSections from "../MobileSections.jsx";
import { MobileCover } from "../MobileSections.jsx";

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
      <video
        autoPlay
        muted
        loop
        className={`absolute h-full w-full rounded-lg object-cover ${
          isHovered ? "z-[2] opacity-100" : "z-[-2] opacity-0"
        }`}
      >
        <source
          src="https://joshuaedo.sirv.com/joshuaedo/public/videos/likes.mp4"
          type="video/mp4"
        />
      </video>
      <MobileCover
        className={`${isHovered ? "opacity-0" : "opacity-100"}`}
        h="15px"
        w="15px"
        title="Stuff I Like"
        items="chess • pizza • chelsea • how i met your mother • dan brown"
        src="https://media4.giphy.com/media/n9nTs7W2sDc0WdQ8wR/giphy.gif"
      />
    </MobileSections>
  );
}
