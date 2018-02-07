import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from "react-router-dom";

import Signup from "./components/Signup.js";
import Menus from "./components/Menus.js";
import HomePage from "./components/HomePage.js";
import WorkFlow from "./components/WorkFlow.js";
import Calendar from "./components/Calendar.js";

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
					<DefaultLayout path="/statistics" component={WorkFlow} />
					<DefaultLayout path="/workflow" component={WorkFlow} />
					<DefaultLayout path="/calendar" component={Calendar} />
					<DefaultLayout path="/users" component={WorkFlow} />
					<DefaultLayout path="/settings" component={WorkFlow} />
				</Switch>
			</Router>
		);
	}
}
