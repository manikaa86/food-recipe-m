import React, { useState } from "react";
import "./Login.css";
import LoginForm from "./LoginForm";

const requireAuth = (Component) => {
  const AuthenticatedComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (username, password) => {
      if (username === "rory_g" && password === "password") {
        setIsLoggedIn(true);
      } else {
        alert("Incorrect credentials. Please try again.");
      }
    };

    const handleLogout = () => {
      setIsLoggedIn(false);
    };

    if (!isLoggedIn) {
      return <LoginForm handleLogin={handleLogin} />;
    }

    return <Component handleLogout={handleLogout} />;
  };

  return AuthenticatedComponent;
};

const Home = ({ handleLogout }) => {
  return (
    <div className="home">
      <>
        <header className="App-header">
          <h1> Welcome, Rory!</h1>
        </header>
        <center>
          &nbsp;
          <div className="typed-out">
            Welcome to Food Recipe Search, the best place to find recipes that
            meet your nutritional needs.
          </div>
          &nbsp;
          <div className="card">
            <label>
              <b> Recipe Spotlight: </b>
              <a href="https://www.edamam.com/results/recipe/?recipe=red-velvet-cake-1b6c2222c942fc2d3ab0554b8a12779b/red+velvet/vegetarian">
                <img
                  src="https://edamam-product-images.s3.amazonaws.com/web-img/cda/cda4fc7495a2b0e13c4209bd6c7c2319.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIETXJpCCUDc4WZ2hk%2FK0vH5zSshztq3HssU%2BSEM9EaFcAiEAkMvFJHrcbX%2BF8oRrdZ%2BlFLfHwYiHs1KCdGR84Z%2FWTrcqwgUIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDHkV%2F60UhNfBq8%2BuyiqWBSZGavCyJS0kxLOZjE5YBu0vilaIiAeMPI3tNLPlZlJY42dWJufSL56IhWWr2%2FpalDwLQgTpyinUL8iSIAUehDw6edXEsvN6hy%2BJ13vHvzbFTSKTrWN2TdgCD4zu%2F2ORjdqZNPzIWUk1aK5QHL6ONwroYvQU%2Fe3kkyblfanQSMfEKVUv54i6%2BzeXZuRBoo%2Bl10SJMcOU9MLqNUZ9r4T4K6%2Bz8PODRN69eLM9l44HBVgx6%2FlR%2FZFMFpQRf4DIWxm6QLcdvpIl3yyw571c1sHcFQ2bFxY105u4IBrxOg2gfKZmcSaiH9a0VA%2FqbDzWHEpsp8oNeM1yiJolXfiyocg413IVgqksFvUJRCGX8cwk3eVhcrV%2BErIOMeJhc0LEd3mqfIkNJ3ltFTUsDe1rm1ZwhYcYwoiKLDcPSy97OVBwm4XInXc5s%2FzvSxff9JqOpTtzALGO%2BSGPymnULh0LxW%2FUdRqBA3HWge76UOTrYwtsvHLLA8GsLlKf6RB0R5x6mEelfcA%2BaqIcf6rGHq01ttvba6DxKW6l7oPcvqcTCEG1Ee55fBs62lmHglGbgrcvg36ZMHxtq45tv19GmHnBE24pdHx3Im6MFkI2hIqxRLaqQYhkH5swq1z%2FYXk7GCmlD8aAvmZ0Hq6rLPI1gd3rh2YGhXfCxFjyvUzT22DkKNFDmnDqozlaz5AJ30QCgC4cSruiVedfAA4%2BUo9rkC0So2UP48eWSzbmT1ixSBTbqVNiXiKmYHYcRi9b%2FE4mkFqCIsHj4M38GIcYUgqZLiIfoh8Zq5xBU6RMxBp445RpZMSyARUZ761c93P6TN6L6%2FCsKfcqOExBbGNOaW6u%2FSDZm0drLeH0PwJsimvhsKQZprahmUW%2B8jIYT5MpMMXKmKEGOrEBID5tMxB4iYVfPpVxCax1wVP3LtP2lWZ%2F%2Ff7KmTsQ2Fa3h8DmvaW5dkIYxNUwDYaZft7fzRaQ1uFOySJOVHLk0J2Dk8UugwW5QLs%2F%2BpWLiu9I0FX%2BNE0SMkyw70n5ZlPihmc7HskYst%2BefQfIxUI58%2FeRIH3rKkoXBxAYfQbBG7BSeY4ZHMRnVXfby%2BeFU70XyXapF9j0EsBtVxG5vLBBMDOTgPtDb7o7ErxtY5HCSVEZ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230331T011022Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFE5LSK5QJ%2F20230331%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=11c1fda98ea98bddfb83624a31e0b4689ce0f3777a785f38c6d96fece6d72877"
                  width="250"
                  height="250"
                />
              </a>
            </label>
          </div>
          <button onClick={handleLogout}>Logout</button>
        </center>
      </>
    </div>
  );
};

export default requireAuth(Home);
