import React, {useState} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { withRouter } from "react-router-dom";
import SearchBar from './searchbar';

const SearchBarContainer = () => {
	return (
		<div className="search-bar-container">
			<h1 className="searchbar-header">
				Find your table for a<span className="red-searchbar-header-text">ny</span> occasion
			</h1>
			<SearchBar/>
		</div>
	)
}

export default withRouter(SearchBarContainer);