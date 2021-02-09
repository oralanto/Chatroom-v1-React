import { SET_INPUT_VALUE, ADD_MESSAGE } from 'src/actions';

const initialState = {
  messages: [
    {
      id: 1,
      user: 'Super Chat',
      message: 'Kikou',
    },
    {
      id: 2,
      user: 'Super Chat',
      message: 'Kikou',
    },
    {
      id: 3,
      user: 'Super Chat',
      message: 'Kikou',
    },
  ],
  newMessage: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        newMessage: action.value,
      };
    case ADD_MESSAGE: {
      const message = {
        id: 6,
        user: 'Osée',
        message: 'Coucou toitoitoitoti',
      };
      const messages = [...state.messages, message];
      return {
        ...state,
        messages,
        newMessage: '',
      };
    }
    default:
      return state;
  }
};

export default reducer;
