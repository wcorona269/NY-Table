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
	const cuisines = initial.map(rest => rest.cuisines)
	let priceRanges = initial.map(rest => rest.price_range)
	let filteredPriceRanges = priceRanges.filter((v, i, a) => a.indexOf(v) === i)
	let filteredCuisines = cuisines.filter((v, i, a) => a.indexOf(v) === i)
	filteredPriceRanges = filteredPriceRanges.sort()
	const [cuisineFilters, setCuisineFilters] = useState([])
	const [priceFilters, setPriceFilters] = useState([])

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
			setFiltered(arr.filter(rest => cuisineFilters.some(ele => ele.includes(rest.cuisines))))
		}
		if (!!priceFilters.length) {
			setFiltered(arr.filter(rest => priceFilters.some(ele => ele == rest.price_range)))
		}
		if (!cuisineFilters.length && !priceFilters.length) {
			setFiltered([...initial])
		}
	}, [cuisineFilters, priceFilters])

	const togglePriceFilter = (e) => {
		let arr = [...priceFilters]
		let int = parseInt(e.target.name)

		if (e.currentTarget.checked) {
			setPriceFilters([...arr, int]);
		} else {
			setPriceFilters(arr.filter(ele => ele !== int))
		}
		setFiltered([...initial])
	}

	const priceDisplay = (range, idx) => {
		return range == 1 ? (
			<div>
				<input type='checkbox' id={`price-button-${idx}`} name={range} className='input-checkbox' onChange={togglePriceFilter}/>
				<label htmlFor={`price-button-${idx}`} key={idx} className='input-label'>
					<span>$</span>
				</label>
			</div>
		) : range == 2 ? (
			<div>
				<input type='checkbox' id={`price-button-${idx}`} name={range} className='input-checkbox' onChange={togglePriceFilter}/>
				<label htmlFor={`price-button-${idx}`} key={idx}  className='input-label'>
					<span>$$</span>
				</label>
			</div>
		) : range == 3 ? (
			<div>
				<input type='checkbox' id={`price-button-${idx}`} name={range} className='input-checkbox' onChange={togglePriceFilter}/>
				<label htmlFor={`price-button-${idx}`} key={idx} className='input-label'>
					<span>$$$</span>
				</label>
			</div>
		) : (
			<div>
				<input type='checkbox' id={`price-button-${idx}`} name={range} className='input-checkbox' onChange={togglePriceFilter}/>
				<label htmlFor={`price-button-${idx}`} key={idx} className='input-label'>
					<span>$$$$</span>
				</label>
			</div>
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
					{filtered.map((rest, idx) => <RestaurantCard rest={rest} time={time} date={date} party={party} key={idx}/>)}
				</div>
			</div>
		</div>
	)

	return filtered.length ? (
		validSearch
	) : (null)
}

export default withRouter(SearchResultsContainer);