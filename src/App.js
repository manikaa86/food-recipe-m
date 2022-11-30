import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useForm } from "react-hook-form";
import Home from "./components/Home";
import Profile from "./components/Profile";
import RecipeSearch from "./components/RecipeSearch";
import Login from "./Login";

function App() {

  const {register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    localStorage.setItem(data.email, JSON.stringify({ 
        name: data.name, password: data.password 
    }));
    console.log(JSON.parse(localStorage.getItem(data.email)));
  };


  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/RecipeSearch" element={<RecipeSearch />} />
            <Route exact path="/login" element={<Login />}> </Route>
          </Routes>
        </Router>
      </>
      <p className="title">Registration Form</p>
      <center>
        <form className="App" onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("name")} />
          <input type="email" {...register("email", { required: true })} />
          {errors.email && <span style={{ color: "red" }}>
          Please enter your email to proceed </span>}
          <input type="password" {...register("password")} />
          <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
        </form>
      </center>
    </div>
  );
}

export default App;
