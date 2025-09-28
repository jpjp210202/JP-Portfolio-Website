import MediaGallery from "../../components/MediaGallery";
import cmtiLogo from "../../assets/projects/handeye/cmti_logo.png"; // ✅ Add CMTI logo

// Images (replace with actual files in /assets/projects/handeye/)
import setup1 from "../../assets/projects/handeye/setup_robot_camera.jpg";
import charuco1 from "../../assets/projects/handeye/charuco_capture1.jpg";
import charuco2 from "../../assets/projects/handeye/charuco_capture2.jpg";
import aruco_fail from "../../assets/projects/handeye/aruco_failure.jpg";
import checker_fail from "../../assets/projects/handeye/checkerboard_failure.jpg";
import hybrid_fail from "../../assets/projects/handeye/hybrid_attempt.jpg";
import results1 from "../../assets/projects/handeye/results_ruler_validation.jpg";
import results2 from "../../assets/projects/handeye/results_robodk_alignment.jpg";

function HandEyeCalibrationPage() {
  const media = [
    { type: "image", src: setup1, label: "Doosan A0509 with RealSense setup" },
    { type: "image", src: charuco1, label: "ChArUco captures during calibration" },
    { type: "image", src: charuco2, label: "ChArUco detection result" },
    { type: "image", src: aruco_fail, label: "ArUco board trial – instability" },
    { type: "image", src: checker_fail, label: "Checkerboard trial – errors" },
    { type: "image", src: hybrid_fail, label: "Hybrid board attempt" },
    { type: "image", src: results1, label: "Manual validation with ruler offsets" },
    { type: "image", src: results2, label: "RoboDK alignment verification" },
  ];

  return (
  <div className="min-h-screen bg-white text-black p-8 md:p-16 relative">
    {/* Top-right CMTI Logo */}
    {cmtiLogo && (
      <div className="absolute top-4 right-4">
        <img
          src={cmtiLogo}
          alt="CMTI Logo"
          className="h-14 w-auto object-contain md:h-20"
        />
      </div>
    )}

    {/* Title */}
    <div className="pt-24"> {/* ✅ Add padding so title doesn't collide */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Hand–Eye Calibration of Doosan A0509 with Intel RealSense D435/D457
      </h1>
    </div>



      {/* Description */}
      <div className="max-w-4xl mx-auto text-left space-y-4 mb-6">
        <p>
          This project was carried out at the{" "}
          <strong>Central Manufacturing Technology Institute (CMTI), Bangalore</strong>,
          in collaboration with{" "}
          <strong>Ramaiah Institute of Technology (MSRIT), Bangalore</strong>, as
          part of the M.Tech Robotics & Artificial Intelligence program.
        </p>
        <p>
          The objective was to achieve accurate calibration between the{" "}
          <strong>Doosan A0509 collaborative robot</strong> and{" "}
          <strong>Intel RealSense depth cameras (D435/D457)</strong>. Several
          calibration methods were attempted – ArUco, Checkerboard, Hybrid, and
          ChArUco – with the final success achieved using{" "}
          <strong>ChArUco boards</strong> (30 mm squares, 22 mm ArUco markers).
        </p>
        <p>
          Using 30+ synchronized robot poses and camera captures, the calibration
          achieved <strong>sub-pixel reprojection error (&lt;1 px)</strong>, with
          results validated against both RoboDK simulation and manual ruler
          offsets (80 mm forward, 15 mm left, ~50 mm down).
        </p>
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
      </div>

      {/* YouTube Links Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">🎥 Demonstration Videos</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://youtu.be/your-first-link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition"
          >
            ▶ Calibration Demo
          </a>
          <a
            href="https://youtu.be/your-second-link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition"
          >
            ▶ Validation in RoboDK
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

export default HandEyeCalibrationPage;
