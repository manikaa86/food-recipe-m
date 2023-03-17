import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import Grid from "../Grid";

const RecipeSearch = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
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
  const [selected, setSelected] = useState(healthLabels[0]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const APP_ID = "68ed0003";
  const APP_KEY = "580ae88643b5921536f45145d70c0152";

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    setSavedRecipes(savedRecipes);
  }, []);

  const saveRecipe = (recipe) => {
    const savedRecipes = [...savedRecipes, recipe];
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
    setSavedRecipes(savedRecipes);
  };

  const removeRecipe = (recipe) => {
    const savedRecipes = savedRecipes.filter(
      (savedRecipe) => savedRecipe.recipe.uri !== recipe.recipe.uri
    );
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
    setSavedRecipes(savedRecipes);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  const getRecipes = async () => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${selected}`;
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    localStorage.setItem("searchQuery", query);
    localStorage.setItem("searchResults", JSON.stringify(result.data.hits));
    setIsLoaded(true);
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
        <h1> Recipe Search</h1>
      </header>

      <center>
        <h4>Search for a recipe below</h4>

        <form className="search" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Search for a recipe"
            value={query}
            onChange={(a) => setQuery(a.target.value)}
          />
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
          <input className="submit" type="submit" value="go" />
        </form>
        <div className="recipe-grid">
          {recipes.map((recipe) => {
            const savedRecipes =
              JSON.parse(localStorage.getItem("savedRecipes")) || [];
            const saved = savedRecipes.some(
              (savedRecipe) => savedRecipe.recipe.uri === recipe.recipe.uri
            );
            return (
              <Grid
                recipe={recipe}
                key={recipe.recipe.uri}
                onSave={(saved) => {
                  if (saved) {
                    savedRecipes.push(recipe);
                    localStorage.setItem(
                      "savedRecipes",
                      JSON.stringify(savedRecipes)
                    );
                  } else {
                    const index = savedRecipes.findIndex(
                      (savedRecipe) =>
                        savedRecipe.recipe.uri === recipe.recipe.uri
                    );
                    if (index !== -1) {
                      savedRecipes.splice(index, 1);
                      localStorage.setItem(
                        "savedRecipes",
                        JSON.stringify(savedRecipes)
                      );
                    }
                  }
                }}
                onRemove={(removedRecipe) => {
                  const savedRecipes =
                    JSON.parse(localStorage.getItem("savedRecipes")) || [];
                  const index = savedRecipes.findIndex(
                    (savedRecipe) =>
                      savedRecipe.recipe.uri === removedRecipe.recipe.uri
                  );
                  if (index !== -1) {
                    savedRecipes.splice(index, 1);
                    localStorage.setItem(
                      "savedRecipes",
                      JSON.stringify(savedRecipes)
                    );
                  }
                }}
                saved={saved}
              />
            );
          })}
        </div>
      </center>
    </div>
  );
};

export default RecipeSearch;
