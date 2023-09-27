import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CircularMenu from "./components/Home";
import Services from "./Views/ServiceView";
import Instalaciones from "./Views/InstalacionesView";
import Information from "./Views/InformationView";
import ContactUs from "./Views/ContactUsView";
import AboutMe from "./Views/AboutMeView";
import Neurodiversity from "./Views/NeurodiversityView";
import "./styles.css";
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Neurodiversity" element={<Neurodiversity />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/Instalaciones" element={<Instalaciones />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/" element={<CircularMenu />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
