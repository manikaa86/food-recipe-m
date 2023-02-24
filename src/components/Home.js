import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Home = () => {
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
  const navSignup = () => {
    console.log("navigated to signup");
  };

  const navLogin = () => {
    console.log("navigated to login");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    localStorage.setItem(
      data.email,
      JSON.stringify({
        name: data.name,
        password: data.password,
      })
    );
    console.log(JSON.parse(localStorage.getItem(data.email)));
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
        <h1> Welcome!</h1>
      </header>
      <center>
        &nbsp;
        <div className="typed-out">
          Welcome to Food Recipe Search, the best place to find recipes that
          meet your nutritional needs.
        </div>
        <div className="buttons">
          <center>
            <button onClick={navSignup}> Sign Up </button>
            <button onClick={navLogin}> Log in </button>
          </center>
        </div>
        <p className="title"> Registration Form</p>
        <center>
          <form class="search" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Enter your full name"
              {...register("name")}
            />
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span style={{ color: "red" }}>
                Please enter your email to proceed
              </span>
            )}
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
            <input className="submit" type="submit" value="Submit" />
          </form>
        </center>
        &nbsp;
        <div className="card">
          <label>
            <b> Recipe of the Week: </b>
          </label>
          <p> Spaghetti Carbonara! Click on the image to learn more</p>
          <center>
            <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcooking.nytimes.com%2Frecipes%2F12965-spaghetti-carbonara&psig=AOvVaw2DTUdLEqB8hq_kiUeTBmwv&ust=1668315004431000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLCN-evrp_sCFQAAAAAdAAAAABAD">
              <img
                src="https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-articleLarge-v2.jpg"
                width="299"
                height="210"
              />
            </a>
          </center>
        </div>
      </center>
    </div>
  );
};

export default Home;
