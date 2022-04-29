import { connect } from "react-redux";
import {signup} from '../../actions/user_actions';
import SignupForm from "./signup_form";

const MSTP = state => ({
    type: "signup"
});

const mapDispatchToProps = dispatch => ({
    signup: formUser => dispatch(signup(formUser))
});

const SignupFormContainer = connect(null, mapDispatchToProps)(SignupForm);
export default SignupFormContainer;

