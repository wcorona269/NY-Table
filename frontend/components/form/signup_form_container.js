import { connect } from "react-redux";
import {signup, login} from '../../actions/session_actions';
import SignupForm from "./signup_form";

const MSTP = state => {
    return {
        type: "signup",
        isAuthenticated: state.session.isAuthenticated
    }
};

const mapDispatchToProps = dispatch => ({
    signup: formUser => dispatch(signup(formUser)),
    login: formUser => dispatch(login(formUser)),
    closeModal: () => dispatch(closeModal())
});

const SignupFormContainer = connect(null, mapDispatchToProps)(SignupForm);
export default SignupFormContainer;

