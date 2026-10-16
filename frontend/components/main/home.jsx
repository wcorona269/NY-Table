import React from 'react';
import SearchBarContainer from "../search/searchbar_container";
import Categories from './categories';

const Home = () => (
	<div className="home">
		<div className="home-container">
			<SearchBarContainer/>
		</div>
		<div className="main-page">
			<Categories/>
		</div>
	</div>
)

export default Home;
