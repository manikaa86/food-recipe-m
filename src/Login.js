import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem(data.email));
    if (userData) {
      if (userData.password === data.password) {
        console.log(userData.name + "You are now logged in");
      } else {
        console.log("Email and Passowrd do not match");
      }
    } else {
      console.log("Email and Password do not match");
    }
  };
  return (
    <>
      <p className="title">Login Form</p>

      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span style={{ color: "red" }}>
         *Email* is mandatory </span>}
        <input type="password" {...register("password")} />
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  );
}
export default Login;