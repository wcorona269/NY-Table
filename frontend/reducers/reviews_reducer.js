
import { RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_REVIEWS, CLEAR_REVIEWS } from '../actions/review_actions';

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
        default:
            return oldState;
    }
}

export default reviewsReducer;