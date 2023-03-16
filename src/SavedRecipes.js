import React from "react";

function SavedRecipes({ savedRecipes }) {
  return (
    <div>
      <h2>Saved Recipes</h2>
      <ul>
        {savedRecipes.map((recipe) => (
          <li key={recipe["recipe"]["shareAs"]}>
            <a href={recipe["recipe"]["shareAs"]}>
              {recipe["recipe"]["label"]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SavedRecipes;
