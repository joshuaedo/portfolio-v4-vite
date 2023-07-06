import styles from "./NameMarquee.module.css";
import Marquee from "react-fast-marquee";

export default function NameMarquee() {
  return (
    <Marquee autoFill>
      <main className={styles.main}>
        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            <p>
              <b>Edo</b> • Joshua • <i>THOMAS</i> •{" "}
              <span className="font-medium">Akpan</span> •{" "}
              <span className="font-semibold italic">ANIEKAN</span> • =) •
            </p>
            <p>
              <b>Edo</b> • Joshua • <i>THOMAS</i> •{" "}
              <span className="font-medium">Akpan</span> •{" "}
              <span className="font-semibold italic">ANIEKAN</span> • =) •
            </p>
          </div>
        </div>
      </main>
    </Marquee>
  );
}
