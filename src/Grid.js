import { useState } from "react";
import "./Grid.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Grid({ recipe }) {
  const [saved, setSaved] = useState(false);

  const handleSaveClick = () => {
    setSaved(!saved);
  };

  return (
    <div className="grid">
      <p>
        <a href={recipe["recipe"]["shareAs"]}>
          <img className="recipe-image" src={recipe["recipe"]["image"]} />
        </a>
      </p>
      <p className="recipe-name">
        {recipe["recipe"]["label"]}{" "}
        <button
          className={`save-button ${saved ? "saved" : ""}`}
          onClick={handleSaveClick}
          title={saved ? "Saved" : "Save"}
        >
          <i className="fa fa-star"></i>
        </button>
      </p>
    </div>
  );
}
