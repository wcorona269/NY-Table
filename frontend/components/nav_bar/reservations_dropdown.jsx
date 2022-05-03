import React from "react";
import {Link, withRouter} from 'react-router-dom';

const ResDropdown = ({resDropdown}) => {
	const resDrop = resDropdown ? "user-dropdown-ul" : "hidden";

	return (
		<div id="res-drop" className={resDrop}>
			<div id="res-drop-title" className="dropdown-title">Upcoming reservations</div>
			<div>You have no upcoming reservations</div>
		</div>
	)
}

export default withRouter(ResDropdown);

