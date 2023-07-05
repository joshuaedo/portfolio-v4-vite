import { createContext, useState } from "react";

export const HeaderContext = createContext();

export function HeaderProvider({ children }) {
  const [isActive, setIsActive] = useState(false);
  const [show, handleShow] = useState(false);

  return (
    <HeaderContext.Provider value={{ isActive, setIsActive, show, handleShow }}>
      {children}
    </HeaderContext.Provider>
  );
}
