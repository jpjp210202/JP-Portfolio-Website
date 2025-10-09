import MediaGallery from "../../components/MediaGallery";
import cmtiLogo from "../../assets/projects/boltnutscrew/cmti_logo.png"; // ✅ CMTI logo

// Images (replace with actual paths in /assets/projects/boltnutscrew/)
import setup from "../../assets/projects/boltnutscrew/setup_robot_camera.jpg";
import detection from "../../assets/projects/boltnutscrew/yolo_detection.jpg";
import calibration from "../../assets/projects/boltnutscrew/handeye_calibration.jpg";
import sorting from "../../assets/projects/boltnutscrew/sorting_action.jpg";
import dropzones from "../../assets/projects/boltnutscrew/drop_zones.jpg";
import robodk from "../../assets/projects/boltnutscrew/robodk_simulation.jpg";
import gripper from "../../assets/projects/boltnutscrew/gripper_closeup.jpg";
import results from "../../assets/projects/boltnutscrew/final_results.jpg";

function BoltNutScrewSort() {
  const media = [
    { type: "image", src: setup, label: "Doosan A0509 setup with Intel RealSense D457" },
    { type: "image", src: detection, label: "YOLOv8 detection of bolts, nuts, and screws" },
    { type: "image", src: calibration, label: "Hand–eye calibration validation in RoboDK" },
    { type: "image", src: sorting, label: "Robot performing automated sorting operation" },
    { type: "image", src: dropzones, label: "Dedicated drop zones for each object type" },
    { type: "image", src: robodk, label: "RoboDK simulation synchronized with real robot" },
    { type: "image", src: gripper, label: "Close-up of pneumatic gripper during operation" },
    { type: "image", src: results, label: "Final sorting accuracy results" },
  ];

  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16 relative">
      {/* Top-right CMTI Logo */}
      {cmtiLogo && (
        <div className="absolute top-4 right-4">
          <img src={cmtiLogo} alt="CMTI Logo" className="h-14 w-auto object-contain md:h-20" />
        </div>
      )}

      {/* Title */}
      <div className="pt-24">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Automated Bolt–Nut–Screw Sorting using Doosan A0509 + Intel RealSense D457 + YOLOv8
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-left space-y-4 mb-6">
        <p>
          This project was developed at the <strong>Central Manufacturing Technology Institute (CMTI), Bangalore</strong>, in collaboration with <strong>Ramaiah Institute of Technology (MSRIT)</strong> as part of the M.Tech Robotics & Artificial Intelligence curriculum.
        </p>
        <p>
          The system enables real-time detection, classification, and sorting of industrial fasteners – bolts, nuts, and screws – using a <strong>YOLOv8 segmentation model</strong> integrated with an <strong>Intel RealSense D457 camera</strong> mounted on the <strong>Doosan A0509 collaborative robot</strong>. The complete system achieves synchronized control of both the simulated and real robots via the <strong>RoboDK Python API</strong>.
        </p>
        <p>
          Hand–eye calibration was performed using a ChArUco board (5×7, 30 mm squares, 22 mm markers), achieving sub-millimeter accuracy. Each detected object's position and orientation were translated to robot coordinates, enabling precise pick-and-place operations across dedicated drop zones for bolts, nuts, and screws.
        </p>
        <p>
          The robot operates autonomously in a continuous loop – detecting, picking, sorting, and returning to the detection zone – while maintaining a live RealSense feed throughout the operation.
        </p>
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <a
          href="https://github.com/jpjp210202/ScrewBoltNut-Sorting-Doosan-A0509-IntelD457-YOLOv8"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
        >
          🔗 GitHub Repository
        </a>
      </div>

      {/* YouTube Links */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">🎥 Demonstration Videos</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://youtu.be/your-first-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition"
          >
            ▶ Real-Time Sorting Demonstration
          </a>
          <a
            href="https://youtu.be/your-second-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition"
          >
            ▶ RoboDK Simulation Overview
          </a>
        </div>
      </div>

      {/* Gallery */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">📷 Project Gallery</h2>
        <MediaGallery media={media} />
      </div>
    </div>
  );
}

export default BoltNutScrewSort;
