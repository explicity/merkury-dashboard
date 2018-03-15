import React from 'react';

import { Row, Col } from 'reactstrap';

import LineChart from './components/LineChart.js';
import DoughnutChart from './components/DoughnutChart.js';

import './_charts.scss';

const ChartsSection = () => (
  <Row>
    <Col xs="12" lg="6">
      <DoughnutChart />
    </Col>
    <Col xs="12" lg="6">
      <LineChart />
    </Col>
  </Row>
);

export default ChartsSection;
