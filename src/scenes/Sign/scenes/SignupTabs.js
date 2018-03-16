import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TabContent } from 'reactstrap';

import Login from './Login/Login.js';
import Register from './Register/Register.js';

import './_signup-tabs.scss';

export default class SignupTabs extends Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
  }

  updateState(state = {}) {
    this.props.update(state);
  }

  render() {
    return (
      <TabContent activeTab={this.props.activeTab}>
        <Register update={this.updateState} />
        <Login />
      </TabContent>
    );
  }
}

SignupTabs.propTypes = {
  update: PropTypes.func,
  activeTab: PropTypes.string
};
