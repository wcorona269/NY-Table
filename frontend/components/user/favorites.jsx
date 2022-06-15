import React, { useEffect } from 'react';
import PastReservations from './past';
import UpcomingReservations from './upcoming';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FavoritesListItem from './favorites_list_item';
import { clearRests, fetchRest } from '../../actions/rest_actions';


const UserFavorites = (props) => {
	const dispatch = useDispatch();
	const user = Object.values(useSelector(state => state.entities.users))
	const rests = Object.values(useSelector(state => state.entities.rests))
	const favs = Object.values((useSelector(state => state.entities.favorites.favoritesAll)))

	useEffect(() => {
		dispatch(clearRests())
	}, [])

	useEffect(() => {

	}, [useSelector(state => state.entities.favorites.favoritesAll)])

	return (
		<div className='user-favorites-container'>
			<h2 id='saved-header'>
				Saved Restaurants
			</h2>
			<div>
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