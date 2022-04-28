import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const _nullUser = {
    id: null,
};

const sessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            newState["id"] = action.user.id;
            return newState;
        case LOGOUT_CURRENT_USER:
            newState["id"] = null;
            return newState;
        default:
            return oldState;
    }
};

export default sessionReducer;



