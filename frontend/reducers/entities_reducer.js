import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import restsReducer from "./rests_reducer";
import reviewsReducer from "./reviews_reducer";
import menuItemsReducer from "./menu_items_reducer";
import bookingsReducer from "./bookings_reducer";


const entitiesReducer = combineReducers({
	users: usersReducer,
	rests: restsReducer,
	menu_items: menuItemsReducer,
	bookings: bookingsReducer,
	reviews: reviewsReducer,
});

export default entitiesReducer;
