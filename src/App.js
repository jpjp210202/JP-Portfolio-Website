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

import AIFireFighterPage from "./pages/projects/AIFireFighterPage";
import BluetoothFollowerPage from "./pages/projects/BluetoothFollowerPage";
import FruitDetectionPage from "./pages/projects/FruitDetectionPage";
import FirebotPage from "./pages/projects/FirebotPage";
import JetbotCollisionPage from "./pages/projects/JetbotCollisionPage";
import AirGestureWheelchairPage from "./pages/projects/AirGestureWheelchairPage";
import WeldDetectionPage from "./pages/projects/WeldDetectionPage";
import InstrumentClassifierPage from "./pages/projects/InstrumentClassifierPage";
import ACOPage from "./pages/projects/ACOPage";
import IotMonitorPage from "./pages/projects/IotMonitorPage";

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
          <Route path="/projects/ai-firebot" element={<AIFireFighterPage />} />
          <Route path="/projects/fruit-detector" element={<FruitDetectionPage />} />
          <Route path="/projects/esp32-rover" element={<BluetoothFollowerPage />} />
          <Route path="/projects/firebot" element={<FirebotPage />} />
          <Route path="/projects/jetbot" element={<JetbotCollisionPage />} />
          <Route path="/projects/wheelchair" element={<AirGestureWheelchairPage />} />
          <Route path="/projects/welddetect" element={<WeldDetectionPage />} />
          <Route path="/projects/instrument-classifier" element={<InstrumentClassifierPage />} />
          <Route path="/projects/aco" element={<ACOPage />} />
          <Route path="/projects/iot-monitor" element={<IotMonitorPage />} />
                          
          {/* ✅ Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
