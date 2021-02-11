import axios from 'axios';
import { connect } from 'react-redux';
import { toggleSettings, login } from 'src/actions';
import Settings from 'src/components/Settings';

const mapStateToProps = (state) => ({
  open: state.open,
});
const mapDispatchToProps = (dispatch) => ({
  onClickButton: () => {
    const action = toggleSettings();
    dispatch(action);
  },
  onSubmitForm: (e) => {
    e.preventDefault();
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
