
import { RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_REVIEWS, CLEAR_REVIEWS } from '../actions/review_actions';
import { RECEIVE_REST } from '../actions/rest_actions'
    
const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_REVIEW:
            const { review } = action;
            return Object.assign({}, nextState, { [review.id]: review });
        case RECEIVE_REVIEWS:
            return Object.assign({}, nextState, action.reviews);
        case REMOVE_REVIEW:
            delete nextState[action.reviewId];
            return nextState;
        case CLEAR_REVIEWS:
            return {};
        case RECEIVE_REST:
            return Object.assign({}, oldState, action.rest.reviews)
        default:
            return oldState;
    }
}

export default reviewsReducer;

