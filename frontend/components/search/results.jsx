import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory, withRouter, useParams } from 'react-router-dom';
import { fetchRests } from '../../actions/rest_actions';
import { icCuisine, icPriceRange } from 'otkit-icons/token.theme.common';
import RestaurantCard from './index_card';
import SearchBar from './searchbar'

const SearchResultsContainer = (props) => {
	
	const dispatch = useDispatch();
	// const location = useLocation();
	const {input, time, party, date} = useParams();
	let rests = Object.values(useSelector(state => state.entities.rests))
	const initial = Object.values(rests.filter(rest => rest.name.includes(input) || rest.neighborhood.includes(input) || rest.cuisines.includes(input)))
	const [filtered, setFiltered] = useState([...initial])
	// setFiltered(Object.values(rests.filter(rest => rest.name.includes(input) || rest.neighborhood.includes(input) || rest.cuisines.includes(input))))
	// console.log(filtered)
	const cuisines = initial.map(rest => rest.cuisines)
	let priceRanges = initial.map(rest => rest.price_range)
	let filteredPriceRanges = priceRanges.filter((v, i, a) => a.indexOf(v) === i)
	let filteredCuisines = cuisines.filter((v, i, a) => a.indexOf(v) === i)
	filteredPriceRanges = filteredPriceRanges.sort()
	const [cuisineFilters, setCuisineFilters] = useState([])
	let priceFilters = []

	useEffect(() => {
		dispatch(fetchRests())
			.then(res => setFiltered(Object.values(res.rests).filter(rest => rest.name.includes(input) || rest.neighborhood.includes(input) || rest.cuisines.includes(input))))
		}, [])

	useEffect(() => {
	}, [rests, filtered])


	const handleFilter = (e) => {
		let arr = [...cuisineFilters]
		if (e.target.checked) {
			setCuisineFilters([...arr, e.target.name]);
		} else {
			setCuisineFilters(arr.filter(ele => ele !== e.target.name))
		}

		setFiltered([...initial])
	}

	useEffect(() => {

		let arr = [...filtered]

		if (!!cuisineFilters.length) {
			console.log(cuisineFilters.join(' ').includes('Seafood'))
			// debugger;
			setFiltered(arr.filter(rest => cuisineFilters.some(ele => ele.includes(rest.cuisines))))
		} else {
			// console.log(cuisineFilters)
			setFiltered([...initial])
		}
	}, [cuisineFilters])

	const togglePriceFilter = (e) => {
		let int = parseInt(e.target.name)
		let idx = priceFilters.indexOf(int)
		if (idx == -1 && !isNaN(int)) {
			priceFilters.push(int)
		} 
		if (idx !== -1 && !isNaN(int)) {
			priceFilters.splice(idx, 1)
		}
	}

	const priceDisplay = (range, idx) => {
		return range == 1 ? (
			<label htmlFor={`price-button-${idx}`} key={idx} onClick={togglePriceFilter} className='input-label'>
				<input type='checkbox' id={`price-button-${idx}`} name={range} className='input-checkbox'/>
				<span>$</span>
			</label>
		) : range == 2 ? (
			<label htmlFor={`price-button-${idx}`} key={idx} onClick={togglePriceFilter} className='input-label'>
				<input type='checkbox' id={`price-button-${idx}`} name={range} className='input-checkbox'/>
				<span>$$</span>
			</label>
		) : range == 3 ? (
			<label htmlFor={`price-button-${idx}`} key={idx} onClick={togglePriceFilter} className='input-label'>
				<input type='checkbox' id={`price-button-${idx}`} name={range} className='input-checkbox'/>
				<span>$$$</span>
			</label>
		) : (
			<label htmlFor={`price-button-${idx}`} key={idx} onClick={togglePriceFilter} className='input-label'>
				<input type='checkbox' id={`price-button-${idx}`} name={range} className='input-checkbox'/>
				<span>$$$$</span>
			</label>
		)
	}



	const validSearch = (
		<div className='search-results-container'>
			<div className='search-header'>
				<SearchBar/>
			</div>
			<div className='filters-container'>
				{
				filteredCuisines.length > 1 && 
				<section>
					<h5>
						<img src={`data:image/svg+xml;utf8,${icCuisine}`}/>
						Cuisine
					</h5>
					<div>
						{filteredCuisines.map((cuisine, idx) => 
							<div key={idx}>
								<input type='checkbox' 
									id={`checkbox-cuisines-${idx}`}
									className='input-checkbox'
									name={cuisine}
									onClick={handleFilter}
									/>
								<label className='input-label' htmlFor={`checkbox-cuisines-${idx}`}>{cuisine}</label>
							</div>
						)}
					</div>
				</section>
				}
				{
				filteredPriceRanges.length > 1 && 
				<section>
					<h5>
						<img src={`data:image/svg+xml;utf8,${icPriceRange}`}/>
						Price
					</h5>
					<div id='price-filter-buttons'>
						{filteredPriceRanges.map((range, idx) => 
							{return priceDisplay(range, idx)}
						)}
					</div>
				</section>
				}
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