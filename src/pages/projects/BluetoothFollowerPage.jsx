import MediaGallery from "../../components/MediaGallery";

// Images (place your 10 project images here)
import bt1 from "../../assets/projects/bluetooth/bt1.jpg";
import bt2 from "../../assets/projects/bluetooth/bt2.jpg";
import bt3 from "../../assets/projects/bluetooth/bt3.jpg";
import bt4 from "../../assets/projects/bluetooth/bt4.jpg";
import bt5 from "../../assets/projects/bluetooth/bt5.jpg";
import bt6 from "../../assets/projects/bluetooth/bt6.jpg";
import bt7 from "../../assets/projects/bluetooth/bt7.jpg";
import bt8 from "../../assets/projects/bluetooth/bt8.jpg";
import bt9 from "../../assets/projects/bluetooth/bt9.jpg";
import bt10 from "../../assets/projects/bluetooth/bt10.jpg";

function BluetoothFollowerPage() {
  const media = [
    { type: "image", src: bt1 },
    { type: "image", src: bt2 },
    { type: "image", src: bt3 },
    { type: "image", src: bt4 },
    { type: "image", src: bt5 },
    { type: "image", src: bt6 },
    { type: "image", src: bt7 },
    { type: "image", src: bt8 },
    { type: "image", src: bt9 },
    { type: "image", src: bt10 },

    // Demo Video
    { type: "youtube", src: "https://youtu.be/jmyMRvPsOP0" },
  ];

  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Smart Bluetooth-based Follower Robot
      </h1><h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        ESP32 | RSSI | Multi-Directional
      </h1>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-left space-y-4 mb-6">
        <p>
          The Smart Bluetooth-based Follower Robot is an intelligent 4WD mobile
          robot developed to autonomously follow a smartphone or Bluetooth-enabled
          device using RSSI (Received Signal Strength Indicator). Built on the
          ESP32 platform, the project demonstrates a blend of wireless tracking,
          obstacle avoidance, and autonomous navigation. This makes it a practical
          prototype for applications in personal assistance robots, material
          transport systems, and human-robot interaction.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Core Concept</h2>
        <p>
          The robot is powered by two ESP32 modules working in tandem. The first
          ESP32 scans Bluetooth signals via an SG90 servo, identifying the
          direction of the smartphone by analyzing RSSI values. The second ESP32
          acts as the main controller, processing inputs from ultrasonic sensors
          and managing motor driver signals for navigation. Together, they allow
          the robot to continuously track the smartphone while avoiding obstacles
          and maintaining a stable path.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Key Features</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            Real-time **Bluetooth RSSI tracking** for accurate multi-directional
            following.
          </li>
          <li>
            **4WD locomotion** powered by an L298N motor driver for robust
            maneuverability.
          </li>
          <li>
            **Ultrasonic obstacle avoidance** ensures safe navigation in dynamic
            environments.
          </li>
          <li>
            **Return-to-base functionality** when the Bluetooth connection is lost.
            The robot halts, alerts the user via buzzer, and returns to its starting
            position if no reconnection occurs.
          </li>
          <li>
            **OLED display** for real-time updates on modes such as "Following",
            "Disconnected", or "Returning".
          </li>
          <li>
            **Buzzer and LED indicators** to signal connectivity status and alerts.
          </li>
          <li>
            Efficient **power system** with a 12V Li-ion battery and dual buck
            converters: 6V for motors, 5V for ESP32 and peripherals.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 mb-2">Technical Implementation</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Controllers: Dual ESP32-WROOM-32 modules (scanning + control).</li>
          <li>Motor Driver: L298N dual H-bridge motor driver.</li>
          <li>
            Sensors: HC-SR04 ultrasonic for obstacle detection, RSSI-based Bluetooth
            scanning.
          </li>
          <li>Actuators: 4 BO motors with geared drive and an SG90 servo.</li>
          <li>User Interface: I²C OLED display, LED, buzzer for feedback.</li>
          <li>Power: 12V Li-ion battery with buck converters for 6V and 5V outputs.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 mb-2">Future Enhancements</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            Integration of **ESP32-CAM** for user face verification and secure
            following.
          </li>
          <li>
            Multi-robot **swarm following** for collaborative navigation in teams.
          </li>
        </ul>
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <a
          href="https://github.com/jpjp210202/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
        >
          🔗 GitHub Repo
        </a>
        <a
          href="https://youtu.be/jmyMRvPsOP0"
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

export default BluetoothFollowerPage;
