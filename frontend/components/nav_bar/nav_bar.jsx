import React from "react";
import SignupFormContainer from "../form/signup_form_container";

class NavBar extends React.Component {
	constructor(props) {
		super(props)

		this.signupModal = this.signupModal.bind(this);
	}

	signupModal() {
		this.props.showModal("signup")
	}

	render() {
		return(
			<div>
				<div className="nav-left">
					OpenTable
				</div>
				<div className="nav-right">
					<button onClick={this.signupModal}>Sign Up</button>
				</div>
			</div>
		)
	}
}

export default NavBar;