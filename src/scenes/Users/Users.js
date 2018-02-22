import "./Users.scss";

import React, { Component } from "react";

import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import _map from "lodash/map";

import MainDropdown from "./../../components/dropdown/MainDropdown.js";

import EmailListItem from "./components/EmailListItem.js";

import User1 from "./images/user1.png";
import User2 from "./images/user2.png";
import User3 from "./images/user3.png";
import User4 from "./images/user4.png";
import User5 from "./images/user5.png";
import User6 from "./images/user6.png";
import User7 from "./images/user7.png";

export default class Users extends Component {
	constructor(props) {
		super(props);

		this.updateData = this.updateData.bind(this);
		this.state = {
			openDropdown: false,
			activeTab: "Active first"
		};
	}

	updateData = value => {
		this.setState({ activeSort: value });
	};

	render() {
		const emailList = [
			{
				url: User1,
				name: {
					main: "John Doe",
					secondary: "CEO"
				},
				online: true,
				activity: "",
				email: "johndoe@design.com",
				phone: "(000) 111 222 333"
			},

			{
				url: User2,
				name: {
					main: "Nina Jones",
					secondary: "UX Designer"
				},
				online: true,
				activity: "",
				email: "ninajones@design.com",
				phone: "(000) 111 222 333"
			},

			{
				url: User3,
				name: {
					main: "Alex Smith",
					secondary: "Web Designer"
				},
				online: true,
				activity: "",
				email: "alexsmith@design.com",
				phone: "(000) 111 222 333"
			},

			{
				url: User4,
				name: {
					main: "Ann Clooney",
					secondary: "Account Manager"
				},
				activity: "20 minutes ago",
				email: "annclooney@design.com",
				phone: "(000) 111 222 333"
			},

			{
				url: User5,
				name: {
					main: "Patric Smith",
					secondary: "Project Manager"
				},
				activity: "40 minutes ago",
				email: "patricksmith@design.com",
				phone: "(000) 111 222 333"
			},

			{
				url: User6,
				name: {
					main: "Nicky Hunt",
					secondary: "Product Designer"
				},
				activity: "1 hour ago",
				email: "nickyhunt@design.com",
				phone: "(000) 111 222 333"
			},

			{
				url: User7,
				name: {
					main: "Jane Doe",
					secondary: "Graphic Designer"
				},
				activity: "2 days ago",
				email: "janedoe@design.com",
				phone: "(000) 111 222 333"
			}
		];

		return (
			<div className="users">
				<div className="container">
					<div className="section-header">
						<h2 className="section-header-title">
							Users <span>(128)</span>
						</h2>
						<MainDropdown
							action="Sort"
							activeTab="Active first"
							anotherTab="By A-Z"
							updateData={this.updateData}
						/>
					</div>
					<div className="table-responsive-lg">
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
					<Pagination>
						<PaginationItem active>
							<PaginationLink href="/users">1</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="/users">2</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="/users">3</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="/users">4</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="/users">5</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink
								className="pagination-controls"
								next
								href="#"
							>
								<i className="fa fa-chevron-right" />
							</PaginationLink>
						</PaginationItem>
					</Pagination>
				</div>
			</div>
		);
	}
}
