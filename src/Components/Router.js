import {HashRouter as Router, Route, Switch} from "react-router-dom";
import React from 'react';
import PropTypes from 'prop-types';
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";

const LoggedInRoutes = () => <><Route path="/" exact component={Feed} /></>;
const LoggedOutRoutes = () => <><Route path="/" exact component={Auth} /></>;
const AppRouter = ({isLoggedIn}) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
      </Switch>
    </Router>
  );
};

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;