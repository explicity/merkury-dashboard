import "./EmailListItem.scss";

import React, { Component } from "react";

export default class EmailListItem extends Component {
	render() {
		const obj = this.props.obj;

		return (
			<tr className="table-item">
				<th scope="row">
					<div className="table-name">
						<img
							src={obj.url}
							alt="user"
							style={{ width: 50, height: 50 }}
							className="table-name-img"
						/>
						<div>
							<a>{obj.name.main}</a>
							<p>{obj.name.secondary}</p>
						</div>
					</div>
				</th>
				<td
					className={`table-activity ${
						obj.activity === "Online now!" ? "active" : ""
					}`}
				>
					<i className="fa fa-clock-o fa-fw" />
					<span>{obj.activity}</span>
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
