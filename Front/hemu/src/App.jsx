import { useContext, useEffect, useState } from "react";
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

function App() {
  const { theme } = useContext(ThemeContext);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showHeader,setShowheader]=useState(false);
  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#111" : "#f5f5f5";
    document.body.style.color = theme === "dark" ? "#fff" : "#000";
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >500) setShowTopBtn(true);
      else setShowTopBtn(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(()=>{
  //   const handleScroll=()=>{
  //     if(window.scrollX) setShowheader(true);
  //     else setShowheader(false)
  //   };
  //   window.addEventListener("scroll",handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);

  // })

  const companyLogos = [
    "https://tigmatemplate.me/uxoria/assets/img/clients-logos/logo7-dark.png",
    "https://tigmatemplate.me/uxoria/assets/img/clients-logos/logo6-dark.png",
    "https://tigmatemplate.me/uxoria/assets/img/clients-logos/logo8-dark.png",
    "https://tigmatemplate.me/uxoria/assets/img/clients-logos/logo9-dark.png",
    "https://tigmatemplate.me/uxoria/assets/img/clients-logos/logo10-dark.png",
    "https://tigmatemplate.me/uxoria/assets/img/clients-logos/logo1-dark.png",
    "https://tigmatemplate.me/uxoria/assets/img/clients-logos/logo2-dark.png",
    "https://tigmatemplate.me/uxoria/assets/img/clients-logos/logo3-dark.png",
    "https://tigmatemplate.me/uxoria/assets/img/clients-logos/logo4-dark.png",
    "https://tigmatemplate.me/uxoria/assets/img/clients-logos/logo5-dark.png",
  ];

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
              className="bi bi-caret-up-fill"
              viewBox="0 0 16 16"
            >
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"></path>
            </svg>
          </button>
        </div>
      )}
      {
        // showHeader&&
        <Header />
      }

      {/* HERO SECTION */}
      <main id="home" className="p-6 md:p-8 mt-20">
        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-20 items-center justify-center">
          {/* Profile Image */}
          <div className="bg-green-500 md:mt-0 mt-20 p-5 rounded-full hover:scale-90 cursor-pointer transition-all duration-300">
            <img
              src="https://tigmatemplate.me/uxoria/assets/img/bg/home1.jpg"
              alt="Owner-img"
              className="w-80 h-80 md:w-72 md:h-72 object-cover rounded-full"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col gap-5 text-center md:text-left max-w-xl">
            {/* Hiring Badge */}
            <div className="flex justify-center md:justify-start">
              <h1
                className={`flex items-center justify-center gap-2 border px-3 py-1 rounded-full shadow-md ${
                  theme === "dark" ? "bg-gray-900" : "bg-white"
                }`}
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                </span>
                Available for hiring!
              </h1>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              UX/UI Designer & Web Developer.
            </h1>

            {/* Description */}
            <p
              className={`text-lg md:text-xl ${
                theme === "dark" ? "text-gray-300" : "text-black"
              } font-medium`}
            >
              I design and develop high-end web experiences for design-driven
              companies that value attention to detail.
            </p>

            {/* Contact Button */}
            <div className="flex justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-2 rounded-full bg-orange-700 text-white hover:bg-orange-800 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className="flex-col mt-20 overflow-hidden relative">
          <h1 className="font-bold text-center text-lg md:text-xl mb-8">
            Trusted by the world’s most innovative teams at
          </h1>

          <div className="flex mt-10 animate-marquee whitespace-nowrap gap-12 w-max">
            {companyLogos.concat(companyLogos).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="inline-block w-44 md:w-32 object-contain bg-white p-2 rounded-lg"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </main>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className={`${theme === "dark" ? "dark:bg-gray-800" : "bg-white"} py-20`}
      >
        <Projects />
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className={`${theme === "dark" ? "text-white" : "bg-white"} py-20`}
      >
        <Services />
      </section>

      {/* TESTIMONIAL SECTION */}
      <section
        className={`mt-10 rounded-full ${
          theme === "dark" ? "dark:bg-gray-800" : "bg-white"
        } py-25 relative`}
      >
        <Testimonial />
      </section>

      {/* Project metrix */}
      <section
        id="Met"
        className={`${theme === "dark" ? "text-white" : "bg-white"} py-20`}
      >
        <ProjectMet />
      </section>

      {/* Ques */}
      <section
        id="services"
        className={`rounded-3xl ${theme === "dark" ? "dark:bg-gray-800" : "bg-white"} py-20`}
      >
        <Ques />
      </section>

      {/* Section Contact */}
      <section
        id="contact"
        className={`${theme === "dark" ? "text-white" : "bg-white"} py-20`}
      >
        <Contact />
      </section>

      {/* Footer */}
      <section
        className={`${theme === "dark" ? "text-white" : "bg-white"} py-20`}
      >
        <Footer />
      </section>
    </>
  );
}

export default App;
