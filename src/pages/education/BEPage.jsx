// Logos (update paths if you put BE-specific logos later)
import collegeLogo from "../../assets/education/bachelors/logo.png";
import courseLogo from "../../assets/education/bachelors/courselogo.jpg";

function BEPage() {
  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16 relative">
      {/* Logos at extreme top-left & top-right */}
      {collegeLogo && (
        <img
          src={collegeLogo}
          alt="Institution Logo"
          className="absolute top-4 left-4 h-12 w-auto object-contain md:h-20"
        />
      )}
      {courseLogo && (
        <img
          src={courseLogo}
          alt="Course Logo"
          className="absolute top-4 right-4 h-12 w-auto object-contain md:h-20"
        />
      )}

      {/* Title Section */}
      <div className="pt-16 md:pt-10">
        <h1 className="text-3xl md:text-3xl font-bold text-center mb-1">
          Bachelor of Engineering
        </h1>
        <p className="text-lg text-center mb-1">in</p>
        <p className="text-3xl md:text-4xl font-bold text-center mb-2">
          Electrical & Electronics Engineering
        </p>
        <p className="text-3xl md:text-2xl font-bold text-center mb-2">
          CGPA: 8.33 / 10
        </p>
      </div>

      {/* College details */}
      <div className="max-w-4xl mx-auto text-left mb-8 space-y-2 mt-6">
        <p>
          <span className="font-semibold">UG Course Name :</span> Electrical &
          Electronics Engineering
        </p>
        <p>
          <span className="font-semibold">Course Duration :</span> 4 years
          (2018–2022)
        </p>
        <p>
          <span className="font-semibold">Under Department of :</span>{" "}
          Electrical & Electronics Engineering
        </p>
        <p>
          <span className="font-semibold">College:</span> BMS Institute of
          Technology & Management, Bangalore
        </p>
        <p>
          <span className="font-semibold">University Affiliated to:</span>{" "}
          Visvesvaraya Technological University (VTU)
        </p>
        <p className="mt-4">
          This program provided strong fundamentals in electrical systems,
          control engineering, and automation, laying the foundation for
          advanced studies in Robotics & AI.
        </p>
      </div>
    </div>
  );
}

export default BEPage;
