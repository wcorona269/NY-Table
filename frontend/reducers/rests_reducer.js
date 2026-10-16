import {RECEIVE_RESTS, RECEIVE_REST, CLEAR_RESTS} from "../actions/rest_actions";

// Index payloads (summaries) and show payloads (details) are merged per
// restaurant so whichever request lands last doesn't wipe out the other.
const restsReducer = (oldState = {}, action) => {
	Object.freeze(oldState);

	switch (action.type) {
		case RECEIVE_RESTS: {
			const nextState = { ...oldState };
			Object.values(action.rests).forEach(rest => {
				nextState[rest.id] = { ...oldState[rest.id], ...rest };
			});
			return nextState;
		}
		case RECEIVE_REST: {
			const rest = action.rest.restaurant;
			return { ...oldState, [rest.id]: { ...oldState[rest.id], ...rest } };
		}
		case CLEAR_RESTS:
			return {};
		default:
			return oldState;
	}
}

export default restsReducer;
