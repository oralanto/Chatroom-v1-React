import { connect } from 'react-redux';
import Form from 'src/components/Form';
import { newMessage } from 'src/actions';

const mapStateToProps = () => ({});

// les props qui sont passées sur un container peuvent être récupérer
// via le 2e paramètre des fonction mapStateToProps et mapDispatchToProps
// par convention on les appelle ownProps, ce sera un objet
const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmitForm: () => {
    const action = newMessage(ownProps.messages);
    dispatch(action);
  },
});

const componentToConnect = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = componentToConnect(Form);
export default connectedComponent;
