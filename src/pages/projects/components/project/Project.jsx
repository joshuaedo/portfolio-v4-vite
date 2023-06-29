import styles from "./Project.module.css";
import { Link } from "react-router-dom";

export default function Project({ index, title, setModal, year, slug }) {
  return (
    <Link
      to={`/projects/${slug}`}
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <h2 className="section-text">{title}</h2>
      <p className="text-xs md:text-sm">{year}</p>
    </Link>
  );
}
