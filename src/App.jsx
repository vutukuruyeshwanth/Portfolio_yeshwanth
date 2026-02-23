import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";

function App() {
  return (
    <BrowserRouter>

      {/* Background animation */}
      <div className="particles">
        {Array.from({ length: 50 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      {/* HEADER */}
      <Navbar />

      {/* PAGE CONTENT */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>

      {/* FOOTER */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;
