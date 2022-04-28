import * as SessionUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const login = formUser => dispatch => (
    SessionUtils.login(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = () => dispatch => (
    SessionUtils.logout()
    .then(() => dispatch(logoutCurrentUser()))
);


