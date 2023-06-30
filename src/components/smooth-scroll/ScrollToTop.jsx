import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    document.getElementById("scroller").scroll(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
