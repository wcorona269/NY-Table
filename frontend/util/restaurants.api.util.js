
export const fetchRests = data => {
	return (
		$.ajax({
			url: '/api/restaurants',
			data
		})
	)
}

export const fetchRest = restId => {
	return (
		$.ajax({
			url: `/api/restaurants/${restId}`
		})
	)
}

