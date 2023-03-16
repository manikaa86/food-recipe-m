import { useState, useEffect } from "react";
import "./Grid.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Grid({ recipe, onSave, onRemove }) {
  const [saved, setSaved] = useState(false);

  const handleSaveClick = () => {
    const newSaved = !saved;
    setSaved(newSaved);
    if (onSave) {
      onSave(recipe, newSaved);
    }
  };

  const handleRemoveClick = () => {
    onRemove(recipe);
  };

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    const isSaved = savedRecipes.some((r) => r.recipe.uri === recipe.recipe.uri);
    setSaved(isSaved);
  }, [recipe]);

  return (
    <div className="grid">
      <p>
        <a href={recipe["recipe"]["shareAs"]}>
          <img className="recipe-image" src={recipe["recipe"]["image"]} />
        </a>
      </p>
      <p className="recipe-name">
        {recipe["recipe"]["label"]}{" "}
        {onRemove && (
          <button
            className="remove-button"
            onClick={handleRemoveClick}
            title="Remove"
          >
            <i className="fa fa-times"></i>
          </button>
        )}
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