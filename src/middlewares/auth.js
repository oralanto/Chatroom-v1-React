import { LOGIN } from 'src/actions';
import axios from 'axios';

const auth = (store) => (next) => (action) => {
  console.log('middleware auth');
  switch (action.type) {
    case LOGIN:
      console.log('case login');
      axios.post('http://localhost:3001/login', {
        email: 'acidman@herocorp.io',
        password: 'fructis',
      })
        .then((response) => console.log('responses :', response))
        .catch((err) => console.log('err', err));
      break;
    default:
      next(action);
  }
};

export default auth;
