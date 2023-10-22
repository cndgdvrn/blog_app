"use client";
import { createContext, useEffect, useState } from "react";

// const getFromLocalStorage = () => {
//   if (typeof window !== "undefined") {
//     const theme = localStorage.getItem("theme");
//     return theme || "light";
//   }
// };

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeOfContext, setTheme] = useState("");

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "light");
  }, [themeOfContext]);

  const toggle = () => {
    if (themeOfContext === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
    if (themeOfContext === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  const sharedValues = {
    themeOfContext,
    toggle,
  };

  return (
    <ThemeContext.Provider value={sharedValues}>
      {children}
    </ThemeContext.Provider>
  );
};
