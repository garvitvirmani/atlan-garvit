import React, { createContext, useState } from "react";

const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("default");
  const [query, setQuery] = useState("SELECT * FROM Products");

  return (
    <GlobalContext.Provider
      value={{
        theme,
        setTheme,
        query,
        setQuery,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { ContextProvider, GlobalContext };
