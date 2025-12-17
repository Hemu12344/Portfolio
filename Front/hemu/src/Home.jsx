import { useContext, useEffect, useState, useRef } from "react";
import { Header } from "./Component/Header";
import { ThemeContext } from "./Context/context";
import "./App.css";
import Projects from "./Component/Project";
import Services from "./Component/Service";
import Testimonial from "./Component/tesimonial";
import ProjectMet from "./Component/ProjectMetrix";
import Ques from "./Component/Questions";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import Eduction from "./Component/Edu";

function Home() {
  const { theme } = useContext(ThemeContext);

  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const lastScrollY = useRef(0);

  // Theme handling
  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "dark" ? "#111" : "#f5f5f5";
    document.body.style.color = theme === "dark" ? "#fff" : "#000";
  }, [theme]);

  // Scroll handling (Header + Top button)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Back to top button
      setShowTopBtn(currentScrollY > 500);

      // Header hide/show
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Back to Top Button */}
      {showTopBtn && (
        <div className="fixed bottom-5 right-5 z-50">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
          </button>
        </div>
      )}

      {/* Header */}
      <div
        className={`fixed top-0 w-full z-40 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>

      {/* Page Content */}
      <div className="pt-20">
        <Hero />

        <section
          id="projects"
          className={`${theme === "dark" ? "dark:bg-gray-800" : "bg-white"} py-20 rounded-3xl`}
        >
          <Projects />
        </section>

        <section
          className={`${theme === "dark" ? "text-white" : "bg-white text-black"} py-20`}
        >
          <Eduction />
        </section>

        <section
          id="services"
          className={`${theme === "dark" ? "text-white" : "bg-white"} py-1`}
        >
          <Services />
        </section>

        <section
          className={`mt-10 rounded-full ${
            theme === "dark" ? "dark:bg-gray-800" : "bg-white"
          } py-25`}
        >
          <Testimonial />
        </section>

        <section
          className={`${theme === "dark" ? "text-white" : "bg-white"} py-20`}
        >
          <ProjectMet />
        </section>

        <section
          className={`rounded-3xl ${
            theme === "dark" ? "dark:bg-gray-800" : "bg-white"
          } py-20`}
        >
          <Ques />
        </section>

        <section
          id="contact"
          className={`${theme === "dark" ? "text-white" : "bg-white"} py-20`}
        >
          <Contact />
        </section>

        <section
          className={`${theme === "dark" ? "text-white" : "bg-white"} py-20`}
        >
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Home;
