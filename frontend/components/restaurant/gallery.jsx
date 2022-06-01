import React from 'react';

const Gallery = (props) => {


	return (
		<section className='gallery-container' id='photos-id'>
			<div className='rest-show-photos'>
				<header>
					<h2>
						Photos
					</h2>
				</header>
				<div className='gallery-nav-container'>
					<nav>
						<ol>
							<li>All</li>
							<li>Food</li>
							<li>Interior</li>
							<li>Exterior</li>
						</ol>
					</nav>
				</div>
				<div className='rest-photos-grid'>
					<div className="photo-gallery">
						<button className="pic-1"></button>
						<button className="pic-2"></button>
						<button className="pic-3"></button>
						<button className="pic-4"></button>
						<button className="pic-5">+122 more</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Gallery;