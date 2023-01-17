import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import RecipeSearch from "./components/RecipeSearch";
import Login from "./Login";
import Dropdown from "./components/Dropdown";

function App() {

  const onSumbit = () => {
    console.log()
} 
 

  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/RecipeSearch" element={<RecipeSearch />} />
            <Route exact path="/Login" element={<Login />}>
            </Route>
          </Routes>
        </Router>
      </>

    </div>
  );
};

export default App;
