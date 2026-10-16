import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavButton from '../user/fav_button';
import LeftColumn from './left_col';
import RightColumn from './right_col';
import { fetchRest } from "../../actions/rest_actions";
import { fetchAllFavs } from "../../actions/favorite_actions";

const RestShow = ({ match, history }) => {
	const dispatch = useDispatch();
	const restId = match.params.restId;
	const restaurant = useSelector(state => state.entities.rests[restId]);
	const favorites = useSelector(state => state.entities.favorites.favoritesAll);
	const user = useSelector(state => state.session.id);
	const menuItemsById = useSelector(state => state.entities.menu_items);
	const reviewsById = useSelector(state => state.entities.reviews);

	useEffect(() => {
		dispatch(fetchRest(restId));
		if (user) {
			dispatch(fetchAllFavs());
		}
		window.scrollTo(0, 0);
	}, [restId]);

	const menuItems = useMemo(() => (
		Object.values(menuItemsById).filter(item => item.rest_id == restId)
	), [menuItemsById, restId]);

	const restReviews = useMemo(() => (
		Object.values(reviewsById).filter(review => review.rest_id == restId)
	), [reviewsById, restId]);

	if (!restaurant || !favorites) return null;

	return (
		<>
			<div className="rest-header-container">
				<div className="rest-header-neighborhood">
					{restaurant.neighborhood}
				</div>
				<div className="rest-header-banner-photo">
					<img src={restaurant.banner}/>
					<FavButton user={user} restId={restaurant.id} favorites={favorites}/>
				</div>
			</div>
			<div className="rest-show-container">
				<LeftColumn match={match} restaurant={restaurant} reviews={restReviews} menu_items={menuItems}/>
				<RightColumn history={history} restaurant={restaurant}/>
			</div>
		</>
	)
}

export default RestShow;
