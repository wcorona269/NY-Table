import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showGallery, showModal } from '../../actions/modal_actions';

const Gallery = ({photos}) => {
	const dispatch = useDispatch();
	const [showing, setShowing] = useState(false)

	useEffect(() => {
		if (photos) {
			setShowing(true)
		}
	}, [photos])

	const handleClick = (e) => {
		dispatch(showGallery('gallery', photos, e.target.name))
	}
 
	return (showing && 
		<section className='gallery-container' id='photos-id'>
			<div className='rest-show-photos'>
				<header>
					<h2>
						Photos
					</h2>
				</header>
				<div className='rest-photos-grid'>
					<div className="photo-gallery">
						<button className="pic-1" onClick={handleClick}>
							<img src={photos[0]} name={0}/>
						</button>
						<button className="pic-2" onClick={handleClick}>
							<img src={photos[1]} name={1}/>
						</button>
						<button className="pic-3" onClick={handleClick}>
							<img src={photos[2]} name={2}/>
						</button>
						<button className="pic-4" onClick={handleClick}>
							<img src={photos[3]} name={3}/>
						</button>
						<button className="pic-5" onClick={handleClick}  name={4}> 
							<img src={photos[4]} name={4}/>
							{photos.length > 5 &&
								<div>
								<button id='ptag' name='4'>
									+{photos.length - 5} More
								</button>
							</div>
							}
						</button>
					</div>
				</div>
			</div>
		</section>
		)
}

export default Gallery;