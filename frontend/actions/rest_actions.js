import * as RestUtils from "../util/restaurants.api.util"

export const RECEIVE_RESTS = "RECEIVE_RESTS";
export const RECEIVE_REST = "RECEIVE_REST";
export const CLEAR_RESTS = 'CLEAR_RESTS';

// action creators
export const receiveRests = rests => ({
	type: RECEIVE_RESTS,
	rests
})

export const receiveRest = rest => ({
	type: RECEIVE_REST,
	rest
})

export const clearRests = () => ({
	type: CLEAR_RESTS
})

// thunk action creators
export const fetchRests = () => dispatch => (
	RestUtils.fetchRests()
	.then(rests => dispatch(receiveRests(rests)))
)

export const fetchRest = restId => dispatch => (
	RestUtils.fetchRest(restId)
	.then(rest => {dispatch(receiveRest(rest))
	console.log(rest)})
)
