import React, { useState } from "react";
import Satellite from "./Satellite";
import centralPlanetImg from "../agora-logo.png";

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
  const orbitRadius = 350;
  const satelliteStyles = satellites.map((satellite, i) => {
    const angle = ((2 * Math.PI) / satellites.length) * i;
    const x = orbitRadius * Math.cos(angle);
    const y = orbitRadius * Math.sin(angle);
    return { transform: `translate(${x}px, ${y}px)` };
  });

  return (
    <div className="planet" onClick={() => setIsPlanetActive(!isPlanetActive)}>
      <img src={centralPlanetImg} alt="Planeta central" className="planet" />
      {isPlanetActive &&
        satellites.map((satellite, i) => (
          <Satellite
            key={i}
            className={`satellite${i + 1}`}
            onClick={() => (window.location.href = `/${satellite}`)}
            style={satelliteStyles[i]}
          >
            {satellite}
          </Satellite>
        ))}
    </div>
  );
};

export default CircularMenu;
