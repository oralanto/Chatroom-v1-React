import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

import './style.scss';

const Messages = ({ messages }) => (
  <ul className="messages">
    {messages.map((message) => <Message message={message.message} />)}
  </ul>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf.isRequired,
};

export default Messages;
