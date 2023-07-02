import { Link } from "react-router-dom";
import SpotifyPlaylist from "../spotify/Spotify.jsx";
import { SpotifyLogo } from "../spotify/Spotify.jsx";
import { useState } from "react";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleStopHover = () => {
    setIsHovered(false);
  };

  return (
    <>
      <nav
        id="scroller"
        className={`sticky top-0 z-10 hidden h-[12vh] w-full items-center justify-between bg-black bg-opacity-50 p-7 text-lg md:flex`}
      >
        <div className="flex">
          <div
            className={`mr-[14vh] flex cursor-pointer items-center font-medium`}
          >
            <Link to="/">Joshua Edo</Link>
          </div>
          <div
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            className={`relative flex h-[12vh] w-[25rem] items-center justify-center`}
          >
            <SpotifyLogo opacity={`${isHovered ? "hovered" : ""}`} />
            <SpotifyPlaylist opacity={`${isHovered ? "hovered" : ""}`} />
          </div>
        </div>
        <div className={`flex cursor-pointer justify-end space-x-10`}>
          <div className="flex w-[20vw] items-center justify-around ">
            <Link to="/about" className="hover:opacity-70">
              <p className="font-medium">Info</p>
              <p className="text-2xs">ABOUT ME</p>
            </Link>
            <Link to="/projects" className="hover:opacity-70">
              <p className="font-medium">Work</p>
              <p className="text-2xs">MY PROJECTS</p>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Link
              to="mailto:joshua.edo01@gmail.com"
              className="link title-text"
            >
              Let&apos;s Talk →
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
