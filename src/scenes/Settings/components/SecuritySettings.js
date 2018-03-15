import React, { Component } from 'react';
import { Redirect } from 'react-router';

export default class SecuritySettings extends Component {
  constructor(props) {
    super(props);

    this.clearStorage = this.clearStorage.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.state = {
      isLoggedIn: true
    };
  }

  clearStorage() {
    this.setState({
      isLoggedIn: false
    });
    localStorage.loggedIn = false;
  }

  deleteUser() {
    localStorage.removeItem('usersRecord');
    this.setState({
      isLoggedIn: false
    });
  }

  render() {
    return (
      <div className="settings">
        <div className="settings-header">
          <h3>Security</h3>
        </div>
        <div className="settings-main">
          <div className="security-item">
            <h6 className="security-item-title">
							Deactivate account (Log Out)
            </h6>
            <p>
							Deactivating your account will remove it from
							Merkury within a few minutes. You can sign back in
							anytime to reactivate your account and restore its
							content.
            </p>
            <a
              href=" "
              className="security-item-link"
              onClick={this.clearStorage}
            >
							Deactivate your account
            </a>
          </div>
          <div className="security-item">
            <h6 className="security-item-title">Delete account</h6>
            <p>
							Permanently delete your account and all of your
							content.
            </p>
            <a
              href=" "
              className="security-item-link"
              onClick={this.deleteUser}
            >
							Delete account
            </a>
            {!this.state.isLoggedIn && <Redirect to="/" />}
          </div>
        </div>
      </div>
    );
  }
}
