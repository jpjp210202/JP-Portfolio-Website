import MediaGallery from "../../components/MediaGallery";

// Fruit detection project images
import fruit1 from "../../assets/projects/fruit/fruit1.jpg";
import fruit2 from "../../assets/projects/fruit/fruit2.jpg";
import fruit3 from "../../assets/projects/fruit/fruit3.jpg";
import fruit4 from "../../assets/projects/fruit/fruit4.jpg";
import fruit5 from "../../assets/projects/fruit/fruit5.jpg";

function FruitDetectionPage() {
  const media = [
    // Images
    { type: "image", src: fruit1 },
    { type: "image", src: fruit2 },
    { type: "image", src: fruit3 },
    { type: "image", src: fruit4 },
    { type: "image", src: fruit5 },

    // Video (YouTube)
    { type: "youtube", src: "https://youtu.be/xO2LN93U4S4" },
  ];

  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Jetson Nano Based Fruit Detection Robot
      </h1>
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Lawn Mower Movement | Obstacle Avoidance | Path Retention
      </h1>
      {/* Description */}
      <div className="max-w-4xl mx-auto text-left space-y-4 mb-6">
        <p>
          This project demonstrates an intelligent mobile robot powered by the NVIDIA Jetson Nano,
          capable of performing real-time fruit detection while navigating autonomously in a
          lawn-mower style pattern. The system integrates object detection, obstacle avoidance,
          and path-retention logic to ensure efficient coverage of the target area.
        </p>
        <ul className="list-disc ml-6">
          <li>Real-time fruit detection using YOLOv8 model trained on 63 fruit classes</li>
          <li>Systematic lawn-mower style coverage of the field</li>
          <li>Ultrasonic sensors for dynamic obstacle detection and avoidance</li>
          <li>Path-retention system to resume trajectory after bypassing obstacles</li>
          <li>Jetson Nano controls motors directly via GPIO for PWM-based actuation</li>
          <li>CSI camera for high-quality video capture</li>
          <li>Buzzer and LED feedback upon fruit detection</li>
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
          href="https://youtu.be/xO2LN93U4S4"
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

export default FruitDetectionPage;
