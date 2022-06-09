import React, {useEffect, useState} from 'react';
import UserFavorites from './favorites';
import UserEdit from './edit';
import UserDiningDashboard from './dining-dashboard';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useLocation, NavLink, Route } from 'react-router-dom';


const UserShow = (props) => {

	const history = useHistory();
	const dispatch = useDispatch();
	const location = useLocation();

	const user = Object.values(useSelector(state => state.entities.users));

	return (
		<div className='user-show-container'>
			<header className='user-show-header'>
				<div>
					<h1>
						{user[0].fname} {user[0].lname}
					</h1>
				</div>
			</header>
			<div className='user-show-flex-container'>
				<div className='user-show-left-col'>
					<NavLink to={`/my/profile/:userId/dining-dashboard`}>Reservations</NavLink>
					<NavLink to={`/my/profile/:userId/favorites`}>Favorites</NavLink>
					<NavLink to={`/my/profile/edit`}>Account Details</NavLink>
				</div>
				<div className='user-show-right-col'>
					<div>
						<Route exact path={`/my/profile/:userId/dining-dashboard`} component={UserDiningDashboard}/>
						<Route exact path={`/my/profile/:userId/favorites`} component={UserFavorites}/>
						<Route exact path={`/my/profile/edit`} component={UserEdit}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserShow;