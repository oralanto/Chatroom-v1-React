import React from 'react';
import Field from 'src/containers/Field';
import PropTypes from 'prop-types';

import './style.scss';

const Settings = ({ open, onClickButton, onSubmitForm }) => (
  <div className={open ? 'settings settings--open' : 'settings'}>
    <button
      type="submit"
      className="settings__button"
      onClick={onClickButton}
    >
      +
    </button>
    <form
      className="settings__form"
      onSubmit={(e) => onSubmitForm(e)}
    >
      <Field
        type="email"
        label="Email"
        name="email"
      />
      <Field
        type="password"
        label="Mot de passe"
        name="password"
      />
      <button
        type="submit"
        className="settings__submit"
      >
        Envoyer
      </button>
    </form>
  </div>
);

Settings.propTypes = {
  onClickButton: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Settings;
