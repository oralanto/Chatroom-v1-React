import NEW_MESSAGE from 'src/actions';

const initialState = {
  messages: '',
};

const reducer = (state = initialState, action = {}) => {
  console.log('state', state);

  if (action.types === NEW_MESSAGE) {
    return {
      ...state,
      message: action.message,
    };
  }
};

export default reducer;
