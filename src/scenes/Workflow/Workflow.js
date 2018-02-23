import "./workflow.scss";

import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Container from "./components/Container";

import { Row } from "reactstrap";
import data from "./components/data.js";

class Workflow extends Component {
	render() {
		return (
			<div className="container">
				<Row>
					<Container id={1} list={data.listOne} heading="To Do" />
					<Container
						id={2}
						list={data.listTwo}
						heading="In Progress"
					/>
					<Container
						id={3}
						list={data.listThree}
						heading="Completed"
					/>
				</Row>
			</div>
		);
	}
}

export default DragDropContext(HTML5Backend)(Workflow);
