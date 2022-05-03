import { connect } from "react-redux";
import NavRight from "./nav_right"
import { showModal } from "../../actions/modal_actions"
import { logout } from "../../actions/session_actions";

const mSTP = state => ({
	currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
	showModal: modal => dispatch(showModal(modal)),
	logout: () => dispatch(logout()),
})

const RightNavContainer = connect(mSTP, mDTP)(NavRight);
export default RightNavContainer;

