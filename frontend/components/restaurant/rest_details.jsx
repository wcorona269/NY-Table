import React from 'react';
import { icCuisine } from 'otkit-icons/token.theme.common';
import { icPriceRange } from 'otkit-icons/token.theme.common';
import { icReview} from 'otkit-icons/token.theme.common';
import { DynamicStar } from 'react-dynamic-star';
import { useState, useRef, useEffect } from 'react';

const RestDetails = ({restaurant, rating, reviews}) => {
	const [ReadMore, setReadMore] = useState(false);	
	
	const toggleReadMore = () => {
		setReadMore(!ReadMore)

		let ele = document.getElementById("description");
		let btn = document.getElementById('read-more');

		if (ReadMore) {
			ele.style.height = "4.9rem";
			btn.value = "+ Read more";
		 } else {
			ele.style.height = "fit-content"
			btn.value = "- Read less";
		 }
	}

	const reviewCount = () => {
		return reviews.length
	}
	
	const priceRangeText = (priceRange) => {
		switch(priceRange) {
			case 1:
				return "$20 and under";
				break;
			case 2:
				return "$30 and under";
				break;
			case 3:
				return "$31 to $50";
				break;
			case 4:
				return "$50 and over";
				break;
		}
	}

	return (
		<section className='main-show-col-details'>
			<header className="main-show-col-header" id='overview-id'>
				{restaurant.name}
			</header>
			<div className="main-col-info">
				<div className='info-item'>
				<DynamicStar
						rating={rating}
						width={20}
						height={20}
						outlined={false}
						totalStars={5}
						sharpnessStar={2}
						fullStarColor="#da3743"
						emptyStarColor="lightgray"
					/>
					<p>
						{rating}
					</p>
				</div>
				<div className='info-item'>
					<div className="rest-info-img">
						<img src={`data:image/svg+xml;utf8,${icReview}`}/>
					</div>
					{reviewCount()} Reviews
				</div>
				<div className='info-item'>
					<div className='rest-info-img'>
						<img src={`data:image/svg+xml;utf8,${icPriceRange}`}/>
					</div>
					{priceRangeText(restaurant.price_range)}
				</div>
				<div className='info-item'>
					<div className="rest-info-img">
						<img src={`data:image/svg+xml;utf8,${icCuisine}`}/>
					</div>
					{restaurant.cuisines}
				</div>
			</div>
			<div id='description' className="rest-show-description">
				{restaurant.description}
				<br></br>
			</div>
				<button id='read-more' onClick={() => toggleReadMore()}>
					{ReadMore ? "- Read less" : "+ Read more"}
				</button>
		</section>
	)
}

export default RestDetails;