// === FILE: src/App.js ===
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "./HeroSection";
import HighlightsSection from "./HighlightsSection";
import ContactSection from "./ContactSection";
import Navbar from "./Navbar";
import ScrollProgress from "./ScrollProgress"; // ✅ Import new component

// Pages
import AboutPage from "./pages/AboutPage";
import MTechPage from "./pages/education/MTechPage";
import BEPage from "./pages/education/BEPage";
import HSSchool from "./pages/education/HSSchool";
import SecSchoolPage from "./pages/education/SecSchoolPage";

import JSWExperiencePage from "./pages/work/JSWExperiencePage";

import FirebotPage from "./pages/projects/FirebotPage";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      {/* ✅ Progress bar always on top */}
      <ScrollProgress />
      <Navbar />
      <main className="pt-16">
        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <HighlightsSection />
                <ContactSection /> {/* ✅ Contact section stays here */}
              </>
            }
          />

          {/* About */}
          <Route path="/about" element={<AboutPage />} />

          {/* Education */}
          <Route path="/education/mtech" element={<MTechPage />} />
          <Route path="/education/be" element={<BEPage />} />
          <Route path="/education/hss" element={<HSSchool />} />
          <Route path="/education/sslc" element={<SecSchoolPage />} />

          {/* Work */}
          <Route path="/work/jsw" element={<JSWExperiencePage />} />

          {/* Projects */}
          <Route path="/projects/firebot" element={<FirebotPage />} />

          {/* ✅ Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
