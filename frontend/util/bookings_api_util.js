export const fetchAllBookings = () => {
	$.ajax({
		method: 'GET',
		url: '/api/bookings'
	})
}

export const fetchUserBookings = (userId) => {
	return (
		$.ajax({
			method: 'GET',
			url: `/api/bookings/${userId}`
		})
	)
}

export const fetchBooking = (bookingId) => {
	return (
		$.ajax({
			method: 'GET',
			url: `/api/bookings/${bookingId}`
		})
	)
}

export const createBooking = booking => {
	return (
		$.ajax({
			method: 'POST',
			url: '/api/bookings',
			data: { booking }
		})
	)
}

export const updateBooking = booking => {
	return(
		$.ajax({
			method: 'PATCH',
			url: `/api/reviews/${booking.id}`,
			data: { booking }
		})
	)
}

export const deleteBooking = bookingId => {
	return (
		$.ajax({
			method: 'DELETE',
			url: 	`/api/bookings/${bookingId}`
		})
	)
}