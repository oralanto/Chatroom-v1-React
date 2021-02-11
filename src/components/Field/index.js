import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Field = ({
  label,
  name,
  type,
  inputValue,
  onChangeInputValue,
}) => (
  <div className="field">
    <label
      htmlFor={name}
      className="field__label"
    >
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      placeholder="Email"
      className="field__input"
      value={inputValue}
      onChange={(e) => onChangeInputValue(e.target.value)}
    />
  </div>
);

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
};

export default Field;
