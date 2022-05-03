import React from 'react';
import SearchBarContainer from "../searchbar/searchbar_container";
import CategoriesContainer from './categories_container';


class Home extends React.Component {
	constructor(props) {
		super(props)
	}

	render () {
		return (
			<div className="home">
				<div className="home-container">
					<SearchBarContainer/>
				</div>
				<div className="main-page">
					<CategoriesContainer/>
				</div>
			</div>
		)
	}
}


export default Home;

