import pgLogo from "../../assets/internships/powergrid/powergrid_logo.png";

function PowergridPage() {
  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16 relative">
      {/* Top-right POWERGRID Logo */}
      {pgLogo && (
        <div className="absolute top-4 right-4">
          <img
            src={pgLogo}
            alt="POWERGRID Logo"
            className="h-14 w-auto object-contain md:h-20"
          />
        </div>
      )}

      {/* Title */}
      <div className="pt-24">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Internship at POWERGRID Corporation of India Ltd.
        </h1>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto text-left space-y-4 mb-6">
        <p>
          As part of my undergraduate engineering program, I interned at{" "}
          <strong>POWERGRID Corporation of India Ltd.</strong>, one of the largest
          power transmission utilities in the world. The internship was split across
          two locations, giving me exposure to both <strong>substation operations</strong> 
          and <strong>commissioning practices</strong>.
        </p>
      </div>

      {/* Internship 1: Bengaluru */}
      <div className="max-w-4xl mx-auto text-left space-y-4 mb-10">
        <h2 className="text-2xl font-semibold mb-3">🔧 Research & Study Intern – Bengaluru, Karnataka</h2>
        <p>
          <strong>Duration:</strong> Sep 2021 – Oct 2021
        </p>
        <p>
          This internship focused on studying the operations of high-voltage substations,
          particularly <strong>400kV Gas Insulated Switchgear (GIS)</strong> and 
          <strong> 220kV Air Insulated Switchgear (AIS)</strong>. I gained exposure to{" "}
          <strong>Real Time Automatic Monitoring & Control (RTAMC)</strong> and 
          <strong> SCADA-based systems</strong> used for centralized monitoring.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Observed operation and maintenance of GIS and AIS substations.</li>
          <li>Assisted in testing of cables, switchgear, and protection equipment.</li>
          <li>Studied procurement and management procedures in large-scale utility systems.</li>
          <li>Learned about SCADA-based remote operation of substations.</li>
        </ul>
      </div>

      {/* Internship 2: Bhuj */}
      <div className="max-w-4xl mx-auto text-left space-y-4 mb-10">
        <h2 className="text-2xl font-semibold mb-3">🔩 Internship Trainee – Bhuj, Gujarat</h2>
        <p>
          <strong>Duration:</strong> Mar 2021 – Apr 2021
        </p>
        <p>
          At Bhuj, I was trained on large-scale{" "}
          <strong>765/400/220kV substations</strong>, gaining hands-on exposure to
          commissioning activities and site-level testing. This experience was valuable
          in understanding the practical challenges of establishing and extending
          high-voltage networks.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Observed the commissioning process of a Gas Insulated Substation (GIS) extension.</li>
          <li>Assisted engineers in functional testing and system checks before activation.</li>
          <li>Learned about interconnections between high-voltage substations and grid control.</li>
        </ul>
      </div>

      {/* Key Learnings */}
      <div className="max-w-4xl mx-auto text-left mb-10">
        <h2 className="text-2xl font-semibold mb-3">📌 Key Learnings</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Clear understanding of GIS and AIS substation technologies.</li>
          <li>Hands-on exposure to commissioning activities and safety practices.</li>
          <li>Familiarity with SCADA and RTAMC-based remote monitoring systems.</li>
          <li>Insights into utility management, procurement, and operations.</li>
        </ul>
      </div>

      {/* Report PDF */}
      {/* Report PDF Viewer */}
    <div className="max-w-5xl mx-auto my-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">📑 Internship Report</h2>
        <div className="w-full h-[80vh] border rounded shadow">
            <iframe
            src="/assets/internships/powergrid/POWERGRID_Internship_Report.pdf"
            title="POWERGRID Internship Report"
            className="w-full h-full"
            />
        </div>
       </div>
    </div>
  );
}

export default PowergridPage;
