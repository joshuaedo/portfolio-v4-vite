import styles from "./MobileNavbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDate } from "../../hooks/useDate.jsx";

export default function MobileNavbar() {
  const { date, time, wish } = useDate();
  const currentTime = time;

  const [isCollapsed, setIsCollapsed] = useState(false);

  const openNavPage = () => {
    setIsCollapsed(true);
  };

  const closeNavPage = () => {
    setIsCollapsed(false);
  };

  return (
    <>
      {!isCollapsed ? (
        <div className="sticky top-0 z-10 flex h-[12vh] w-full items-center justify-between bg-black bg-opacity-50 p-4 text-lg md:hidden">
          <div className="inline cursor-pointer font-medium">
            <Link to="/">Joshua Edo</Link>
          </div>
          <div className="flex">
            <div
              className="inline cursor-pointer font-medium"
              onClick={openNavPage}
            >
              MENU+
            </div>
          </div>
        </div>
      ) : (
        <div className="sticky top-0 z-10 h-screen w-full bg-[#A3A3A3] p-4 text-black md:hidden ">
          <div className="mobile-nav__header flex h-[12vh] w-full items-center justify-between text-lg">
            <div className="inline cursor-pointer font-medium">
              <Link to="/">Joshua Edo</Link>
            </div>
            <div className="flex">
              <div
                className="inline cursor-pointer font-medium"
                onClick={closeNavPage}
              >
                CLOSE
              </div>
            </div>
          </div>

          <div className="relative h-[76vh] p-5">
            <div className="space-y-10 pt-24">
              <div onClick={closeNavPage} className={styles.project}>
                <Link to="/">
                  <h2>HOME</h2>
                </Link>
              </div>
              <div onClick={closeNavPage} className={styles.project}>
                <Link to="/about">
                  <h2>ABOUT</h2>
                </Link>
              </div>
              <div onClick={closeNavPage} className={styles.project}>
                <Link to="/projects">
                  <h2>WORK</h2>
                </Link>
              </div>
              <div onClick={closeNavPage} className={styles.project}>
                <Link to="mailto:joshua.edo01@gmail.com">
                  <p>Let&apos;s Talk →</p>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`title-text mobile-nav__footer flex h-[12vh] items-center justify-between text-center`}
          >
            <p>{date}</p>
            <p className="">{currentTime}</p> <p>{wish}</p>
          </div>
        </div>
      )}
    </>
  );
}
