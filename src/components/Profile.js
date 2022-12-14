import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
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
        &nbsp;
        <div className="typed-out">Hello, name, these are your preferences</div>
        &nbsp;
        <div className="card">
          <label>
            <b> Preferences </b>
          </label>
          &nbsp;
          <p> Vegan</p>
        </div>
        &nbsp;
        <div className="card">
          <label>
            <b> Saved Recipes </b>
          </label>
          <br />

          <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcooking.nytimes.com%2Frecipes%2F12965-spaghetti-carbonara&psig=AOvVaw2DTUdLEqB8hq_kiUeTBmwv&ust=1668315004431000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLCN-evrp_sCFQAAAAAdAAAAABAD">
            Spaghetti Carbonara
          </a>
        </div>
      </center>
    </div>
  );
};

export default Profile;
