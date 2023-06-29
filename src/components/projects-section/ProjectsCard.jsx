import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectsCard({ i, name, slug }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="relative px-[1.5rem] md:pl-[2rem]">
      <Link to={`/projects/${slug}`}>
        <div
          className="flex cursor-pointer items-center justify-center"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <div className="relative">
            <img
              src={`/images/home/${name}/${i}.jpg`}
              height={1000}
              width={1000}
              alt={name}
              className="h-[320px] w-[233px]  rounded-sm object-cover md:h-[457px] md:w-[332px]"
            />
            <div
              className={`absolute left-0 top-0 h-full w-full transition-opacity duration-500 ${
                isHovered ? "opacity-50" : "opacity-0"
              }`}
            >
              <img
                src={`/images/home/${name}/1.jpg`}
                height={1000}
                width={1000}
                alt={name}
                className="h-[320px] w-[233px]  rounded-sm object-cover md:h-[457px] md:w-[332px]"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="inline w-[233px] pt-3 text-2xl font-thin md:w-[332px] md:text-3xl">
            {name}
          </p>
        </div>
      </Link>
    </div>
  );
}
