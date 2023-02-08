import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import Grid from "../Grid";

const RecipeSearch = () => {
  const [query, setquery] = useState("");
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

  const APP_ID = "68ed0003";
  const APP_KEY = "580ae88643b5921536f45145d70c0152";

  var url = `https://api.edamam.com/search?q=${query}&app_id=68ed0003&app_key=${APP_KEY}&health=${selected}`;
  
  
  console.log(url);

  async function getRecipes() {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    await console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
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

     &nbsp;

      <center>
        <div className="typed-out">Search for a recipe below</div>
        &nbsp;

        <form className="search" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Search for a recipe"
            value={query}
            onChange={(a) => setquery(a.target.value)}
          />
          <input className="submit" type="submit" value="go" />

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
        </form>

        <div className="recipe-grid">
          {recipes.map((recipe) => {
            return <Grid recipe={recipe} />;
          })}
        </div>
      </center>
    </div>
  );
};

export default RecipeSearch;
