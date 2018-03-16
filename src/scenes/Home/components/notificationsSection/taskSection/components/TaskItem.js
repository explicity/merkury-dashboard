import React from 'react';
import PropTypes from 'prop-types';

import ItemDropdown from '../../../../../../components/dropdown/itemDropdown/ItemDropdown.js';

const TaskItem = ({ item }) => (
  <div className="content-item">
    <img
      src={item.url}
      alt="todo-img"
      style={{ width: 50, height: 50 }}
      className="content-item-img"
    />
    <div className="row">
      <div>
        <h4>
          <a href=" " className="content-item-title">
            {item.title}
          </a>
        </h4>
        {item.listId === 3 ? (
          <div className="content-item-time completed">
            <i className="fa fa-check-circle-o" /> <span>Completed!</span>
          </div>
        ) : (
          <div className="content-item-time">
            <i className="fa fa-clock-o fa-fw" />
            <span className={`${item.isDelayed && 'active'}`}>{item.time}</span>
          </div>
        )}
      </div>
      <ItemDropdown />
    </div>
  </div>
);

export default TaskItem;

TaskItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    time: PropTypes.string,
    id: PropTypes.number,
    isDelayed: PropTypes.bool
  })
};
