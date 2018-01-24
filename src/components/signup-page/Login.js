import React,  { Component } from 'react';
import { TabPane, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Login extends Component {
	render() {
		return (
		  <TabPane tabId="2">
		  	<div className="container tab-login">
		  		<h2 className="tab-login-title">Welcome <span>back!</span></h2>

				<Form>
			        <FormGroup>
			          <Label for="username" hidden>Username</Label>
			          <Input name="username" id="username" placeholder="Username" />
			        </FormGroup>
			        {' '}
			        <FormGroup>
			          <Label for="examplePassword" hidden>Password</Label>
			          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
			        </FormGroup>
			        {' '}
			        <Button className="hvr-icon-forward">Enter</Button>
			     </Form>
		  	</div>
          </TabPane>
		);
	}
}
