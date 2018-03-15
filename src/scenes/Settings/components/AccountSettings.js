import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';

export default class AccountSettings extends Component {
  constructor(props) {
    super(props);

    this.saveChanges = this.saveChanges.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      username: '',
      email: ''
    };
  }

  componentWillMount() {
    const userData = JSON.parse(localStorage.getItem('usersRecord'));

    this.setState({
      username: userData.username,
      email: userData.email
    });
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

  saveChanges(event) {
    event.preventDefault();

    const userData = JSON.parse(localStorage.getItem('usersRecord'));
    userData.email = this.state.email;
    userData.username = this.state.username;
    localStorage.usersRecord = JSON.stringify(userData);
  }

  render() {
    return (
      <div className="settings">
        <div className="settings-header">
          <h3>Account</h3>
          <p>Change your basic account and language settings.</p>
        </div>
        <div className="settings-main">
          <Form>
            <FormGroup row>
              <Label for="user-email" sm={3}>
								Email
              </Label>
              <Col sm={9}>
                <Input
                  type="email"
                  name="email"
                  id="user-email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="username" sm={3}>
								Username
              </Label>
              <Col sm={9}>
                <Input
                  name="username"
                  id="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="languageSelect" sm={3}>
								Language
              </Label>
              <Col sm={9}>
                <Input
                  type="select"
                  name="select"
                  id="languageSelect"
                >
                  <option>English</option>
                  <option>Ukrainian</option>
                  <option>Russian</option>
                </Input>
              </Col>
            </FormGroup>
            <div className="col-12 col-sm-9 offset-sm-3 settings-main-btn">
              <button
                className="btn btn-secondary"
                onClick={this.saveChanges}
              >
								Save changes
              </button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
