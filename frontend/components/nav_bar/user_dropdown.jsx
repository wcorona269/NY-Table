import React from "react";
import {Link, withRouter} from 'react-router-dom';
import { useState } from "react";

const UserDropdown = ({userDropdown, logout, currentUser}) => {
	const userDrop = userDropdown ? "user-dropdown-ul" : "hidden";
	console.log(currentUser)

	return (
		// <div>Hello</div>
		<div className={userDrop}>
			<div className="dropdown-title">Hello, {currentUser.fname}!</div>
			<ul>
				<li className="dropdown-list-item" onClick={logout}>Sign Out</li>
			</ul>
		</div>
	)
}
export default withRouter(UserDropdown)