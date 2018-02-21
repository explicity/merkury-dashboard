import "./EmailListItem.scss";

import React, { Component } from "react";

import { Badge } from "reactstrap";

export default class EmailListItem extends Component {
	render() {
		const obj = this.props.obj;

		return (
			<tr className="table-item">
				<th scope="row">
					<div className="username">
						<a href="/users" className="username-logo">
							<img
								src={obj.url}
								alt="user"
								style={{ width: 50, height: 50 }}
							/>
							{obj.online && <Badge color="success"> </Badge>}
						</a>
						<div>
							<a>{obj.name.main}</a>
							<p className="username-secondary">
								{obj.name.secondary}
							</p>
						</div>
					</div>
				</th>
				<td
					className={`table-item-activity ${
						obj.online ? "active" : ""
					}`}
				>
					<i className="fa fa-clock-o fa-fw" />
					<span>{obj.online ? "Online now!" : obj.activity}</span>
				</td>
				<td>{obj.email}</td>
				<td>{obj.phone}</td>
				<td className="text-center">
					<button className="btn">
						<i className="fa fa-ellipsis-v" />
						<span className="sr-only">More options</span>
					</button>
				</td>
			</tr>
		);
	}
}
