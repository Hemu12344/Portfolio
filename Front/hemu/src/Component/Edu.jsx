import React from "react";



const Eduction = () => {
    const Eduction = [
  {
    company: "GLA University, Mathura",
    role: "BACHELOR OF COMPUTER APPLICATION",
    grade:"Grade: 7.81 CGPA",
    period: "July 2023 - Pursuing",
    logo: "https://tarunkaushik.vercel.app/assets/gla_logo-Dc2_1OrK.png",
    description:
      "I am pusuing my Bachelor's degree (BCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    alignRight: false,
  },
  {
    company: "S.B.I College Baldeo, Mathura",
    role: "UPBOARD(XII) - Commerse with economics",
    grade:"Grade: 70% Percentage",
    period: "July 2022 - July 2023",
    logo: "https://www.samajbandhu.com/jagran/wp-content/uploads/2020/09/balbhadra.jpg",
    description:
      "I completed my class 12 education from S B I College, Baldeo Mathura, under the UP Board, where I studied Account's, Business Study, and Economics.",
    alignRight: false,
  },
  {
    company: "S.B.I College Baldeo, Mathura",
    role: "UPBOARD(XI) -With Commerse ",
    grade:"Grade: 76% Percentage",
    period: "July 2021 - July 2022",
    logo: "https://www.samajbandhu.com/jagran/wp-content/uploads/2020/09/balbhadra.jpg",
    description:
      "I completed my class 10 education from S B I College, Baldeo Mathura, under the UP Board, where I studied Account's,English,Science,Hindi and Math.",
    alignRight: false,
  }
];
  return (
    <section id="edu" className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Eduction</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
My education has been a journey of learning and development. Here are the details of my academic background        </p>
      </div>

      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Experience Items */}
        {Eduction.map((exp, idx) => (
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
              <h1 className="text-xl text-gray-500 mt-2">{exp.grade}</h1>
              <p className="mt-2 text-gray-400">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Eduction;
