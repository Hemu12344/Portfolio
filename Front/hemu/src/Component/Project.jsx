import { useContext } from "react";
import { ThemeContext } from "../Context/context";

import weather from "../assets/Pohotos/Weather.png";
import todo from "../assets/Pohotos/Todo.png";
import Currency from "../assets/Pohotos/Curency.png";
import RPS from "../assets/Pohotos/RockPapper.png";

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  const projects = [
    {
      src: weather,
      url: "https://hemu12344.github.io/MiniProjects/weatherApp/",
      title: "Weather App",
      desc: "Responsive and dynamic weather forecast app with smooth UI and animations."
    },
    {
      src: todo,
      url: "https://hemu12344.github.io/MiniProjects/TodoList",
      title: "Todo List App",
      desc: "Organize tasks efficiently with a clean and minimalistic UI."
    },
    {
      src: Currency,
      url: "https://hemu12344.github.io/MiniProjects/currencyconvert/",
      title: "Currency Converter",
      desc: "Convert currencies dynamically with real-time exchange rates."
    },
    {
      src: RPS,
      url: "https://hemu12344.github.io/MiniProjects/RPS_Game",
      title: "Rock Paper Scissors Game",
      desc: "Interactive game with engaging visuals and animations."
    },
  ];

  const skills = {
    Frontend: [
      { name: "HTML", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
      { name: "CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
      { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
      { name: "React JS", logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" },
      { name: "Redux", logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" },
      { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "Bootstrap", logo: "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" },
    ],
    Backend: [
      { name: "Node JS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
      { name: "Express JS", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
      { name: "MySQL", logo: "https://www.interviewbit.com/blog/wp-content/uploads/2021/10/MySQL-550x367.png" },
      { name: "MongoDB", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
    ],
    Languages: [
      { name: "C++", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
      { name: "Java", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
      { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
      { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    ],
    Tools: [
      { name: "Git", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
      { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
      { name: "VS Code", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
      { name: "Netlify", logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Netlify_logo_%282%29.svg" },
    ],
  };

  return (
    <>
      {/* Projects Section */}
      <section id="project" className="container mx-auto px-4 mt-20">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold border-b-4 border-purple-600 inline-block pb-2">
            Projects
          </h2>
          <p className={`mt-4 text-lg md:text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-800"}`}>
            A collection of my projects showcasing technical skills and practical experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="group relative bg-gray-100 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg 
                         hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Project Image */}
              <img
                src={proj.src}
                alt={proj.title}
                className="w-full h-60 sm:h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                <h3 className="text-white text-lg font-bold mb-2">{proj.title}</h3>
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg"
                >
                  Live Demo
                </a>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skill" className="py-24 px-4 md:px-20 lg:px-40">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Skills</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-2"></div>
          <p className="text-gray-500 dark:text-gray-300 mt-4 text-lg font-medium">
            A collection of my technical skills and expertise honed through various projects and experiences.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {Object.keys(skills).map((category) => (
            <div
              key={category}
              className="bg-gray-100 dark:bg-gray-900 backdrop-blur-md px-6 py-8 rounded-3xl border border-gray-300 dark:border-gray-700 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] w-full sm:w-[45%] lg:w-[30%] hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4 text-center">{category}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {skills[category].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center space-y-2 border-2 border-gray-200 dark:border-gray-700 rounded-3xl py-3 px-2 text-center hover:scale-105 transition-transform duration-300"
                  >
                    <img src={skill.logo} alt={skill.name} className="w-10 h-10 object-contain" />
                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
