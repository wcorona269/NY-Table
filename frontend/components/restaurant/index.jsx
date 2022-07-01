import { withRouter, Link } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import SearchBar from "../search/searchbar"
import { fetchRests } from "../../actions/rest_actions"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom";
import RestaurantCard from '../search/index_card'

const RestIndexContainer = (props) => {

	const dispatch = useDispatch()
	const location = useLocation()
	let date = new Date()
	let m = date.getMonth()
	let d = date.getDate()
	date.setDate(date.getDate() + 1)
	let y = date.getFullYear()

	const [restIndex, setRestIndex] = useState([])

	useEffect(() => {
		if (location.state) {
			let { rests } = location.state
			// console.log(rests)
			setRestIndex([...rests])
		} else {
			dispatch(fetchRests()).then(res => setRestIndex((Object.values(res.rests))))
		}
	}, [])

	return restIndex.length ? (
		<div className='rest-index-container'>
			<div className='search-header'>
				<SearchBar/>
			</div>
			<div className="rest-index-summary">
				<h3>
					{restIndex.length} Restaurants
				</h3>
			</div>
			<div className='rest-index-list'>
				{restIndex.map((rest, idx) => <RestaurantCard rest={rest} time={'12:00'} date={date} party={4} key={idx}/>)}
			</div>
		</div>
	) : (null)
}

export default withRouter(RestIndexContainer)