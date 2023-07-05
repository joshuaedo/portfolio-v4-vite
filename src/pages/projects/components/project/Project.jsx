import styles from "./Project.module.css";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useEffect } from "react";

export default function Project({ index, title, setModal, year, slug }) {
  useEffect(() => {
    gsap.to(".text-reveal", {
      y: 0,
      stagger: 0.1,
      delay: 0.2,
      duration: 0.2,
    });
  }, []);
  return (
    <Link
      to={`/projects/${slug}`}
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={`${styles.project} text-reveal`}
    >
      <h2 className="section-text">{title}</h2>
      <p className="text-xs md:text-sm">{year}</p>
    </Link>
  );
}
