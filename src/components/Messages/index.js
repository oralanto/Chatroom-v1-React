import React from 'react';
// import PropTypes from 'prop-types';

import Message from './Message';

import './style.scss';

const Messages = () => (
  <ul className="messages">
    {/* {messages.map((message) => <Message message={message.message} />)} */}
    <Message />
    <Message />
    <Message />
    <Message />
  </ul>
);

// Messages.propTypes = {
//   messages: PropTypes.array.isRequired,
// };

export default Messages;
