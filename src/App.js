import logo from "./logo.svg";
import "./App.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Routes from "./Routes";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function App() {
  ReactDOM.render(
    <Router>
      <div className="App">
        <Navigation />
        <Routes />
      </div>
    </Router>,
    document.getElementById("root")
  );

  const navigateProfile = () => {
    let navigate = useNavigate();
    console.log("navigated to profile");
  };

  const navigateSearch = () => {
    let navigate = useNavigate();
    console.log("navigated to search");
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
        </ul>
      </nav>
      <header className="App-header">
        <h1> Welcome!</h1>
      </header>
      <center>
        <div class="typed-out">
          Welcome to Food Recipe Search, the best place to find recipes that
          meet your nutritional needs.
        </div>
      </center>
      &nbsp;
      {/* need to fix button functionality */}
      <div className="side-buttons">
        <center>
          <button onClick={navigateProfile}> Profile </button>
          <button onClick={navigateSearch}> Recipe Search </button>{" "}
        </center>
      </div>
      <center>
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
        &nbsp;
      </center>
      <form className="search">
        <input type="text" placeholder="Search for a recipe" />
        <input className="submit" type="submit" value="Go"></input>
      </form>
    </div>
  );
}

export default App;
