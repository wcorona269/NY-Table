import React from 'react';
import {connect} from 'react-redux';
import { fetchReviews } from '../../actions/review_actions';
import Reviews from './reviews';

const mapStateToProps = state => {
	return {
		reviews: Object.values(state.entities.reviews),
    currentUser: state.entities.users[state.session.id]
	}
}

const mapDispatchToProps = dispatch => {
	return {
    fetchReviews: data => dispatch(fetchReviews(data)),
	}
}

const ReviewsContainer = connect(mapStateToProps, mapDispatchToProps)(Reviews);
export default ReviewsContainer;