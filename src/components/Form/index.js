import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Form = ({ onSubmitForm }) => (
  <form className="form" onChange={onSubmitForm}>
    <input type="text" placeholder="Saisissez votre message..." />
    <button type="submit">></button>
  </form>
);

Form.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default Form;
