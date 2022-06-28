import React, { useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom';
import ListIcon from './list_icon';

const ScrollbarContainer = ({rests, key}) => {
	const id = Math.floor(Math.random() * 100000000)
	const [showLeft, setShowLeft] = useState(false)
	const [showRight, setShowRight] = useState(true)
	
	const scroll = (distance) => {
		let bar = document.getElementById(id)
		bar.scrollLeft += distance
	}

	const onScroll = (e) => {
		e.target.scrollLeft > 0 ? (
			setShowLeft(true)
		) : (
			setShowLeft(false)
		)
				
		let width = (e.target.scrollWidth - e.target.clientWidth);

		e.target.scrollLeft == width ? (
			setShowRight(false)
		) : (
			setShowRight(true)
		)
	}

	const display = rests.length ? (
		<div id='scrollbar-container'>
			{showLeft && 
				<button id='scroll-left' className='left-scroll-button' onClick={() => scroll(-983)}>
					<i className="fa-solid fa-angle-left"></i>
				</button>
			}
				<ul className="scrollbar-ul" id={id} onScroll={onScroll}>
					{rests.map((rest, idx) =>
						<ListIcon
						bookings={rest.bookings_count}
						id={rest.id}
						name={rest.name}
						cuisines={rest.cuisines}
						neighborhood={rest.neighborhood}
						price_range={rest.price_range}
						key={idx}
						icon={rest.iconUrl}
						rating={rest.avg_rating}
						/>)}
				</ul>
				{showRight &&
				<button id='scroll-right' className='right-scroll-button' onClick={() => scroll(983)}>
					<i className="fa-solid fa-angle-right"></i>
				</button>
				}
		</div>
	) : (
		null
		)
		
	return (
		display
	)
}
	
export default withRouter(ScrollbarContainer);


