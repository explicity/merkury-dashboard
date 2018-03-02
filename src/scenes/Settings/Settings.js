import './Settings.scss';

import React, { Component } from 'react';

import AccountSettings from './components/AccountSettings.js';
import SecuritySettings from './components/SecuritySettings.js';

export default class Settings extends Component {
	render() {
		return (
			<div className="container">
				<h2 className="section-header-title">Settings</h2>
				<AccountSettings />
				<SecuritySettings />
			</div>
		);
	}
}
