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
                <b> Recipe Spotlight: </b>
                <a href="https://www.edamam.com/results/recipe/?recipe=red-velvet-cake-1b6c2222c942fc2d3ab0554b8a12779b/red+velvet/vegetarian">
                  <img
                      src="https://edamam-product-images.s3.amazonaws.com/web-img/cda/cda4fc7495a2b0e13c4209bd6c7c2319.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCwUOQyXfPXQYFVkDo1XTzdPPQ3MjJHWi%2BVkSkOhsoqPAIgCzziW6Lp%2B3bTTHoMwaxAZ%2BWj9kVZeuth%2Bqv3RYxd9yAquQUIeBAAGgwxODcwMTcxNTA5ODYiDGMn24%2Feo3PMawnkESqWBfjQYIbDPPOTlGv%2BKwyaIQkFLsdhgqtLEPGBYazoNiuauQEDc7hwBrnQZPC%2Bx3%2FJ%2B3MmnpkMD5VS8MCytioKt%2FdqkcWgDnyKxrpcwJ82Y8uXNeisDD7jDLQY2BU%2Fm%2BNrmdVGgLIJoSytzrQOSfdhlZg7p5PRk3z89UAatZSipCT96PShVfb4j5KhnB4SOQNMx7PJe%2Bgz6ERtZUZy3FLzfZ1rmzRKS3UOwaVPfxK%2BQ3e722WiOUkfVvNOzSxvCt3xXLgcbaHksBcLiDoxiak6TrqI%2BQ3wE1VObxFi%2FwThYAexW%2BPrczvV2p2%2FVcA5whK%2BRLs%2BDP0wHNd06arIoXVCQ3iH0KkBsI8ZrwtlO6NP%2FgVoxnydI1RaZV%2Fpzdhv%2BiUSwtF%2FKysPnayaHMuIw%2FjVBDY%2Fiw6ozMdXvUyMA1GZeOAPlbyh8MxV09aokcA6uzy%2BbMUga%2FPhYJJYDM1uA4ygg2X0FkY64yBclgzFv9tMbMyRbIVFRgoJe6BcbSOBUxpfhp%2BoloO9wusbKA0tfkxmNlc0O0aacbJcIAyK6cwPVRMT%2BbcuucToKexarMLAWJjTRuaqARPgSZFy5HUfZjEebn5SG7MLEyHCrqkVI%2F7oEBUS5LRa%2BRceow4ta7PPIDaTINPto8Ulf3qXbmP4jniOvlFMILL8CSZURzXSYBgZUKZ3XwFPt%2FK8hcCcYjKLT5cV9IHyKGkS7yQ87FbL%2BtI%2FbheCsbf16Vlb7tdi3AwyxedP69l2VwEYdyqKmSGarG15q96YkwP9IAhxPwVJ04VgtIgtSS4sm%2BrshW7eca4AWeXCr%2BZVtM6OrJM70SFbfk5XY%2FtZVH9Y%2Bt8wlMdAZBwaW0v2bFsU8K%2Bt4TQRQWj0Lb7jqw5TimLEML3LlqEGOrEBRhug9wq2OvLkLGYqOpSiVfCGMhL75ZN37s8zhzEDU%2FjETDrY6d6%2FS4L9VWOno0Va0z0RcenAMTrPTy4C9qV6g2WTIZ6XSIX%2FC9cWRrWEjQWmTeFIMg9f49wZD%2B5WmIstRmx3qsZWUBwzF%2FrxtBAuBC38NZCYskY1%2BrbEAFTkbohj8jTp9PZCePFNWBUm4xQmIpYQRF0OXTkKUC1BZZ8oxDtH3SEa%2Bhqk1timmRCm4e%2F4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230330T163219Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDHNXPMFW%2F20230330%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6d823c76c8a7d396856769399a872492f0fe6c03778ec19011a5329ef131dfb8"
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
        <LoginForm handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default Home;
