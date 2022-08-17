import React from "react";

import "./Banner.css";

function Banner() {
  const titles = {
    textAlign: "center",
    marginBottom: "50px",
    fontSize: "60px",
  };

  return (
    <div className="banner">
      <h1 style={titles}>
        {" "}
        <span className="span-in">IN- </span>ACTION
      </h1>
      <h2>FIGURAS DE ACCIÓN Y COLLECIONABLES</h2>
    </div>
  );
}

export default Banner;
