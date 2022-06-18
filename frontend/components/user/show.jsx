import React, {useEffect, useState} from 'react';
import UserFavorites from './favorites';
import UserEdit from './edit';
import UserDiningDashboard from './dining-dashboard';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useLocation, NavLink, Route } from 'react-router-dom';
import { fetchAllFavs } from '../../actions/favorite_actions';

const UserShow = (props) => {

	const history = useHistory();
	const dispatch = useDispatch();
	const location = useLocation();
	const [showDash, setShowDash] = useState(false)
	const [showSaved, setShowSaved] = useState(false)
	const [showEdit, setShowEdit] = useState(false)

	const user = Object.values(useSelector(state => state.entities.users));

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		console.log(window.location.hash)
		if (window.location.hash == `#/my/profile/${user[0].id}/dining-dashboard`) {
			setShowDash(true)
			setShowSaved(false)
			setShowEdit(false)
		} else if (window.location.hash == `#/my/profile/${user[0].id}/favorites`) {
			setShowSaved(true)
			setShowDash(false)
			setShowEdit(false)
		} else {
			setShowSaved(false)
			setShowDash(false)
			setShowEdit(true)
		}
	}, [window.location.hash])

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
					<NavLink
						className={showDash ? 'showing' : undefined}
						to={`/my/profile/${user[0].id}/dining-dashboard`}>Reservations</NavLink>
					<NavLink 
						className={showSaved ? 'showing' : undefined}
						to={`/my/profile/${user[0].id}/favorites`}>Saved Restaurants</NavLink>
					<NavLink 
						className={showEdit ? 'showing' : undefined}
						to={`/my/profile/edit`}>Account Details</NavLink>
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