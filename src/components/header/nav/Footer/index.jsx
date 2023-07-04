import styles from "./style.module.scss";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div className={styles.footer}>
      <Link
        to="https://github.com/joshuaedo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </Link>
      <Link
        to="https://twitter.com/thegr8joshua"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </Link>
      <Link
        to="https://www.linkedin.com/in/joshuaedo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </Link>
      <Link
        to="mailto:joshua.edo01@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Email
      </Link>
      <Link
        to="https://youtube.com/@edojoshua"
        target="_blank"
        rel="noopener noreferrer"
      >
        Youtube
      </Link>
    </div>
  );
}
