import { combineReducers } from "redux";
import { entitiesReducer } from "./entities_reducer";
import sessionReducer from "./sessions_reducer";


export const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
});

export default rootReducer;

