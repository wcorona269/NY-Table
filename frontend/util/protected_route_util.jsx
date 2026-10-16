import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// Renders the route only for logged-in users; otherwise sends them home.
export const ProtectedRoute = ({ component: Component, ...rest }) => {
	const loggedIn = useSelector(state => Boolean(state.session.id));
	return (
		<Route {...rest} render={props => loggedIn ? <Component {...props} /> : <Redirect to="/" />} />
	);
};
