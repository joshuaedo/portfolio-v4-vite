import { useEffect } from "react";

export default function LocomotiveScroll(props) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      function locomotiveHeightBug() {
        locomotiveScroll.update();
      }
      setInterval(locomotiveHeightBug, 3500);
    })();
  }, []);

  return <>{props.children}</>;
}
