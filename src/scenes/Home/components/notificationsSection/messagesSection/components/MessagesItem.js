import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default class MessagesItem extends Component {
  constructor(props) {
    super(props);

    this.readMessage = this.readMessage.bind(this);
    this.state = {
      isUnreaded: true
    };
  }

  readMessage() {
    if (this.props.item.unreaded) {
      this.props.item.unreaded = false;
      this.setState({
        isUnreaded: false
      });
    }
  }

  render() {
    const { item } = this.props;

    return (
      <li
        className={`content-item users-message ${item.unreaded &&
          this.state.isUnreaded &&
          'active'}`}
      >
        <a href=" ">
          <img
            src={item.url}
            alt="user-img"
            style={{ width: 50, height: 50 }}
            className="content-item-img"
          />
        </a>
        <div className="content-item-message">
          <span className="content-item-user">
            <a href=" ">{item.user}</a>
          </span>
          <span className="content-item-time">
            <span>{item.time}</span>
          </span>
          <p>{item.message}</p>
          <Link to="/home" onClick={this.readMessage}>
            <i className="fa fa-reply fa-fw" aria-hidden="true" />
            <span className="sr-only">Reply</span>
          </Link>
          <a href=" ">
            <i className="fa fa-cog fa-fw" aria-hidden="true" />
            <span className="sr-only">Settings </span>
          </a>
        </div>
      </li>
    );
  }
}

MessagesItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
    user: PropTypes.string,
    time: PropTypes.string,
    message: PropTypes.string,
    unreaded: PropTypes.bool
  })
};
