export const NEW_MESSAGE = 'NEW_MESSAGE';

export const newMessage = (messages) => ({
  type: NEW_MESSAGE,
  messages,
});
