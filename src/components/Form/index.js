import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Form = ({ inputValue, onChangeInputValue }) => {
  const handleOnChange = (e) => {
    onChangeInputValue(e.target.value);
  };
  return (
    <form className="form">
      <input
        className="form__input"
        type="text"
        placeholder="Saisissez votre message..."
        value={inputValue}
        onChange={handleOnChange}
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
