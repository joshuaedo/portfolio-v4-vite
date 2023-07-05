import { createContext, useState } from "react";

export const HeaderContext = createContext();

export function HeaderProvider({ children }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <HeaderContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </HeaderContext.Provider>
  );
}
