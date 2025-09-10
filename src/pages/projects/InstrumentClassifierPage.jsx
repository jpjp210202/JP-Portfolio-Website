import MediaGallery from "../../components/MediaGallery";
import inst1 from "../../assets/projects/instrument/inst1.png";

// Direct .py file (place inside public folder so it's downloadable)
const codeFile = "/projects/instrument/instrument_classifier.py";

function InstrumentClassifierPage() {
  const media = [
    { type: "image", src: inst1 },
    { type: "youtube", src: "https://youtu.be/uvc7J-N-Hxk" },
  ];

  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-16">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Instrument Sound Classification using 1D CNN with Time-Delay Embedding
      </h1>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-left space-y-4 mb-6">
        <p>
          This project demonstrates an <strong>AI-powered instrument
          classification system</strong> using <strong>1D Convolutional Neural
          Networks (CNNs)</strong> combined with <strong>Time-Delay Embedding
          (TDE)</strong>. The model identifies musical instruments from raw
          audio waveforms, enabling lightweight and real-time classification.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Instrument Classes</h2>
        <p>
          The system can classify 10 instruments: Acoustic Guitar, Bass Guitar,
          Drum Set, Electric Guitar, Flute, Harmonium, Piano, Saxophone, Trumpet,
          and Violin.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">Features</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>1D CNN trained with Time-Delay Embedding (TDE)</li>
          <li>Real-time microphone input and record-then-predict modes</li>
          <li>Implemented in TensorFlow/Keras with GPU acceleration</li>
        </ul>
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
          href="https://youtu.be/uvc7J-N-Hxk"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition"
        >
          ▶ Demo Video
        </a>
        <a
          href={codeFile}
          download
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition"
        >
          ⬇ Download Python Code
        </a>
      </div>

      {/* Gallery */}
      <MediaGallery media={media} />
    </div>
  );
}

export default InstrumentClassifierPage;
