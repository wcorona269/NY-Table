import { connect } from "react-redux";
import NavBar from "./nav_bar"
import { showModal } from "../../actions/modal_actions"

const mSTP = state => ({

})

const mDTP = dispatch => ({
	showModal: modal => dispatch(showModal(modal))
})

const NavBarContainer = connect(mSTP, mDTP)(NavBar);
export default NavBarContainer;

