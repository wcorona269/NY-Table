import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavLeft = () => {
	return (
		<div className="nav-left">
			<Link to={'/'}>
				<img className="nav-logo" src="https://i.imgur.com/TXAOA6P.png" alt="NY Table logo"/>
			</Link>
		</div>
	);
};

export default withRouter(NavLeft);

