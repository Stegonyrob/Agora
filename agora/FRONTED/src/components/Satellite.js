import React from "react";

const Satellite = ({ className, onClick, children, style }) => {
  return (
    <div className={`satellite ${className}`} onClick={onClick} style={style}>
      {children}
    </div>
  );
};

export default Satellite;
