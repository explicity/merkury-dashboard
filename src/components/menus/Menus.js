import React, { Component } from "react";

import Sidebar from "./components/Sidebar/Sidebar.js";
import Navigation from "./components/Navigation/Navigation.js";

export default class Menus extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<Sidebar />
			</div>
		);
	}
}
