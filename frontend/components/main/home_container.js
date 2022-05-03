import React from 'react';
import {connect} from 'react-redux';
import Home from './home';


const mSTP = state => ({

});

const mDTP = dispatch => ({

});


const HomeContainer = connect(mSTP, mDTP)(Home);
export default HomeContainer;