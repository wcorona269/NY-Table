import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import UserDropdown from "./user_dropdown";
import ResDropdown from "./reservations_dropdown";
import AbtDropdown from "./about_dropdown";
import { showModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";

import { icSearch } from 'otkit-icons/token.theme.common';

const NavRight = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector(state => state.entities.users[state.session.id]);

	const signupModal = () => dispatch(showModal("signup"));
	const loginModal = () => dispatch(showModal("login"));
	const searchModal = () => dispatch(showModal("search"));
	const handleLogout = () => dispatch(logout());

	return currentUser ? (
		<div className="user-nav-right-container">
			<UserDropdown currentUser={currentUser} logout={handleLogout} />
			<ResDropdown/>
			<AbtDropdown/>
			<div id="user-nav-right-search-button-container" className="user-nav-right-button-container">
				<div id="user-search" className="user-nav-right-search-wrapper">
					<button className="user-search-popout-button" onClick={searchModal}>
						<img id="search-img"  src={`data:image/svg+xml;utf8,${icSearch}`} href="#"/>
					</button>
				</div>
			</div>
		</div>
	) : (
		<div className="user-nav-right-container">
			<Button variant="outlined" color="primary" className="btn-signup" onClick={signupModal}>Sign Up</Button>
			<Button variant="contained" color="primary" className="btn-signin" onClick={loginModal}>Sign In</Button>
			<div id="user-nav-right-search-button-container" className="user-nav-right-button-container">
				<div id="user-search" className="user-nav-right-search-wrapper">
					<button className="user-search-popout-button">
						<img id="search-img"  src={`data:image/svg+xml;utf8,${icSearch}`} href="#"/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default NavRight;
