import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import RecipeSearch from "./RecipeSearch/RecipeSearch";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Profile" component={Profile} />
          <Route path="/RecipeSearch" component={RecipeSearch} />
        </Switch>
      </Router>
    );
  }
}
