import React, { Component } from 'react';
import { Redirect } from 'react-router';

import { TabPane, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.isUserRegistered = this.isUserRegistered.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      username: '',
      password: '',
      haveAccess: false
    };
  }

  handleInputChange(event) {
    const { target } = event;
    const value =
			target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value
    });
  }

  isUserRegistered(event) {
    event.preventDefault();

    const usersArray = JSON.parse(localStorage.getItem('usersRecord'));

    if (
      this.state.username === usersArray.username &&
			this.state.password === usersArray.password
    ) {
      this.setState({
        haveAccess: true
      });
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('currentPage', 1);
    }
  }

  render() {
    const { haveAccess } = this.state;

    return (
      <TabPane tabId="2">
        <div className="container tab-section">
          <h2 className="tab-section-title">
						Welcome <span>back!</span>
          </h2>

          <Form>
            <FormGroup>
              <span>
                <i
                  className="fa fa-user-o fa-fw fa-lg"
                  aria-hidden="true"
                />
              </span>
              <Label for="login-username" hidden>
								Username
              </Label>
              <Input
                name="username"
                id="login-username"
                placeholder="Username"
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <span>
                <i
                  className="fa fa-lock fa-fw fa-lg"
                  aria-hidden="true"
                />
              </span>
              <Label for="login-password" hidden>
								Password
              </Label>
              <Input
                type="password"
                name="password"
                id="login-password"
                placeholder="Password"
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <Button
              className="hvr-icon-forward"
              onClick={this.isUserRegistered}
            >
							Enter
            </Button>
          </Form>
          {haveAccess && <Redirect to="/home" />}
        </div>
      </TabPane>
    );
  }
}
