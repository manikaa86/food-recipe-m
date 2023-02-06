import React from "react";
import "./Grid.css";

export default function Grid({ recipe }) {
  return (
    <div className="grid">
      {/* <img className="recipe-image" src={recipe["recipe"]["image"]} /> */}

      <p><a href= {recipe["recipe"]["shareAs"]}><img src={recipe["recipe"]["image"]}/></a></p>

      <p className="recipe-name"> {recipe["recipe"]["label"]} </p>
    </div>
  );
}
