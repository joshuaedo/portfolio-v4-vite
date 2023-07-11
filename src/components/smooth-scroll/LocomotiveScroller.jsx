import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function LocomotiveScroller(props) {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      duration: 2.5,
    });

    function locomotiveHeightBug() {
      locomotiveScroll.start();
    }
    setInterval(locomotiveHeightBug, 3500);
  }, []);

  return <>{props.children}</>;
}
