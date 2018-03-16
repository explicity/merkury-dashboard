import React from 'react';
import PropTypes from 'prop-types';

import _map from 'lodash/map';

import 'react-circular-progressbar/dist/styles.css';
import CircularProgressbar from 'react-circular-progressbar';

import barsInfo from './data.js';

import './ProgressBars.scss';

const ProgressBarsItem = ({ info }) => (
  <div className="col-12 col-md-4">
    <div className="progressbars">
      <div className="progressbars-item">
        <CircularProgressbar
          percentage={info.percentages}
          className={`progressbars-item-${info.color}`}
        />
      </div>
      <div className="description">
        <p>{info.description.first}</p>
        <p>{info.description.second}</p>
      </div>
    </div>
  </div>
);

const ProgressBars = () => (
  <div className="charts">
    <div className="charts-header">
      <h3 className="charts-header-title">Total sales</h3>
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
    </div>
    <div className="container">
      <div className="row">
        {_map(barsInfo, (item, index) => (
          <ProgressBarsItem key={index} info={item} />
        ))}
      </div>
    </div>
  </div>
);

export default ProgressBars;

ProgressBarsItem.defaultProps = {
  info: []
};

ProgressBarsItem.propTypes = {
  info: PropTypes.shape({
    description: PropTypes.string,
    percentages: PropTypes.number,
    color: PropTypes.string
  })
};
