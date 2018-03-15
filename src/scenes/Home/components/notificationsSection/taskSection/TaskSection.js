import React from 'react';

import _map from 'lodash/map';

import TaskItem from './components/TaskItem.js';
import taskData from './components/data.js';

const TaskSection = () => {
  const delayedTasks = taskData.filter(item => item.isDelayed === true).length;

  const allTasks = taskData.length;

  return (
    <div className="content">
      <div className="content-header">
        <h3 className="content-header-title">Tasks</h3>
        <div>
          <span className="badge badge-primary">{allTasks}</span>
          <span className="badge badge-secondary">{delayedTasks}</span>
        </div>
      </div>
      <div>
        {_map(
          taskData,
          (item, index) => index < 4 && <TaskItem key={item.id} item={item} />
        )}
      </div>
    </div>
  );
};

export default TaskSection;
