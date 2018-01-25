import React,  { Component } from 'react';
import { TabPane, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Register extends Component {
	render() {
		return (
		  <TabPane tabId="1">
		  	<div className="container tab-section">
				<Form>
					<FormGroup>
					  <span><i className="fa fa-envelope-o fa-fw fa-lg" aria-hidden="true"></i></span>
			          <Label for="register-email" hidden>Email</Label>
			          <Input type="email" name="email" id="register-email" placeholder="Email" />
			        </FormGroup>
			        {' '}
			        <FormGroup>
			          <span><i className="fa fa-user-o fa-fw fa-lg" aria-hidden="true"></i></span>	
			          <Label for="register-username" hidden>Username</Label>
			          <Input name="username" id="register-username" placeholder="Username"/>
			        </FormGroup>
			        {' '}
			        <FormGroup> 
			          <span><i className="fa fa-lock fa-fw fa-lg" aria-hidden="true"></i></span>
			          <Label for="register-password" hidden>Password</Label>
			          <Input type="password" name="password" id="register-password" placeholder="Password"/>
			        </FormGroup>
			        {' '}
					<FormGroup>
					  <span><i className="fa fa-phone fa-fw fa-lg" aria-hidden="true"></i></span>
			          <Label for="register-number" hidden>Phone number</Label>
			          <Input type="tel" name="phone-number" id="register-number" placeholder="Phone number" />
			        </FormGroup>
			        {' '}
			        <Button className="hvr-icon-forward">Sign up</Button>
			     </Form>
		  	</div>
          </TabPane>
		);
	}
}