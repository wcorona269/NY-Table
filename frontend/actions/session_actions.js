import * as SessionUtils from '../util/session_api_util';

export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'

export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS'
export const REMOVE_USER_ERRORS = 'REMOVE_USER_ERRORS'

export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS'

// action creators

export const removeSessionErrors = () => ({
    type: REMOVE_SESSION_ERRORS
});

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveUserInfo = user => ({
    type: RECEIVE_USER_INFO,
    user
});

export const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
})

export const removeUserErrors = () => ({
    type: REMOVE_USER_ERRORS,
});

// thunk action creators

export const login = formUser => dispatch => (
    SessionUtils.login(formUser)
        .then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = () => dispatch => (
    SessionUtils.logout()
        .then(() => dispatch(logoutCurrentUser()))
);

export const signup = formUser => dispatch => (
	SessionUtils.signup(formUser)
        .then(user => dispatch(receiveCurrentUser(user)))
);

