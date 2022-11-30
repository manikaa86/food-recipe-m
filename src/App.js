import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import RecipeSearch from "./components/RecipeSearch";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

function App() {
  const navigateProfile = () => {
    console.log("navigated to profile");
  };

  const navigateSearch = () => {
    console.log("navigated to search");
  };

  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/RecipeSearch" element={<RecipeSearch />} />
          </Routes>
        </Router>
      </>
      &nbsp;
      {/* need to fix button functionality */}
      {/* <div className="side-buttons">
        <center>
          <button onClick={navigateProfile}> Profile </button>
          <button onClick={navigateSearch}> Recipe Search </button>{" "}
        </center>
      </div> */}
      <center>
        &nbsp;
        
        &nbsp;
      </center>
    </div>
  );
}

export default App;
