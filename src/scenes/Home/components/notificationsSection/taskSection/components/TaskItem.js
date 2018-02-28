import React, { Component } from 'react';

import ItemDropdown from '../../../../../../components/dropdown/itemDropdown/ItemDropdown.js';

export default class TaskItem extends Component {
	render() {
		const item = this.props.item;

		return (
			<div className="content-item">
				<img
					src={item.url}
					alt="todo-img"
					style={{ width: 50, height: 50 }}
					className="content-item-img"
				/>
				<div className="row">
					<div>
						<h4>
							<a className="content-item-title">{item.title}</a>
						</h4>
						{this.props.listId === 3 ? (
							<div className="content-item-time completed">
								<i className="fa fa-check-circle-o" />{' '}
								<span>Completed!</span>
							</div>
						) : (
							<div className="content-item-time">
								<i className="fa fa-clock-o fa-fw" />
								<span
									className={`${item.isDelayed && 'active'}`}
								>
									{item.time}
								</span>
							</div>
						)}
					</div>
					<ItemDropdown />
				</div>
			</div>
		);
	}
}
