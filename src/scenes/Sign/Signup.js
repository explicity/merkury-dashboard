import React, { Component } from 'react';

import { Nav, NavItem, NavLink } from 'reactstrap';

import SignupTabs from './scenes/SignupTabs.js';

import './_signup-section.scss';
import Logo from './images/logo.png';

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '2'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="signup-section">
        <div className="inner">
          <div className="inner-header">
            <header className="brand">
              <h1>
                <a href="/" className="brand-logo">
                  <img
                    src={Logo}
                    alt="logo-icon"
                    style={{ width: 30, height: 30 }}
                  />
                  <span>Merkury</span>
                </a>
              </h1>
            </header>

            <Nav tabs>
              <NavItem>
                <NavLink
                  className={this.state.activeTab === '1' ? 'active' : ''}
                  onClick={() => {
                    this.toggle('1');
                  }}
                >
                  Register
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={this.state.activeTab === '2' ? 'active' : ''}
                  onClick={() => {
                    this.toggle('2');
                  }}
                >
                  Login
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <SignupTabs activeTab={this.state.activeTab} update={this.toggle} />
        </div>
      </div>
    );
  }
}
