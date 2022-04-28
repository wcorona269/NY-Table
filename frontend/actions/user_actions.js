import * as UserUtils from '../util/user_api_util';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS'
export const REMOVE_USER_ERRORS = 'REMOVE_USER_ERRORS'

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


export const signup = formUser => dispatch => (
	UserUtils.signup(formUser).then(user => dispatch(receiveCurrentUser(user)))
);



