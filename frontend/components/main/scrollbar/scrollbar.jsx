import React from 'react';
import {withRouter} from 'react-router-dom';
import ListIcon from './list_icon';

class ScrollBar extends React.Component {
	constructor(props) {
		super(props)

		this.shuffle = this.shuffle.bind(this);

		this.state = {
			// rating: Math.floor((Math.random() * (5 - 1) + 1)),
			photos: {
				"Central Park Boathouse": "https://media.timeout.com/images/105702000/image.jpg",
				"Bill's Bar and Burger": "https://images.getbento.com/accounts/fb707fea4db9f8bd2a3c03af160d32b5/media/images/74813IMG_8698.jpg?w=1200&fit=crop&auto=compress,format&h=600",
				"Patsy's Pizzeria": "https://www.nycgo.com/images/venues/6638/patsys-pizzeria-julienne-schaer-002__large.jpg",
				"Carmine's - 91st Street - NYC": "https://www.carminesnyc.com/assets/uploads/general/carmines-upper-west-side-diningroom-shot-1.jpg",
				"Hearth": "https://resizer.otstatic.com/v2/photos/wide-huge/4/26447906.png",
				"Peter Luger Steak House": "https://peterluger.com/media/cms/246.jpg",
			}
		}
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
						icon={this.state.photos[rest.name]}
						rating={(Math.random() * (5 - 2) + 2).toFixed(1)}
						// rating={this.avgRating(rest.name)}
						// alternatively do this in mSTP
						// function for this in model/controller?
						// 99 cats reservation model -- custom methods
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