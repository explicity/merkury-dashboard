import React,  { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Signup from './components/Signup.js';
import Menus from './components/Menus.js';

export default class Routes extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact={true} path="/" component={Signup} />
					<Route path="/home" component={Menus} />
				</Switch>
			</Router>
		)
	}
}