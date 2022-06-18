import React, { useEffect, useState } from 'react';
import PastReservations from './past';
import UpcomingReservations from './upcoming';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FavoritesListItem from './favorites_list_item';
import { clearRests, fetchRest } from '../../actions/rest_actions';
import { fetchAllFavs } from '../../actions/favorite_actions';

const UserFavorites = (props) => {
	const dispatch = useDispatch();
	const favs = Object.values((useSelector(state => state.entities.favorites.favoritesAll)))
	const [update, setUpdate] = useState(false)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		let length = favs.length

		if (favs.length !== length) setUpdate(true)
	}, [update])

	useEffect(() => {
		dispatch(fetchAllFavs())
	}, [])

	return !favs.length ? (
		<div className='user-favorites-container'>
			<h2 id='saved-header'>
				Saved Restaurants
			</h2>
			<div id='no-content-message'>
				<span>
				You have no favorite restaurants to show on this list.
				</span>
			</div>
		</div>
	) : (
		<div className='user-favorites-container'>
			<h2 id='saved-header'>
				Saved Restaurants
			</h2>
			<div id='favs-list-ordered'>
				{favs.map((fav, idx) => 
					<FavoritesListItem
						key={idx}
						fav={fav}
					/>
				)}
			</div>
		</div>
	)
}

export default withRouter(UserFavorites);