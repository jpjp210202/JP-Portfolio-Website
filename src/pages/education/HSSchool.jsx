// Logos (update with actual high school logos in assets)
import schoolLogo from "../../assets/education/HSS/logo.jpg";
import boardLogo from "../../assets/education/HSS/boardlogo.png";

function HSSchoolPage() {
  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16 relative">
      {/* Logos at top-left & top-right */}
      {schoolLogo && (
        <img
          src={schoolLogo}
          alt="School Logo"
          className="absolute top-4 left-4 h-12 w-auto object-contain md:h-20"
        />
      )}
      {boardLogo && (
        <img
          src={boardLogo}
          alt="Board Logo"
          className="absolute top-4 right-4 h-12 w-auto object-contain md:h-20"
        />
      )}

      {/* Title Section */}
      <div className="pt-16 md:pt-10">
        <h1 className="text-3xl md:text-3xl font-bold text-center mb-1">
          Higher Secondary School (12th std)
        </h1>
        <p className="text-lg text-center mb-1">Completed in</p>
        <p className="text-3xl md:text-4xl font-bold text-center mb-2">
          PCMC - CBSE
        </p>
        <p className="text-3xl md:text-2xl font-bold text-center mb-2">
          Percentage: 76 %
        </p>
      </div>

      {/* School details */}
      <div className="max-w-4xl mx-auto text-left mb-8 space-y-2 mt-6">
        <p>
          <span className="font-semibold">School Name :</span> Nagarjuna Vidyaniketan, Bangalore
        </p>
        <p>
          <span className="font-semibold">Board :</span> Central Board of Secondary Education
        </p>
        <p>
          <span className="font-semibold">Year of Passing :</span> 2018
        </p>
        <p className="mt-4">
          This phase of education strengthened analytical and problem-solving skills through Physics, Chemistry, Mathematics, and Computer Science, providing a solid foundation for pursuing higher studies in Engineering and related technical domains.
        </p>
      </div>
    </div>
  );
}

export default HSSchoolPage;
