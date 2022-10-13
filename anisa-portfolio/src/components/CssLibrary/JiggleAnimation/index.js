import React from "react";
import "./style.css";

const Jiggle = () => {
  return (
    <div className="animation-display">
      <p className="animation-name">Jiggle Animation</p>
      <div className="animation-display-container">
        <div className="jiggle" />
      </div>
    </div>
  );
};

export default Jiggle;
