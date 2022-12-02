import React from "react";
import { Link } from "react-router-dom";

const RecipeSearch = () => {
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
        <form className="search">
          <input type="text" placeholder="Search for a recipe" />
          <input className="submit" type="submit" value="Go" />
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
