import React, { Component } from "react";

import MessagesItem from "./messages section/MessagesItem.js";

import User1 from "./../../../public/img/user1.png";
import User2 from "./../../../public/img/user2.png";

export default class MessagesSection extends Component {
	render() {
		const messagesData = [
			{
				id: 1,
				url: User1,
				user: "Nina Jones",
				time: "5 minutes ago",
				message: "Hey You! It’s me again :-) I attached new (...)"
			},

			{
				id: 2,
				url: User1,
				user: "Nina Jones",
				time: "About 20 hours ago",
				message: "Hey! I attached some new PSD files for (...)"
			},

			{
				id: 3,
				url: User2,
				user: "James Smith",
				time: "2 days ago",
				message: "Good morning, you are fired!"
			},

			{
				id: 4,
				url: User1,
				user: "Nina Jones",
				time: "About 2 weeks ago",
				message: "Hello! Could You bring me coffee please?"
			}
		];

		return (
			<div className="content">
				<div className="content-header">
					<h3 className="content-header-title">Messages</h3>
					<div>
						<span className="badge badge-primary">2</span>
					</div>
				</div>
				<MessagesItem obj={messagesData} />
			</div>
		);
	}
}
