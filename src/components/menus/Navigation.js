import React,  { Component } from 'react';

export default class Navigation extends Component {
	constructor(props) {
	    super(props);

	    this.toggleSidebar = this.toggleSidebar.bind(this);
	    this.state = {
	      isSidebarOpen: true
	    };
	  }

	  toggleSidebar(tab) {
	    if (this.state.isSidebarOpen) {
	      this.setState({
	        isSidebarOpen: !this.state.isSidebarOpen
	      });
	      document.getElementById("aside").style.marginLeft = "-200px";
	      document.getElementById("main").style.width = "100%";
	    } else {
	      this.setState({
	        isSidebarOpen: !this.state.isSidebarOpen
	      });
	   	  document.getElementById("aside").style.marginLeft = "0";
    	  document.getElementById("main").style.width = "calc(100% - 200px)";
	    }
	}

	render() {
		return (
			<header className="header" id="main">
				<div className="navbar">
					<div className={`menu ${ this.state.isSidebarOpen ? 'hvr-icon-back' : 'hvr-icon-forward' }`} 
						 onClick={this.toggleSidebar}>
						<div className="menu-ico">
							<span className="menu-ico-label">Open menu</span>
						</div>
					</div>

					<div className="header-main">
						<a className="btn btn-primary">
							<i className="fa fa-plus" aria-hidden="true"></i>
							Add project</a>
						<a>Mails</a>
						<a>Notifications</a>
					</div>
				</div>
			</header>
		)
	}
}