import {
	RECEIVE_BOOKINGS,
	RECEIVE_BOOKING,
	REMOVE_BOOKING,
	CLEAR_BOOKINGS,
} from '../actions/booking_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

// Bookings are keyed by id. Partial payloads (e.g. from update) are merged
// over what we already have so embedded restaurant info isn't lost.
const bookingsReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	switch(action.type) {
		case RECEIVE_BOOKINGS:
			return { ...oldState, ...action.bookings };
		case RECEIVE_BOOKING:
			return {
				...oldState,
				[action.booking.id]: { ...oldState[action.booking.id], ...action.booking }
			};
		case REMOVE_BOOKING: {
			const nextState = { ...oldState };
			delete nextState[action.bookingId];
			return nextState;
		}
		case CLEAR_BOOKINGS:
		case LOGOUT_CURRENT_USER:
			return {};
		default:
			return oldState;
	}
}

export default bookingsReducer;
