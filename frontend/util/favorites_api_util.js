
export const fetchAllFavorites = () => {
	return (
		$.ajax({
		method: 'GET',
		url: '/api/favorites'
	})
	)
}

export const fetchFavorite = favId => {
	return (
		$.ajax({
			method: 'GET',
			url: `/api/favorites/${favId}`
		})
	) 
}

export const createFavorite = favorite => {
	return (
		$.ajax({
			method: 'POST',
			url: `/api/favorites`,
			data: { favorite }
		})
	) 
}

export const deleteFavorite = favId => {
	return (
		$.ajax({
			method: 'DELETE',
			url: `/api/favorites/${favId}`
		})
	)
}
