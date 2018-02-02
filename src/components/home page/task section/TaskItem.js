import React, { Component } from "react";

import _map from "lodash/map";

export default class TaskItem extends Component {
	render() {
		return (
			<ul>
				{_map(this.props.obj, item => (
					<li key={item.id} className="content-item">
						<img
							src={item.url}
							alt="todo-img"
							style={{ width: 50, height: 50 }}
							className="content-item-img"
						/>
						<div className="row">
							<div>
								<h4>
									<a className="content-item-title">
										{item.title}
									</a>
								</h4>
								<div className="content-item-time">
									<i className="fa fa-clock-o fa-fw" />
									<span
										className={`${
											item.id === 1 || item.id === 2
												? "active"
												: ""
										}`}
									>
										{item.time}
									</span>
								</div>
							</div>
							<button className="btn">
								<i className="fa fa-ellipsis-v" />
								<span className="sr-only">More options</span>
							</button>
						</div>
					</li>
				))}
			</ul>
		);
	}
}
