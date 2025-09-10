import { ReactTyped } from "react-typed";
import Particles from "react-tsparticles";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row justify-center items-center px-4 overflow-hidden 
      bg-gradient-to-b from-black via-gray-100 to-gray-900">
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 -z-10"
        options={{
          background: { color: { value: "transparent" } }, // keep gradient visible
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { speed: 1 },
            links: { enable: true, color: "#facc15" }, // yellow links
          },
        }}
      />

      {/* Profile Image with animated glowing border */}
      <div className="relative w-[290px] h-[450px] mb-6 md:mb-0 md:mr-12 flex-shrink-0">
        <div
          className="absolute inset-0 rounded-xl animate-spin-slow"
          style={{
            background:
              "conic-gradient(from 0deg, #020201ff, #000000ff, #000000ff, #000000ff)",
            padding: "6px",
            borderRadius: "0.75rem",
          }}
        >
          <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
            {/* ✅ Animated Image */}
            <motion.img
              src="/jp-photo.png"
              alt="JP Jaipuneeth"
              className="w-[310px] h-[440px] rounded-xl object-cover shadow-2xl"
              initial={{ opacity: 0, y: -100, scale: 0.8 }} // start hidden, higher, smaller
              animate={{ opacity: 1, y: 0, scale: 1 }} // fade in, drop into place, scale up
              transition={{ duration: 1.5, ease: "easeOut" }} // smooth transition
            />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left max-w-xl">
        {/* Name with Typing Effect */}
        <h1
          className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-2 tracking-wide text-black"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <ReactTyped
            strings={["JP JAIPUNEETH"]}
            typeSpeed={100}
            backSpeed={50}
            showCursor={false}
          />
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-2xl font-extrabold text-center mb-1 tracking-wide text-gray-800">
          M.Tech - Robotics & AI
        </p>
        <p className="text-lg md:text-2xl font-semibold text-center mb-2 tracking-wide text-gray-700">
          Where AI Meets Real-World Machines
        </p>

        {/* Skills Line */}
        <p className="text-md text-center text-gray-900 max-w-2xl mb-16">
          AI • Embedded Systems • Robotics • Computer Vision • Innovation • Generative Design
        </p>

        {/* Scroll Down Robot Image */}
        <div className="mt-10 w-full flex justify-center mb-0">
          <img
            src="/robot-scroll.png"
            alt="Scroll Down"
            className="w-60 md:w-40 lg:w-60 h-auto object-contain animate-bounce"
          />
          <p className="text-5xl md:text-7xl font-bold text-center mb-1 tracking-wide text-gray-1000 animate-bounce">
          ↓
        </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
