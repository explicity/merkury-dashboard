import React from 'react';

import AccountSettings from './components/AccountSettings.js';
import SecuritySettings from './components/SecuritySettings.js';

import './Settings.scss';

const Settings = () => (
  <div className="container">
    <h2 className="section-header-title">Settings</h2>
    <AccountSettings />
    <SecuritySettings />
  </div>
);

export default Settings;
