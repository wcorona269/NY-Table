import React from 'react';
import { withRouter } from 'react-router-dom';

const NavLeft = () => {
	return (
		<div className="nav-left">
			<img className="nav-logo" src="//cdn.otstatic.com/cfe/8/images/opentable-logo-153e80.svg" alt="OpenTable logo"/>
		</div>
	);
};

export default withRouter(NavLeft);

