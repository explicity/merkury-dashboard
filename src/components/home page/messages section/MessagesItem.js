import React, { Component } from "react";

import _map from "lodash/map";

export default class MessagesItem extends Component {
	render() {
		return (
			<ul>
				{_map(this.props.obj, item => (
					<li
						key={item.id}
						className={`content-item users-message ${
							item.id === 1 || item.id === 2 ? "active" : ""
						}`}
					>
						<a href="">
							<img
								src={item.url}
								alt="user-img"
								style={{ width: 50, height: 50 }}
								className="content-item-img"
							/>
						</a>
						<div className="content-item-message">
							<span className="content-item-user">
								<a href="">{item.user}</a>
							</span>
							<span className="content-item-time">
								<span>{item.time}</span>
							</span>
							<p>{item.message}</p>
							<a href="">
								<i
									className="fa fa-reply fa-fw"
									aria-hidden="true"
								/>
								<span className="sr-only">Reply</span>
							</a>
							<a href="">
								<i
									className="fa fa-cog fa-fw"
									aria-hidden="true"
								/>
								<span className="sr-only">Settings </span>
							</a>
						</div>
					</li>
				))}
			</ul>
		);
	}
}
