import * as UserUtils from '../util/user_api_util';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';

export const receiveUserInfo = user => ({
	type: RECEIVE_USER_INFO,
	user
});

export const signup = user => dispatch => (
	UserUtils.signup(user).then(user => dispatch(receiveCurrentUser(user)))
);



