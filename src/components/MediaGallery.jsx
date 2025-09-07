import { useState } from "react";

function MediaGallery({ media }) {
  // Separate images and youtube videos
  const images = media.filter((item) => item.type === "image");
  const videos = media.filter((item) => item.type === "youtube");

  // State for fullscreen modal
  const [current, setCurrent] = useState(0); // index
  const [isOpen, setIsOpen] = useState(false);
  const [section, setSection] = useState("image"); // "image" or "youtube"+ useEffect(() => { setCurrent(0); }, [section, media]);

  // const imgStripRef = useRef(null);
  // const vidStripRef = useRef(null);
  // useEffect(() => {
  //   if (imgStripRef.current) imgStripRef.current.scrollLeft = 0;
  //   if (vidStripRef.current) vidStripRef.current.scrollLeft = 0;
  // }, [section, media]);
  const prev = () => {
    if (section === "image" && current !== null) {
      setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    } else if (section === "youtube" && current !== null) {
      setCurrent((c) => (c === 0 ? videos.length - 1 : c - 1));
    }
  };

  const next = () => {
    if (section === "image" && current !== null) {
      setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
    } else if (section === "youtube" && current !== null) {
      setCurrent((c) => (c === videos.length - 1 ? 0 : c + 1));
    }
  };

  return (
    <div className="w-full flex flex-col gap-10 mt-6">
      {/* ----------- IMAGES SECTION ----------- */}
      {images.length > 0 && (
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-3">Image Gallery</h2>
          <div className="flex gap-4 justify-center overflow-x-auto w-full max-w-5xl p-2 no-scrollbar">
            {images.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 cursor-pointer border border-black rounded"
                onClick={() => {
                  setCurrent(idx);
                  setSection("image");
                  setIsOpen(true);
                }}
              >
                <img
                  src={item.src}
                  alt={`image-${idx}`}
                  className="h-32 w-48 object-cover rounded"
                />
              </div>
            ))}
          </div>

          {/* Dots for images */}
          <div className="flex gap-2 mt-3">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrent(idx);
                  setSection("image");
                }}
                className={`w-3 h-3 rounded-full ${
                  section === "image" && idx === current
                    ? "bg-black"
                    : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      )}

      {/* ----------- YOUTUBE VIDEOS SECTION ----------- */}
      {videos.length > 0 && (
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-3">Video Gallery</h2>
          <div className="flex gap-4 justify-center overflow-x-auto w-full max-w-5xl p-2 no-scrollbar">
            {videos.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 cursor-pointer border border-black rounded overflow-hidden"
                onClick={() => {
                  setCurrent(idx);
                  setSection("youtube");
                  setIsOpen(true);
                }}
              >
                <iframe
                  width="200"
                  height="120"
                  src={item.src.replace("youtu.be", "www.youtube.com/embed")}
                  title={`youtube-thumb-${idx}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded"
                ></iframe>
              </div>
            ))}
          </div>

          {/* Dots for videos */}
          <div className="flex gap-2 mt-3">
            {videos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrent(idx);
                  setSection("youtube");
                }}
                className={`w-3 h-3 rounded-full ${
                  section === "youtube" && idx === current
                    ? "bg-black"
                    : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      )}

      {/* ----------- FULLSCREEN MODAL ----------- */}
      {isOpen && current !== null && (
        <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50">
          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* Current media */}
          <div className="w-full max-w-5xl flex justify-center mb-6">
            {section === "image" ? (
              <img
                src={images[current].src}
                alt={`image-${current}`}
                className="max-h-[80vh] max-w-[95vw] rounded shadow-lg"
              />
            ) : (
              <iframe
                width="800"
                height="450"
                src={videos[current].src.replace(
                  "youtu.be",
                  "www.youtube.com/embed"
                )}
                title={`youtube-${current}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded shadow-lg"
              ></iframe>
            )}
          </div>

          {/* Dots in fullscreen */}
          <div className="flex gap-2">
            {(section === "image" ? images : videos).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === current ? "bg-white" : "bg-gray-500"
                }`}
              ></button>
            ))}
          </div>

          {/* Arrows */}
          {(section === "image" ? images : videos).length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-6 text-white text-4xl"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-6 text-white text-4xl"
              >
                ›
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default MediaGallery;
