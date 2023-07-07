import gsap from "gsap";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../contexts/HeaderContext.jsx";

export default function MobileNavbar() {
  const { isActive, setIsActive, show, handleShow } = useContext(HeaderContext);

  const handleClick = () => {
    handleShow(true);
    setIsActive(!isActive);
  };

  useEffect(() => {
    gsap.to(".text-reveal", {
      y: 0,
      stagger: 0.1,
      delay: 0.5,
      duration: 0.2,
    });
  }, []);

  return (
    <div className="text-reveal text-reveal__negative static flex h-[12vh] items-center justify-between bg-black bg-opacity-50 p-4 text-lg md:hidden">
      <div className="inline cursor-pointer font-medium">
        <Link to="/">Joshua Edo</Link>
      </div>
      <div className="relative">
        <div
          className={`absolute right-2 top-1/2 ${
            show || isActive ? "hidden" : "inline"
          } z-10 -translate-y-1/2 transform cursor-pointer font-medium`}
          onClick={handleClick}
        >
          MENU+
        </div>
      </div>
    </div>
  );
}
