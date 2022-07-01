import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import ScrollBarContainer from './scrollbar/scrollbar_container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRests } from '../../actions/rest_actions';

const CatList = ({title, key}) => {
	const dispatch = useDispatch()
	let rests = Object.values(useSelector(state => state.entities.rests))

	useEffect(() => {
		dispatch(fetchRests())
	}, [])

	// Fisher-Yates shuffle 
	const shuffle = (array) => {
		let currentIndex = array.length,  randomIndex;
	
		// While there remain elements to shuffle.
		while (currentIndex != 0) {
	
			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
	
			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex], array[currentIndex]];
		}
	
		return array;
	}

	rests = shuffle(rests)

	return (
		<>
			<div className="categories-section-container">
				<section className="categories-section">
					<header className="categories-section-header">
						<div className="categories-section-header-container">
							<h2 className="categories-section-header-text">
								{title}
							</h2>
						</div>
						<Link to={{pathname:'/restaurants/all', state:{ rests: rests }}} className="view-all-button">
							View all
						</Link>
					</header>
					<div className="outer-scroll-container">
						<ScrollBarContainer key={key} rests={rests}/>
					</div>
				</section>
			</div>
		</>
	)
}

export default withRouter(CatList);