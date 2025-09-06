import MediaGallery from "../../components/MediaGallery";

// Marksheets & Certificates
import marksheet1 from "../../assets/education/masters/marksheet1.jpg";
import marksheet2 from "../../assets/education/masters/marksheet2.jpg";
import marksheet3 from "../../assets/education/masters/marksheet3.jpg";
import marksheet4 from "../../assets/education/masters/marksheet4.jpg";
import marksheet from "../../assets/education/masters/overall_marksheet.jpg";
import convocation from "../../assets/education/masters/convocation.jpg";

// Logos
import collegeLogo from "../../assets/education/masters/logo.png";
import courseLogo from "../../assets/education/masters/courselogo.png";

function MTechPage() {
  const years = [
    {
      year: "1st",
      sgpa: "9.59", // you can update this with actual SGPA
      subjects: [
        { code: "RAI 11", name: "Mathematics", grade: "A", gp: "8" },
        { code: "RAI 12", name: "Robot and Programming", grade: "O", gp: "10" },
        { code: "RAI 13", name: "ML and Python", grade: "O", gp: "10" },
        { code: "RAIE 14x", name: "IoT for Robotics", grade: "O", gp: "10" },
        { code: "RAIE 15x", name: "Robot System Design", grade: "A+", gp: "9" },
        { code: "RM 116", name: "RM and IPR", grade: "O", gp: "10" },
        { code: "RAIL 17", name: "Robotics Lab", grade: "O", gp: "10" },
        { code: "RAIL 18", name: "ML and Python Lab", grade: "O", gp: "10" },
      ],
    },
    {
      year: "2nd",
      sgpa: "9.5",
      subjects: [
        { code: "RAI 21", name: "Control Engineering", grade: "A+", gp: "9" },
        {
          code: "RAI 22",
          name: "Artificial Intelligence & Neural Networks",
          grade: "O",
          gp: "10",
        },
        { code: "RAI 23", name: "Mechatronics and MEMS", grade: "O", gp: "10" },
        {
          code: "RAIE 242",
          name: "Introduction to Deep Learning",
          grade: "A+",
          gp: "9",
        },
        {
          code: "RAIE 251",
          name: "Natural Language Processing",
          grade: "A+",
          gp: "9",
        },
        {
          code: "RAIE 263",
          name: "Hydraulics and Pneumatics",
          grade: "O",
          gp: "10",
        },
        { code: "RAIL 26", name: "AI Lab", grade: "O", gp: "10" },
        { code: "RAIL 27", name: "Control System Lab", grade: "O", gp: "10" },
      ],
    },
    {
      year: "3rd",
      sgpa: "9.0",
      subjects: [
        { code: "RAIE 31x", name: "Elective 6", grade: "A", gp: "8" },
        { code: "RAIE 32x", name: "Elective 7", grade: "A", gp: "8" },
        {
          code: "RAII 33",
          name: "Internship/Industrial Training",
          grade: "O",
          gp: "10",
        },
        { code: "RAIP 34", name: "Project Work - I", grade: "O", gp: "10" },
      ],
    },
    {
      year: "4th",
      sgpa: "10.0",
      subjects: [
        { code: "RAIP 41", name: "Project Work - II", grade: "O", gp: "10" },
      ],
    },
  ];

  const media = [
    { type: "image", src: marksheet1, label: "1st Semester Marksheet" },
    { type: "image", src: marksheet2, label: "2nd Semester Marksheet" },
    { type: "image", src: marksheet3, label: "3rd Semester Marksheet" },
    { type: "image", src: marksheet4, label: "4th Semester Marksheet" },
    { type: "image", src: marksheet, label: "Overall Marksheet" },
    { type: "image", src: convocation, label: "Convocation Ceremony" },
  ];

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
      <div className="pt-16 md:pt-10"> {/* Push down so logos don't overlap */}
        <h1 className="text-3xl md:text-3xl font-bold text-center mb-1">
          PG - Master of Technology
        </h1>
        <p className="text-lg text-center mb-1">in</p>
        <p className="text-3xl md:text-4xl font-bold text-center mb-2">
          Robotics & Artificial Intelligence
        </p>
        <p className="text-3xl md:text-2xl font-bold text-center mb-2">
          CGPA: 9.59 / 10
        </p>
      </div>

      {/* College details */}
      <div className="max-w-4xl mx-auto text-left mb-8 space-y-2 mt-6">
        <p>
          <span className="font-semibold">PG Course Name :</span> Robotics &
          Artificial Intelligence
        </p>
        <p>
          <span className="font-semibold">Course Duration :</span> 2 years
          (2024-2026)
        </p>
        <p>
          <span className="font-semibold">Under Department of :</span> Mechanical
          Engineering
        </p>
        <p>
          <span className="font-semibold">College:</span> Ramaiah Institute of
          Technology, Bangalore
        </p>
        <p>
          <span className="font-semibold">University Affiliated to:</span>{" "}
          Visvesvaraya Technological University (VTU)
        </p>
        <p className="mt-4">
          This program focuses on advanced robotics, AI systems, and intelligent
          automation, preparing students for cutting-edge research and industry
          applications.
        </p>
      </div>

      {/* Year-wise breakdown */}
      <div className="max-w-4xl mx-auto space-y-6 mb-10">
        {years.map((yr, idx) => (
          <div key={idx}>
            <h2 className="text-xl font-bold mb-2">
              {yr.year} Semester: Overall SGPA: {yr.sgpa}
            </h2>
            <table className="w-full border border-gray-400 mb-4">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-2 py-1">Code</th>
                  <th className="border px-2 py-1">Subject</th>
                  <th className="border px-2 py-1">Grade</th>
                  <th className="border px-2 py-1">Grade Point</th>
                </tr>
              </thead>
              <tbody>
                {yr.subjects.map((sub, i) => (
                  <tr key={i}>
                    <td className="border px-2 py-1">{sub.code}</td>
                    <td className="border px-2 py-1">{sub.name}</td>
                    <td className="border px-2 py-1 text-center">{sub.grade}</td>
                    <td className="border px-2 py-1 text-center">{sub.gp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      {/* Media section */}
      {media.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-center mb-6">
            📄 Certificates & Marksheets
          </h2>
          <MediaGallery media={media} />
        </div>
      )}
    </div>
  );
}

export default MTechPage;
