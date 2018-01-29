import React,  { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

import Login from './signup-page/Login.js';
import Register from './signup-page/Register.js';

import Logo from './../../public/img/logo.png';
 
export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
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
                      <img src={Logo} alt="logo-icon" style={{width: 30, height: 30}} />
                      <span>Merkury</span>
                    </a>                        
                  </h1>
              </header>

              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={ this.state.activeTab === '1' ? 'active' : '' }
                    onClick={() => { this.toggle('1'); }}
                  >
                    Register
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={ this.state.activeTab === '2' ? 'active' : '' }
                    onClick={() => { this.toggle('2'); }}
                  >
                    Login
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <TabContent activeTab={this.state.activeTab}>
              <Register />
              <Login />
            </TabContent>
        </div>
      </div>
    );
  }
}