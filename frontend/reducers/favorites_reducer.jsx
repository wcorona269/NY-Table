import {
	RECEIVE_ALL_FAVORITES,
	RECEIVE_FAVORITE,
	REMOVE_FAVORITE,
	RECEIVE_ERRORS,
	CLEAR_FAVORITES
} from '../actions/favorite_actions';

const initialState = {
	favoritesAll: [],
	favorite: [],
	errors: []
}

const favoritesReducer = (oldState = initialState, action) => {
	Object.freeze(oldState);
	switch(action.type) {
		case RECEIVE_ALL_FAVORITES:
			return  {...oldState, favoritesAll: action.favorites };
		case RECEIVE_FAVORITE:
			return {...oldState, favorite: action.favorite};
		case REMOVE_FAVORITE:
			const nextState = {...oldState};
			delete nextState.favoritesAll[action.favoriteId];
			return nextState;
		case RECEIVE_ERRORS:
				return {...oldState, errors: action.errors.responseJSON };
		case CLEAR_FAVORITES:
			return initialState;
		default:
				return oldState;
	}
}

export default favoritesReducer