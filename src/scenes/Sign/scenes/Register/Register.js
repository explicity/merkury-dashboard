import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TabPane, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.clearValue = this.clearValue.bind(this);
    this.onRegisterPressed = this.onRegisterPressed.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      email: '',
      username: '',
      password: '',
      number: ''
    };
  }

  onRegisterPressed(event) {
    event.preventDefault();

    const userData = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      number: this.state.number
    };

    localStorage.setItem('usersRecord', JSON.stringify(userData));
    this.clearValue();
    this.props.update('2');
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value
    });
  }

  clearValue() {
    document.getElementById('register-email').value = '';
    document.getElementById('register-username').value = '';
    document.getElementById('register-password').value = '';
    document.getElementById('register-number').value = '';
  }

  render() {
    return (
      <TabPane tabId="1">
        <div className="container tab-section">
          <Form>
            <FormGroup>
              <span>
                <i
                  className="fa fa-envelope-o fa-fw fa-lg"
                  aria-hidden="true"
                />
              </span>
              <Label for="register-email" hidden>
                Email
              </Label>
              <Input
                type="email"
                name="email"
                id="register-email"
                placeholder="Email"
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <span>
                <i className="fa fa-user-o fa-fw fa-lg" aria-hidden="true" />
              </span>
              <Label for="register-username" hidden>
                Username
              </Label>
              <Input
                name="username"
                id="register-username"
                placeholder="Username"
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <span>
                <i className="fa fa-lock fa-fw fa-lg" aria-hidden="true" />
              </span>
              <Label for="register-password" hidden>
                Password
              </Label>
              <Input
                type="password"
                name="password"
                id="register-password"
                placeholder="Password"
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <span>
                <i className="fa fa-phone fa-fw fa-lg" aria-hidden="true" />
              </span>
              <Label for="register-number" hidden>
                Phone number
              </Label>
              <Input
                type="tel"
                name="number"
                id="register-number"
                placeholder="Phone number"
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <Button
              className="hvr-icon-forward"
              onClick={this.onRegisterPressed}
            >
              Sign up
            </Button>
          </Form>
        </div>
      </TabPane>
    );
  }
}

Register.propTypes = {
  update: PropTypes.func
};
