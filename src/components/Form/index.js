import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Form = ({ inputValue, onChangeInputValue, onSubmitForm }) => {
  const handleOnChange = (e) => {
    onChangeInputValue(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmitForm();
    console.log('coucou');
  };
  return (
    <form className="form" onSubmit={handleOnSubmit}>
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
  onSubmitForm: PropTypes.func.isRequired,
};

export default Form;
