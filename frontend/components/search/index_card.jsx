import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { DynamicStar } from 'react-dynamic-star';
import { icSocialProof } from 'otkit-icons/token.theme.common';
import TimeButtons from '../booking/time_buttons';

const RestaurantCard = ({rest, time, date, party}) => {
	let rating = parseFloat(rest.avg_rating).toFixed(1)
	
	const gagueQuality = (rating) => {
		return rating > 4.5 ? (
			'Exceptional'
		) : rating > 4.0 ? (
			'Awesome'
		) : rating > 3.0 ? (
			'Excellent'
		) : (
			'Good'
		)
	}

	const priceRange = (num) => {
		if (num === 1) {
			return	<span><span className="red-dollar">$</span><span className="gray-dollar">$$$</span></span>
		} else if (num === 2) {
			return	<span><span className="red-dollar">$$</span><span className="gray-dollar">$$</span></span>
		} else if (num === 3) {
			return	<span><span className="red-dollar">$$$</span><span className="gray-dollar">$</span></span>
		} else {
			return	<span><span className="red-dollar">$$$$</span></span>
		}
	}

	return (
		<div id='restaurant-card'>
			<div id='card-img-container'>
				<Link to={`/restaurants/${rest.id}`}>
					<img src={rest.iconUrl}/>
				</Link>
			</div>
			<div id='card-details'>
				<div>
					<Link to={`/restaurants/${rest.id}`}>
						<h6>
							{rest.name}
						</h6>
					</Link>
				</div>
				<div>
					<DynamicStar
						rating={rating}
						width={23}
						height={23}
						outlined={false}
						totalStars={5}
						sharpnessStar={2}
						fullStarColor="#FDAF08"
						emptyStarColor="#d8d9db"
					/>
					<p>
						{gagueQuality(rating)}
					</p>
					<div id='review-count'>
						({rest.reviews.length})
					</div>
				</div>
				<div>
					<div id='card-fine-details'>
						{priceRange(rest.price_range)} • {rest.cuisines} • {rest.neighborhood}
					</div>
				</div>
				<div className="li-button-today-div">
					<img 
						className="scrollbar-booking-count"
						src={`data:image/svg+xml;utf8,${icSocialProof}`}
					/>
					Booked {rest.bookings_count} times today
				</div>
				<TimeButtons restId={rest.id} time={time} date={date} party={party}/>
			</div>
		</div>
	)
}

export default withRouter(RestaurantCard);