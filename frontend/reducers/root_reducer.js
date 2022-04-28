import { combineReducers } from "redux";
import sessionReducer from "./sessions_reducer";
import usersReducer from "./users_reducer";

export const rootReducer = combineReducers({
    session: sessionReducer,
    users: usersReducer,
});

export default rootReducer;


