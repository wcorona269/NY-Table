import React from "react";
import {Link, withRouter} from 'react-router-dom';

const AbtDropdown = ({abtDropdown}) => {
	const abtDrop = abtDropdown ? "user-dropdown-ul" : "hidden";

	return (
		<div id="abt-drop" className={abtDrop}>
			<div id="abt-drop-title" className="dropdown-title">About this project</div>
			<div className="abt-drop-info-container">
				My name is William Corona and I am a full-stack software engineering student at <p className="red-text">App Academy.</p>
				<br />
				<p className="red-text">MyTable</p> is an online web application for booking restaurant reservations. It is inspired by and modeled after <p className="red-text">OpenTable</p>.
				<br />
				This project uses <p className="blue-text">React</p>, <p className="blue-text">Redux</p>, <p className="blue-text">CSS</p> and <p className="blue-text">SASS</p> for frontend configuration, and <p className="blue-text">Rails/PostgreSQL</p> on the backend.
			</div>
		</div>
	);
}

export default withRouter(AbtDropdown)