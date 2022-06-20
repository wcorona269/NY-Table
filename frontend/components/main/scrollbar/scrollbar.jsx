import React from 'react';
import {withRouter} from 'react-router-dom';
import ListIcon from './list_icon';

class ScrollBar extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			showLeft: false,
			showRight: true
		}
	}
	
	scroll(distance, id){
		let bar = document.getElementById(id)
		bar.scrollLeft += distance

		// if (bar.scrollLeft > 100) {
		// 	this.setState((state) => {
		// 		return { showLeft: true }
		// 	})
		// } else if (bar.scrollLeft > 4000) {
		// 	this.setState((state) => {
		// 		return { showRight: false }
		// 	})
		// } else {
		// 	this.setState((state) => {
		// 		return { showLeft: false }
		// 	})
		// }
	}

	render () {
		const id = Math.floor(Math.random() * 100000000)
		const {rests} = this.props

		const display = rests.length ? (
			<>
			{this.state.showLeft && 
				<button id='scroll-left' className='left-scroll-button' onClick={() => this.scroll(-983, id)}>
					<i className="fa-solid fa-angle-left"></i>
				</button>
			}
				<ul className="scrollbar-ul" id={id}>
					{rests.map((rest, idx) =>
						<ListIcon
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
				{this.state.showRight &&
				<button id='scroll-right' className='right-scroll-button' onClick={() => this.scroll(983, id)}>
					<i className="fa-solid fa-angle-right"></i>
				</button>
				}
			</>
		) : (
			null
			)
			
		return (
			display
		)
	}
}
	
	export default (ScrollBar);
	
	
	
	
	// check if we have restaurant data in our frontend state
	// until it is no longer empty, wait to map it
	// component did mount
	// ternary in return statement showing loading icon before components mount