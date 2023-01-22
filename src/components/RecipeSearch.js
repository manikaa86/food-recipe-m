import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

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

  const onSubmit = (e) => {
    e.preventDefault();
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
        <div className="typed-out">Search for a recipe below</div>
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

        <div className="card">
          <label>
            <b> Results </b>
          </label>
          <p> Spaghetti Carbonara</p>

          <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcooking.nytimes.com%2Frecipes%2F12965-spaghetti-carbonara&psig=AOvVaw2DTUdLEqB8hq_kiUeTBmwv&ust=1668315004431000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLCN-evrp_sCFQAAAAAdAAAAABAD">
            <img
              src="https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-articleLarge-v2.jpg"
              width="299"
              height="210"
            />
          </a>
        </div>
      </center>
    </div>
  );
};

export default RecipeSearch;
