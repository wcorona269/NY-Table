import { connect } from "react-redux";
import {login} from '../../actions/session_actions';
import LoginForm from "./login_form";

const MSTP = state => ({
    type: "login"
});

const MDTP = dispatch => ({
    login: formUser => dispatch(login(formUser)),
    closeModal: () => dispatch(closeModal())
});

const LoginFormContainer = connect(MSTP, MDTP)(LoginForm);
export default LoginFormContainer;