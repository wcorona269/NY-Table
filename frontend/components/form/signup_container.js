import { connect } from "react-redux";
import {signup} from '../../actions/user_actions';
import SignupForm from './signup_form';

const mapDispatchToProps = dispatch => ({
    signup: formUser => dispatch(signup(formUser))
});

export default connect(null, mapDispatchToProps)(SignupForm);



