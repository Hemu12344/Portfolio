import { useState,useEffect } from "react";
import { ThemeContext } from "./context";

export const ThemeProvidor = ({ children }) => {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
    useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  
  
  // setTheme(currentTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
