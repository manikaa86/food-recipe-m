import logo from "./logo.svg";
import "./App.css";

function App() {
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
      <div className="side-buttons">
        <button> Profile </button>
        <button> Recipe Search </button>
      </div>
      <center>
        <div className="card">
          <label>
            <b> Recipe of the Week </b>
          </label>
          <center>
            <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcooking.nytimes.com%2Frecipes%2F12965-spaghetti-carbonara&psig=AOvVaw2DTUdLEqB8hq_kiUeTBmwv&ust=1668315004431000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLCN-evrp_sCFQAAAAAdAAAAABAD">
              <img
                src="https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-articleLarge-v2.jpg"
                width="299"
                height="210"
              />
            </a>{" "}
          </center>
        </div>
      </center>

      <form className="search">
        <input type="text" placeholder="Search for a recipe" />
        <input className="submit" type="submit" value="Go"></input>
      </form>
    </div>
  );
}

export default App;
