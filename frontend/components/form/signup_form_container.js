import { connect } from "react-redux";
import {signup} from '../../actions/session_actions';
import SignupForm from "./signup_form";

const MSTP = state => ({
    type: "signup"
});

const mapDispatchToProps = dispatch => ({
    signup: formUser => dispatch(signup(formUser)),
    closeModal: () => dispatch(closeModal())
});

const SignupFormContainer = connect(null, mapDispatchToProps)(SignupForm);
export default SignupFormContainer;

