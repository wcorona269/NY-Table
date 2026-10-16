import {
	RECEIVE_ALL_FAVORITES,
	RECEIVE_FAVORITE,
	REMOVE_FAVORITE,
	CLEAR_FAVORITES
} from '../actions/favorite_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

// Favorites are keyed by favorite id.
const favoritesReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	switch(action.type) {
		case RECEIVE_ALL_FAVORITES:
			return { ...action.favorites };
		case RECEIVE_FAVORITE:
			return { ...oldState, [action.favorite.id]: action.favorite };
		case REMOVE_FAVORITE: {
			const nextState = { ...oldState };
			delete nextState[action.favId];
			return nextState;
		}
		case CLEAR_FAVORITES:
		case LOGOUT_CURRENT_USER:
			return {};
		default:
			return oldState;
	}
}

export default favoritesReducer;
