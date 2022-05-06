import React from 'react';
import { withRouter } from 'react-router-dom';

const NavLeft = () => {
	return (
		<div className="nav-left">
			<img className="nav-logo" src="https://i.imgur.com/TXAOA6P.png" alt="NY Table logo"/>
		</div>
	);
};

export default withRouter(NavLeft);

