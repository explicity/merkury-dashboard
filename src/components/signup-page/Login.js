import React,  { Component } from 'react';
import { TabPane, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Login extends Component {
	render() {

			let usersArray = [];

		    function isUserRegistered() {
		    	usersArray = JSON.parse(localStorage.usersRecord);
		    	console.log(usersArray);

		    	let haveAccess = false;

		    	let userUsername = document.getElementById("login-username").value;
		      	let userPassword = document.getElementById("login-password").value;

	    		for (let i = 0; i < usersArray.length; i++) {
	    			if (userUsername == usersArray[i].username && userPassword == usersArray[i].password) {
	    				haveAccess = true;
	    			}
		    	}

		    	console.log(haveAccess);
		    }

		return (
		  <TabPane tabId="2">
		  	<div className="container tab-section">
		  		<h2 className="tab-section-title">Welcome <span>back!</span></h2>

				<Form>
			        <FormGroup>
			          <span><i className="fa fa-user-o fa-fw fa-lg" aria-hidden="true"></i></span>	
			          <Label for="login-username" hidden>Username</Label>
			          <Input name="username" id="login-username" placeholder="Username"/>
			        </FormGroup>
			        {' '}
			        <FormGroup> 
			          <span><i className="fa fa-lock fa-fw fa-lg" aria-hidden="true"></i></span>
			          <Label for="login-password" hidden>Password</Label>
			          <Input type="password" name="login-password" id="login-password" placeholder="Password"/>
			        </FormGroup>
			        {' '}
			        <Button className="hvr-icon-forward" onClick={isUserRegistered}>Enter</Button>
			     </Form>
		  	</div>
          </TabPane>
		);
	}
}
