import React from 'react';
import { connect } from "react-redux";
import ScrollBar from './scrollbar';
import { fetchRests } from '../../../actions/rest_actions';

const mSTP = state => ({
	rests: Object.values(state.entities.rests)
})

const mDTP = dispatch => ({
	fetchRests: () => dispatch(fetchRests()),
})

const ScrollbarContainer = connect(mSTP, mDTP)(ScrollBar);
export default ScrollbarContainer;