import React from 'react';
import UserDropdown from "./user_dropdown";
import ResDropdown from "./reservations_dropdown";
import AbtDropdown from "./about_dropdown";

import { icCalendar } from 'otkit-icons/token.theme.common';
import { icBell } from 'otkit-icons/token.theme.common';
import { icSearch } from 'otkit-icons/token.theme.common';

class NavRight extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userDropdown: false,
			resDropdown: false,
			abtDropdown: false,
			searchModal: false
		}

		this.signupModal = this.signupModal.bind(this);
		this.loginModal = this.loginModal.bind(this);
	}

	signupModal() {
		this.props.showModal("signup")
	}

	loginModal() {
		this.props.showModal("login")
	}

	render () {
		const {currentUser, logout} = this.props;

		const display = currentUser ? (
			<div className="user-nav-right-container">
				<UserDropdown currentUser={currentUser} logout={logout} />
				<ResDropdown/>
				<AbtDropdown/>
				<div id="user-nav-right-search-button-container" className="user-nav-right-button-container">
					<div id="user-search" className="user-nav-right-search-wrapper">
						<button className="user-search-popout-button">
							<img id="search-img"  src={`data:image/svg+xml;utf8,${icSearch}`} href="#"/>
						</button>
					</div>
				</div>
			</div> ) : (
		<div className="user-nav-right-container">
			<button className="btn guest-btn btn-signup" onClick={this.signupModal}>Sign Up</button>
			<button className="btn guest-btn btn-signin" onClick={this.loginModal}>Sign In</button>
			<div id="user-nav-right-search-button-container" className="user-nav-right-button-container">
					<div id="user-search" className="user-nav-right-search-wrapper">				
						<button className="user-search-popout-button">
							<img id="search-img"  src={`data:image/svg+xml;utf8,${icSearch}`} href="#"/>
						</button>
					</div>
				</div>
		</div>
		);

		return (
			display
		);
	}
};

export default NavRight;
