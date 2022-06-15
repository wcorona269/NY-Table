import {RECEIVE_RESTS, RECEIVE_REST, CLEAR_RESTS} from "../actions/rest_actions";

const restsReducer = (oldState = {}, action) => {
	Object.freeze(oldState);

	switch (action.type) {
		case RECEIVE_RESTS:
			return action.rests
			break
		case RECEIVE_REST:
			return Object.assign({}, oldState, { [action.rest.restaurant.id]: action.rest.restaurant })
			break
		case CLEAR_RESTS:
			return {}
			break;
		default:
			return oldState;
	}
}

export default restsReducer;

