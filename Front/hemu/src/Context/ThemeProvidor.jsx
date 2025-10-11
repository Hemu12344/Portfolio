import { useState } from "react";
import { ThemeContext } from "./context";

export const ThemeProvidor = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
