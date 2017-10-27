// @flow

import React, {Component} from 'react';

import MessageView from './message-view'

class MessageList extends Component{
  state = {
    messages: [
      {
        from: 'John',
        content: 'The event will start next week',
        status: 'unread'
      },
      {
        from: 'Martha',
        content: 'I will be travelling soon',
        status: 'read'
      },
      {
        from: 'Jacob',
        content: 'Talk later. Have a great day!',
        status: 'read'
      }

    ]
  };

  render(){
    return (
      <div>
        <h1>List of Messages</h1>
        {this.state.messages.map((data, index) =>
          <MessageView key={index} message={data}/>
        )}
      </div>
    );
  }
}

export default MessageList;
