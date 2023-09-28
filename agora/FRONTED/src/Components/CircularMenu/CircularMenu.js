import React, { useState } from "react";
import Satellite from "./Satellite";
import centralPlanetImg from "../../../src/agora-logo.png";
import { useNavigate } from "react-router-dom";

const CircularMenu = () => {
  const [isPlanetActive, setIsPlanetActive] = useState(false);
  const satellites = [
    "Servicios",
    "Instalaciones",
    "Información",
    "Contacto",
    "Sobre mí",
    "Neurodiversidad",
  ];
  const views = [
    "/ServicesView",
    "/InstalacionesView",
    "/InformationView",
    "/ContactUsView",

    "/AboutMeView",

    "/NeurodiversityView",
  ];
  const orbitRadius = 250;
  const satelliteStyles = satellites.map((satellite, i) => {
    const angle = ((2 * Math.PI) / satellites.length) * i;
    const x = orbitRadius * Math.cos(angle);
    const y = orbitRadius * Math.sin(angle);
    return { transform: `translate(${x}px, ${y}px)` };
  });

  const navigate = useNavigate();

  const handleClick = (index) => {
    navigate(views[index]);
    setIsPlanetActive(false);
  };

  return (
    <div className="planet" onClick={() => setIsPlanetActive(!isPlanetActive)}>
      <img src={centralPlanetImg} alt="Planeta central" className="planet" />

      {isPlanetActive &&
        satellites.map((satellite, i) => (
          <Satellite
            key={i}
            className={`View${i + 1}`}
            onClick={() => handleClick(i)}
            style={satelliteStyles[i]}
          >
            {satellite}
          </Satellite>
        ))}
    </div>
  );
};

export default CircularMenu;
