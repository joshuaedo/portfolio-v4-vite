import { Link } from "react-router-dom";
import { useDate } from "../../hooks/useDate.jsx";
import FooterMarquee from "../marquee/Marquee.jsx";

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
              <FooterMarquee text="GITHUB" bgColor="bg-purple-500" />
            </Link>
            <Link
              to="https://twitter.com/thegr8joshua"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterMarquee text="TWITTER" bgColor="bg-green-500" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/joshuaedo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterMarquee text="LINKEDIN" bgColor="bg-blue-500" />
            </Link>
            <Link
              to="https://instagram.com/edo_joshua"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterMarquee text="INSTAGRAM" bgColor="bg-yellow-500" />
            </Link>
            <Link
              to="https://youtube.com/@edojoshua"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterMarquee text="YOUTUBE" bgColor="bg-red-500" />
            </Link>
          </div>
          <div
            className={`title-text flex h-10 items-center justify-between text-center`}
          >
            <p>{date}</p>
            <p className="time hidden">{currentTime}</p> <p>{wish}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
