import React from 'react';

import { Line } from 'react-chartjs-2';

import data from './data.js';

const UserLineChart = () => (
  <div className="charts">
    <header className="charts-header">
      <h3 className="charts-header-title">Active users</h3>
      <div>
        <button className="charts-header-btn">
          <i className="fa fa-pencil" aria-hidden="true" />
          <span className="sr-only">Edit</span>
        </button>
        <button className="charts-header-btn">
          <i className="fa fa-trash" aria-hidden="true" />
          <span className="sr-only">Delete</span>
        </button>
      </div>
    </header>
    <Line data={data.lineData} options={data.options} />
  </div>
);

export default UserLineChart;
