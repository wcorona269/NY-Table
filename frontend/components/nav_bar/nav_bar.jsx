import React from "react";
import NavLeft from "./nav_left";
import NavRight from "./nav_right";

const NavBar = () => (
	<div className="nav-bar-container">
		<div className="nav-left">
			<NavLeft/>
		</div>
		<div className="nav-right">
			<NavRight/>
		</div>
	</div>
)

export default NavBar;
