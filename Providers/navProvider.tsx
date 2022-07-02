import React, { useState, createContext, useContext } from "react";

const navContext = createContext({});

export const useNav = () => {
  return useContext(navContext);
};

export default function NavProvider({ children }: any) {
  const [open, setOpen] = useState(false);

  const value = { open, setOpen };

  return <navContext.Provider value={value}>{children}</navContext.Provider>;
}
