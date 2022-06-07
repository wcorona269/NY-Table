import { RECEIVE_REST } from "../actions/rest_actions";
import { CLEAR_MENU_ITEMS } from '../actions/menu_item_actions';

const menuItemsReducer = (oldState = {}, action) => {
	Object.freeze(oldState);
	const nextState = Object.assign({}, oldState);
	switch (action.type) {
		case RECEIVE_REST:
			return Object.assign({}, oldState, action.rest.menu_items)
		case CLEAR_MENU_ITEMS:
			return {};
		default:
			return oldState
	}
}

export default menuItemsReducer;