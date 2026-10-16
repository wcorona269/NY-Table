import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';
import { fetchRests } from '../../actions/rest_actions';
import { icCuisine, icPriceRange } from 'otkit-icons/token.theme.common';
import RestaurantCard from './index_card';
import SearchBar from './searchbar'

const SearchResultsContainer = (props) => {

	const dispatch = useDispatch();
	const {input, time, party, date} = useParams();
	const restsById = useSelector(state => state.entities.rests);

	const initial = useMemo(() => (
		Object.values(restsById).filter(rest => rest.name.includes(input) || rest.neighborhood.includes(input) || rest.cuisines.includes(input))
	), [restsById, input])

	const [filtered, setFiltered] = useState([...initial])

	const { filteredCuisines, filteredPriceRanges } = useMemo(() => {
		const cuisines = initial.map(rest => rest.cuisines)
		const priceRanges = initial.map(rest => rest.price_range)
		const filteredCuisines = cuisines.filter((v, i, a) => a.indexOf(v) === i)
		const filteredPriceRanges = priceRanges.filter((v, i, a) => a.indexOf(v) === i).sort()
		return { filteredCuisines, filteredPriceRanges }
	}, [initial])

	const [cuisineFilters, setCuisineFilters] = useState([])
	const [priceFilters, setPriceFilters] = useState([])

	useEffect(() => {
		dispatch(fetchRests())
			.then(res => setFiltered(Object.values(res.rests).filter(rest => rest.name.includes(input) || rest.neighborhood.includes(input) || rest.cuisines.includes(input))))
		}, [])


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

	const priceDisplay = (range) => {
		const dollarSigns = '$'.repeat(range);
		return (
			<div key={range}>
				<input type='checkbox' id={`price-button-${range}`} name={range} className='input-checkbox' onChange={togglePriceFilter}/>
				<label htmlFor={`price-button-${range}`} className='input-label'>
					<span>{dollarSigns}</span>
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
							<div key={cuisine}>
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
						{filteredPriceRanges.map((range) => priceDisplay(range))}
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
					{filtered.map((rest) => <RestaurantCard rest={rest} time={time} date={date} party={party} key={rest.id}/>)}
				</div>
			</div>
		</div>
	)

	return filtered.length ? (
		validSearch
	) : (null)
}

export default withRouter(SearchResultsContainer);