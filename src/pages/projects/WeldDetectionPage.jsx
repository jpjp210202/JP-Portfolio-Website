import MediaGallery from "../../components/MediaGallery";

// Weld defect project images
import weld1 from "../../assets/projects/weld/weld1.jpg";
import weld2 from "../../assets/projects/weld/weld2.jpg";
import weld3 from "../../assets/projects/weld/weld3.jpg";
import weld4 from "../../assets/projects/weld/weld4.jpg";
import weld5 from "../../assets/projects/weld/weld5.jpg";
import weld6 from "../../assets/projects/weld/weld6.jpg";
import weld7 from "../../assets/projects/weld/weld7.jpg";
import weld8 from "../../assets/projects/weld/weld8.jpg";
import weld9 from "../../assets/projects/weld/weld9.jpg";
import weld10 from "../../assets/projects/weld/weld10.jpg";

function WeldDetectionPage() {
  const media = [
    { type: "image", src: weld1 },
    { type: "image", src: weld2 },
    { type: "image", src: weld3 },
    { type: "image", src: weld4 },
    { type: "image", src: weld5 },
    { type: "image", src: weld6 },
    { type: "image", src: weld7 },
    { type: "image", src: weld8 },
    { type: "image", src: weld9 },
    { type: "image", src: weld10 },
  ];

  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Real-Time Weld Defect Detection using YOLOv8 and Jetson Nano
      </h1>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-left space-y-4 mb-6">
        <p>
          This project leverages <strong>deep learning</strong> for automated
          weld defect detection, aiming to replace slow and error-prone manual
          inspections with a real-time, edge-deployable solution. A custom
          dataset of weld seam images was used to train a{" "}
          <strong>YOLOv8 object detection model</strong> capable of identifying
          five key classes of weld quality:
          <em> Adjacent, Internal, Geometric, Process,</em> and{" "}
          <em>Normal</em>.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Dataset</h2>
        <p>
          The dataset was sourced from{" "}
          <a
            href="https://www.kaggle.com/datasets/sukmaadhiwijaya/weld-defect-detection-dataset/data"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Kaggle – Weld Defect Detection Dataset
          </a>
          , which includes annotated weld images for defect localization. Custom
          preprocessing was applied to resize, augment, and balance the dataset
          to improve generalization.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Model Training</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            Framework: <strong>Ultralytics YOLOv8</strong> for real-time object
            detection.
          </li>
          <li>
            Classes: <em>adj (Adjacent), int (Internal), geo (Geometric), pro
            (Process), non (Normal)</em>.
          </li>
          <li>
            Hardware: Trained on GPU laptop (RTX 4060, TensorFlow/PyTorch), then
            exported to <strong>ONNX format</strong> for deployment on Jetson
            Nano.
          </li>
          <li>
            Training loss decreased steadily, reaching stability after ~10
            epochs.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 mb-2">Evaluation</h2>
        <p>
          The model achieved competitive results compared with Faster R-CNN on
          the same dataset:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            <strong>YOLOv8</strong> – mAP: 0.82 | Precision: 0.85 | Recall: 0.80
            | F1: 0.82
          </li>
          <li>
            <strong>Faster R-CNN</strong> – mAP: 0.76 | Precision: 0.78 | Recall:
            0.73 | F1: 0.75
          </li>
        </ul>
        <p>
          Results showed YOLOv8 outperformed Faster R-CNN in all four metrics,
          making it the preferred choice for real-time defect detection.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Deployment</h2>
        <p>
          The trained YOLOv8 model was optimized and deployed on{" "}
          <strong>NVIDIA Jetson Nano</strong>, integrated with a CSI camera for
          live video capture. The system runs on-device inference, detecting
          weld defects in real time, with detection results transmitted to a
          monitoring dashboard.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Applications</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Automated weld quality inspection in manufacturing plants.</li>
          <li>
            Early defect detection for improved safety and reduced rework costs.
          </li>
          <li>On-device AI deployment for Industry 4.0 applications.</li>
        </ul>
      </div>

      {/* Gallery */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          📷 Weld Defect Detection Results
        </h2>
        <MediaGallery media={media} />
      </div>
    </div>
  );
}

export default WeldDetectionPage;
