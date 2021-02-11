import {
  SET_INPUT_VALUE,
  ADD_MESSAGE,
  TOGGLE_SETTINGS,
  CHANGE_INPUT_VALUE,
} from 'src/actions';
import getHighestId from 'src/selectors';

const initialState = {
  messages: [
    {
      id: 1,
      user: 'Super Chat',
      message: 'Kikou',
    },
  ],
  newMessage: '',
  open: true,
  user: {
    email: 'toto@tata.com',
    password: 'ouiouioui',
    pseudo: 'Unknow',
  },
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
        id: getHighestId(state) + 1,
        user: 'Osée',
        message: state.newMessage,
      };
      const messages = [...state.messages, message];
      return {
        ...state,
        messages,
        newMessage: '',
      };
    }
    case TOGGLE_SETTINGS:
      return {
        ...state,
        open: !state.open,
      };
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        user: {
          ...state.user,
          [action.name]: action.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
