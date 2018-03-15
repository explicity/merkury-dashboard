import React, { Component } from 'react';

import ProgressBars from './components/progressBars/ProgressBars.js';
import MainDropdown from './../../components/dropdown/mainDropdown/MainDropdown.js';
import LineCharts from './components/lineCharts/LineCharts.js';
import UserLineChart from './components/userLineChart/UserLineChart.js';

import './Statistics.scss';

export default class Statistics extends Component {
  constructor(props) {
    super(props);

    this.updateDataType = this.updateDataType.bind(this);
    this.updateDataPerioud = this.updateDataPerioud.bind(this);
    this.state = {
      activeType: 'Notifications',
      activePerioud: 'Last Month'
    };
  }

  updateDataType(value) {
    this.setState({ activeType: value });
  }

  updateDataPerioud(value) {
    this.setState({ activePerioud: value });
  }

  render() {
    return (
      <div className="statistics">
        <div className="container">
          <header className="section-header">
            <h2 className="section-header-title">Lorem Ipsum Stats</h2>
            <div className="statistics-dropdowns">
              <MainDropdown
                action="Type"
                activeTab="Notifications"
                anotherTab="Desktop"
                updateData={this.updateDataType}
              />
              <MainDropdown
                action="Perioud"
                activeTab="Last Month"
                anotherTab="Last Year"
                updateData={this.updateDataPerioud}
              />
            </div>
          </header>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5">
              <LineCharts />
            </div>
            <div className="col-12 col-md-6 col-lg-7">
              <UserLineChart />
            </div>
          </div>
          <ProgressBars />
        </div>
      </div>
    );
  }
}
