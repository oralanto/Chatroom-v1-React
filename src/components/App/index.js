// == Import npm
import React from 'react';

import Form from 'src/components/Form';

import Messages from 'src/containers/Messages';

// == Import
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Form />
    <Messages />
  </div>
);

// == Export
export default App;
