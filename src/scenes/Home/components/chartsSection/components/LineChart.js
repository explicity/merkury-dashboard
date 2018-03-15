import React, { Component } from 'react';

import { Line } from 'react-chartjs-2';

import MainDropdown from '../../../../../components/dropdown/mainDropdown/MainDropdown.js';
import data from './data/lineData.js';

export default class LineChart extends Component {
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
          <h3 className="charts-header-title">Report</h3>
          <MainDropdown
            action="Perioud"
            activeTab="Last Year"
            anotherTab="This Year"
            updateData={this.updateData}
          />
        </header>
        {this.state.name === 'Last Year' && (
        <Line data={data.lastYear} options={data.options} />
				)}
        {this.state.name === 'This Year' && (
        <Line data={data.thisYear} options={data.options} />
				)}
      </div>
    );
  }
}
