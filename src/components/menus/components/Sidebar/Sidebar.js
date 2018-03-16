import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './_sidebar.scss';
import Logo from './logo.png';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: localStorage.currentPage
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
      localStorage.currentPage = tab;
    }
  }

  render() {
    return (
      <aside className="sidebar" id="aside">
        <header className="brand">
          <h1>
            <Link
              to="/home"
              className="brand-logo"
              onClick={() => {
                this.toggle('1');
              }}
            >
              <img
                src={Logo}
                alt="logo-icon"
                style={{ width: 30, height: 30 }}
              />
              <span>Merkury</span>
            </Link>
          </h1>
        </header>

        <ul className="sidebar-nav">
          <li className="sidebar-nav-item">
            <Link
              to="/home"
              className={`sidebar-nav-link ${
                this.state.activeTab === '1' ? 'active ' : ''
              }`}
              onClick={() => {
                this.toggle('1');
              }}
            >
              <i className="fa fa-home fa-fw" aria-hidden="true" />
              <span>Home</span>
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              to="/workflow"
              className={`sidebar-nav-link ${
                this.state.activeTab === '2' ? 'active ' : ''
              }`}
              onClick={() => {
                this.toggle('2');
              }}
            >
              <i className="fa fa-th-large fa-fw" aria-hidden="true" />
              <span>Workflow</span>
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              to="/statistics"
              className={`sidebar-nav-link ${
                this.state.activeTab === '3' ? 'active ' : ''
              }`}
              onClick={() => {
                this.toggle('3');
              }}
            >
              <i className="fa fa-bolt fa-fw" aria-hidden="true" />
              <span>Statistics</span>
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              to="/calendar"
              className={`sidebar-nav-link ${
                this.state.activeTab === '4' ? 'active ' : ''
              }`}
              onClick={() => {
                this.toggle('4');
              }}
            >
              <i className="fa fa-calendar fa-fw" aria-hidden="true" />
              <span>Calendar</span>
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              to="/users"
              className={`sidebar-nav-link ${
                this.state.activeTab === '5' ? 'active ' : ''
              }`}
              onClick={() => {
                this.toggle('5');
              }}
            >
              <i className="fa fa-user-o fa-fw" aria-hidden="true" />
              <span>Users</span>
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              to="/settings"
              className={`sidebar-nav-link ${
                this.state.activeTab === '6' ? 'active ' : ''
              }`}
              onClick={() => {
                this.toggle('6');
              }}
            >
              <i className="fa fa-cog fa-fw" aria-hidden="true" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </aside>
    );
  }
}
