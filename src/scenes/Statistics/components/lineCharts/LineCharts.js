import React from 'react';
import PropTypes from 'prop-types';

import _map from 'lodash/map';

import { Line } from 'react-chartjs-2';
import lineChartData from './data.js';

import './LineCharts.scss';

const LineChartItem = ({ data, options }) => (
  <div className="linechart-item">
    <div className="description text-center">
      <p>{data.description.first}</p>
      <p>{data.description.second}</p>
    </div>
    <div className="linechart-item-line">
      <Line data={data.info} options={options} />
    </div>
  </div>
);

const LineCharts = () => {
  const options = {
    legend: {
      display: false
    },
    elements: { point: { radius: 0 } },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false
          },

          ticks: {
            display: false
          }
        }
      ]
    }
  };
  return (
    <div className="charts linechart">
      {_map(lineChartData, (item, index) => (
        <LineChartItem key={index} data={item} options={options} />
      ))}
    </div>
  );
};

export default LineCharts;

LineChartItem.defaultProps = {
  data: [],
  options: []
};

LineChartItem.propTypes = {
  data: PropTypes.shape({
    color: PropTypes.string,
    description: PropTypes.string,
    info: PropTypes.objectOf(PropTypes.object)
  }),
  options: PropTypes.object
};
