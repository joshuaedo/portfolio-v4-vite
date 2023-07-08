import { useState } from "react";
import MobileSections from "../MobileSections.jsx";
import { MobileCover } from "../MobileSections.jsx";

export function MobileSkills() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <MobileSections
      color="green"
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
          src="https://joshuaedo.sirv.com/joshuaedo/public/videos/skills-2.mp4"
          type="video/mp4"
        />
      </video>

      <MobileCover
        className={`${isHovered ? "opacity-0" : "opacity-100"}`}
        h="18px"
        w="18px"
        src="https://media3.giphy.com/media/TibATeFWhd439Fhupc/giphy.gif"
        title="Skills"
        items="javascript • nextjs & reactjs • tailwind & css • attention to
                detail • fifa"
      />
    </MobileSections>
  );
}
