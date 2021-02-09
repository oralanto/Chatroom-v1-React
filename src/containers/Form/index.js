import { connect } from 'react-redux';
import Form from 'src/components/Form';
import { setInputValue } from 'src/actions';

const mapStateToProps = (state) => ({
  inputValue: state.newMessage,
});

// les props qui sont passées sur un container peuvent être récupérer
// via le 2e paramètre des fonction mapStateToProps et mapDispatchToProps
// par convention on les appelle ownProps, ce sera un objet
const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeInputValue: () => {
    const action = setInputValue(ownProps.messages);
    dispatch(action);
    console.log('Je change la value');
  },
});

const componentToConnect = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = componentToConnect(Form);
export default connectedComponent;
