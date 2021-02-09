const getHighestId = ({ messages }) => {
  const ids = messages.map((message) => message.id);
  return Math.max(...ids);
};

export default getHighestId;
