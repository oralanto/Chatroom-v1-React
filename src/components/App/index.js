// == Import npm
import React from 'react';

import Messages from 'src/components/Messages';
import Form from 'src/components/Form';

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
