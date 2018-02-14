import React, { Component } from "react";

export default class ActivityItem extends Component {
	render() {
		const obj = this.props.obj;

		return (
			<li className="content-item users-activity">
				<a href="">
					<img
						src={obj.url}
						alt="user-img"
						style={{ width: 50, height: 50 }}
						className="content-item-img"
					/>
				</a>
				<div className="content-item-message">
					<div>
						<span className="content-item-user">
							<a href="">{obj.user} </a>
						</span>
						<span className="content-item-action">
							{obj.action}{" "}
						</span>
						<span className="content-item-project">
							<a>{obj.project}</a>
						</span>
					</div>
					<div className="content-item-time">
						<i className="fa fa-clock-o fa-fw" />
						<span>{obj.time}</span>
					</div>
				</div>
			</li>
		);
	}
}
