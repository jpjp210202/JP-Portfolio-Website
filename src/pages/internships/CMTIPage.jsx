import MediaGallery from "../../components/MediaGallery";
import cmtiLogo from "../../assets/internships/cmti/cmti_logo.png"; 

// Images (replace with actual files in /assets/internships/cmti/)
import setup1 from "../../assets/internships/cmti/lab_setup.jpg";
import setup2 from "../../assets/internships/cmti/robot_calibration.jpg";
import work1 from "../../assets/internships/cmti/infra1.jpg";
import work2 from "../../assets/internships/cmti/infra.jpg";
import idcard from "../../assets/internships/cmti/CMTI_ID.jpg";

function CMTIPage() {
  const media = [
    { type: "image", src: setup1, label: "CMTI Lab Setup with Doosan A0509" },
    { type: "image", src: setup2, label: "Calibration Process with Intel RealSense" },
    { type: "image", src: work1, label: "Python code for ChArUco calibration" },
    { type: "image", src: work2, label: "Discussion & results verification at CMTI" },
    { type: "image", src: idcard, label: "CMTI ID CARD" },
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
      <div className="pt-24">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Internship at Central Manufacturing Technology Institute (CMTI), Bangalore
        </h1>
      </div>

      {/* Duration & Mentors */}
      <div className="max-w-4xl mx-auto text-left space-y-4 mb-6">
        <p>
          <strong>Duration:</strong> 11.09.2025 to 13.10.2025
        </p>
        <p>
          <strong>Guidance:</strong> This internship was carried out under the mentorship of  
          <strong> Dr. Sunith Babu (Associate Professor, Ramaiah Institute of Technology)</strong> and  
          <strong> Dr. Narendra Reddy (Scientist-D, CMTI)</strong>, whose guidance was 
          instrumental in ensuring technical rigor and practical industrial exposure.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto text-left space-y-4 mb-6">
        <p>
          As part of the <strong>M.Tech Robotics & Artificial Intelligence</strong> program at  
          <strong> Ramaiah Institute of Technology (MSRIT)</strong>, I completed my internship at the  
          <strong> Central Manufacturing Technology Institute (CMTI), Bangalore</strong>.  
          The internship provided deep exposure to robotics calibration, AI-based sorting 
          systems, and industrial research practices.
        </p>
      </div>
{/* Buttons (LinkedIn + Report) */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <a
          href="https://www.linkedin.com/posts/jpjaipuneeth_excited-to-share-a-proud-milestone-in-my-activity-7368552073631592449-qyw8"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition"
        >
          🔗 View LinkedIn Post
        </a>
        <a
          href="/assets/internships/cmti/CMTI_Internship_Report.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
        >
          📑 Internship Report
        </a>
      </div>
      {/* Project 1: Hand–Eye Calibration */}
      <div className="max-w-4xl mx-auto text-left space-y-4 mb-10">
        <h2 className="text-2xl font-semibold mb-3">Project 1: Hand–Eye Calibration</h2>
        <p>
          
          The first part of my internship focused on achieving precise 
          <strong> hand–eye calibration</strong> between the Doosan A0509 collaborative robot 
          and Intel RealSense depth cameras (D435/D457). Multiple calibration strategies 
          were tested including ArUco, Checkerboard, Hybrid, and finally ChArUco boards.  
          The ChArUco method yielded the most accurate results.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Developed Python scripts for capturing synchronized robot poses and images.</li>
          <li>Generated calibration datasets using ChArUco boards (30 mm squares, 22 mm markers).</li>
          <li>Performed reprojection error analysis, achieving <strong>&lt; 1 px accuracy</strong>.</li>
          <li>Validated results using RoboDK simulation and manual ruler offset verification 
              (80 mm forward, 15 mm left, ~50 mm down from TCP).</li>
        </ul>
      </div>

      {/* Project 2: Bolt–Nut Sorting */}
      <div className="max-w-4xl mx-auto text-left space-y-4 mb-10">
        <h2 className="text-2xl font-semibold mb-3">Project 2: Bolt–Nut Sorting System</h2>
        <p>
          The second major task during the internship was to design and implement a  
          <strong> Bolt–Nut Sorting Project</strong>. The aim was to enable automated 
          classification and sorting of bolts and nuts using computer vision and robotics.
        </p>
        <p>
          Since pre-trained models for this task were not directly available, we carried out   
          <strong> manual model training</strong>. This involved capturing images of bolts and nuts 
          under varied conditions, annotating them carefully, and training a custom YOLO model.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Collected and annotated a dataset of bolts and nuts under different orientations.</li>
          <li>Trained a YOLO-based object detection model manually with these samples.</li>
          <li>Integrated the model with RoboDK and robot scripts to attempt automated sorting.</li>
          <li>Evaluated detection accuracy and identified improvements needed in dataset quality.</li>
        </ul>
        <p>
          This project gave significant exposure to <strong>dataset creation, manual model training, 
          and integration with robotic applications</strong>, serving as a foundation for 
          advanced industrial sorting systems.
        </p>
      </div>

      {/* Key Learnings */}
      <div className="max-w-4xl mx-auto text-left mb-10">
        <h2 className="text-2xl font-semibold mb-3">Key Learnings</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Practical exposure to industrial-grade collaborative robots (Doosan A0509).</li>
          <li>Experience in camera–robot calibration using ChArUco boards.</li>
          <li>Hands-on training in dataset creation and YOLO model development.</li>
          <li>Validation of calibration using both simulation (RoboDK) and manual checks.</li>
          <li>Understanding challenges in applying AI for real-world sorting problems.</li>
        </ul>
      </div>

      

      {/* Gallery */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">📷 Internship Gallery</h2>
        <MediaGallery media={media} />
      </div>
    </div>
  );
}

export default CMTIPage;