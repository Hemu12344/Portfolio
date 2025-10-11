import { useContext, useState } from "react";
import { ThemeContext } from "../Context/context";
import { Menu, X } from "lucide-react"; // Menu (☰) & X (✖) icons

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [ham, setHam] = useState(false);

  const handleChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <>
      <header className="flex justify-between items-center p-4 sticky top-1 z-50 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-all duration-300 mt-10 rounded-full bg-white/60 dark:bg-black/30">
        {/* Left Section - Logo */}
        <a href="/" className="font-bold text-lg tracking-wide">
          Hemant Dixit
        </a>

        {/* Middle Section - Nav Links (Hidden on small screens) */}
        <nav className="hidden md:flex gap-6 items-center font-medium">
          <a href="/" style={{ color: theme === "dark" ? "#fff" : "#000" }}>
            Home
          </a>
          <a href="#about" style={{ color: theme === "dark" ? "#fff" : "#000" }}>
            About
          </a>
          <a href="#project" style={{ color: theme === "dark" ? "#fff" : "#000" }}>
            Project
          </a>
          <a href="#service" style={{ color: theme === "dark" ? "#fff" : "#000" }}>
            Services
          </a>
          <a
            href="#contact"
            className="border px-3 py-1 rounded-full shadow bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300"
          >
            Let's Chat
          </a>
        </nav>

        {/* Hamburger Icon - Visible only on small screens */}
        <div className="md:hidden flex items-center ml-3">
          <button
            onClick={() => setHam(!ham)}
            className="p-2 rounded-md border hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {ham ? (
              <X size={24} color={theme === "dark" ? "#fff" : "#000"} />
            ) : (
              <Menu size={24} color={theme === "dark" ? "#fff" : "#000"} />
            )}
          </button>
        </div>

        {/* Right Section - Theme Selector */}
        <div
          id="theme"
          className="rounded px-2 py-1 ml-2"
          style={{ backgroundColor: "orange" }}
        >
          <select
            value={theme}
            onChange={handleChange}
            className="outline-none bg-orange-500 text-white px-2 py-1 rounded"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="auto">Auto</option>
          </select>
        </div>
      </header>

      {/* Overlay (dim background when menu open) */}
      {ham && (
        <div
          onClick={() => setHam(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40 transition-opacity duration-300"
        ></div>
      )}

      {/* Sidebar Menu (Slide from Right on Mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white dark:bg-black shadow-2xl transform transition-all duration-300 p-6 flex flex-col gap-6 md:hidden rounded-l-xl z-50
          ${ham ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}
        style={{ color: theme === "dark" ? "#fff" : "#000" ,backgroundColor:theme==="dark"?"black":"white"}}
      >
        {/* Close button inside sidebar */}
        <button
          onClick={() => setHam(false)}
          className="self-end p-2 rounded-md border hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <X size={24} color={theme === "dark" ? "#fff" : "#000"} />
        </button>

        {/* Sidebar Links */}
        <a href="/" onClick={() => setHam(false)} className="text-lg font-medium">
          Home
        </a>
        <a href="#about" onClick={() => setHam(false)} className="text-lg font-medium">
          About
        </a>
        <a href="#project" onClick={() => setHam(false)} className="text-lg font-medium">
          Project
        </a>
        <a href="#service" onClick={() => setHam(false)} className="text-lg font-medium">
          Services
        </a>
        <a
          href="#contact"
          onClick={() => setHam(false)}
          className="border px-3 py-2 rounded-full bg-orange-600 text-white text-center hover:bg-orange-700 transition-all duration-300"
        >
          Let's Chat
        </a>
      </div>
    </>
  );
};
