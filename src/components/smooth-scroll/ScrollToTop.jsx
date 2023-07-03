import { useEffect } from "react";
import { useLocation, useInRouterContext } from "react-router";

export const ScrollToTop = (props) => {
  const location = useLocation();
  const routerContext = useInRouterContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location, routerContext]);

  return <>{props.children}</>;
};
