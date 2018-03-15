import React from 'react';

import _map from 'lodash/map';

import ActivityItem from './components/ActivityItem.js';
import activityData from './components/data.js';

const ActivitySection = () => {
  const activities = activityData.length;

  return (
    <div className="content">
      <div className="content-header">
        <h3 className="content-header-title">Activity</h3>
        <div>
          <span className="badge badge-primary badge-activity">
            {activities}
          </span>
        </div>
      </div>

      <ul>
        {_map(
          activityData,
          (item, index) =>
            index < 4 && <ActivityItem key={item.id} item={item} />
        )}
      </ul>
    </div>
  );
};

export default ActivitySection;
