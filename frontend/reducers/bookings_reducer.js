import {
	RECEIVE_BOOKINGS,
	RECEIVE_BOOKING,
	REMOVE_BOOKING,
	UPDATE_BOOKING,
	CLEAR_BOOKINGS,
	RECEIVE_BOOKING_ERRORS,
	REMOVE_BOOKING_ERRORS	
} from '../actions/booking_actions';

const bookingsReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	const nextState = Object.assign({}, oldState)
	switch(action.type) {
		case RECEIVE_BOOKINGS:
			return action.bookings;
		case RECEIVE_BOOKING:
			return action.booking;
		case REMOVE_BOOKING:
			delete nextState[action.booking.id];
			return nextState;
		case CLEAR_BOOKINGS:
			return {};
		default:
			return oldState;
	}
}

export default bookingsReducer;
