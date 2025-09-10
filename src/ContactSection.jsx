// === FILE: src/ContactSection.jsx ===
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

function ContactSection() {
  const contacts = [
    {
      title: "Phone",
      value: "+91 94483 11130",
      icon: <FaPhoneAlt />,
      link: "tel:+919448311130",
    },
    {
      title: "Email",
      value: "jaipuneeth.official@gmail.com",
      icon: <FaEnvelope />,
      link: "mailto:jaipuneeth.official@gmail.com",
    },
    {
      title: "Location",
      value: "Bangalore, India",
      icon: <FaMapMarkerAlt />,
      link: "https://www.google.com/maps/place/Bangalore",
    },
  ];

  const socials = [
    {
      label: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/jpjaipuneeth",
      color: "bg-blue-700 hover:bg-blue-600",
    },
    {
      label: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/jpjp210202",
      color: "bg-gray-900 hover:bg-gray-700",
    },
    {
      label: "YouTube",
      icon: <FaYoutube />,
      url: "https://www.youtube.com/@jpexclusive7916",
      color: "bg-red-600 hover:bg-red-500",
    },
    {
      label: "WhatsApp",
      icon: <FaWhatsapp />,
      url: "https://wa.me/919448311130",
      color: "bg-green-600 hover:bg-green-500",
    },
    {
      label: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/_jp_jp_21/",
      color: "bg-pink-600 hover:bg-pink-500",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-indigo-900 via-black to-gray-900 text-white py-20 px-6">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{
          duration: 1.0,
          ease: [0.25, 0.1, 0.25, 1], // buttery smooth
        }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        Get in Touch
        <span className="block w-24 h-1 bg-yellow-400 mx-auto mt-3 rounded"></span>
      </motion.h2>

      {/* Contact Cards */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-12">
        {contacts.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{
              duration: 1.0,
              ease: [0.25, 0.1, 0.25, 1],
              delay: index * 0.2, // stagger
            }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-center shadow-lg 
              hover:shadow-yellow-400 transition transform hover:scale-105"
          >
            <div className="text-4xl mb-4 text-yellow-400">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.value}</p>
          </motion.a>
        ))}
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {socials.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white transition ${social.color}`}
          >
            {social.icon} {social.label}
          </a>
        ))}
      </div>

      {/* Footer Bar */}
      <div className="text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} <b>J P Jaipuneeth</b> | Made with 🤎 in Bangalore
      </div>
    </section>
  );
}

export default ContactSection;
