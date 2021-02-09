import NEW_MESSAGE from 'src/actions';

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
    default:
      return state;
  }
};

export default reducer;
