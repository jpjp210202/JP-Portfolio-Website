function JetbotCollisionPage() {
  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Jetson Nano JetBot | Real-Time Collision Avoidance
      </h1>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-left space-y-4 mb-6">
        <p>
          This project focuses on implementing a real-time collision avoidance
          system for the NVIDIA Jetson Nano–based JetBot platform. By combining
          computer vision, deep learning inference, and motor control, the JetBot
          can autonomously navigate through its environment while avoiding static
          and dynamic obstacles.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Core Concept</h2>
        <p>
          The JetBot leverages the Jetson Nano’s GPU-accelerated deep learning
          capabilities to process input from a CSI camera in real time. The system
          uses a trained deep neural network model to classify whether the robot’s
          current path is free or blocked, and then dynamically adjusts its
          steering and speed to avoid collisions.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Key Features</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            Real-time vision-based collision avoidance using Jetson Nano’s onboard
            GPU.
          </li>
          <li>
            CSI camera captures continuous video input for obstacle detection and
            path evaluation.
          </li>
          <li>
            Integration with the JetBot platform’s motor driver for direct control
            of left and right wheel speeds.
          </li>
          <li>
            Autonomous decision-making: stop, turn left/right, or move forward
            based on model inference.
          </li>
          <li>
            Flexible training pipeline with the ability to retrain the avoidance
            model using custom datasets for different environments.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 mb-2">Applications</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            Autonomous navigation in constrained indoor and outdoor environments.
          </li>
          <li>Robotics education and hands-on AI experimentation.</li>
          <li>
            Base module for extending to advanced robotics projects like mapping,
            fruit detection, or multi-robot collaboration.
          </li>
        </ul>

        <p className="italic text-gray-600">
          Note: This project focuses on the explanation of implementation steps.
          Media such as images and videos will be added in future updates.
        </p>
      </div>
    </div>
  );
}

export default JetbotCollisionPage;
