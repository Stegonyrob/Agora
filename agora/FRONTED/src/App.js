import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CircularMenuView from "./Views/CircularMenuView";
import ServiceView from "./Views/ServiceView";
import InstalacionesView from "./Views/InstalacionesView";
import InformationView from "./Views/InformationView";
import ContactUsView from "./Views/ContactUsView";
import AboutMeView from "./Views/AboutMeView";
import NeurodiversityView from "./Views/NeurodiversityView";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CircularMenuView />} />
        <Route path="/AboutMe" element={<AboutMeView />} />
        <Route path="/Neurodiversity" element={<NeurodiversityView />} />
        <Route path="/Services" element={<ServiceView />} />
        <Route path="/Information" element={<InformationView />} />
        <Route path="/Instalaciones" element={<InstalacionesView />} />
        <Route path="/Contact" element={<ContactUsView />} />
      </Routes>
    </Router>
  );
}
