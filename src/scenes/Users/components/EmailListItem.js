import './EmailListItem.scss';

import React, { Component } from 'react';

import { Badge } from 'reactstrap';

import ItemDropdown from './../../../components/dropdown/itemDropdown/ItemDropdown.js';

export default class EmailListItem extends Component {
	render() {
		const user = this.props.user;

		return (
			<tr className="table-item">
				<th scope="row">
					<div className="username">
						<a href="/users" className="username-logo">
							<img
								src={user.url}
								alt="user"
								style={{ width: 50, height: 50 }}
							/>
							{user.online && <Badge color="success"> </Badge>}
						</a>
						<div>
							<a>{user.name.main}</a>
							<p className="username-secondary">
								{user.name.secondary}
							</p>
						</div>
					</div>
				</th>
				<td
					className={`table-item-activity ${
						user.online ? 'active' : ''
					}`}
				>
					<i className="fa fa-clock-o fa-fw" />
					<span>{user.online ? 'Online now!' : user.activity}</span>
				</td>
				<td>{user.email}</td>
				<td>{user.phone}</td>
				<td className="text-center">
					<ItemDropdown />
				</td>
			</tr>
		);
	}
}
