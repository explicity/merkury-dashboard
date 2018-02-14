import React, { Component } from "react";

import _map from "lodash/map";

import MessagesItem from "./components/MessagesItem.js";

import User1 from "./images/user1.png";
import User2 from "./images/user2.png";

export default class MessagesSection extends Component {
	render() {
		const messagesData = [
			{
				id: 1,
				url: User1,
				user: "Nina Jones",
				time: "5 minutes ago",
				message: "Hey You! It’s me again :-) I attached new (...)",
				unreaded: true
			},

			{
				id: 2,
				url: User1,
				user: "Nina Jones",
				time: "About 20 hours ago",
				message: "Hey! I attached some new PSD files for (...)",
				unreaded: true
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
			},

			{
				id: 5,
				url: User1,
				user: "Nina Jones",
				time: "About 2 weeks ago",
				message: "Hello! Could You bring me coffee please?"
			},

			{
				id: 6,
				url: User1,
				user: "Nina Jones",
				time: "About 2 weeks ago",
				message: "Hello! Could You bring me coffee please?"
			}
		];

		const unreadedMessages = messagesData.filter(
			item => item.unreaded === true
		).length;

		return (
			<div className="content">
				<div className="content-header">
					<h3 className="content-header-title">Messages</h3>
					<div>
						<span className="badge badge-primary">
							{unreadedMessages}
						</span>
					</div>
				</div>
				<ul>
					{_map(
						messagesData,
						(item, index) =>
							index < 4 && (
								<MessagesItem key={item.id} obj={item} />
							)
					)}
				</ul>
			</div>
		);
	}
}
