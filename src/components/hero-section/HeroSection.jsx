import { Link } from "react-router-dom";
import gsap from "gsap";
import { useState, useEffect } from "react";
import { HeroSpotifyPlaylist } from "../spotify/Spotify.jsx";

export default function HeroSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gsap.to(".text-reveal", {
      y: 0,
      stagger: 0.1,
      delay: 0.5,
      duration: 0.2,
    });

    setTimeout(() => {
      setLoading(false);
    }, 4321);
  }, []);

  return (
    <>
      <div className="text-reveal__container text-soft header-text mt-16 md:text-7xl xl:text-9xl">
        <div className="flex justify-center md:justify-start">
          <p className="text-reveal">SOFTWARE</p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <p className="text-reveal">DEVELOPER</p>
        </div>
      </div>

      <div className="text-reveal__container mt-3 flex justify-end">
        <span className="text-reveal text-reveal__negative title-text line-height max-w-[75%] text-end">
          SPECIALIZED IN FRONTEND DEVELOPMENT
        </span>
      </div>

      <div className="mt-16 hidden justify-end lg:flex">
        <Link to="mailto:joshua.edo01@gmail.com">
          <span className="title-text link">AVAILABLE FOR HIRE ↗</span>{" "}
        </Link>
      </div>

      <div
        className={` ${
          loading ? "opacity-0" : "opacity-100"
        } mt-16 flex h-[14vh] w-full items-center justify-center md:hidden`}
      >
        <HeroSpotifyPlaylist />
      </div>
    </>
  );
}
