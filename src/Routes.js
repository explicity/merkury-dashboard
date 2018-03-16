import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  browserHistory
} from 'react-router-dom';

import Signup from './scenes/Sign/Signup.js';
import Menus from './components/menus/Menus.js';
import HomePage from './scenes/Home/HomePage.js';
import Workflow from './scenes/Workflow/WorkFlow.js';
import Calendar from './scenes/Calendar/Calendar.js';
import Users from './scenes/Users/Users.js';
import Statistics from './scenes/Statistics/Statistics.js';
import Settings from './scenes/Settings/Settings.js';

const Routes = () => {
  const DefaultLayout = ({ component: Component }) => (
    <Route
      render={matchProps => (
        <div>
          <Menus />
          <div className="main-layout" id="main">
            <Component {...matchProps} />
          </div>
        </div>
      )}
    />
  );

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={Signup} />
        <DefaultLayout path="/home" component={HomePage} />
        <DefaultLayout path="/calendar" component={Calendar} />
        <DefaultLayout path="/workflow" component={Workflow} />
        <DefaultLayout path="/users" component={Users} />
        <DefaultLayout path="/statistics" component={Statistics} />
        <DefaultLayout path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
};

export default Routes;
