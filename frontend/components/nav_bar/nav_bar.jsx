import React from "react";
import SignupFormContainer from "../form/signup_form_container";

class NavBar extends React.Component {
	constructor(props) {
		super(props)

		this.signupModal = this.signupModal.bind(this);
		this.loginModal = this.loginModal.bind(this);
	}

	signupModal() {
		this.props.showModal("signup")
	}

	loginModal() {
		this.props.showModal("login")
	}
	
	render() {
		const {currentUser} = this.props;
		// debugger;
		const display = currentUser ? (
			<div className="nav-bar-container">
				<div className="nav-left">
					OpenTable
				</div>
				<div className='right-navbar'>
					<button className="btn btn-logout" onClick={() => this.props.logout()}>Sign Out</button>
				</div>
			</div>
			) : (
			<div className="nav-bar-container">
				<div className="nav-left">
					OpenTable
				</div>
				<div className="nav-right">
					<button className="btn btn-signup" onClick={this.signupModal}>Sign Up</button>
					<button className="btn btn-signin" onClick={this.loginModal}>Sign In</button>
				</div>
			</div>
			);
		return(
			<div>
				{display}
			</div>
		)
	}
}

export default NavBar;
