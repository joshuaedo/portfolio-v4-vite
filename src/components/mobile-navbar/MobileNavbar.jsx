import { Link } from "react-router-dom";
import { useContext } from "react";
import { HeaderContext } from "../../contexts/HeaderContext.jsx";

export default function MobileNavbar() {
  const { isActive, setIsActive } = useContext(HeaderContext);
  return (
    <div className="static flex h-[12vh] w-full items-center justify-between bg-black bg-opacity-50 p-4 text-lg md:hidden">
      <div className="inline cursor-pointer font-medium">
        <Link to="/">Joshua Edo</Link>
      </div>
      <div className="flex">
        <div
          className="inline cursor-pointer font-medium"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          MENU+
        </div>
      </div>
    </div>
  );
}
