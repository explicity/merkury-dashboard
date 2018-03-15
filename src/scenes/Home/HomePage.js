import React, { Component } from 'react';

import ChartsSection from './components/chartsSection/ChartsSection.js';
import NotificationSection from './components/notificationsSection/NotificationSection.js';

import './_home-page.scss';

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };
  }

  componentWillMount() {
    const userData = JSON.parse(localStorage.getItem('usersRecord'));

    this.setState({
      username: userData.username
    });
  }

  render() {
    return (
      <div className="container">
        <h2 className="main-title">Hello {this.state.username}!</h2>
        <ChartsSection />
        <NotificationSection />
      </div>
    );
  }
}
