import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_USER_INFO } from "../actions/session_actions";

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_USER_INFO:
            return Object.assign({}, oldState, {[action.user.id]: action.user});
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, {[action.user.id]: action.user});
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return oldState;
    }
}

export default usersReducer;

