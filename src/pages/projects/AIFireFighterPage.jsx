import MediaGallery from "../../components/MediaGallery";

// Early prototype images (replace with your actual images later)
import proto1 from "../../assets/projects/aifirefighter/proto1.jpg";
import proto2 from "../../assets/projects/aifirefighter/proto2.jpg";

function AIFireFighterPage() {
  const media = [
    { type: "image", src: proto1 },
    { type: "image", src: proto2 },
    // You can add more as your project progresses
  ];

  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        AI-Powered Autonomous Firefighting Robot (Work in Progress)
      </h1>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-left space-y-4 mb-6">
        <p>
          This project aims to develop an advanced autonomous firefighting
          robot powered by AI and computer vision. The system is being
          designed to detect and classify different types of fires, apply
          adaptive suppression techniques, and navigate intelligently in
          hazardous environments.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Planned Features</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>AI-based fire detection and fire-type classification</li>
          <li>Dual operation modes: autonomous and manual control</li>
          <li>SLAM-based navigation with obstacle avoidance</li>
          <li>Adaptive suppression: water vs CO₂ based on fire type</li>
          <li>Predictive fire prevention using thermal analysis</li>
          <li>Swarm-based coordination between multiple robots</li>
          <li>Autonomous refilling and recharging systems</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 mb-2">Current Progress</h2>
        <p>
          The initial prototype is under development. Hardware design and
          sensor integration are in progress, and AI models for fire
          detection are being trained. Future updates will include detailed
          documentation, GitHub repository, and demo videos.
        </p>

        <p className="italic text-gray-600">
          Note: This project is a work in progress. More updates, images, and
          videos will be added soon.
        </p>
      </div>

      {/* Gallery */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          Early Prototype Gallery
        </h2>
        <MediaGallery media={media} />
      </div>
    </div>
  );
}

export default AIFireFighterPage;
