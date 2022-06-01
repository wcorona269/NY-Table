import React from 'react';
import { DynamicStar } from 'react-dynamic-star'
import { icNoiseLevel } from 'otkit-icons/token.theme.common';;

const ReviewsHeader = ({averages, overalls, reviews}) => {
	return (
		<>
			<header className='reviews-header'>
				<div>
					<h2>
						What {reviews.length} people are saying
					</h2>
				</div>
			</header>
			<section className="overall-section">
				<h3 className="overall-header">
					Overall ratings and reviews
				</h3>
				<article className="overall-details">
				<div>
					Reviews can only be made by diners who have eaten at this restaurant
				</div>
				<div className='star-details' >
					<div>
						<DynamicStar
								rating={averages.overall}
								width={20}
								height={20}
								outlined={false}
								totalStars={5}
								sharpnessStar={2}
								fullStarColor="#da3743"
								emptyStarColor="lightgray"
							/>
					</div>
					<span>
						{averages.overall} Based on recent reviews
					</span>
				</div>
				<ul className='details-ratings-ul'>
					<li>
						<p className='list-rating'>
							{averages.food}
						</p>
						<p className='ratings-cat'>
							Food
						</p>
					</li>	
					<li>
						<p className='list-rating'>
							{averages.service}
						</p>
						<p className='ratings-cat'>
							Service
						</p>
					</li>	
					<li>
						<p className='list-rating'>
							{averages.ambience}
						</p>
						<p className='ratings-cat'>
							Ambience
						</p>
					</li>	
				</ul>
				<div className='noise-rating'>
					<img src={`data:image/svg+xml;utf8,${icNoiseLevel}`}/>
					<span>
						Noise
					</span>
					<p>
						Moderate
					</p>
				</div>
			</article>
			<article className="overall-graph">
				<ol>
					<li>
						<label>
							5
						</label>
						<meter 
							id="meter-5"
						>
							<div style={{width: `${overalls.five}%`}}/>
						</meter>
					</li>
					<li>
						<label>
							4
						</label>
						<meter 
							id="meter-4"
						>
							<div style={{width: `${overalls.four}%`}}/>
						</meter>
					</li>
					<li>
						<label>
							3
						</label>
						<meter 
							id="meter-3"
							// value="79.08653846153845" min="0" max="100"
						>
							<div style={{width: `${overalls.three}%`}}/>
						</meter>
					</li>
					<li>
						<label>
							2
						</label>
						<meter 
							id="meter-2"
						>
							<div style={{width: `${overalls.two}%`}}/>
						</meter>
					</li>
					<li>
						<label>
							1
						</label>
						<meter 
							id="meter-1"
						>
							<div style={{width: `${overalls.one}%`}}/>
						</meter>
					</li>					
					</ol>
				</article>
			</section>
		</>

	)
}

export default ReviewsHeader