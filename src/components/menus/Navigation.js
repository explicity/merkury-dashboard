import React, { Component } from "react";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

import Avatar from "./../../../public/img/user.jpg";

export default class Navigation extends Component {
	constructor(props) {
		super(props);

		this.toggleDropdown = this.toggleDropdown.bind(this);
		this.toggleSidebar = this.toggleSidebar.bind(this);
		this.state = {
			isSidebarOpen: false,
			dropdownOpen: false
		};
	}

	toggleSidebar(tab) {
		if (this.state.isSidebarOpen) {
			this.setState({
				isSidebarOpen: !this.state.isSidebarOpen
			});
			document.getElementById("aside").style.marginLeft = "-200px";
			document.getElementById("main").style.width = "100%";
			document.getElementById("nav").style.width = "100%";
		} else {
			this.setState({
				isSidebarOpen: !this.state.isSidebarOpen
			});
			document.getElementById("aside").style.marginLeft = "0";
			document.getElementById("main").style.width = "calc(100% - 200px)";
			document.getElementById("nav").style.width = "calc(100% - 200px)";
		}
	}

	toggleDropdown() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	render() {
		return (
			<header className="header" id="nav">
				<div className="navbar">
					<div
						className={`menu ${
							this.state.isSidebarOpen
								? "hvr-icon-back"
								: "hvr-icon-forward"
						}`}
						onClick={this.toggleSidebar}
					>
						<div className="menu-ico">
							<span className="sr-only">Open menu</span>
						</div>
					</div>

					<div className="header-main">
						<a className="btn btn-primary">
							<i className="fa fa-plus" aria-hidden="true" />
							<span>Add project</span>
						</a>
						<button className="header-main-btn">
							<i className="fa fa-envelope" aria-hidden="true" />
							<span className="sr-only">Mails</span>
						</button>
						<button className="header-main-btn">
							<div className="notification">
								<i className="fa fa-bell" aria-hidden="true" />
								<span className="badge badge-light">9</span>
								<span className="sr-only">Notifications</span>
							</div>
						</button>
						<Dropdown
							isOpen={this.state.dropdownOpen}
							toggle={this.toggleDropdown}
						>
							<DropdownToggle
								tag="span"
								onClick={this.toggleDropdown}
								data-toggle="dropdown"
								aria-expanded={this.state.dropdownOpen}
							>
								<div className="hvr-icon-hang">
									<span className="sr-only">User</span>
									<img
										src={Avatar}
										alt="user-avatar"
										style={{ width: 35, height: 35 }}
										className="avatar-img"
									/>
								</div>
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem>
									<Link to="">Log out</Link>
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
				</div>
			</header>
		);
	}
}
