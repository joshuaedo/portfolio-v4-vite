import { Link } from "react-router-dom";
import SpotifyPlaylist from "../spotify/Spotify.jsx";

export default function HeroSection() {
  return (
    <>
      <div className="text-soft header-text mt-16 md:text-9xl">
        <div className="flex justify-center md:justify-start">
          <p className="">SOFTWARE</p>
        </div>
        <div className="flex justify-center md:justify-end">
          <p className="">DEVELOPER</p>
        </div>
      </div>

      <div className="mt-3 flex justify-end">
        <span className="title-text line-height max-w-[75%] text-end">
          SPECIALIZED IN FRONTEND DEVELOPMENT
        </span>
      </div>

      <div className="mt-16 hidden justify-end md:flex">
        <Link to="mailto:joshua.edo01@gmail.com">
          <span className="title-text link">AVAILABLE FOR HIRE ↗</span>{" "}
        </Link>
      </div>

      <div className="mt-16 flex h-[12vh] w-full items-center justify-center md:hidden">
        <SpotifyPlaylist />
      </div>
    </>
  );
}
