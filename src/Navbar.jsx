// === FILE: src/Navbar.jsx ===
import { Link } from "react-router-dom";
import { useState } from "react";

// Menu structure for all sections
const menu = {
  "About Me": [{ label: "Overview", to: "/about" }],
  Education: [
    { label: "MTech at MSRIT", to: "/education/mtech" },
    { label: "B.E in EEE", to: "/education/be" },
    { label: "PU", to: "/education/pu" },
    { label: "SSLC", to: "/education/sslc" },
  ],
  "Work Experience": [
    { label: "JSW Steel", to: "/work/jsw" },
    { label: "Internship", to: "/work/internship" },
  ],
  Projects: [
    { label: "Fire-Fighting Robot", to: "/projects/firebot" },
    { label: "IoT Usage Monitor", to: "/projects/iot-monitor" },
    { label: "Weld Defect Detector", to: "/projects/weld-detector" },
  ],
  "Paper Publications": [
    { label: "ICMRACC 2025", to: "/papers/icmracc" },
    { label: "Sarcasm Detection", to: "/papers/sarcasm" },
  ],
  Internships: [
    { label: "CMTI", to: "/internships/cmti" },
    { label: "Yaskawa", to: "/internships/yaskawa" },
  ],
  "Awards- Recognitions": [
    { label: "Best Intern", to: "/awards/intern" },
    { label: "IEEE Presenter", to: "/awards/ieee" },
  ],
  Skills: [{ label: "Overview", to: "/skills" }],
  "Technical Workshops": [
    { label: "Microrobotics", to: "/workshops/micro" },
    { label: "Rapid Manufacturing", to: "/workshops/rapid" },
  ],
  "Leaderships- Volunteering": [
    { label: "Event Coordinator", to: "/leadership/event" },
    { label: "NSS", to: "/leadership/nss" },
  ],
  Strengths: [{ label: "Overview", to: "/strengths" }],
  Hobbies: [{ label: "Overview", to: "/hobbies" }],
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [openMenu, setOpenMenu] = useState(null); // mobile accordion

  return (
    <nav className="bg-black text-white px-4 py-3 shadow-md fixed top-0 w-full z-50">
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
                {/* Split section into words → each word on new line */}
                {section.split(" ").map((word, i) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
              </span>

              {/* Dropdown */}
              <ul className="absolute left-0 mt-2 hidden group-hover:block bg-gray-800 rounded shadow-md py-2 min-w-max">
                {items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.to}
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      {item.label}
                    </Link>
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

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden mt-2 text-sm bg-gray-900 p-4 rounded-md space-y-2">
          {Object.entries(menu).map(([section, items]) => (
            <li key={section}>
              {/* Section title */}
              <button
                className="w-full text-left font-semibold hover:text-blue-400"
                onClick={() =>
                  setOpenMenu(openMenu === section ? null : section)
                }
              >
                {section}
              </button>
              {/* Expand subsections */}
              {openMenu === section && (
                <ul className="pl-4 mt-1 space-y-1">
                  {items.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.to}
                        onClick={() => setIsOpen(false)}
                        className="block py-1 hover:text-blue-300"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
