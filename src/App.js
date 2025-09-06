// === FILE: src/App.js ===
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./HeroSection";
import HighlightsSection from "./HighlightsSection";
import Navbar from "./Navbar";

// Example pages we’ll create
import AboutPage from "./pages/AboutPage";
import MTechPage from "./pages/education/MTechPage";
import FirebotPage from "./pages/projects/FirebotPage";

function App() {
  return (
    <Router>
      <Navbar />
      {/* Padding so content isn’t hidden behind navbar */}
      <main className="pt-16">
        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <HighlightsSection />
              </>
            }
          />

          {/* About */}
          <Route path="/about" element={<AboutPage />} />

          {/* Education example */}
          <Route path="/education/mtech" element={<MTechPage />} />

          {/* Project example */}
          <Route path="/projects/firebot" element={<FirebotPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
