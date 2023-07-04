import { Link } from "react-router-dom";
import { useDate } from "../../hooks/useDate.jsx";
import Marquee from "../marquee/Marquee.jsx";

export default function Footer() {
  const { date, time, wish } = useDate();
  const currentTime = time;

  return (
    <>
      <footer
        className={`flex items-center justify-center bg-black pt-4 md:pt-10`}
      >
        <div className="w-[90%]">
          <div className="title-text pb-3 md:pb-5">Social Media & Contacts</div>
          <div className={`text-3xl uppercase md:text-6xl`}>
            <Link
              to="https://github.com/joshuaedo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Marquee
                stagnantText="GITHUB ↗"
                text="GITHUB ↗ GITHUB ↗ GITHUB ↗ GITHUB ↗ GITHUB ↗ GITHUB ↗ GITHUB ↗ GITHUB ↗ "
                bgColor="bg-purple-500"
              />
            </Link>
            <Link
              to="https://twitter.com/thegr8joshua"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Marquee
                stagnantText="TWITTER ↗"
                text="TWITTER ↗ TWITTER ↗ TWITTER ↗ TWITTER ↗ TWITTER ↗ TWITTER ↗ TWITTER ↗ "
                bgColor="bg-green-500"
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/joshuaedo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Marquee
                stagnantText="LINKEDIN ↗"
                text="LINKEDIN ↗ LINKEDIN ↗ LINKEDIN ↗ LINKEDIN ↗ LINKEDIN ↗ LINKEDIN ↗ LINKEDIN ↗ "
                bgColor="bg-blue-500"
              />
            </Link>
            <Link
              to="mailto:joshua.edo01@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Marquee
                stagnantText="EMAIL ↗"
                text="EMAIL ↗ EMAIL ↗ EMAIL ↗ EMAIL ↗ EMAIL ↗ EMAIL ↗ EMAIL ↗ EMAIL ↗ EMAIL ↗ EMAIL ↗ EMAIL ↗ "
                bgColor="bg-yellow-500"
              />
            </Link>
            <Link
              to="https://youtube.com/@edojoshua"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Marquee
                stagnantText="YOUTUBE ↗"
                text="YOUTUBE ↗ YOUTUBE ↗ YOUTUBE ↗ YOUTUBE ↗ YOUTUBE ↗ YOUTUBE ↗ YOUTUBE ↗ YOUTUBE ↗ "
                bgColor="bg-red-500"
              />
            </Link>
          </div>
          <div
            className={`title-text flex h-10 items-center justify-between text-center`}
          >
            <p>{date}</p>
            <p className="hidden time">{currentTime}</p> <p>{wish}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
