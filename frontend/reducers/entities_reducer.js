import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import restsReducer from "./rests_reducer";
import reviewsReducer from "./reviews_reducer";


const entitiesReducer = combineReducers({
	users: usersReducer,
	rests: restsReducer,
	reviews: reviewsReducer,
});

export default entitiesReducer;