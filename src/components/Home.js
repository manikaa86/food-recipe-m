import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./Login";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (username, password) => {
    // Checks username and password here
    setUsername(username);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
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
      {isLoggedIn ? (
        <>
          <header className="App-header">
            <h1> Welcome, {username}!</h1>
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
                <b> Recipe of the Week: </b>
                <a href="https://www.edamam.com/results/recipe/?recipe=red-velvet-cake-1b6c2222c942fc2d3ab0554b8a12779b/red+velvet/vegetarian">
                  <img
                    src="https://edamam-product-images.s3.amazonaws.com/web-img/cda/cda4fc7495a2b0e13c4209bd6c7c2319.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLWVhc3QtMSJHMEUCIDN4TLEXzcbC%2BFqIwB4i0JTYRi4eN6t4uj6Gp0e3GTjBAiEA74S%2Bzu00aVEJkcXERB7f4OsmuDvpp5sOX%2FLlYQKP4wMquQUIHxAAGgwxODcwMTcxNTA5ODYiDFdLPnqqge%2Fki2RZmSqWBZbkkGL0ws7x8XThGzTuwYDcb8afYtUXKWRgVH0eZ1v9Lg7Tf3hsURpXoYmtLa1mRFeyHqwH9SvXuv1cPeUtD1UXkAmUV5i1JKkQWXXW5ps3GWpdNoMC%2Fj2JsmcdSAoJtracWuv6Xfy1ZHv%2FXo1pkcoZ1x6FM2S0ac7%2F7n%2BT50PFIRAE3oknHMNBBLI%2FOR1S7gZtKJWYs7fANogaK95dtH6IJClH2%2BqtnR7bsRGeO0F14jT%2BI3CX1FaD%2F9qcO%2BzEvual1%2BZw%2FFvXzHF3KfwDSqn5ubzbPCd3FxZ9CAqiuxys6kmGl2Fv9HSrfbuyD2%2FHA5qrna%2BnRpdbRkj7vGKMZsFuIkKnGZPZtt90zKtJrx8uSsf74QWCeZkAowsAMsLWYLhI5JPzg%2FhFztAeVwcikE8DmerzSXQE%2FcLsa3Bl9S%2FGjUMYd2yV5QM768THZk5BfkuFpOYuSLzG5w2HXxhwjvhC0e2E6ei8bSiGkF5KW3pxD4xdgPJpxY%2Fo5Xike0VZYSeujhfAetEdWhMObN5oWAi6Shaf5TiiFedemUKygRF3oCjT7zmd70r4un%2BIMvtZ9nq7rgkpOsvCYmmap4nR3BQbi9LgyDAzzgewqKyc%2BrTi8vRUq5Xc%2BswAXELQqwe3RgXbV2TcqDY%2F8uOq2QvPpU9jTWKBSzwBriG5fWo6eznqxtDyKkto7V5Nx7bitF1WGf0rbdLlR0o7Z773ui2xXUH0Eg7p3UVD9BPEXiNQ5ewAUinH590sAJaGvo7TTm6%2FtbmdOQiGHPhzqtbQRVERUTs0zzR%2Bve%2FEU8zyv4I2uY9O4OdpRdNNsf0omfugUSnUNkW9H8xBa04JKEy%2FFsNjz5P%2BOZCgL3W23j2l5PmLZt5X%2BW3qI%2BXXMIWVzqAGOrEBd4s9uzbUX3D1i4tif7rE1UqB%2Fcd%2BPBQaVXd%2FEIFwt8QrkAy3C6HZJf7S0dpJOsjGu6mx2Ai2bec7qfV2BEeqwLlmOP7%2FfOL0YS0dyZg96ApnNh4yqnYaQDoND0G%2F522leCrSIChqez14o8UO4xE6Sr64%2FZT6hfpamLBw5yyknogbuj8e2zp15X6mU7ogVXmmw%2BkZQ472uPuJtItqQE3A64gFiRyjdGZw%2BPNBe2dEUqFB&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230316T224034Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPIXOXDX7%2F20230316%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ff933a8e719963794d7a60f85a4cc717bba58d466bf14c80c93622374b5ce533"
                    width="250"
                    height="250"
                  />
                </a>
              </label>
            </div>
            <button onClick={handleLogout}>Logout</button>
          </center>
        </>
      ) : (
        <center>
          <LoginForm handleLogin={handleLogin} />
        </center>
      )}
    </div>
  );
};

export default Home;
