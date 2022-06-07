import {connect} from 'react-redux';
import { fetchRestReviews, clearReviews } from '../../actions/review_actions';
import Reviews from './reviews';

const mapStateToProps = state => {
	return {
		reviews: Object.values(state.entities.reviews),
    currentUser: state.entities.users[state.session.id]
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchRest: id => dispatch(fetchRest(id)),
		clearReviews: () => dispatch(clearReviews())
	}
}

const ReviewsContainer = connect(mapStateToProps, mapDispatchToProps)(Reviews);
export default ReviewsContainer;

