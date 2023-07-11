/* eslint-disable */
import { useEffect } from "react";

export default function LocomotiveScroller(props) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      // function locomotiveHeightBug() {
      //   locomotiveScroll.start();
      // }
      // setInterval(locomotiveHeightBug, 3500);
    })();
  }, []);
  return <>{props.children}</>;
}
