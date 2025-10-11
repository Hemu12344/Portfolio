import { useState } from "react";

const Testimonial = () => {
  const [idx, setIdx] = useState(0);
  const [animation, setAnimation] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50; // Minimum distance to trigger swipe

  const clientData = [
    {
      logo: "https://tigmatemplate.me/uxoria/assets/img/clients-logos/logo1-dark.png",
      feedback:
        "“Working with Ethan felt like teaming up with someone who truly understands users. The designs weren’t just beautiful—they solved problems before they even appeared.”",
      userPic:
        "https://tigmatemplate.me/uxoria/assets/img/clients-photoshoot/small/member1.jpg",
      userName: "Michael Turner",
      degi: "Product Manager",
    },
    {
      logo: "https://tigmatemplate.me/uxoria/assets/img/clients-logos/logo2-dark.png",
      feedback:
        "“I’ve collaborated with many designers, but Ethan’s attention to structure and flow stood out. The UX choices felt intuitive and elevated the whole user experience.”",
      userPic:
        "https://tigmatemplate.me/uxoria/assets/img/clients-photoshoot/small/member2.jpg",
      userName: "Amanda Foster",
      degi: "Marketing Strategist",
    },
    {
      logo: "https://tigmatemplate.me/uxoria/assets/img/clients-logos/logo3-dark.png",
      feedback:
        "“Ethan’s workflow made our entire build process smoother and more scalable. From concept to code, every decision was thoughtful and tailored to our brand.”",
      userPic:
        "https://tigmatemplate.me/uxoria/assets/img/clients-photoshoot/small/member3.jpg",
      userName: "Jonathan Blake",
      degi: "Creative Director",
    },
  ];

  const handleChange = (direction) => {
    // Fade out
    setAnimation(false);
    setTimeout(() => {
      setIdx((prev) =>
        direction === 1
          ? prev === clientData.length - 1
            ? 0
            : prev + 1
          : prev === 0
          ? clientData.length - 1
          : prev - 1
      );
      // Fade in
      setAnimation(true);
    }, 300);
  };

  // Swipe Handlers
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) handleChange(1); // Swipe left → next
    else if (distance < -minSwipeDistance) handleChange(-1); // Swipe right → prev
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <>
      {clientData.length > 0 && (
        <div
          className={`grid justify-center justify-items-center gap-10 text-center px-6 transition-opacity duration-300 ${
            animation ? "opacity-100" : "opacity-0"
          }`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="bg-white w-fit p-2 rounded-xl shadow-md">
            <img src={clientData[idx].logo} className="w-60" alt="client-logo" />
          </div>

          <p className="max-w-3xl text-gray-700 dark:text-gray-200 text-2xl leading-9 font-semibold italic">
            {clientData[idx].feedback}
          </p>

          <div>
            <img
              className="rounded-full w-20 h-20 object-cover border-4 border-gray-300"
              src={clientData[idx].userPic}
              alt={clientData[idx].userName}
            />
          </div>

          <div className="flex items-center justify-center text-base text-gray-600 dark:text-gray-300">
            <h6 className="m-0 font-semibold">{clientData[idx].userName}</h6>
            <svg
              viewBox="0 0 2 2"
              width="3"
              height="3"
              aria-hidden="true"
              className="mx-3 mt-1 text-gray-400"
              fill="currentColor"
            >
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            <div>{clientData[idx].degi}</div>
          </div>
        </div>
      )}

      {/* Navigation Icons (Desktop Only) */}
      <button
        onClick={() => handleChange(-1)}
        className="hidden md:block absolute left-5 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 p-3 rounded-full shadow-md transition"
      >
        &#8249;
      </button>

      <button
        onClick={() => handleChange(1)}
        className="hidden md:block absolute right-5 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 p-3 rounded-full shadow-md transition"
      >
        &#8250;
      </button>
    </>
  );
};

export default Testimonial;
