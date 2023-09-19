import ReactDom from react-DOM;
import React, { useState } from "react";
import LinksNav from "./LinksNav";
import centralPlanetImg from "../agora-logo.png";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const  LinksNav= [
    "Servicios",
    "Instalaciones",
    "Información",
    "Contacto",
    "Sobre mí",
    "Neurodiversidad",
  ];
return(
    <nav className="navbar">
        <div className="navbar-container">

        
      <img src={centralPlanetImg} alt="Logo" className="logo" />
        </div>
    </nav>
)


 
      {/* <a href="https://api.whatsapp.com/send?phone=NUMERO_DE_TELEFONO" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
        <a href="https://api.whatsapp.com/send?phone=15551234567" target="_blank">¡Chatea con nosotros por WhatsApp!</a> */}

      {isActive &&
        LinksNav.map(())
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
