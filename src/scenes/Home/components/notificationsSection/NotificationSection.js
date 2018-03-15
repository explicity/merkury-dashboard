import React from 'react';

import { Row, Col } from 'reactstrap';

import TaskSection from './taskSection/TaskSection.js';
import MessagesSection from './messagesSection/MessagesSection.js';
import ActivitySection from './activitySection/ActivitySection.js';

import './_home-sections.scss';

const NotificationSection = () => (
  <Row>
    <Col xs="12" lg="4">
      <TaskSection />
    </Col>
    <Col xs="12" lg="4">
      <MessagesSection />
    </Col>
    <Col xs="12" lg="4">
      <ActivitySection />
    </Col>
  </Row>
);

export default NotificationSection;
