import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import restsReducer from "./rests_reducer";


const entitiesReducer = combineReducers({
	users: usersReducer,
	rests: restsReducer,
});


export default entitiesReducer;