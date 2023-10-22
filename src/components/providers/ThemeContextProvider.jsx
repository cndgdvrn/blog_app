"use client";

import { ThemeContext, ThemeProvider } from "@/context/ThemeContext";
import { useContext, useEffect, useState } from "react";

const ThemeContextProvider = ({ children }) => {
  const { themeOfContext } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`${
        themeOfContext === "dark"
          ? "bg-themeDark text-themeLight"
          : "bg-themeLight text-themeDark"
      }`}>
      {children}
    </div>
  );
};

export default ThemeContextProvider;
