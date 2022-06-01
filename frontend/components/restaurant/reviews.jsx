import React from 'react';
import { withRouter } from 'react-router-dom';
import { DynamicStar } from 'react-dynamic-star';
import { icNoiseLevel } from 'otkit-icons/token.theme.common';
import Review from './review';

class Reviews extends React.Component {
	constructor(props) {
		super(props)

		this.getAverageReviews = this.getAverageReviews.bind(this)
		this.overallScoreCounts = this.overallScoreCounts.bind(this)
	}
	
	
	componentWillUnmount() {
		this.props.clearReviews()
	}

	getAverageReviews(reviews) {
		let averages = {
			"overall": [],
			"food": [],
			"service": [],
			"ambience": []
		}

		reviews.forEach(review => {
			averages.overall.push(review.overall)
			averages.food.push(review.food)
			averages.service.push(review.service)
			averages.ambience.push(review.ambience)
		})

		let num = averages.overall.length

		return {
			"overall": (averages.overall.reduce((a, b) => a + b, 0) / num).toFixed(1),
			"food": (averages.food.reduce((a, b) => a + b, 0) / num).toFixed(1),
			"service": (averages.service.reduce((a, b) => a + b, 0) / num).toFixed(1),
			"ambience": (averages.ambience.reduce((a, b) => a + b, 0) / num).toFixed(1),
		}
	}

	overallScoreCounts(reviews) {
		let overallScoreCounts = {
			"one": 0,
			"two": 0,
			"three": 0,
			"four": 0,
			"five": 0,
		}

		reviews.forEach((review) => {
			if (review.overall == 1) {
				overallScoreCounts.one += 1
			} 
			else if (review.overall == 2) {
				overallScoreCounts.two += 1
			}
			else if (review.overall == 3) {
				overallScoreCounts.three += 1
			}
			else if (review.overall == 4) {
				overallScoreCounts.four += 1
			}
			else if (review.overall == 5) {
				overallScoreCounts.five += 1
			}
		})

		return {
			"one" : (100 * overallScoreCounts.one) / (reviews.length * 1.0),
			"two" : (100 * overallScoreCounts.two) / (reviews.length * 1.0),
			"three" : (100 * overallScoreCounts.three) / (reviews.length * 1.0),
			"four" : (100 * overallScoreCounts.four) / (reviews.length * 1.0),
			"five" : (100 * overallScoreCounts.five) / (reviews.length * 1.0),
		}
	}

	render() {
		let reviews = this.props.reviews.filter(review => review.rest_id == this.props.match.params.restId);
		let averages = this.getAverageReviews(reviews);
		let overalls = this.overallScoreCounts(reviews);
		// console.log(overalls);

		return (this.props.reviews.length) ? (
			<section className='reviews-container' id='reviews-id'>
				<header className='reviews-header'>
					<div>
						<h2>
							What {this.props.reviews.length} people are saying
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
				<ol>
					<Review reviews={reviews}/>
				</ol>
			</section>
		) : (null)
	}
}

export default withRouter(Reviews);