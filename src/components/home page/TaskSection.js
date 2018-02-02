import "./../../styles/layout/_home-sections.scss";

import React, { Component } from "react";

import TaskItem from "./task section/TaskItem.js";

import TaskImg from "./../../../public/img/50x50.png";

export default class TaskSection extends Component {
	render() {
		const taskData = [
			{
				title: "New website for Symu.co",
				url: TaskImg,
				time: "5 days delays",
				id: 1
			},

			{
				title: "Free business PSD Template ",
				url: TaskImg,
				time: "2 days delays",
				id: 2
			},

			{
				title: "New logo for JCD.pl",
				url: TaskImg,
				time: "5 days left",
				id: 3
			},

			{
				title: "Free Icons Set vol. 3",
				url: TaskImg,
				time: "10 days left",
				id: 4
			}
		];

		return (
			<div className="content">
				<div className="content-header">
					<h3 className="content-header-title">Tasks</h3>
					<div>
						<span className="badge badge-primary">5</span>
						<span className="badge badge-secondary">2</span>
					</div>
				</div>
				<TaskItem obj={taskData} />
			</div>
		);
	}
}
