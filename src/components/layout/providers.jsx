import { useEffect } from 'react';
import { useLocation, useInRouterContext } from 'react-router';
import { createContext, useState } from 'react';

export const HeaderContext = createContext();

function HeaderProvider({ children }) {
  const [isActive, setIsActive] = useState(false);
  const [show, handleShow] = useState(false);

  return (
    <HeaderContext.Provider value={{ isActive, setIsActive, show, handleShow }}>
      {children}
    </HeaderContext.Provider>
  );
}

export default function Providers(props) {
  const location = useLocation();
  const routerContext = useInRouterContext();

  // Scroll to top of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location, routerContext]);

  return <HeaderProvider>{props.children} </HeaderProvider>;
}
