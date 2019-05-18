import React, { Component } from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ComicPage from "./pages/ComicPage";
import UserPage from "./pages/UserPage";


class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact component={Login} />
          <Route path={'/register'} exact component={Register} />
          <Route path={'/home'} exact component={Home} />
          <Route path={'/comicPage'} exact component={ComicPage} />
          <Route path={'/userPage'} exact component={UserPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
