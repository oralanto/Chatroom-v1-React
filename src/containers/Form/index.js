import { connect } from 'react-redux';
import Form from 'src/components/Form';
import { setInputValue, addMessage } from 'src/actions';

const mapStateToProps = (state) => ({
  inputValue: state.newMessage,
});

// les props qui sont passées sur un container peuvent être récupérer
// via le 2e paramètre des fonction mapStateToProps et mapDispatchToProps
// par convention on les appelle ownProps, ce sera un objet
const mapDispatchToProps = (dispatch) => ({
  onChangeInputValue: (value) => {
    const action = setInputValue(value);
    dispatch(action);
  },
  onSubmitForm: () => {
    const action = addMessage();
    dispatch(action);
    console.log('je veux changer la value: ', action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
