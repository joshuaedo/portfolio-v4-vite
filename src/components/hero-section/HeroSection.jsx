import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
      <div className="text-soft header-text mt-20 md:text-9xl">
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

      <div className="mt-16 flex justify-end">
        <Link to="/#contact">
          <span className="title-text link">AVAILABLE FOR HIRE ↗</span>{" "}
        </Link>
      </div>
    </>
  );
}
