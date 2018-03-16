import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { InputGroup, Input } from 'reactstrap';

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = { isOpen: false };
  }

  onClick() {
    this.setState({ isOpen: !this.state.isOpen });
    this.props.updateData();
  }

  handleKeyDown(event) {
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY) {
      event.preventDefault();
    }
  }

  render() {
    const baseStyles = {
      open: {
        width: 150,
        visibility: 'visible',
        opacity: 1
      },

      closed: {
        width: 0
      }
    };

    const textStyle = this.state.isOpen ? baseStyles.open : baseStyles.closed;
    const divStyle = Object.assign({}, textStyle);

    return (
      <div style={divStyle} className="search-box">
        <button className="header-main-btn mr-2" onClick={this.onClick}>
          <i
            aria-hidden="true"
            className={`fa fa-search ${this.state.isOpen ? 'open' : ''}`}
          />
          <span className="sr-only">Search</span>
        </button>
        <InputGroup>
          <Input
            placeholder="Search"
            onKeyDown={this.handleKeyDown}
            style={textStyle}
          />
        </InputGroup>
      </div>
    );
  }
}

export default SearchBox;

SearchBox.propTypes = {
  updateData: PropTypes.func
};
