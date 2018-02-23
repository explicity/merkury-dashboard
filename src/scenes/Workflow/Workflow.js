import "./workflow.scss";

import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Container from "./components/Container";

import { Row } from "reactstrap";
import TaskImg from "./50x50.png";

class Workflow extends Component {
	render() {
		const listOne = [
			{
				title: "New website for JCD.pl",
				url: TaskImg,
				time: "5 days left",
				id: 1
			},

			{
				title: "Free PSD Template vol. 3 ",
				url: TaskImg,
				time: "5 days left",
				id: 2
			},

			{
				title: "New logo for Google",
				url: TaskImg,
				time: "5 days left",
				id: 3
			},

			{
				title: "New website for Windu.org",
				url: TaskImg,
				time: "5 days left",
				id: 4
			},

			{
				title: "Free PSD Template vol. 2",
				url: TaskImg,
				time: "5 days left",
				id: 5
			},

			{
				title: "Iconset Vol. 3",
				url: TaskImg,
				time: "5 days left",
				id: 6
			}
		];

		const listTwo = [
			{
				title: "New website for Apple",
				url: TaskImg,
				time: "1 day left",
				id: 7
			},

			{
				title: "Daily UI Kit",
				url: TaskImg,
				time: "5 days left",
				id: 8
			},

			{
				title: "New logo for JCD.pl",
				url: TaskImg,
				time: "2 days delays",
				id: 9,
				isDelayed: true
			}
		];

		const listThree = [
			{
				title: "Free PSD Template vol. 1",
				url: TaskImg,
				time: "2 days left",
				id: 10
			},

			{
				title: "Iconset vol. 1",
				url: TaskImg,
				time: "5 days left",
				id: 11
			},

			{
				title: "New website for Symu.co",
				url: TaskImg,
				time: "2 days left",
				id: 12
			},

			{
				title: "Iconset vol. 2",
				url: TaskImg,
				time: "2 days left",
				id: 13
			}
		];
		return (
			<div className="container">
				<Row>
					<Container id={1} list={listOne} heading="To Do" />
					<Container id={2} list={listTwo} heading="In Progress" />
					<Container id={3} list={listThree} heading="Completed" />
				</Row>
			</div>
		);
	}
}

export default DragDropContext(HTML5Backend)(Workflow);
