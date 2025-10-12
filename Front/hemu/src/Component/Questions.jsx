
import MonitorIcon from "../assets/Icon/Monitor"
import AnalyticsIcon from "../assets/Icon/Ana"
import SignalIcon from "../assets/Icon/signal"
import EditIcon from "../assets/Icon/Edit"
const Ques = () => {

    const Ques = [
        {
            value: "What types of websites do you typically develop?",
            title: "Ethan specializes in responsive websites for startups, agencies, and small businesses using modern design principles.",
        },
        {
            value: "How do you approach UX design for new clients?",
            title: "Ethan begins with research, user personas, wireframes, and strategic design mapping sessions to ensure the final result is intuitive.",
        },
        {
            value: "Can you customize existing themes or templates?",
            title: "Absolutely. Ethan retools themes with unique layouts, animations, modular content, accessibility features, SEO enhancements, and brand strategy alignment.",
        },
        {
            value: "What’s your process for launching a finished site?",
            title: "Ethan handles QA testing, SEO setup, integrations, analytics, security checks, browser compatibility, mobile responsiveness, backup systems, and post-launch performance review.",
        }

    ]
    return (
        <>
            <div className="container flex flex-col pl-20  md:flex-row  mx-auto px-4 mt-15 gap-15">
                <div className="flex ">
                    <div className="max-w-2xl">
                        <h2 className="text-white uppercase tracking-widest text-4xl font-bold">
                            Frequently Asked Questions.
                        </h2>
                        <p className="m-0 mt-2 md:text-bold text-body-emphasis text-balance text-1lg leading-tight tracking-tight fw-medium">
                            Our <span className="text-orange-500">customer support</span> team is here to help you if you have any questions.
                        </p>
                    </div>
                </div>

                <div className="container grid grid-cols-1  md:grid-cols gap-8  md:gap-8 ">
                    {
                        Ques && Ques.map((proj, idx) => (
                            <div key={idx} className="flex flex-col  w-full md:w-fit  ">
                                <h1 className="text-xl font-bold">{proj.value}</h1>
                                <h3 className="m-0 text-gray-300 text-lg tracking-tight ">{proj.title}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Ques