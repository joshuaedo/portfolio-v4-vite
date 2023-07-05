/* eslint-disable */
import styles from "./style.module.scss";
import { useEffect, useContext } from "react";
import Nav from "./nav";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { HeaderContext } from "../../contexts/HeaderContext.jsx";

function usePathname() {
  const location = useLocation();
  return location.pathname;
}

export default function Home() {
  const { isActive, setIsActive, show, handleShow } = useContext(HeaderContext);
  const pathname = usePathname();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div className={styles.main}>
        <div className={`${styles.header} ${
            show || isActive ? "z-[20]" : "z-[6]"
          }`}>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={`${styles.button} ${
              show ? "scale-100" : "scale-0"
            } transition ease-in-out`}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              } `}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
