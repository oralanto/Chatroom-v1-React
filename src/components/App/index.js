// == Import npm
import React from 'react';

import Messages from 'src/components/Messages';
import Form from 'src/components/Form';

// == Import
import './styles.css';

// == Composant
const App = () => {
  const messages = [
    {
      user: 'Super Chaton',
      message: 'Coucou Twa',
    },
    {
      user: 'Super Chiot',
      message: 'Salut Twa',
    },
    {
      user: 'Super Chaton',
      message: 'Coucou Twa',
    },
    {
      user: 'Super Chiot',
      message: 'Salut Twa',
    },
    {
      user: 'Super Chaton',
      message: 'Coucou Twa',
    },
  ];
  return (
    <div className="app">
      <Form />
      <Messages messages={messages} />
    </div>
);
};

// == Export
export default App;

// const App = () => (
//   <div className="app">
//     <Form />
//     <Messages messages={messages} />
//   </div>
// );
