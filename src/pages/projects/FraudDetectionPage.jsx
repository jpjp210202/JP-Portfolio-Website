import MediaGallery from "../../components/MediaGallery";
import fraud1 from "../../assets/projects/fraud/fraud1.png";
import fraud2 from "../../assets/projects/fraud/fraud2.png";

// Direct Colab link (opens in new tab)
const codeFile = "https://colab.research.google.com/drive/1jC0SMeMWIRU6YCgZomK2il_kXZ9iejYb?usp=sharing";


function FraudDetectionPage() {
  const media = [
    { type: "image", src: fraud1 },
    { type: "image", src: fraud2 },
    { type: "youtube", src: "https://youtu.be/dummy_fraud_demo" }, // replace with your video later
  ];

  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Fake Review & Fraud Detection System for Smart Products (Havells AI/ML Campus Challenge)
      </h1>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-left space-y-4 mb-6">
        <p>
          This project was developed as part of the <strong>Havells India Ltd. Campus Recruitment Drive 2026</strong> 90-minute assessment. The goal was to design an 
          <strong> AI-powered fraud detection system</strong> capable of identifying fake online 
          reviews and fraudulent warranty claims across multiple languages.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Project Overview</h2>
        <p>
          The system leverages <strong>Sentence Transformers (all-MiniLM-L6-v2)</strong> to encode 
          multilingual text into high-dimensional semantic vectors and fuses them with metadata features 
          like purchase verification, timestamp, and claim count. A lightweight <strong>Logistic Regression model</strong> 
          was trained on these fused representations to detect fraudulent or deceptive behavior.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Key Features</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Supports <strong>multilingual reviews</strong> - English, Hindi, Tamil, French, and Spanish using Google Translate API.</li>
          <li>Fuses <strong>semantic embeddings</strong> from Sentence-BERT with structured <strong>metadata</strong> like purchase history and claim frequency.</li>
          <li>Implements <strong>adversarial robustness</strong> to resist obfuscated attacks (e.g., “faakeee”, “dup1icate”).</li>
          <li>Provides <strong>explainability</strong> through SHAP feature importance visualization for transparency.</li>
          <li>Deployed as a <strong>FastAPI endpoint</strong> with real-time JSON prediction output via ngrok tunneling.</li>
          <li>Achieved an overall <strong>88% accuracy</strong> and <strong>0.90 F1-score</strong> on synthetic multilingual data.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 mb-2">Pipeline Architecture</h2>
        <p>
          The workflow includes multilingual data preprocessing → language detection & translation → text embedding 
          → metadata extraction → feature fusion → model training → adversarial testing → explainability → API deployment.
          This modular pipeline ensures robustness and real-world applicability in smart product ecosystems.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Adversarial Testing & Explainability</h2>
        <p>
          The system was tested against adversarially perturbed inputs designed to mimic human manipulation attempts.
          Despite noisy or intentionally misspelled text, the classifier maintained consistent predictions due to its 
          semantic understanding rather than keyword dependence. <strong>SHAP visualizations</strong> further revealed 
          that claim count, purchase verification, and sentiment polarity were the most influential features.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Results Summary</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Accuracy: <strong>88%</strong></li>
          <li>Precision: <strong>0.90</strong></li>
          <li>Recall: <strong>0.88</strong></li>
          <li>F1-Score: <strong>0.87</strong></li>
          <li>Adversarial stability: <strong>&lt; 5% deviation</strong> under misspellings</li>
        </ul>

        <p>
          The API demonstrated fast response times (&lt;1 second) for predictions and returned interpretable JSON outputs such as:  
        </p>

        <pre className="bg-gray-100 text-sm p-3 rounded overflow-x-auto">
{`{
  "prediction": "Fraudulent",
  "fraud_probability": 0.60,
  "record_type": "Warranty"
}`}
        </pre>
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
        <a
          href="https://youtu.be/dummy_fraud_demo"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition"
        >
          ▶ Demo Video
        </a>
        <a
  href={codeFile}
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition"
>
  🚀 Open in Google Colab
</a>

      </div>

      {/* Gallery */}
      <MediaGallery media={media} />
    </div>
  );
}

export default FraudDetectionPage;
