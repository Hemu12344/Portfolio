import { ThemeContext } from "../Context/context";
import { useContext } from "react";
const Projects = () => {

    const {theme}=useContext(ThemeContext);
  const projects = [
    {
      img: "https://tigmatemplate.me/uxoria/assets/img/bg/project1.jpg",
      title: "Adaptive E-Commerce Framework",
      desc: "Responsive shopping experience with dynamic filters, modular components, and clean UI."
    },
    {
      img: "	https://tigmatemplate.me/uxoria/assets/img/bg/project2.jpg",
      title: "SaaS Dashboard Interface System",
      desc: "Built a scalable interface with custom charts, microinteractions, and dark/light mode."
    },
    {
      img: "	https://tigmatemplate.me/uxoria/assets/img/bg/project3.jpg",
      title: "Mobile-First Portfolio Grid",
      desc: "Designed a grid layout optimized for mobile scroll behavior, media-heavy performance."
    },
    {
      img: "https://tigmatemplate.me/uxoria/assets/img/bg/project4.jpg",
      title: "Restaurant Booking UX Flow",
      desc: "Streamlined table booking with user flows, calendar sync, and feedback microcopy."
    }
  ];

  return (
    <section id="project"  className="container mx-auto px-4 mt-20">
      <div className="max-w-2xl  flex flex-col ">
        <h2 className="text-orange-600 uppercase tracking-widest text-xs font-semibold">
          Featured Projects
        </h2>
        <p className="mt-2 text-3xl md:text-5xl font-medium leading-tight">
          Showcasing Creativity And Precision.
        </p>
        <p className={`mt-5 text-lg md:text-xl  ${theme==="dark"?"dark:text-gray-300":"text-black"}  leading-8`}>
          A curated selection of UX and web builds that highlight problem-solving, design strategy, and full-stack agility across diverse industries and audiences.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="relative group">
            <div className="overflow-hidden rounded-xl">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 md:h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <a
              href="#"
              className={`mt-4 block text-xl font-medium ${theme==="dark"?"dark:text-gray-300":"text-black"} hover:text-orange-600 transition-colors`}
            >
              {project.title}
            </a>
            <p className={`mt-2 ${theme==="dark"?"dark:text-gray-300":"text-black"}text-base leading-7`}>
              {project.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="#"
          className="inline-flex items-center px-6 py-2 bg-orange-600 text-white rounded-full text-lg font-medium hover:bg-orange-700 transition-all"
        >
          Show more
          <span className="ml-2">→</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
