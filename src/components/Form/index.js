import React from 'react';
// import PropTypes from 'prop-types';

import './style.scss';

const Form = () => (
  <form
    className="form"
    // onChange={onSubmitForm}
  >
    <input
      className="form__input"
      type="text"
      placeholder="Saisissez votre message..."
    />
    <button
      className="form__button"
      type="submit"
    >
      >
    </button>
  </form>
);

// Form.propTypes = {
//   onSubmitForm: PropTypes.func.isRequired,
// };

export default Form;
