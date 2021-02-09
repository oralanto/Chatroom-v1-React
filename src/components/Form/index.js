import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Form = ({ inputValue, onChangeInputValue }) => {
  const handleOnChange = () => {
    console.log('on change');
    onChangeInputValue();
  };
  return (
    <form
      className="form"
      onChange={handleOnChange}
    >
    <input
      className="form__input"
      type="text"
      placeholder="Saisissez votre message..."
      value={inputValue}
    />
    <button
      className="form__button"
      type="submit"
    >
      Envoyer
    </button>
  </form>
);
};

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
};

export default Form;
