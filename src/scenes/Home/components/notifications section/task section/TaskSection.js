import React, { Component } from "react";

import _map from "lodash/map";

import TaskItem from "./components/TaskItem.js";

import TaskImg from "./50x50.png";

export default class TaskSection extends Component {
	render() {
		const taskData = [
			{
				title: "New website for Symu.co",
				url: TaskImg,
				time: "5 days delays",
				id: 1,
				isDelayed: true
			},

			{
				title: "Free business PSD Template ",
				url: TaskImg,
				time: "2 days delays",
				id: 2,
				isDelayed: true
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
			},

			{
				title: "Free Icons Set vol. 3",
				url: TaskImg,
				time: "10 days left",
				id: 5
			}
		];

		const delayedTasks = taskData.filter(item => item.isDelayed === true)
			.length;

		const allTasks = taskData.length;

		return (
			<div className="content">
				<div className="content-header">
					<h3 className="content-header-title">Tasks</h3>
					<div>
						<span className="badge badge-primary">{allTasks}</span>
						<span className="badge badge-secondary">
							{delayedTasks}
						</span>
					</div>
				</div>
				<ul>
					{_map(
						taskData,
						(item, index) =>
							index < 4 && <TaskItem key={item.id} obj={item} />
					)}
				</ul>
			</div>
		);
	}
}
