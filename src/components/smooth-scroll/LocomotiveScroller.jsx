import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function LocomotiveScroller(props) {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    function locomotiveHeightBug() {
      locomotiveScroll.start();
    }
    setInterval(locomotiveHeightBug, 3500);
  }, []);

  return <>{props.children}</>;
}
