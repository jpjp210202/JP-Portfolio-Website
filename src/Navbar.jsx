// === FILE: src/Navbar.jsx ===
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

// Menu structure for all sections
const menu = {
  "About Me": [
    { label: "Overview", to: "/about" },
    { label: "My Resume", to: "/JP_CV_2025_ATS.pdf", external: true },
  ],
  Education: [
    { label: "Masters Degree", to: "/education/mtech" },
    { label: "Bachelors Degree", to: "/education/be" },
    { label: "Higher Secondary School", to: "/education/hss" },
    { label: "Secondary School", to: "/education/sslc" },
  ],
  "Work Experience": [
    { label: "JSW Steel", to: "/work/jsw" },
  ],
  Projects: [
    {
      label: "Robotics & Autonomous Systems Projects",
      children: [
        { label: "(in progress)AI-Powered Firefighting Robot | Jetson Nano | RaspberryPi 4B", to: "/projects/ai-firebot" },
        { label: "Hand-Eye Calibration | Doosan A0509 | ChArUco", to: "/projects/handeye" },
        { label: "Farm-Fruit Detection Robot | Jetson Nano", to: "/projects/fruit-detector" },
        { label: "Smart Bluetooth Follower Rover | ESP32", to: "/projects/esp32-rover" },
        { label: "Firefighting Robot | Line Follow | RaspberryPi 4B & Arduino UNO", to: "/projects/firebot" },
        { label: "Collision Avoidance Rover | Jetson Nano | JetBot", to: "/projects/jetbot" },
        { label: "Air Gesture controlled Wheelchair | Arduino UNO", to: "/projects/wheelchair" },
      ],
    },
    {
      label: "AI & Machine Learning Projects",
      children: [
        { label: "Weld Defect Detection", to: "/projects/welddetect" },
        { label: "Instrument Classifier (1D CNN)", to: "/projects/instrument-classifier" },
        { label: "ACO Pathfinding Simulator", to: "/projects/aco" },
      ],
    },
    {
      label: "Smart & Sustainable Tech Projects",
      children: [
        { label: "Smart Utility Monitor (IoT)", to: "/projects/iot-monitor" },
        { label: "Flexible DSSC Fabrication", to: "/projects/dssc" },
        { label: "Smart Irrigation System", to: "/projects/irrigation" },
      ],
    },
  ],
  "Paper Publications": [
    {
      label: "Sarcasm Detection in Conversational Contexts | ICMRACC, London 2025",
      to: "https://www.linkedin.com/posts/jpjaipuneeth_excited-to-share-a-proud-milestone-in-my-activity-7368552073631592449-qyw8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBXCUcBgJ0mLlBcriQ7PEYWitKJJ3Ob6Zs",
      external: true
    },
    {
      label: "A Review on Generative Design in Robotics | ICMRACC, London 2025",
      to: "https://www.linkedin.com/posts/jpjaipuneeth_excited-to-share-a-proud-milestone-in-my-activity-7368552073631592449-qyw8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBXCUcBgJ0mLlBcriQ7PEYWitKJJ3Ob6Zs",
      external: true
    }
  ],

  Internships: [
    { label: "CMTI | 2025", to: "/internships/cmti" },
    { label: "PowerGrid | 2021", to: "/internships/powergrid" },
  ],
  "Awards- Recognitions": [
    { label: "Best Intern", to: "/awards/intern" },
    { label: "IEEE Presenter", to: "/awards/ieee" },
  ],
  Skills: [
  { label: "Technical Skills", to: "/skills/technical" },
  { label: "Professional Skills", to: "/skills/professional" },
],
  "Workshops, Course-Certifications": [
    { label: "View Workshops and Courses", to: "/workshops_courses/workcourse" },
  ],
  // "Leaderships- Volunteering": [
  //   { label: "Event Coordinator", to: "/leadership/event" },
  //   { label: "NSS", to: "/leadership/nss" },
  // ],
  Strengths: [{ label: "Overview", to: "/strengths" }],
  Hobbies: [{ label: "Overview", to: "/hobbies" }],
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [openMenu, setOpenMenu] = useState(null); // mobile accordion
  const location = useLocation(); // to highlight active section

  return (
    <nav className="bg-black/60 backdrop-blur-md text-white px-3 py-3 shadow-md fixed top-0 w-full z-50 transition-colors duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-2xl font-bold hover:text-blue-400 transition"
        >
          Home
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {Object.entries(menu).map(([section, items]) => (
            <li key={section} className="relative group">
              <span
                className="
                  cursor-pointer block text-center leading-tight
                  relative transition duration-200
                  after:content-[''] after:absolute after:w-0 after:h-[2px]
                  after:left-0 after:-bottom-1 after:bg-yellow-400
                  after:transition-all after:duration-300
                  group-hover:after:w-full hover:text-blue-400
                "
              >
                {section.split(" ").map((word, i) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
              </span>

              {/* Dropdown */}
              <ul
  className={`absolute mt-2 hidden group-hover:block bg-gray-800 rounded shadow-md py-2 min-w-max whitespace-nowrap ${
    ["Strengths", "Hobbies"].includes(section) ? "right-0" : "left-0"
  }`}
>


                {items.map((item, idx) => (
                  <li key={idx} className="px-2 py-1">
                    {item.children ? (
                      <>
                        <span className="font-semibold text-yellow-300 block mb-1">
                          {item.label}
                        </span>
                        <ul className="pl-3 space-y-1">
                          {item.children.map((child, cidx) => (
                            <li key={cidx}>
                              <Link
                                to={child.to}
                                className={`block px-2 py-1 rounded ${
                                  location.pathname === child.to
                                    ? "bg-yellow-500 text-black"
                                    : "hover:bg-gray-700"
                                }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : item.external ? (
                      <a
                        href={item.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.to}
                        className={`block px-4 py-2 rounded ${
                          location.pathname === item.to
                            ? "bg-yellow-500 text-black"
                            : "hover:bg-gray-700"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="text-xl">☰</span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown with smooth animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="text-sm bg-gray-900 p-4 rounded-md space-y-2">
          {Object.entries(menu).map(([section, items]) => (
            <li key={section}>
              <button
                className="w-full text-left font-semibold hover:text-blue-400"
                onClick={() =>
                  setOpenMenu(openMenu === section ? null : section)
                }
              >
                {section}
              </button>
              {openMenu === section && (
                <ul className="pl-4 mt-1 space-y-1">
                  {items.map((item, idx) => (
                    <li key={idx}>
                      {item.children ? (
                        <>
                          <span className="font-semibold text-yellow-300 block mt-2">
                            {item.label}
                          </span>
                          <ul className="pl-3 space-y-1">
                            {item.children.map((child, cidx) => (
                              <li key={cidx}>
                                <Link
                                  to={child.to}
                                  onClick={() => setIsOpen(false)}
                                  className={`block py-1 rounded ${
                                    location.pathname === child.to
                                      ? "bg-yellow-500 text-black"
                                      : "hover:text-blue-300"
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : item.external ? (
                        <a
                          href={item.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block py-1 hover:text-blue-300"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          to={item.to}
                          onClick={() => setIsOpen(false)}
                          className={`block py-1 rounded ${
                            location.pathname === item.to
                              ? "bg-yellow-500 text-black"
                              : "hover:text-blue-300"
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
