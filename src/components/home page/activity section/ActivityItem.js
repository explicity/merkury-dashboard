import React, { Component } from "react";

import _map from "lodash/map";

export default class ActivityItem extends Component {
	render() {
		return (
			<ul>
				{_map(this.props.obj, item => (
					<li key={item.id} className="content-item users-activity">
						<a href="">
							<img
								src={item.url}
								alt="user-img"
								style={{ width: 50, height: 50 }}
								className="content-item-img"
							/>
						</a>
						<div className="content-item-message">
							<div>
								<span className="content-item-user">
									<a href="">{item.user} </a>
								</span>
								<span className="content-item-action">
									{item.action}{" "}
								</span>
								<span className="content-item-project">
									<a>{item.project}</a>
								</span>
							</div>
							<div className="content-item-time">
								<i className="fa fa-clock-o fa-fw" />
								<span>{item.time}</span>
							</div>
						</div>
					</li>
				))}
			</ul>
		);
	}
}
