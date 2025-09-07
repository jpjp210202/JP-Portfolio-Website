import MediaGallery from "../../components/MediaGallery";

// JSW work images
import jsw1 from "../../assets/work/jsw/jsw1.jpg";
import jsw2 from "../../assets/work/jsw/jsw2.jpg";
import jsw3 from "../../assets/work/jsw/jsw3.jpg";
import jsw4 from "../../assets/work/jsw/jsw4.jpg";

function JSWExperiencePage() {
  const media = [
    { type: "image", src: jsw1 },
    { type: "image", src: jsw2 },
    { type: "image", src: jsw3 },
    { type: "image", src: jsw4 },
  ];

  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16">
      {/* Title Section */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
        🏭 JSW STEEL, VIJAYANAGAR
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
        Assistant Manager, Electrical & Automation
      </h2>
      <h3 className="text-lg md:text-xl text-center mb-6">
        CMD Dept | Cranes & Drives Automation | AI Prediction
      </h3>

      {/* Employee Info */}
      <div className="max-w-4xl mx-auto mb-6">
        <p className="text-left">
          <span className="font-semibold">Employee ID:</span> 1091636
        </p>
        <p className="text-left">
          <span className="font-semibold">Reported to:</span> Mr. Veeresh H S
        </p>
      </div>

      {/* Key Experience */}
      <div className="max-w-4xl mx-auto text-left space-y-6">
        {/* Industrial Automation & Drives */}
        <div>
          <h4 className="text-xl font-bold mb-2">
            ⚡ Industrial Automation & Drives
          </h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              Led a cross-functional team of 14 in the assembly and commissioning
              of a <strong>35-ton Grab Type EOT Crane at Blast Furnace 1</strong>,
              ensuring seamless startup.
            </li>
            <li>
              Specialized in ABB, Siemens, and Schneider drives for{" "}
              <strong>30–300-ton EOT cranes</strong>, with extensive experience in
              troubleshooting, rectification, and preventive maintenance.
            </li>
          </ul>
        </div>

        {/* Efficiency Improvement */}
        <div>
          <h4 className="text-xl font-bold mb-2">
            📈 Efficiency Improvement
          </h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              Reduced crane downtime from <strong>5 hrs/week → 0.5 hrs/week</strong>,
              significantly boosting operational efficiency.
            </li>
            <li>
              Recognized with the <strong>Exemplary Award</strong> for measurable
              contribution to plant output and reliability.
            </li>
          </ul>
        </div>

        {/* Digitalization & AI Reporting */}
        <div>
          <h4 className="text-xl font-bold mb-2">
            💻 Digitalization & AI Reporting
          </h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              Automated TQM and DM workflows by integrating{" "}
              <strong>SAP with Excel and Power BI</strong>, embedding AI-powered
              analytics for anomaly detection and trend forecasting.
            </li>
            <li>
              Reduced manual reporting effort by <strong>60%</strong> and improved
              audit readiness with intelligent dashboards.
            </li>
          </ul>
        </div>

        {/* AI-Powered Predictive Analytics Projects */}
        <div>
          <h4 className="text-xl font-bold mb-2">
            🤖 AI-Powered Predictive Analytics
          </h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              Applied Python and ML models for{" "}
              <strong>breakdown prediction & inventory optimization</strong>,
              improving material yield and cost reduction.
            </li>
            <li>
              Developed and deployed{" "}
              <strong>LSTM-based predictive maintenance models</strong> to forecast
              breakdowns and Remaining Useful Life (RUL) of crane components.
            </li>
          </ul>
        </div>

        {/* Data-Driven Insights */}
        <div>
          <h4 className="text-xl font-bold mb-2">📊 Data-Driven Insights</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              Designed predictive models and dashboards to transform raw operational
              data into actionable insights.
            </li>
            <li>
              Automated reporting pipelines for cross-departmental visibility,
              enabling proactive decision-making.
            </li>
          </ul>
        </div>

        {/* Recognition & Growth */}
        <div>
          <h4 className="text-xl font-bold mb-2">🏅 Recognition & Growth</h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              Completed probation <strong>4 months early</strong>, earning
              fast-track recognition for outstanding performance.
            </li>
            <li>
              Represented JSW Steel as a lead volunteer during the{" "}
              <strong>G20 Summit (Hampi)</strong> and{" "}
              <strong>Silver Jubilee Celebrations</strong>, demonstrating leadership
              beyond technical contributions.
            </li>
          </ul>
        </div>
      </div>

      {/* Media Gallery */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">📷 Work Highlights</h2>
        <MediaGallery media={media} />
      </div>
    </div>
  );
}

export default JSWExperiencePage;
