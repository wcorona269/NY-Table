import React, {useState} from "react";
import DatePicker from 'react-datepicker';
import { withRouter } from "react-router-dom";
// import 'react-datepicker/dist/react-datepicker.css'
// CSS Modules, react-datepicker-cssmodules.css

class SearchBar extends React.Component {
	constructor(props) {
		super(props)

		this.state={
			date: new Date(),
			time: "12:00",
			party: 2
		}

	};
	
	render () {
		return (
			<div className="search-bar-container">
				<h1 className="searchbar-header">
					Find your table for any occasion
				</h1>
				{/* <DatePicker/> */}
			</div>
		)
	}
}

export default withRouter(SearchBar);