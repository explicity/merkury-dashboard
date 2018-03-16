import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Popover, PopoverBody } from 'reactstrap';

import './CustomEvent.scss';
import User from './user.png';

export default class CustomEvent extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  render() {
    const { event } = this.props;

    return (
      <div>
        <button
          className="calendar-event"
          id={`Popover-${event.id}`}
          onClick={this.toggle}
        >
          {event.title}
        </button>
        <Popover
          placement="right"
          isOpen={this.state.popoverOpen}
          target={`Popover-${event.id}`}
          toggle={this.toggle}
        >
          <PopoverBody>
            <div className="popover-item">
              <p className="popover-description mb-2">Author: </p>
              <div className="d-flex align-items-center">
                <a href=" ">
                  <img
                    src={User}
                    alt="user-img"
                    style={{ width: 40, height: 40 }}
                    className="popover-img"
                  />
                </a>
                <div>
                  <h4 className="popover-item-title">
                    <a href=" ">Nicky Hunt</a>
                  </h4>
                  <p className="popover-item-secondary">Product Designer</p>
                </div>
              </div>
            </div>
            <div className="popover-item">
              <ul>
                <li className="popover-item-list">
                  <span className="popover-description">Title:</span>
                  <span>{event.title}</span>
                </li>
                <li className="popover-item-list">
                  <span className="popover-description">Starts:</span>
                  <span>{event.start.toLocaleTimeString()}</span>
                </li>
                <li className="popover-item-list">
                  <span className="popover-description">Ends:</span>
                  <span>{event.end.toLocaleTimeString()}</span>
                </li>
                <li className="popover-item-list">
                  <span className="popover-description">Place:</span>
                  <span>{event.place}</span>
                </li>
              </ul>
            </div>
            <div className="popover-item">
              <button type="button" className="btn btn-lg btn-primary">
                Edit event
              </button>
            </div>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

CustomEvent.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    place: PropTypes.string,
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date)
  })
};
