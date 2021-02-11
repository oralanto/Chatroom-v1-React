import { connect } from 'react-redux';
import { changeInputValue } from 'src/actions';
import Field from 'src/components/Field';

const mapStateToProps = (state, { name }) => ({
  inputValue: state.user[name],
});
const mapDispatchToProps = (dispatch) => ({
  onChangeInputValue: (value) => {
    const action = changeInputValue(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
