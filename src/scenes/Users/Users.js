import React, { Component } from 'react';

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import _map from 'lodash/map';

import MainDropdown from './../../components/dropdown/mainDropdown/MainDropdown.js';

import EmailListItem from './components/EmailListItem.js';
import emailList from './components/data.js';

import './Users.scss';

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.updateData = this.updateData.bind(this);
    this.state = {
      openDropdown: false,
      activeTab: 'Active first',
    };
  }

  updateData(value) {
    this.setState({ activeTab: value });
  }

  render() {
    return (
      <div className="users">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header-title">
							Users <span>(128)</span>
            </h2>
            <MainDropdown
              action="Sort"
              activeTab="Active first"
              anotherTab="By A-Z"
              updateData={this.updateData}
            />
          </div>
          <div className="table-responsive-lg">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Last activity</th>
                  <th scope="col">Mail</th>
                  <th scope="col">Phone</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {_map(emailList, (item, index) => (
                  <EmailListItem key={index} user={item} />
								))}
              </tbody>
            </table>
          </div>
          <Pagination>
            <PaginationItem active>
              <PaginationLink href="/users">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/users">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/users">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/users">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/users">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className="pagination-controls"
                next
                href="#"
              >
                <i className="fa fa-chevron-right" />
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </div>
      </div>
    );
  }
}
