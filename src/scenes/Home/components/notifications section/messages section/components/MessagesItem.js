import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class MessagesItem extends Component {
	constructor(props) {
		super(props);

		this.readMessage = this.readMessage.bind(this);
		this.state = {
			isUnreaded: true
		};
	}

	readMessage() {
		if (this.props.obj.unreaded) {
			this.props.obj.unreaded = false;
			this.setState({
				isUnreaded: false
			});
		}
	}

	render() {
		const obj = this.props.obj;

		return (
			<li
				className={`content-item users-message ${obj.unreaded &&
					this.state.isUnreaded &&
					"active"}`}
			>
				<a href="">
					<img
						src={obj.url}
						alt="user-img"
						style={{ width: 50, height: 50 }}
						className="content-item-img"
					/>
				</a>
				<div className="content-item-message">
					<span className="content-item-user">
						<a href="">{obj.user}</a>
					</span>
					<span className="content-item-time">
						<span>{obj.time}</span>
					</span>
					<p>{obj.message}</p>
					<Link to="/home" onClick={this.readMessage}>
						<i className="fa fa-reply fa-fw" aria-hidden="true" />
						<span className="sr-only">Reply</span>
					</Link>
					<a href="">
						<i className="fa fa-cog fa-fw" aria-hidden="true" />
						<span className="sr-only">Settings </span>
					</a>
				</div>
			</li>
		);
	}
}
