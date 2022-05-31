export const fetchReviews = data => {
	return (
		$.ajax({
			url: '/api/reviews',
			data
		})
	)
}

export const fetchReview = id => {
	return (
		$.ajax({
			url: `/api/reviews/${id}`
		})
	)
}

export const createReview = review => {
	return (
		$.ajax({
			method: `POST`,
			url: `/api/reviews`,
			data: { review }
		})
	)
}

export const updateReview = review => {
	return (
		$.ajax({
			method: `PATCH`,
			url: `/api/reviews/${review.id}`,
			data: {review}
		})
	)
}

export const deleteReview = review => {
	return (
		$.ajax({
			method: `DELETE`,
			url: `/api/reviews/${review.id}`
		})
	)
}