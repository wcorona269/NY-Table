import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReviewsIndex from '../reviews/review';
import ReviewsHeader from './reviews_header';
import { clearReviews } from '../../actions/review_actions';

const getAverageReviews = (reviews) => {
	const averages = { overall: [], food: [], service: [], ambience: [] };

	reviews.forEach(review => {
		averages.overall.push(review.overall)
		averages.food.push(review.food)
		averages.service.push(review.service)
		averages.ambience.push(review.ambience)
	})

	const num = averages.overall.length;

	return {
		overall: (averages.overall.reduce((a, b) => a + b, 0) / num).toFixed(1),
		food: (averages.food.reduce((a, b) => a + b, 0) / num).toFixed(1),
		service: (averages.service.reduce((a, b) => a + b, 0) / num).toFixed(1),
		ambience: (averages.ambience.reduce((a, b) => a + b, 0) / num).toFixed(1),
	}
}

const overallScoreCounts = (reviews) => {
	const counts = { one: 0, two: 0, three: 0, four: 0, five: 0 };
	const labels = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five' };

	reviews.forEach((review) => {
		const label = labels[review.overall];
		if (label) counts[label] += 1;
	})

	const total = reviews.length * 1.0;
	return {
		one: (100 * counts.one) / total,
		two: (100 * counts.two) / total,
		three: (100 * counts.three) / total,
		four: (100 * counts.four) / total,
		five: (100 * counts.five) / total,
	}
}

const Reviews = ({ match }) => {
	const dispatch = useDispatch();
	const allReviews = useSelector(state => Object.values(state.entities.reviews));

	useEffect(() => () => dispatch(clearReviews()), []);

	const reviews = allReviews.filter(review => review.rest_id == match.params.restId);

	if (!allReviews.length) return null;

	const averages = getAverageReviews(reviews);
	const overalls = overallScoreCounts(reviews);

	return (
		<section className='reviews-container' id='reviews-id'>
			<ReviewsHeader reviews={reviews} averages={averages} overalls={overalls}/>
			<ol id='reviews-ol'>
				<ReviewsIndex reviews={reviews}/>
			</ol>
		</section>
	)
}

export default Reviews;
