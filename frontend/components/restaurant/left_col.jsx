import React from 'react';
import RestNavButtons from './rest_nav_buttons';
import RestDetails from './rest_details';
import Gallery from './gallery';
import Menu from './menu';
import ReviewsContainer from '../reviews/reviews_container';

class LeftColumn extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchRest(this.props.match.params.restId)
		window.scrollTo(0,0);
	}
	
	rating() {
		let sum = 0
		let length = this.props.reviews.length
		
		this.props.reviews.map(review => sum += review.overall);
		return (sum / (length * 1.0)).toFixed(1)
	}
	
	render() {
		if (!this.props.restaurant) return null;
		return (
			<div className="rest-show-main-col">
				<RestNavButtons/>
				<RestDetails restaurant={this.props.restaurant} rating={this.rating()} reviews={this.props.reviews}/>
				<Gallery/>
				<Menu menuItems={this.props.menu_items}/>
				<ReviewsContainer/>
			</div>
		)
	}
}

export default LeftColumn;
