import React from 'react';
import RestNavButtons from './rest_nav_buttons';
import RestDetails from './rest_details';
import Gallery from './gallery';
import Menu from './menu';
import Reviews from '../reviews/reviews';

const rating = (reviews) => {
	if (!reviews.length) return "0.0";
	const sum = reviews.reduce((acc, review) => acc + review.overall, 0);
	return (sum / reviews.length).toFixed(1);
}

const LeftColumn = ({ restaurant, reviews, menu_items, match }) => {
	if (!restaurant) return null;

	return (
		<div className="rest-show-main-col">
			<RestNavButtons/>
			<RestDetails restaurant={restaurant} rating={rating(reviews)} reviews={reviews}/>
			<Gallery photos={restaurant.photoUrls}/>
			<Menu menuItems={menu_items}/>
			<Reviews match={match}/>
		</div>
	)
}

export default LeftColumn;
