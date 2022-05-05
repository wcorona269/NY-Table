import React from 'react';
import {withRouter} from 'react-router-dom';
import ListIcon from './list_icon';

class ScrollBar extends React.Component {
	constructor(props) {
		super(props)

		this.shuffle = this.shuffle.bind(this);
	}

	componentDidMount() {
		this.props.fetchRests();
	}

	// Fisher-Yates shuffle 
	shuffle(array) {
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
	

	render () {
		
		const {rests} = this.props;
		// debugger;
		
		const display = rests.length ? (
			<ul className="scrollbar-ul">
				{this.shuffle(rests).map((rest, idx) =>
					<ListIcon
						name={rest.name}
						cuisines={rest.cuisines}
						neighborhood={rest.neighborhood}
						price_range={rest.price_range}
						key={idx}
					/>)}
			</ul>
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
	
	// fetch restaurants & map them to an array
	// Grab random restaurants from array & feed data to a new ListIcon, 10x per scrollbar
	// const dumbRests = ["peter luger", "patsy's pizza", "chipotle", "sweetgreen", "mcdonalds"]
	// debugger;