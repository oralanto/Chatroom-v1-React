import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Message = ({ user, message }) => (
  <>
    <li className="messages__user">{user}</li>
    <li className="messages__message">{message}</li>
  </>
);

Message.propTypes = {
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Message;
