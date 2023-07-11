import styles from "./Labels.module.css";
import MobileSections from "../MobileSections.jsx";
import { MobileCover } from "../MobileSections.jsx";

export function MobileLabels() {
  return (
    <MobileSections color="purple" className="relative overflow-hidden">
      <img
        className={styles.avatar}
        src="https://joshuaedo.sirv.com/joshuaedo/public/images/original/=).png"
        alt="=)"
      />

      <MobileCover
        src="https://media4.giphy.com/media/hiJ9ypGI5tIKdwKoK2/giphy.gif"
        h="80px"
        w="80px"
        title="Labels"
        items="20 • he/him • designer • engineer • developer"
      />
    </MobileSections>
  );
}
