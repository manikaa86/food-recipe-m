import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Grid from "../Grid";
import "./Profile.css";

const Profile = () => {
  const healthLabels = [
    "vegetarian",
    "vegan",
    "alcohol-free",
    "dairy-free",
    "egg-free",
    "fish-free",
    "gluten-free",
    "wheat-free",
    "low-sugar",
    "pescatarian",
  ];
  const [selected, setSelected] = useState(healthLabels[5]);
  const [savedRecipes, setSavedRecipes] = useState(
    JSON.parse(localStorage.getItem("savedRecipes")) || []
  );

  const handleClearSavedRecipes = () => {
    localStorage.removeItem("savedRecipes");
    setSavedRecipes([]);
  };

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/recipesearch">Recipe Search</Link>
        </li>
      </ul>
      <header className="App-header">
        <h1> Profile</h1>
      </header>
      <center>
        <div className="typed-out">Hello, these are your saved preferences</div>
        &nbsp;
        <div className="container">
          <div className="card">
            <label>
              <b> Preferences </b>
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
              >
                {healthLabels.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>

            <p> {selected}</p>
          </div>
          &nbsp;
          <div className="saved-recipes-card">
            <h2 className="saved-recipes-header">Saved Recipes</h2>
            {savedRecipes.map((recipe, index) => (
              <div className="saved-recipe" key={index}>
                <img
                  src={recipe.recipe.image}
                  alt={recipe.recipe.label}
                  className="saved-recipe-image"
                />
                <p className="saved-recipe-name">{recipe.recipe.label}</p>
                <a
                  href={recipe.recipe.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="saved-recipe-link"
                >
                  View Recipe
                </a>
              </div>
            ))}
            <button onClick={handleClearSavedRecipes}>
              Clear Saved Recipes
            </button>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Profile;
