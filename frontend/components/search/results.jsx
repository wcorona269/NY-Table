import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory, withRouter, useParams } from 'react-router-dom';
import { fetchRests } from '../../actions/rest_actions';
import { icCuisine } from 'otkit-icons/token.theme.common';
import RestaurantCard from './index_card';


const SearchResultsContainer = (props) => {

	const dispatch = useDispatch();
	// const location = useLocation();
	const {input, time, party, date} = useParams();
	const rests = Object.values(useSelector(state => state.entities.rests))
	const filtered = Object.values(rests.filter(rest => rest.name.includes(input) || rest.neighborhood.includes(input) || rest.cuisines.includes(input)))

	useEffect(() => {
		dispatch(fetchRests())
	}, [])

	useEffect(() => {

	}, [rests, filtered])

	const validSearch = (
		<div className='search-results-container'>
			<div className='filters-container'>
				<h5>
					<img src={`data:image/svg+xml;utf8,${icCuisine}`}/>
					Cuisine
				</h5>
			</div>
			<div className='results-index-container'>
				<section id='search-summary'>
					<h2>
						You searched for "{input}" 
					</h2>
				</section>
				<div id='restaurant-cards'>
					{filtered.map((rest, idx) => <RestaurantCard rest={rest} time={time} date={date} key={idx}/>)}
				</div>
			</div>
		</div>
	)

	return filtered.length ? (
		validSearch
	) : (null)
}

export default withRouter(SearchResultsContainer);