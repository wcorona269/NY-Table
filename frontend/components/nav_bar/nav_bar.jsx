
import React from "react";
import NavLeft from "./nav_left";
import NavRightContainer from "./nav_right_container";

class NavBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<>
				<div className="nav-bar-container">
					<div className="nav-left">
						<NavLeft/>
					</div>
					<div className="nav-right">
						<NavRightContainer/>
					</div>
				</div>
			</>
		)
	}
}

export default NavBar;
