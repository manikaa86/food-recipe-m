import React from "react";
import "./Grid.css";

export default function Grid({ recipe }) {
  return (
    <div className="grid">
      <img className="recipe-image" src={recipe["recipe"]["image"]} />
      <p className="recipe-name"> {recipe["recipe"]["label"]} </p>
    </div>
  );
}
