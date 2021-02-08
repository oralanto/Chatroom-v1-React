import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Message = ({ message }) => (
  <>
    <li className="messages__user">SUper Chat</li>
    <li className="messages__message">{message}</li>
  </>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
