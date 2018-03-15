import React from 'react';

const ActivityItem = () => {
  const { item } = this.props;

  return (
    <li className="content-item users-activity">
      <a href=" ">
        <img
          src={item.url}
          alt="user-img"
          style={{ width: 50, height: 50 }}
          className="content-item-img"
        />
      </a>
      <div className="content-item-message">
        <div>
          <span className="content-item-user">
            <a href=" ">{item.user} </a>
          </span>
          <span className="content-item-action">{item.action} </span>
          <span className="content-item-project">
            <a href=" ">{item.project}</a>
          </span>
        </div>
        <div className="content-item-time">
          <i className="fa fa-clock-o fa-fw" />
          <span>{item.time}</span>
        </div>
      </div>
    </li>
  );
};

export default ActivityItem;
