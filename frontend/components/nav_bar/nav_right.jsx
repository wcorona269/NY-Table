import React from 'react';
import UserDropdown from "./user_dropdown";
import ResDropdown from "./reservations_dropdown";
import AbtDropdown from "./about_dropdown";
import { icPerson } from 'otkit-icons/token.theme.common';
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
		this.userDropdownClick = this.userDropdownClick.bind(this);
		this.resDropdownClick = this.resDropdownClick.bind(this);
		this.abtDropdownClick = this.abtDropdownClick.bind(this);
	}

	userDropdownClick() {
		this.setState({userDropdown: !this.state.userDropdown})
	}

	resDropdownClick() {
		this.setState({resDropdown: !this.state.resDropdown})
	}

	abtDropdownClick() {
		this.setState({abtDropdown: !this.state.abtDropdown})
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
				<div id="nav-btn" className="user-nav-right-button-container">
					<button className="user-info-dropdown-container" onClick={this.userDropdownClick}>
						<img src={`data:image/svg+xml;utf8,${icPerson}`} href="#" id="userDropdown" data-toggle="dropdown" className="user-info-img-dropdown-button"/>
					</button>
				</div>
				<div id="nav-btn" className="user-nav-right-button-container">
					<button className="user-calendar-dropdown-button" onClick={this.resDropdownClick} id="userDropdown" data-toggle="dropdown">
						<img src={`data:image/svg+xml;utf8,${icCalendar}`} href="#" id="resDropdown" data-toggle="dropdown" className="user-info-img-dropdown-button"/>
					</button>
				</div>
				<div id="nav-bell" className="user-nav-right-button-container">
					<button className="user-abt-dropdown-button" onClick={this.abtDropdownClick} id="userDropdown" data-toggle="dropdown">
						<img src={`data:image/svg+xml;utf8,${icBell}`} href="#"/>
					</button>
				</div>
				<div id="user-nav-right-search-button-container" className="user-nav-right-button-container">
					<div id="user-search" className="user-nav-right-search-wrapper">				
						<button className="user-search-popout-button">
							<img id="search-img"  src={`data:image/svg+xml;utf8,${icSearch}`} href="#"/>
						</button>
					</div>
				</div>
				{this.state.userDropdown && <UserDropdown userDropdown={this.state.userDropdown} currentUser={currentUser} logout={logout} />}
				{this.state.resDropdown && <ResDropdown resDropdown={this.state.resDropdown} />}
				{this.state.abtDropdown && <AbtDropdown abtDropdown={this.state.abtDropdown} />}
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
