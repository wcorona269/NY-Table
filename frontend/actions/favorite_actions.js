import * as ApiUtil from '../util/favorites_api_util';

export const RECEIVE_ALL_FAVORITES = 'RECEIVE_ALL_FAVORITES';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveAllFavs = favorites => ({
	type: RECEIVE_ALL_FAVORITES,
	favorites
});

const receiveFav = favorite => ({
	type: RECEIVE_FAVORITE,
	favorite
})

const removeFav = favId => ({
	type: REMOVE_FAVORITE,
	favId
})

const receiveErrors = errors => ({
	type: RECEIVE_ERRORS,
	errors
});

export const fetchAllFavs = (id) => dispatch => {
	ApiUtil.fetchAllFavorites(id)
		.then(favs => dispatch(receiveAllFavs(favs)))
}

export const fetchFav = (favId) => dispatch => {
	ApiUtil.fetchFavorite(favId)
		.then(fav => dispatch(receiveFav(fav)))
}

export const createFav = favorite => dispatch => {
	ApiUtil.createFavorite(favorite)
		.then(favorite => dispatch(receiveFav(favorite)))
}

export const deleteFav = favId => dispatch => {
	return (
		ApiUtil.deleteFavorite(favId)
			.then(() => dispatch(removeFav(favId)), err => dispatch(receiveErrors(err))
		)
	)
}
