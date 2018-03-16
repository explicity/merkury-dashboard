import React, { Component } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

import Avatar from './user.jpg';
import SearchBox from './components/SearchBox';

import './_navigation.scss';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.clearStorage = this.clearStorage.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.updateData = this.updateData.bind(this);
    this.state = {
      isLoggedIn: true,
      isSidebarOpen: false,
      dropdownOpen: false,
      isSearchOpen: false
    };
  }

  toggleSidebar() {
    if (this.state.isSidebarOpen) {
      this.setState({
        isSidebarOpen: !this.state.isSidebarOpen
      });
      document.getElementById('aside').classList.remove('opened');
      document.getElementById('main').classList.remove('active');
      document.getElementById('nav').classList.remove('active');
    } else {
      this.setState({
        isSidebarOpen: !this.state.isSidebarOpen
      });
      document.getElementById('aside').classList.add('opened');
      document.getElementById('main').classList.add('active');
      document.getElementById('nav').classList.add('active');
    }
  }

  updateData() {
    this.setState({ isSearchOpen: !this.state.isSearchOpen });
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  clearStorage() {
    this.setState({
      isLoggedIn: false
    });
    localStorage.loggedIn = false;
  }

  render() {
    return (
      <header className="header" id="nav">
        <div className="navbar">
          <div className="d-flex align-items-center">
            <button
              type="button"
              className={`header-main-btn ${
                this.state.isSidebarOpen ? 'hvr-icon-back' : 'hvr-icon-forward'
              }`}
              onClick={this.toggleSidebar}
            >
              <i className="fa fa-bars" aria-hidden="true" />
              <span className="sr-only">Toggle sidebar</span>
            </button>
            <SearchBox updateData={this.updateData} />
          </div>

          <div
            className={`header-main ${this.state.isSearchOpen ? 'open' : ''}`}
          >
            <MediaQuery minDeviceWidth={511}>
              <a href=" " className="btn btn-primary">
                <i className="fa fa-plus" aria-hidden="true" />
                <span>Add project</span>
              </a>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={510}>
              <button className="header-main-btn">
                <i className="fa fa-plus" aria-hidden="true" />
                <span className="sr-only">Add project</span>
              </button>
            </MediaQuery>
            <button className="header-main-btn">
              <i className="fa fa-envelope" aria-hidden="true" />
              <span className="sr-only">Mails</span>
            </button>
            <button className="header-main-btn">
              <div className="notification">
                <i className="fa fa-bell" aria-hidden="true" />
                <span className="badge badge-light">3</span>
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
                <div className="avatar hvr-icon-hang">
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
                  <Link to="/settings">Settings</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/" onClick={this.clearStorage}>
                    Log Out
                  </Link>
                  {!this.state.isLoggedIn && <Redirect to="/" />}
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </header>
    );
  }
}
