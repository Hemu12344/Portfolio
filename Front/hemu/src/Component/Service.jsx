
import MonitorIcon from "../assets/Icon/Monitor"
import AnalyticsIcon from "../assets/Icon/Ana"
import SignalIcon from "../assets/Icon/signal"
import EditIcon from "../assets/Icon/Edit"
const Services=()=>{

    const serviceData = [
    {
      logo: <MonitorIcon />,
      title: "Website Design and Development",
      desc: "Custom website design and development tailored to your brand and business needs."
    },
    {
      logo: <AnalyticsIcon/>,
      title: "User Research and Analysis",
      desc: "Conduct user research to understand your target audience, their needs, and behaviors."
    },
    {
      logo: <SignalIcon/>,
      title: "UI/UX Design",
      desc: "Design user interfaces (UI) that are visually appealing and in line with your brand identity."
    },
    {
      logo: <EditIcon/>,
      title: "Front-End Development",
      desc: "Ensure cross-browser compatibility and accessibility standards are met."
    }
    
  ]
    return(
        <>
        <div id="service" className="container mx-auto px-4">
          <div className="flex justify-center md:text-center">
            <div className="max-w-2xl">
              <h2 className="text-orange-600 uppercase tracking-widest text-xs font-semibold">
                My Services
              </h2>
              <p className="m-0 mt-2 md:text-bold text-body-emphasis text-balance text-5xl leading-tight tracking-tight fw-medium">
                Elevate Your Online Presence with Me
              </p>
              <p className={`m-0 mt-5  text-body-secondary text-pretty text-lg leading-8  leading-8`}>
                Crafting User-Centric Websites and Applications for Seamless Digital Experiences.</p>
            </div>
          </div>

          <div className=" gap-10   grid grid-cols-1 md:grid-cols-2  mt-10 mx-auto">
            {
              serviceData.map((serv, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="mt-2">{serv.logo}</div>
                  <div className="flex-col flex ">
                    <h1 className="m-0 text-body-emphasis font-bold text-xl text-base leading-7 fw-semibold">
                      {serv.title}
                    </h1>
                    <p className="m-0 text-body-tertiary text-pretty text-1xs  leading-6 max-w-lg">{serv.desc}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        </>
    )
}

export default Services