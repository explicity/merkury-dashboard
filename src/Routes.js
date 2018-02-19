import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signup from "./scenes/Sign/Signup.js";
import Menus from "./components/menus/Menus.js";
import HomePage from "./scenes/Home/HomePage.js";
import Workflow from "./scenes/Workflow/WorkFlow.js";
import Calendar from "./scenes/Calendar/Calendar.js";
import Users from "./scenes/Users/Users.js";

export default class Routes extends Component {
	render() {
		const DefaultLayout = ({ component: Component }) => {
			return (
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
		};

		return (
			<Router>
				<Switch>
					<Route exact={true} path="/" component={Signup} />
					<DefaultLayout path="/home" component={HomePage} />
					<DefaultLayout path="/calendar" component={Calendar} />
					<DefaultLayout path="/workflow" component={Workflow} />
					<DefaultLayout path="/users" component={Users} />
				</Switch>
			</Router>
		);
	}
}
