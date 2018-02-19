import React, { Component } from "react";

import _map from "lodash/map";

import EmailListItem from "./components/EmailListItem.js";

import User1 from "./images/user1.png";
import User2 from "./images/user2.png";
import User3 from "./images/user3.png";
import User4 from "./images/user4.png";
import User5 from "./images/user5.png";
import User6 from "./images/user6.png";
import User7 from "./images/user7.png";

export default class Users extends Component {
	render() {
		const emailList = [
			{
				url: User1,
				name: {
					main: "John Doe",
					secondary: "CEO"
				},
				activity: "Online now!",
				email: "johndoe design.com",
				phone: "(000) 111 222 333"
			},

			{
				url: User2,
				name: {
					main: "Nina Jones",
					secondary: "UX Designer"
				},
				activity: "Online now!",
				email: "ninajones design.com",
				phone: "(000) 111 222 333"
			},

			{
				url: User3,
				name: {
					main: "Alex Smith",
					secondary: "Web Designer"
				},
				activity: "Online now!",
				email: "alexsmith design.com",
				phone: "(000) 111 222 333"
			},

			{
				url: User4,
				name: {
					main: "Ann Clooney",
					secondary: "Account Manager"
				},
				activity: "20 minutes ago",
				email: "annclooney design.com",
				phone: "(000) 111 222 333"
			},

			{
				url: User5,
				name: {
					main: "Patric Smith",
					secondary: "Project Manager"
				},
				activity: "40 minutes ago",
				email: "patricksmith design.com",
				phone: "(000) 111 222 333"
			},

			{
				url: User6,
				name: {
					main: "Nicky Hunt",
					secondary: "Product Designer"
				},
				activity: "1 hour ago",
				email: "nickyhunt design.com",
				phone: "(000) 111 222 333"
			},

			{
				url: User7,
				name: {
					main: "Jane Doe",
					secondary: "Graphic Designer"
				},
				activity: "2 days ago",
				email: "janedoe design.com",
				phone: "(000) 111 222 333"
			}
		];

		return (
			<div className="container">
				<h2 className="section-title">
					Users <span>(128)</span>
				</h2>
				<div className="table-responsive">
					<table className="table table-bordered table-hover">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Last activity</th>
								<th scope="col">Mail</th>
								<th scope="col">Phone</th>
								<th scope="col" />
							</tr>
						</thead>
						<tbody>
							{_map(emailList, (item, index) => (
								<EmailListItem key={index} obj={item} />
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
