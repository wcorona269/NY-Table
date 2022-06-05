import * as bookingApiUtil from '../util/bookings_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const UPDATE_BOOKING = 'UPDATE_BOOKING';
export const CLEAR_BOOKINGS = 'CLEAR_BOOKINGS';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const REMOVE_BOOKING_ERRORS = 'REMOVE_BOOKING_ERRORS';

export const receiveBookings = (bookings) => {
	return {
		type: RECEIVE_BOOKINGS,
		bookings
	}
}

export const receiveBooking = (booking) => {
	return {
		type: RECEIVE_BOOKING,
		booking
	}
}

export const clearBookings = () => {
	return {
		type: CLEAR_BOOKINGS
	}
}

export const removeBooking = (bookingId) => {
	return {
		type: REMOVE_BOOKING,
		bookingId
	}
}

export const receiveBookingErrors = (errors) => {
	return {
		type: RECEIVE_BOOKING_ERRORS,
		errors
	}
}

export const removeBookingErrors = () => {
	return {
		type: REMOVE_BOOKING_ERRORS
	}
}

export const createBooking = booking => dispatch => (
	bookingApiUtil.createBooking(booking)
		.then(booking => dispatch(receiveBooking(booking)),
		errors => receiveBookingErrors(errors.responseJSON))
)

export const fetchUserBookings = (userId) => dispatch => (
	bookingApiUtil.fetchUserBookings(userId)
		.then(bookings => dispatch(receiveBookings(bookings)),
		errors => dispatch(receiveBookingErrors(errors.responseJSON)))
)

export const updateBooking = (booking) => dispatch => (
	bookingApiUtil.updateBooking(booking)
		.then(booking => dispatch(receiveBooking(booking)),
		errors => dispatch(receiveBookingErrors(errors.responseJSON)))
)

export const fetchBooking = id => dispatch => (
	bookingApiUtil.fetchBooking(id)
		.then(booking => dispatch(receiveBooking(booking)),
		errors => dispatch(receiveBookingErrors(errors.responseJSON)))
)

export const deleteBooking = bookingId => dispatch (
	bookingApiUtil.deleteBooking(bookingId)
		.then(booking => dispatch(removeBooking(booking.id)))
)