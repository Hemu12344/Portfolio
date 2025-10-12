
import MonitorIcon from "../assets/Icon/Monitor"
import AnalyticsIcon from "../assets/Icon/Ana"
import SignalIcon from "../assets/Icon/signal"
import EditIcon from "../assets/Icon/Edit"
const ProjectMet = () => {

    const ProjectMet = [
        {
            value: "150+",
            title: "Projects Delivered",
        },
        {
            value: "98%",
            title: "Average User Satisfaction",
        },
        {
            value: "+42%",
            title: "Conversion Rate Improvement",
        },
        {
            value: "35+ Hrs",
            title: "Time Saved Per Project",
        }

    ]
    return (
        <>
            <div className="container mx-auto px-4 mt-15">
                <div className="flex justify-center md:text-center">
                    <div className="max-w-2xl">
                        <h2 className="text-orange-600 uppercase tracking-widest text-xs font-semibold">
                            Key Project Metrics
                        </h2>
                        <p className="m-0 mt-2 md:text-bold text-body-emphasis text-balance text-5xl leading-tight tracking-tight fw-medium">
                            Measurable Success From Smart Design.
                        </p>
                        <p className={`m-0 mt-5  text-body-secondary text-pretty text-lg leading-8  leading-8`}>
                            A snapshot of performance outcomes and workflow impact achieved through scalable UX strategy and thoughtful web development.</p>
                    </div>
                </div>

                <div className="container grid grid-cols-1 md:grid-cols-4 gap-5 mt-25 md:gap-0 justify-items-center">
                    {
                        ProjectMet && ProjectMet.map((proj, idx) => (
                            <div key={idx} className="flex flex-col text-center w-full md:w-fit border p-6 rounded-3xl bg-gray-500">
                                <h1 className="text-4xl font-bold">{proj.value}</h1>
                                <h3 className="m-0 text-body-emphasis text-xl tracking-tight font-semibold">{proj.title}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ProjectMet