import { Link } from "react-router-dom";
import gsap from "gsap";
import { useEffect } from "react";
import { HeroSpotifyPlaylist } from "../spotify/Spotify.jsx";

export default function HeroSection() {
  useEffect(() => {
    gsap.to(".text-reveal", {
      y: 0,
      stagger: 0.1,
      delay: 0.5,
      duration: 0.2,
    });
  }, []);

  return (
    <>
      <div className="text-reveal__container header-text mt-16 ">
        <div className="flex justify-center lg:justify-start">
          <p className="text-reveal">SOFTWARE</p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <p className="text-reveal">DEVELOPER</p>
        </div>
      </div>

      <div className="text-reveal__container mt-3 flex justify-end">
        <span className="text-reveal text-reveal__negative title-text line-height max-w-[70%] text-end md:max-w-[30%]">
          SPECIALIZED IN FRONTEND DEVELOPMENT
        </span>
      </div>

      <div className="mt-16 hidden justify-end md:flex">
        <Link to="mailto:joshua.edo01@gmail.com">
          <span className="title-text link">AVAILABLE FOR HIRE ↗</span>{" "}
        </Link>
      </div>

      <div className="flex w-full items-center justify-center">
        <div
          className={`hero-spotify mt-16 flex h-[14vh] items-center justify-center md:mb-32 md:hidden`}
        >
          <HeroSpotifyPlaylist />
        </div>
      </div>
    </>
  );
}
