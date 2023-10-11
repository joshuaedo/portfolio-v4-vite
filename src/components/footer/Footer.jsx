import { Link } from "react-router-dom";
import { useDate } from "../../hooks/useDate.jsx";
import FooterMarquee from "../marquee/Marquee.jsx";

const socialLinks = [
  {
    name: "GITHUB",
    url: "https://github.com/joshuaedo",
    bgColor: "bg-purple-500",
  },
  {
    name: "TWITTER",
    url: "https://twitter.com/thegr8joshua",
    bgColor: "bg-green-500",
  },
  {
    name: "LINKEDIN",
    url: "https://www.linkedin.com/in/joshuaedo",
    bgColor: "bg-blue-500",
  },
  {
    name: "INSTAGRAM",
    url: "https://instagram.com/edo_joshua",
    bgColor: "bg-yellow-500",
  },
  {
    name: "YOUTUBE",
    url: "https://youtube.com/@edojoshua",
    bgColor: "bg-red-500",
  },
];

export default function Footer() {
  const { date, time, wish, isTimeVisible } = useDate();
  const currentTime = isTimeVisible ? time : "";

  return (
    <footer className="flex items-center justify-center bg-black pt-4 md:pt-10">
      <div className="w-[90%]">
        <div className="title-text pb-3 md:pb-5">Social Media & Contacts</div>
        <div className="text-3xl uppercase md:text-6xl">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              to={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FooterMarquee text={link.name} bgColor={link.bgColor} />
            </Link>
          ))}
        </div>
        <div className="title-text flex h-10 items-center justify-between text-center">
          <p>{date}</p>
          {isTimeVisible && (
            <p className="time hidden md:block">{currentTime}</p>
          )}
          <p>{wish}</p>
        </div>
      </div>
    </footer>
  );
}
