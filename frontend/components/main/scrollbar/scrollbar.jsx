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
				"Katz's Delicatessen": "https://storage.googleapis.com/yk-cdn/photos/pdp/franck-bohbot-studio/katz-s-delicatessen-nyc.jpg",
				"Lombardi's": "https://pyxis.nymag.com/v1/imgs/684/df8/f106475395d102d3406b7ea904ef7acb63-lombardis-01.rsocial.w1200.jpg",
				"Tavern on the Green": "https://media.timeout.com/images/105763427/750/422/image.jpg",
				"Rainbow Room": "https://cdn.sanity.io/images/bs9rmafh/main/90f0dc119674c958e6c9d533e3e43ec6c81e1588-5120x2724.jpg?w=1600&h=851&fit=crop",
				"Rao's": "https://assets.bonappetit.com/photos/5caa286801ac7c2f98e7b989/master/w_2250,h_1406,c_limit/New-York-raos.jpg",
				"Grand Central Oyster Bar": "https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/OYSTER_BAR_DINING_ROOM_BEST_2.jpg?itok=q91zDFad",
				"Brooklyn Farmacy & Soda Fountain": "https://images.squarespace-cdn.com/content/v1/52d840fce4b09614df37f3d8/1645035345846-T4WBXZMMU4XD0WU74WY0/BrooklynFarmacy_interior+copy.jpg",
				"Nathan's Famous": "https://upload.wikimedia.org/wikipedia/commons/4/4a/NathansHotDog-3_%2848034232387%29.jpg",
				"Junior's": "https://brooklyneagle.com/wp-content/uploads/2014/09/juniors-downtown-brooklyn.jpg",
				"Benihana": "https://www.benihana.com/wp-content/themes/benihana/images/video_slide.png",
				"Casa Limone": "https://resizer.otstatic.com/v2/photos/wide-huge/2/37697633.jpg"
			}
		}
	}
	
	componentDidMount() {
		this.props.fetchRests();
		// console.log(this.props)
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

	scroll(distance, id){
		let bar = document.getElementById(id)
		// console.log(bar.scrollTop)
		bar.scrollLeft += distance
	}


	render () {
		const id = Math.floor(Math.random() * 100000000)
		
		const {rests} = this.props;
		// debugger;

		const display = rests.length ? (
			<>
				<button className='left-scroll-button' onClick={() => this.scroll(-983, id)}>
				<i className="fa-solid fa-angle-left"></i>
				</button>
					<ul className="scrollbar-ul" id={id}>
						{this.shuffle(rests).map((rest, idx) =>
							<ListIcon
							id={rest.id}
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
				<button className='right-scroll-button' onClick={() => this.scroll(983, id)}>
					<i className="fa-solid fa-angle-right"></i>
				</button>
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
	
	// fetch restaurants & map them to an array
	// Grab random restaurants from array & feed data to a new ListIcon, 10x per scrollbar
	// const dumbRests = ["peter luger", "patsy's pizza", "chipotle", "sweetgreen", "mcdonalds"]
	// debugger;