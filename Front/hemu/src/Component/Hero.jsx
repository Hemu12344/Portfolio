import { useContext } from "react";
import { ThemeContext } from "../Context/context";
const Hero = () => {

    const { theme } = useContext(ThemeContext);

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
            {/* HERO SECTION */}
            <main id="home" className="p-6 md:p-8 mt-20">
                <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-20 items-center justify-center">
                    <div className="bg-green-500 md:mt-0 mt-20 p-5 rounded-full hover:scale-90 cursor-pointer transition-all duration-300">
                        <img
                            src="https://raw.githubusercontent.com/Hemu12344/Portfolio/84beb15dea9153b6e55099a48caaa3860b6fbf9c/Front/hemu/MEFORWEB.jpg"
                            alt="Owner-img"
                            className="w-80 h-80 md:w-72 md:h-72 object-cover rounded-full"
                        />

                    </div>

                    <div className="flex flex-col gap-5 text-center md:text-left max-w-xl">
                        <div className="flex justify-center md:justify-start">
                            <h1
                                className={`flex items-center justify-center gap-2 border px-3 py-1 rounded-full shadow-md ${theme === "dark" ? "bg-gray-900" : "bg-white"
                                    }`}
                            >
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                                </span>
                                Available for hiring!
                            </h1>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            UX/UI Designer & Web Developer.
                        </h1>

                        <p
                            className={`text-lg md:text-xl ${theme === "dark" ? "text-gray-300" : "text-black"
                                } font-medium`}
                        >
                            I design and develop high-end web experiences for design-driven
                            companies that value attention to detail.
                        </p>

                        <div className="flex justify-center md:justify-start">
                            <a
                                href="#contact"
                                className="px-6 py-2 rounded-full bg-orange-700 text-white hover:bg-orange-800 transition-all duration-300"
                            >
                                Hire Me
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
        </>
    )
}

export default Hero