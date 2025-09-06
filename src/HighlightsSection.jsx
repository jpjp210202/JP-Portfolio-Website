// === FILE: src/HighlightsSection.jsx ===
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function HighlightsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const highlights = [
    {
      title: "Autonomous Fire-Fighting Robot",
      emoji: "🤖",
      description:
        "AI-powered autonomous robot with ML-based fire detection and adaptive suppression.",
    },
    {
      title: "IoT Usage Monitor",
      emoji: "📱",
      description:
        "Real-time electricity and water monitoring using ESP32, OLED, and SIM800C.",
    },
    {
      title: "IoT Usage Monitor",
      emoji: "📱",
      description:
        "Real-time electricity and water monitoring using ESP32, OLED, and SIM800C.",
    },
    {
      title: "Generative Design Research",
      emoji: "📄",
      description:
        "Accepted at ICMRACC 2025. Focused on energy efficiency and AI-based design in robotics.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-black to-indigo-900 text-white py-20 px-6">
      {/* Section Title */}
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold mb-12 text-center relative"
      >
        Top Featured
        <span className="block w-24 h-1 bg-yellow-400 mx-auto mt-3 rounded"></span>
      </h2>

      {/* Highlights Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {highlights.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in-up"
            className="bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-lg hover:shadow-yellow-400 transition transform hover:scale-105 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center text-3xl mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg">
              {item.emoji}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

            {/* Description */}
            <p className="text-gray-300 text-md">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HighlightsSection;
