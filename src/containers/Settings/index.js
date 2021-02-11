import { connect } from 'react-redux';
import { toggleSettings } from 'src/actions';
import Settings from 'src/components/Settings';

const mapStateToProps = (state) => ({
  open: state.open,
});
const mapDispatchToProps = (dispatch) => ({
  onClickButton: () => {
    const action = toggleSettings();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
