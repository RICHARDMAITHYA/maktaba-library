import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import AcademicPublishing from "./pages/AcademicPublishing";
import Bookshop from "./pages/Bookshop";
import Teachers from "./pages/Teachers";
import Contact from "./pages/Contact";
import Leadership from "./pages/Leadership";
import ICTLearning from "./pages/ICTLearning";
import Assessments from "./pages/Assessments";
import SchoolManagement from "./pages/SchoolManagement";
import News from "./pages/News";
import Careers from "./pages/Careers";
import Partners from "./pages/Partners";
import Resources from "./pages/Resources";
import Events from "./pages/Events";
import Authors from "./pages/Authors";
import KnowledgeCentre from "./pages/KnowledgeCentre";
import DigitalLearning from "./pages/DigitalLearning";
import Impact from "./pages/Impact";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academic-publishing" element={<AcademicPublishing />} />
        <Route path="/bookshop" element={<Bookshop />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/digital-learning" element={<ICTLearning />} />
        <Route path="/ict-learning" element={<ICTLearning />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/school-management" element={<SchoolManagement />} />
        <Route path="/news" element={<News />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/knowledge-centre" element={<KnowledgeCentre />} />
        <Route path="/impact" element={<Impact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
