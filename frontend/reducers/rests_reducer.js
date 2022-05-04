import {RECEIVE_RESTS, RECEIVE_REST} from "../actions/rest_actions";

const restsReducer = (oldState = {}, action) => {
	Object.freeze(oldState);

	switch (action.type) {
		case RECEIVE_RESTS:
			return action.rests
		case RECEIVE_REST:
			return Object.assign({}, oldState, { [action.rest.id]: action.rest })
		default:
			return oldState;
	}
}

export default restsReducer;

