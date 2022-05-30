import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { DynamicStar } from 'react-dynamic-star';
import { icNoiseLevel } from 'otkit-icons/token.theme.common';
import Review from './review';


const Reviews = (props) => {

	const reviews = [
		{
			username: 'veronica',
			overall: 5,
			food: 5,
			service: 4,
			ambiance: 3,
			body: "Wow, i loved the food here! I brought my entire family and we ate so much my stomach hurt after. I'm going to be sure to tell all of my friends about this place!"
		},
		{
			username: 'will',
			overall: 3,
			food: 2,
			service: 3,
			ambiance: 4,
			body: "The service was good but the food was terrible! I loved the music. I had the hot dog and it was cold and dry. I am going to come back soon to give them a second chance. Hopefully then it will be alright."
		},
		{
			username: 'joe',
			overall: 5,
			food: 2,
			service: 3,
			ambiance: 1,
			body: "It was too loud inside! I loved the food and the people, but had to shout to talk to anyone at my table. Turn the music down! Otherwise, it was great"
		},
		{
			username: 'patrick',
			overall: 1,
			food: 2,
			service: 3,
			ambiance: 4,
			body: "I don't want to spend my money here... it was too loud inside! I loved the food and the people, but had to shout to talk to anyone at my table. Turn the music down! Otherwise, it was great"
		}
	]

	const returnReviews = (revs) => {
		revs.map((review, idx) => 
			console.log(review)
		)
	} 


	return (
		<section className='reviews-container' id='reviews-id'>
			<header className='reviews-header'>
				<div>
					<h2>
						What people are saying
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
									rating={2.5}
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
								Based on recent reviews
							</span>
					</div>
					<ul className='details-ratings-ul'>
						<li>
							<p className='list-rating'>
								4.8
							</p>
							<p className='ratings-cat'>
								Food
							</p>
						</li>	
						<li>
							<p className='list-rating'>
								3.3
							</p>
							<p className='ratings-cat'>
								Service
							</p>
						</li>	
						<li>
							<p className='list-rating'>
								4.4
							</p>
							<p className='ratings-cat'>
								Ambiance
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
								// value="79.08653846153845" min="0" max="100"
							>
								<div style={{width:"78%"}}/>
							</meter>
						</li>
						<li>
							<label>
								4
							</label>
							<meter 
								id="meter-4"
								// value="79.08653846153845" min="0" max="100"
							>
								<div style={{width:"10%"}}/>
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
								<div style={{width:"2%"}}/>
							</meter>
						</li>
						<li>
							<label>
								2
							</label>
							<meter 
								id="meter-2"
								// value="79.08653846153845" min="0" max="100"
							>
								<div style={{width:"3%"}}/>
							</meter>
						</li>
						<li>
							<label>
								1
							</label>
							<meter 
								id="meter-1"
								// value="79.08653846153845" min="0" max="100"
							>
								<div style={{width:"7%"}}/>
							</meter>
						</li>
					
					</ol>
				</article>
			</section>
			<ol>
				<Review reviews={reviews}/>
			</ol>
		</section>
	)

}

export default withRouter(Reviews);