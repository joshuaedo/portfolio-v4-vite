/* eslint-disable */
import styles from "./style.module.scss";
import { useEffect, useState, useContext } from "react";
import Nav from "./nav";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { HeaderContext } from "../../contexts/HeaderContext.jsx";

export default function Home() {
  const [show, handleShow] = useState(false);
  const { isActive, setIsActive } = useContext(HeaderContext);
  const pathname = usePathname();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  function usePathname() {
    const location = useLocation();
    return location.pathname;
  }

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
        <div className={styles.header}>
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
              }`}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
