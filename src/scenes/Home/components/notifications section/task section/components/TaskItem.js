import React, { Component } from "react";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";

export default class TaskItem extends Component {
	render() {
		const obj = this.props.obj;

		return (
			<li className="content-item">
				<img
					src={obj.url}
					alt="todo-img"
					style={{ width: 50, height: 50 }}
					className="content-item-img"
				/>
				<div className="row">
					<div>
						<h4>
							<a className="content-item-title">{obj.title}</a>
						</h4>
						<div className="content-item-time">
							<i className="fa fa-clock-o fa-fw" />
							<span className={`${obj.isDelayed && "active"}`}>
								{obj.time}
							</span>
						</div>
					</div>

					<button className="btn">
						<i className="fa fa-ellipsis-v" />
						<span className="sr-only">More options</span>
					</button>
				</div>
			</li>
		);
	}
}
