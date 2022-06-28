import React, { useEffect } from "react";
import {Link, withRouter} from 'react-router-dom';
import { useState } from "react";
import { icPerson } from 'otkit-icons/token.theme.common';

const UserDropdown = ({logout, currentUser}) => {
	const [visible, setVisible] = useState(false);

	const hideMenu = e => {
		if (e.target.contains(e.relatedTarget)) {
				return null
		}
		setVisible(false)
	}

	const userDropdownClick = (e) => {
		setVisible(true)
	}

	return (
		<div id="nav-btn" className="user-nav-right-button-container">
			<button className="user-info-dropdown-container" onClick={userDropdownClick}>
				<img src={`data:image/svg+xml;utf8,${icPerson}`} href="#" id="userDropdown" data-toggle="dropdown" className="user-info-img-dropdown-button"/>
			</button>
			{visible && 
				<div className='user-dropdown-ul' onMouseLeave={() => setVisible(false)}>
					<div className="dropdown-title">Hello, {currentUser.fname}!
					</div>
					<ul>
						<Link to={`/my/profile/${currentUser.id}/dining-dashboard`}>
							<li className="dropdown-list-item">My profile</li>
						</Link>
						<Link to={`/my/profile/${currentUser.id}/dining-dashboard`}>
							<li className="dropdown-list-item">My Dining History</li>
						</Link>
						<Link to={`/my/profile/${currentUser.id}/favorites`}>
							<li className="dropdown-list-item">My Saved Restaurants</li>
						</Link>
						<li className="dropdown-list-item" onClick={logout}>Sign Out</li>
						{/* <Link to="/my/profile">
							<li className="dropdown-list-item"></li>
						</Link> */}
					</ul>
				</div>
				}
		</div>
	)
}

export default withRouter(UserDropdown)