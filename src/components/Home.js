import React,  { Component } from 'react';
import { Link } from 'react-router-dom'

import Logo from './../../public/img/logo.png';

export default class Home extends Component {
	render() {
		return (
			<aside className="sidebar">
				<h1>
                	<a href="/" className="inner-header-logo">
                  		<img src={Logo} alt="logo-icon" style={{width: 30, height: 30}} />
                  		<span>Merkury</span>
                	</a>                        
              	</h1>

              	<ul className="sideabar-nav">
              		<li className="sideabar-nav-item">
              			<i className="fa fa-home fa-fw" aria-hidden="true"></i>
              			<Link to='/home' className="sidebar-link" >Home</Link>
              		</li>
              		<li className="sideabar-nav-item">
              			<i className="fa fa-th-large fa-fw" aria-hidden="true"></i>
          				<Link to=''className="sidebar-link">Workflow</Link>
              		</li>
              		<li className="sideabar-nav-item">
              			<i className="fa fa-bolt fa-fw" aria-hidden="true"></i>
              			<Link to=''className="sidebar-link">Statistics</Link>
					        </li>
              		<li className="sideabar-nav-item">
              			<i className="fa fa-calendar fa-fw" aria-hidden="true"></i>
              		    <Link to=''className="sidebar-link">Calendar</Link>
					        </li>
              		<li className="sideabar-nav-item">
              			<i className="fa fa-user-o fa-fw" aria-hidden="true"></i>
              		    <Link to=''className="sidebar-link">Users</Link>
					        </li>
              		<li className="sideabar-nav-item">
              			<i className="fa fa-cog fa-fw" aria-hidden="true"></i>
              		    <Link to=''className="sidebar-link">Settings</Link>
					        </li>
              	</ul>
			</aside>
		)
	}
}
