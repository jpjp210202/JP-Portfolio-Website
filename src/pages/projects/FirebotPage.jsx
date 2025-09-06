import MediaGallery from "../../components/MediaGallery";
import firebot1 from "../../assets/projects/firebot/firebot1.jpg";
import firebot2 from "../../assets/projects/firebot/firebot2.jpg";
import firebot3 from "../../assets/projects/firebot/firebot3.jpg";
import firebot4 from "../../assets/projects/firebot/firebot4.jpg";
import firebot5 from "../../assets/projects/firebot/firebot5.jpg";
import firebot6 from "../../assets/projects/firebot/firebot6.jpg";
import firebot7 from "../../assets/projects/firebot/firebot7.jpg";
import firebot8 from "../../assets/projects/firebot/firebot8.jpg";
import firebot9 from "../../assets/projects/firebot/firebot9.jpg";
import firebot10 from "../../assets/projects/firebot/firebot10.jpg";
import firebot11 from "../../assets/projects/firebot/firebot11.jpg";
import firebot12 from "../../assets/projects/firebot/firebot12.jpg";
import firebot13 from "../../assets/projects/firebot/firebot13.jpg";

function FirebotPage() {
  const media = [
    // Images
    { type: "image", src: firebot1 },
    { type: "image", src: firebot2 },
    { type: "image", src: firebot3 },
    { type: "image", src: firebot4 },
    { type: "image", src: firebot5 },
    { type: "image", src: firebot6 },
    { type: "image", src: firebot7 },
    { type: "image", src: firebot8 },
    { type: "image", src: firebot9 },
    { type: "image", src: firebot10 },
    { type: "image", src: firebot11 },
    { type: "image", src: firebot12 },
    { type: "image", src: firebot13 },

    // Videos (YouTube)
    { type: "youtube", src: "https://youtu.be/wMogTDl2YgQ" },
    { type: "youtube", src: "https://youtu.be/pqXL7KYtwHo" },
  ];

  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        🤖 Autonomous Fire-Fighting Robot
      </h1>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-left space-y-4 mb-6">
        <p>
          Firebot is a two-part autonomous firefighting system. A CCTV camera
          with Raspberry Pi detects fire and sends its location to the robot.
          The robot then navigates toward the fire in auto or manual mode,
          alerts the operator, and extinguishes it with the appropriate method.
        </p>
        <ul className="list-disc ml-6">
          <li>AI-powered fire detection (CCTV + Raspberry Pi)</li>
          <li>Line-following and ultrasonic self-healing navigation</li>
          <li>Automatic extinguishing with water or CO₂</li>
          <li>Supports both autonomous and manual modes</li>
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
          href="https://youtu.be/wMogTDl2YgQ"
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

export default FirebotPage;
