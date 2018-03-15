import React, { Component } from 'react';

import { Doughnut } from 'react-chartjs-2';

import MainDropdown from '../../../../../components/dropdown/mainDropdown/MainDropdown.js';
import data from './data/doughnutData.js';

export default class DoughnutChart extends Component {
  constructor(props) {
    super(props);

    this.updateData = this.updateData.bind(this);
    this.state = {
      name: 'Last Year'
    };
  }

  updateData(value) {
    this.setState({ name: value });
  }

  render() {
    return (
      <div className="charts">
        <header className="charts-header">
          <h3 className="charts-header-title">Your Sales</h3>
          <MainDropdown
            action="Perioud"
            activeTab="Last Year"
            anotherTab="This Year"
            updateData={this.updateData}
          />
        </header>
        {this.state.name === 'Last Year' && (
        <Doughnut data={data.lastYear} />
				)}
        {this.state.name === 'This Year' && (
        <Doughnut data={data.thisYear} />
				)}
      </div>
    );
  }
}
