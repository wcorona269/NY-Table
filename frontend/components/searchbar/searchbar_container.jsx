import React from 'react';
import { connect } from 'react-redux';
import SearchBar from "./searchbar";

const mSTP = state => ({

});

const mDTP = dispatch => ({

});

const SearchBarContainer = connect(mSTP, mDTP)(SearchBar);
export default SearchBarContainer;