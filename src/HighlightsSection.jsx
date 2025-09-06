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
      description: "AI-powered autonomous robot with ML-based fire detection and suppression.",
    },
    {
      title: "IoT Usage Monitor",
      emoji: "📱",
      description: "Real-time electricity and water monitoring using ESP32, OLED, and SIM800C.",
    },
    {
      title: "Generative Design Research",
      emoji: "📄",
      description: "Accepted at ICMRACC 2025. Focused on energy efficiency and AI-based design in robotics.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Top Featured</h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {highlights.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in-up"
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            <h3 className="text-2xl font-semibold mb-2">{item.emoji} {item.title}</h3>
            <p className="text-gray-300 text-md">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HighlightsSection;
