import React from 'react';

const RestNavButtons = () => {
	const handleScroll = (e) => {
		let key = e.target.id;
		let selected = document.getElementById(`${key}-id`);
		let yOffset = -75;
		let y = selected.getBoundingClientRect().top + window.pageYOffset + yOffset;

		window.scrollTo({
			top: y,
			behavior: "smooth"
		})
	}

	return (
		<section className='rest-info-nav-buttons' id='nav'>
		<nav>
			<ol>
				<li id='overview' className='current-section' onClick={handleScroll}>
					Overview
				</li>
				<li id='photos' onClick={handleScroll} >
					Photos
				</li>
				<li id='menu' onClick={handleScroll} >
					Menu
				</li>
				<li id='reviews' onClick={handleScroll} >
					Reviews
				</li>
			</ol>
		</nav>
	</section>
	)
}

export default RestNavButtons;