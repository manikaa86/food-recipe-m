import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome!</h1>
      </header>
      <form className="search">
        <input type="text" placeholder="Search for a recipe" />
        <input className="submit" type="submit" value="Go"></input>
      </form>
    </div>
  );
}

export default App;
