// == Import npm
import React from 'react';

import Form from 'src/containers/Form';
// import Messages from 'src/components/Messages';
import Messages from 'src/containers/Messages';

// == Import
import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <Form />
    <Messages />
  </div>
);

// == Export
export default App;
