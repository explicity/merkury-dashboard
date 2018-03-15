import React from 'react';

import _map from 'lodash/map';

import MessagesItem from './components/MessagesItem.js';
import messagesData from './components/data.js';

const MessagesSection = () => {
  const unreadedMessages = messagesData.filter(item => item.unreaded === true)
    .length;

  return (
    <div className="content">
      <div className="content-header">
        <h3 className="content-header-title">Messages</h3>
        <div>
          <span className="badge badge-primary">{unreadedMessages}</span>
        </div>
      </div>
      <ul>
        {_map(
          messagesData,
          (item, index) =>
            index < 4 && <MessagesItem key={item.id} item={item} />
        )}
      </ul>
    </div>
  );
};

export default MessagesSection;
