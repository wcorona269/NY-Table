import { connect } from "react-redux";
import NavBar from "./nav_bar"
import { showModal } from "../../actions/modal_actions"
import { logout } from "../../actions/session_actions";

const mSTP = state => ({
	currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
	showModal: modal => dispatch(showModal(modal)),
	logout: () => dispatch(logout()),
})

const NavBarContainer = connect(mSTP, mDTP)(NavBar);
export default NavBarContainer;

