import React, { Component } from "react";

import Sidebar from "./menus/Sidebar.js";
import Navigation from "./menus/Navigation.js";

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
