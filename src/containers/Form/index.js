import { connect } from 'react-redux';
import Form from 'src/components/Form';
import { setInputValue, addMessage } from 'src/actions';

const mapStateToProps = (state) => ({
  inputValue: state.newMessage,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInputValue: (value) => {
    const action = setInputValue(value);
    dispatch(action);
  },
  onSubmitForm: (value) => {
    const action = addMessage(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
