import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";
import Explore from "../Routes/Explore";
import Search from "../Routes/Search";
import Profile from "../Routes/Profile";

const LoggedInRoutes = () => (
  <Switch>
    <Route path="/" exact component={Feed} />
    <Route path="/explore" component={Explore} />
    <Route path="/search" component={Search} />
    <Route path="/:username" component={Profile} />
    <Redirect from="*" to="/" />
  </Switch>
);
const LoggedOutRoutes = () => (
  <Switch>
    <Route path="/" exact component={Auth} />
    <Redirect from="*" to="/" />
  </Switch>
);
const AppRouter = ({ isLoggedIn }) => {
  return (
    <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
  );
};

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;
