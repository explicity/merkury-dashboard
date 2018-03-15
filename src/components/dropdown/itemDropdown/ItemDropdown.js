import React, { Component } from 'react';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import './ItemDropdown.scss';

export default class ItemDropdown extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
        className="item-dropdown"
      >
        <DropdownToggle>
          <i className="fa fa-ellipsis-v" />
          <span className="sr-only">More options</span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Delete</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
