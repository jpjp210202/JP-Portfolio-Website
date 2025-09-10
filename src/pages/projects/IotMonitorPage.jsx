import MediaGallery from "../../components/MediaGallery";

// IoT project images
import iot1 from "../../assets/projects/iot/iot1.jpg";
import iot2 from "../../assets/projects/iot/iot2.jpg";
import iot3 from "../../assets/projects/iot/iot3.jpg";

function IotMonitorPage() {
  const media = [
    { type: "image", src: iot1, label: "IoT Water & Electricity Monitoring Setup" },
    { type: "image", src: iot2, label: "OLED Dashboard Display" },
    { type: "image", src: iot3, label: "ESP32 + SIM800C Module" },
  ];

  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        IoT Smart Utility Monitoring System | ESP32 | Real-time Water & Electricity Usage
      </h1>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-left space-y-4 mb-6">
        <p>
          This project implements an <strong>IoT-based Smart Utility Monitoring System</strong>
          designed for tracking water and electricity usage in real time. Built on an
          <strong> ESP32 microcontroller</strong>, the system enables live data visualization,
          SMS alerts, and automated cutoff mechanisms when consumption exceeds preset limits.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Key Features</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Real-time water usage monitoring using YF-G1 flow sensor</li>
          <li>Electricity consumption measurement via ACS712 + ADS1115</li>
          <li>Live data display on a local OLED dashboard</li>
          <li>Webpage hosted by ESP32 for remote monitoring</li>
          <li>SMS alerts through SIM800C GPRS module</li>
          <li>Automatic cutoff for exceeding limits</li>
          <li>Cloud-ready design for future scalability</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 mb-2">Applications</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Smart apartment and home utility tracking</li>
          <li>Automated billing systems</li>
          <li>Energy and water conservation initiatives</li>
        </ul>
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <a
          href="https://github.com/jpjp210202/" // replace with your IoT repo if different
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
        >
          🔗 GitHub Repo
        </a>
        <a
          href="https://www.youtube.com/watch?v=Yp7PRKiWPig"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition"
        >
          ▶ Demo Video
        </a>
      </div>

      {/* Gallery */}
      <MediaGallery media={media} />
    </div>
  );
}

export default IotMonitorPage;
