import React, {useState} from "react";
import {Link, withRouter} from 'react-router-dom';
import { icCalendar } from 'otkit-icons/token.theme.common';

const ResDropdown = ({resDropdown}) => {
	const [visible, setVisible] = useState(false);

	const hideMenu = e => {
		if (e.target.contains(e.relatedTarget)) {
				return null
		}
		setVisible(false)
	}

	const resDropdownClick = (e) => {
		setVisible(true)
	}

	return (
		<div id="nav-btn" className="user-nav-right-button-container">

			<button className="user-calendar-dropdown-button" onClick={resDropdownClick} id="userDropdown" data-toggle="dropdown">
				<img src={`data:image/svg+xml;utf8,${icCalendar}`} href="#" id="resDropdown" data-toggle="dropdown" className="user-info-img-dropdown-button"/>
			</button>
			{visible &&
				<div id="res-drop" className='user-dropdown-ul' onMouseLeave={hideMenu}>
					<div id="res-drop-title" className="dropdown-title">Upcoming reservations</div>
					<div>You have no upcoming reservations</div>
				</div>
			}
		</div>
	)
}

export default withRouter(ResDropdown);

