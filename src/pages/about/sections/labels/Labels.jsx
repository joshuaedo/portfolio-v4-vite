import styles from "./Labels.module.css";
import { useRef } from "react";
import MobileSections from "../MobileSections.jsx";

export default function Labels() {
  const container = useRef();
  const img = useRef();

  const manageMouseMove = (event) => {
    const { clientX, clientY } = event;
    const containerPosition = container.current.getBoundingClientRect();
    const x = clientX - containerPosition.x;
    const y = clientY - containerPosition.y;
    img.current.style.top = y + "px";
    img.current.style.left = x + "px";
    draw(x, y);
  };

  const draw = (x, y) => {
    const div = document.createElement("div");
    div.classList.add(styles["circle"]);
    div.style.top = y + "px";
    div.style.left = x + "px";
    container.current.append(div);

    if (container.current.childNodes.length > 25) {
      erase();
    } else {
      setTimeout(() => {
        erase();
      }, 1500);
    }
  };

  const erase = () => {
    container.current.removeChild(container.current.childNodes[1]);
  };

  return (
    <div className="hidden lg:block">
      <div className="hidden flex-col items-center justify-center lg:flex">
        <div
          className={`${styles.container} h-[70vh] w-[70vw] cursor-pointer rounded-2xl bg-purple-500 text-black shadow-2xl shadow-purple-500/20`}
        >
          <span className="absolute bottom-5 left-5 font-medium text-black">
            labels↓
          </span>
          <div
            className="h-full w-full"
            ref={container}
            onMouseMove={(e) => {
              manageMouseMove(e);
            }}
          >
            <img
              ref={img}
              className={styles.img}
              src="/images/original/=).png"
              height={1080}
              width={1080}
              alt="=)"
            />
          </div>
        </div>
      </div>
      <div className="flex items-start">
        <ul className="mt-5 text-center text-xs">
          <li>21</li>
          <li>he/him</li>
          <li>designer</li>
          <li>engineer</li>
          <li>developer</li>
        </ul>
      </div>
    </div>
  );
}

export function MobileLabels() {
  return (
    <MobileSections color="purple" className="relative">
      <img
        className={styles.avatar}
        src="/images/original/=).png"
        height={1080}
        width={1080}
        alt="=)"
      />
    </MobileSections>
  );
}
