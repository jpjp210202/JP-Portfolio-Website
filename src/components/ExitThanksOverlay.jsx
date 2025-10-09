import { useState, useEffect } from "react";

function ExitThanksOverlay() {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY < 10) {
        setShowOverlay(true);

        // Auto-hide after 2.5s
        setTimeout(() => {
          setShowOverlay(false);
        }, 2500);
      }
    };

    document.addEventListener("mouseout", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  if (!showOverlay) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fadeIn">
      <div className="text-center text-white space-y-4 animate-fadeOut">
        <h2 className="text-3xl font-bold">🙏 Thanks for Visiting!</h2>
        <p className="text-lg">Hope you enjoyed exploring my portfolio 🚀</p>
      </div>
    </div>
  );
}

export default ExitThanksOverlay;
