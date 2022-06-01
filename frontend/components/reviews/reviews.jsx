import React from 'react';
import { withRouter } from 'react-router-dom';

import Review from '../reviews/review';
import ReviewsHeader from './reviews_header';

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

		return (this.props.reviews.length) ? (
			<section className='reviews-container' id='reviews-id'>
				<ReviewsHeader reviews={reviews} averages={averages} overalls={overalls}/>
				<ol>
					<Review reviews={reviews}/>
				</ol>
			</section>
		) : (null)
	}
}

export default withRouter(Reviews);