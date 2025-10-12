import React from "react";

const experiences = [
  {
    company: "Google Ind",
    role: "SDE",
    period: "July 2023 - March 2024",
    logo: "https://yt3.googleusercontent.com/nrEU6OEOXAwJ9mBv6pKfxcpF9KLJM9ERLgVYg_WnO6MqPYWjQJFEjF_luPxqYazeheBxUue5=s900-c-k-c0x00ffffff-no-rj",
    description:
      "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: ["ReactJS", "Redux", "JavaScript", "Tailwind CSS", "HTML", "CSS", "SQL"],
    alignRight: false,
  },
  {
    company: "MicroSoft india",
    role: "Frontend Intern",
    period: "September 2021 - August 2022",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
    description:
      "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
    alignRight: true,
  },
];

const Experience = () => {
  return (
    <section id="exp" className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Experience Items */}
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              exp.alignRight ? "sm:justify-end" : "sm:justify-start"
            } relative`}
          >
            {/* Logo Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Experience Card */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                exp.alignRight ? "sm:ml-0 sm:ml-44 sm:mr-44 ml-8" : "sm:mr-0 sm:ml-44 sm:mr-44 ml-8"
              }`}
            >
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">{exp.role}</h3>
                    <h4 className="text-md sm:text-sm text-gray-300">{exp.company}</h4>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{exp.period}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-400">{exp.description}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {exp.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
