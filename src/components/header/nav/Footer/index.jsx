import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import {
  GithubIcon,
  TwitterIcon,
  LinkedInIcon,
  EmailIcon,
  YoutubeIcon,
} from "../../../image/Image.jsx";

export default function index() {
  return (
    <div className={styles.footer}>
      <Link
        to="https://github.com/joshuaedo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </Link>
      <Link
        to="https://twitter.com/thegr8joshua"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon />
      </Link>
      <Link
        to="https://www.linkedin.com/in/joshuaedo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </Link>
      <Link
        to="mailto:joshua.edo01@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <EmailIcon />
      </Link>
      <Link
        to="https://youtube.com/@edojoshua"
        target="_blank"
        rel="noopener noreferrer"
      >
        <YoutubeIcon />
      </Link>
    </div>
  );
}
