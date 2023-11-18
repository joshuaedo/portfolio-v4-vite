import gsap from "gsap";
import {
  TwitterIcon,
  GithubIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "lucide-react";
import { useEffect } from "react";

export default function Header() {
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
      <nav
        className={`absolute z-[4] flex h-[11vh] w-screen items-center justify-between bg-opacity-50 p-7 text-lg`}
      >
        <div className="flex">
          <div
            className={`mr-[12vh] flex cursor-pointer items-center font-medium md:mr-[14vh]`}
          >
            <a href="/">Joshua Edo</a>
          </div>
        </div>
        <div className={`hidden cursor-pointer justify-end space-x-10 md:flex`}>
          <a
            href="https://joshuaedo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://joshuaedo.sirv.com/joshuaedo/public/images/original/me-modified.png"
              alt="Joshua Edo's Logo"
              width={25}
              height={25}
            />
          </a>
          <a
            href="https://twitter.com/thegr8joshua"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://github.com/joshuaedo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/joshuaedo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://youtube.com/@edojoshua"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeIcon />
          </a>
        </div>
      </nav>
    </>
  );
}
